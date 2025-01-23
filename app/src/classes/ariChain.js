const axios = require("axios");
const { Solver } = require("@2captcha/captcha-solver");
const { google } = require("googleapis");
const { logMessage } = require("../utils/logger");
const { getProxyAgent } = require("./proxy");
const fs = require("fs");
const { EmailGenerator } = require("../utils/generator");
const path = require("path");
const TOKEN_PATH = path.join(__dirname, "../json/token.json");
const confEmail = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, "../json/client_secret.json"))
).email;
const confApi = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, "../json/client_secret.json"))
).geminiApi;
const gemeiniPrompt = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, "../json/client_secret.json"))
).prompt;
const captchaApi = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, "../json/client_secret.json"))
).captha2Apikey;
const qs = require("qs");
const { GoogleGenerativeAI } = require("@google/generative-ai");

function loadOAuth2Client() {
  const credentials = JSON.parse(
    fs.readFileSync(path.resolve(__dirname, "../json/client_secret.json"))
  );
  const { client_id, client_secret, redirect_uris } = credentials.installed;
  const oAuth2Client = new google.auth.OAuth2(
    client_id,
    client_secret,
    redirect_uris[0]
  );
  const token = JSON.parse(fs.readFileSync(TOKEN_PATH));
  oAuth2Client.setCredentials(token);
  return oAuth2Client;
}

class ariChain {
  constructor(refCode, proxy = null) {
    this.refCode = refCode;
    this.proxy = proxy;
    this.axiosConfig = {
      ...(this.proxy && { httpsAgent: getProxyAgent(this.proxy) }),
      timeout: 60000,
    };
    this.gmailClient = google.gmail({
      version: "v1",
      auth: loadOAuth2Client(),
    });
    this.baseEmail = confEmail;
    this.gemini = new GoogleGenerativeAI(confApi);
    this.model = this.gemini.getGenerativeModel({
      model: "gemini-1.5-flash",
    });
    this.twoCaptchaSolver = new Solver(captchaApi);
  }

  async makeRequest(method, url, config = {}) {
    try {
      const response = await axios({
        method,
        url,
        ...this.axiosConfig,
        ...config,
      });
      return response;
    } catch (error) {
      logMessage(
        this.currentNum,
        this.total,
        `Request failed: ${error.message}`,
        "error"
      );
      if (this.proxy) {
        logMessage(
          this.currentNum,
          this.total,
          `Failed proxy: ${this.proxy}`,
          "error"
        );
      }
      return null;
    }
  }

  generateTempEmail() {
    const emailGenerator = new EmailGenerator(this.baseEmail);
    const tempEmail = emailGenerator.generateRandomVariation();
    logMessage(
      this.currentNum,
      this.total,
      `Email using: ${tempEmail}`,
      "success"
    );
    return tempEmail;
  }

  async getCaptchaCode() {
    try {
      const headers = {
        accept: "*/*",
      };
      const response = await this.makeRequest(
        "POST",
        "https://arichain.io/api/captcha/create",
        { headers }
      );

      return response;
    } catch {
      console.error("Error create captcha :", error);
      return null;
    }
  }

  async getCaptchaImage(uniqueIdx) {
    try {
      const response = await this.makeRequest(
        "GET",
        `http://arichain.io/api/captcha/get?unique_idx=${uniqueIdx}`,
        { responseType: "arraybuffer" }
      );
      return response.data;
    } catch {
      console.error("Error get image captcha:", error);
      return null;
    }
  }

  async solveCaptchaWithGemini(imageBuffer) {
    try {
      const prompt = gemeiniPrompt;
      const image = {
        inlineData: {
          data: Buffer.from(imageBuffer).toString("base64"),
          mimeType: "image/png",
        },
      };

      const result = await this.model.generateContent([prompt, image]);
      const captchaText = result.response.text().trim();
      const cleanedCaptchaText = captchaText.replace(/\s/g, "");

      logMessage(
        this.currentNum,
        this.total,
        "Solve captcha done...",
        "success"
      );
      return cleanedCaptchaText;
    } catch (error) {
      console.error("Error solving CAPTCHA with Gemini:", error);
      return null;
    }
  }

  async solveCaptchaWith2Captcha(imageBuffer) {
    try {
      const base64Image = Buffer.from(imageBuffer).toString("base64");
      const res = await this.twoCaptchaSolver.imageCaptcha({
        body: `data:image/png;base64,${base64Image}`,
        regsense: 1,
      });

      return res.data;
    } catch (error) {
      console.error("Error solving CAPTCHA with 2Captcha:", error);
      return null;
    }
  }

  async sendEmailCode(email, use2Captcha = false) {
    logMessage(
      this.currentNum,
      this.total,
      "Processing send email code...",
      "process"
    );

    let captchaResponse;
    let captchaText;
    let response;
    const maxAttempts = 3;
    let attempts = 0;

    while (attempts < maxAttempts) {
      attempts++;
      logMessage(
        this.currentNum,
        this.total,
        `Attempt ${attempts} to solve CAPTCHA...`,
        "process"
      );

      captchaResponse = await this.getCaptchaCode();
      if (
        !captchaResponse ||
        !captchaResponse.data ||
        !captchaResponse.data.result
      ) {
        logMessage(
          this.currentNum,
          this.total,
          "Failed to get CAPTCHA",
          "error"
        );
        continue;
      }

      const uniqueIdx = captchaResponse.data.result.unique_idx;

      const captchaImageBuffer = await this.getCaptchaImage(uniqueIdx);
      if (!captchaImageBuffer) {
        logMessage(
          this.currentNum,
          this.total,
          "Failed to get CAPTCHA image",
          "error"
        );
        continue;
      }

      if (use2Captcha) {
        captchaText = await this.solveCaptchaWith2Captcha(captchaImageBuffer);
      } else {
        captchaText = await this.solveCaptchaWithGemini(captchaImageBuffer);
      }

      if (!captchaText) {
        logMessage(
          this.currentNum,
          this.total,
          "Failed to solve CAPTCHA",
          "error"
        );
        continue;
      }

      const headers = {
        accept: "*/*",
        "content-type": "application/x-www-form-urlencoded",
      };

      const data = qs.stringify({
        email: email,
        unique_idx: uniqueIdx,
        captcha_string: captchaText,
      });

      response = await this.makeRequest(
        "POST",
        "https://arichain.io/api/Email/send_valid_email",
        { headers, data }
      );

      if (!response) {
        logMessage(
          this.currentNum,
          this.total,
          "Failed to send email",
          "error"
        );
        continue;
      }

      if (response.data.status === "fail") {
        if (response.data.msg === "captcha is not valid") {
          logMessage(
            this.currentNum,
            this.total,
            "CAPTCHA is not valid, retrying...",
            "warning"
          );
          continue;
        } else {
          logMessage(this.currentNum, this.total, response.data.msg, "error");
          return false;
        }
      }

      logMessage(
        this.currentNum,
        this.total,
        "Email sent successfully",
        "success"
      );
      return true;
    }

    logMessage(
      this.currentNum,
      this.total,
      "Failed to send email after multiple attempts",
      "error"
    );
    return false;
  }

  async getCodeVerification(tempEmail) {
    logMessage(
      this.currentNum,
      this.total,
      "Waiting for code verification...",
      "process"
    );

    const maxAttempts = 5;
    for (let attempt = 0; attempt < maxAttempts; attempt++) {
      logMessage(
        this.currentNum,
        this.total,
        `Attempt ${attempt + 1}`,
        "process"
      );

      logMessage(
        this.currentNum,
        this.total,
        "Waiting for 10sec...",
        "warning"
      );
      await new Promise((resolve) => setTimeout(resolve, 10000));

      const messages = await this.gmailClient.users.messages.list({
        userId: "me",
        q: `to:${tempEmail}`,
      });

      if (messages.data.messages && messages.data.messages.length > 0) {
        const messageId = messages.data.messages[0].id;
        const message = await this.gmailClient.users.messages.get({
          userId: "me",
          id: messageId,
          format: "full",
        });

        const emailBody = message.data.payload.body.data;
        if (emailBody) {
          const decodedBody = Buffer.from(emailBody, "base64").toString(
            "utf-8"
          );

          const codeMatch = decodedBody.match(/\b\d{6}\b/);
          if (codeMatch) {
            const verificationCode = codeMatch[0];
            logMessage(
              this.currentNum,
              this.total,
              `Verificatin code found: ${verificationCode}`,
              "success"
            );
            return verificationCode;
          }
        }
      }

      logMessage(
        this.currentNum,
        this.total,
        "Verification code not found. Waiting for 5 sec...",
        "warning"
      );
      await new Promise((resolve) => setTimeout(resolve, 5000));
    }

    logMessage(
      this.currentNum,
      this.total,
      "Error get code verification.",
      "error"
    );
    return null;
  }

  async checkinDaily(address) {
    const headers = {
      accept: "*/*",
      "content-type": "application/x-www-form-urlencoded",
    };
    const data = qs.stringify({ address });
    const response = await this.makeRequest(
      "POST",
      "https://arichain.io/api/event/checkin",
      {
        headers,
        data,
      }
    );
    if (!response) {
      logMessage(this.currentNum, this.total, "Failed checkin", "error");
      return null;
    }
    return response.data;
  }

  async transferToken(email, toAddress, password, amount = 60) {
    const headers = {
      accept: "*/*",
      "content-type": "application/x-www-form-urlencoded",
    };
    const transferData = qs.stringify({
      email,
      to_address: toAddress,
      pw: password,
      amount,
    });
    const response = await this.makeRequest(
      "POST",
      "https://arichain.io/api/wallet/transfer_mobile",
      {
        headers,
        data: transferData,
      }
    );
    if (!response) {
      logMessage(this.currentNum, this.total, "Failed send token", "error");
      return null;
    }
    return response.data;
  }

  async registerAccount(email, password) {
    logMessage(this.currentNum, this.total, "Register account...", "process");

    const verifyCode = await this.getCodeVerification(email);
    if (!verifyCode) {
      logMessage(
        this.currentNum,
        this.total,
        "Failed get code verification.",
        "error"
      );
      return null;
    }

    const headers = {
      accept: "*/*",
      "content-type": "application/x-www-form-urlencoded",
    };

    const registerData = qs.stringify({
      email: email,
      pw: password,
      pw_re: password,
      valid_code: verifyCode,
      invite_code: this.refCode,
    });

    const response = await this.makeRequest(
      "POST",
      "https://arichain.io/api/Account/signup",
      {
        headers,
        data: registerData,
      }
    );

    if (response.data.status === "fail") {
      logMessage(this.currentNum, this.total, response.data.msg, "error");
      return null;
    }

    logMessage(this.currentNum, this.total, "Register succes.", "success");

    return response.data;
  }
}

module.exports = ariChain;
