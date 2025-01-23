class EmailGenerator {
  constructor(baseEmail) {
    this.baseEmail = baseEmail;
  }

  generateCaseVariations() {
    const [username, domain] = this.baseEmail.split("@");
    let newUsername = "";

    for (let char of username) {
      if (Math.random() < 0.5) {
        newUsername += char.toUpperCase();
      } else {
        newUsername += char.toLowerCase();
      }
    }

    return `${newUsername}@${domain}`;
  }

  generateRandomVariation() {
    return this.generateCaseVariations();
  }
}

function generateRandomPassword(length = 12) {
  const charset =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,.<>?";
  let password = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }

  return password;
}

module.exports = { EmailGenerator, generateRandomPassword };
