const _0x24db28=_0x1234;function _0x5a77(){const _0x4f6fee=['\x0a[*]\x20Done\x20Sir!','WELCOME\x20&\x20ENJOY\x20SIR!','5qHLtHX','your_','success','./src/classes/ariChain','proxy','39787JfihHt','exports','write','Invalid\x20token.\x20Starting\x20Gmail\x20Authentication...','every','white','Error:\x20','Reff\x20To:\x20','resolve','Checkin\x20Failed','Register\x20Account\x20Failed','\x20akun','Email:\x20','sendEmailCode','./src/utils/logger','path','installed','toLowerCase','3850800AWbaSE','3ArhzGk','token_uri','Account\x20Success\x20Create!','36OdVynz','6588323TgzIUJ','AUTHOR\x20:\x20NOFAN\x20RAMBE','Reff\x20To\x20:\x20','existsSync','[*]\x20Account\x20Done!\x20','Process','Checkin\x20Daily\x20Done','5065548DwjCkL','client_id','project_id','registerAccount','log','close','transferToken','Transfer\x20Token\x20Failed','How\x20many\x20do\x20you\x20want?\x20','readFileSync','debug','4MoYCCc','13ITfvmO','auth_provider_x509_cert_url','exit','generateTempEmail','Enter\x20target\x20address\x20for\x20token\x20transfer:\x20','3081018VHrpIu','Token\x20not\x20found.\x20Starting\x20Gmail\x20Authentication...','client_secret','../config/config.js','includes','\x20from\x20','parse','magenta','3430DDwfBV','Password:\x20','yellow','auth_uri','../config/token.json','end','accounts.txt','2351816gEWUmT','config.js\x20not\x20found.\x20Please\x20provide\x20a\x20valid\x20config.js\x20file.','createWriteStream','error','red','repeat','832842HqhiSg','Error\x20reading\x20token.\x20Starting\x20Gmail\x20Authentication...','green'];_0x5a77=function(){return _0x4f6fee;};return _0x5a77();}(function(_0x32303a,_0x3a73bf){const _0x1b090b=_0x1234,_0x47cdf1=_0x32303a();while(!![]){try{const _0x301c1c=-parseInt(_0x1b090b(0x1ee))/0x1*(parseInt(_0x1b090b(0x1d1))/0x2)+-parseInt(_0x1b090b(0x1ed))/0x3*(parseInt(_0x1b090b(0x1b6))/0x4)+-parseInt(_0x1b090b(0x1d6))/0x5*(parseInt(_0x1b090b(0x1bc))/0x6)+parseInt(_0x1b090b(0x1f2))/0x7+parseInt(_0x1b090b(0x1cb))/0x8*(parseInt(_0x1b090b(0x1f1))/0x9)+parseInt(_0x1b090b(0x1c4))/0xa*(parseInt(_0x1b090b(0x1db))/0xb)+parseInt(_0x1b090b(0x1f9))/0xc*(parseInt(_0x1b090b(0x1b7))/0xd);if(_0x301c1c===_0x3a73bf)break;else _0x47cdf1['push'](_0x47cdf1['shift']());}catch(_0x269124){_0x47cdf1['push'](_0x47cdf1['shift']());}}}(_0x5a77,0xb3133));const {prompt,logMessage,rl}=require(_0x24db28(0x1e9)),ariChain=require(_0x24db28(0x1d9)),{generateRandomPassword}=require('./src/utils/generator'),{authorize}=require('./src/classes/authGmail'),{getRandomProxy,loadProxies}=require('./src/classes/proxy'),chalk=require('chalk'),fs=require('fs'),path=require(_0x24db28(0x1ea));function _0x1234(_0x3327fc,_0x383b58){const _0x5a7758=_0x5a77();return _0x1234=function(_0x123488,_0x140827){_0x123488=_0x123488-0x1b2;let _0x104831=_0x5a7758[_0x123488];return _0x104831;},_0x1234(_0x3327fc,_0x383b58);}async function checkAuth(){const _0xe08e81=_0x24db28,_0x5c78aa=path['resolve'](__dirname,_0xe08e81(0x1bf)),_0x3f4b32=path[_0xe08e81(0x1e3)](__dirname,_0xe08e81(0x1c8));!fs[_0xe08e81(0x1f5)](_0x5c78aa)&&(console[_0xe08e81(0x1ce)](chalk[_0xe08e81(0x1cf)](_0xe08e81(0x1cc))),process[_0xe08e81(0x1b9)](0x1));const _0x3df3e5=JSON['parse'](fs['readFileSync'](_0x5c78aa)),_0x6ce6d2=[_0xe08e81(0x1fa),_0xe08e81(0x1fb),_0xe08e81(0x1c7),_0xe08e81(0x1ef),_0xe08e81(0x1b8),_0xe08e81(0x1be)],_0xfeea67=_0x6ce6d2[_0xe08e81(0x1df)](_0x581ee9=>_0x3df3e5[_0xe08e81(0x1eb)][_0x581ee9]&&!_0x3df3e5['installed'][_0x581ee9][_0xe08e81(0x1c0)](_0xe08e81(0x1d7)));!_0xfeea67&&(console[_0xe08e81(0x1ce)](chalk[_0xe08e81(0x1cf)]('config.js\x20contains\x20example\x20values.\x20Please\x20provide\x20valid\x20credentials.')),process[_0xe08e81(0x1b9)](0x1));if(!fs[_0xe08e81(0x1f5)](_0x3f4b32))console[_0xe08e81(0x1fd)](chalk[_0xe08e81(0x1c6)](_0xe08e81(0x1bd))),await authorize();else try{const _0x13ea80=JSON[_0xe08e81(0x1c2)](fs[_0xe08e81(0x1b4)](_0x3f4b32));!_0x13ea80['access_token']&&(console[_0xe08e81(0x1fd)](chalk[_0xe08e81(0x1c6)](_0xe08e81(0x1de))),await authorize());}catch(_0x1a51c4){console['log'](chalk[_0xe08e81(0x1c6)](_0xe08e81(0x1d2))),await authorize();}}async function main(){const _0xd900ef=_0x24db28;await checkAuth(),console[_0xd900ef(0x1fd)](),console['log']('ARI\x20WALLET\x20REFERRAL\x20BOT'),console[_0xd900ef(0x1fd)](_0xd900ef(0x1f3)),console[_0xd900ef(0x1fd)](_0xd900ef(0x1d5)),console[_0xd900ef(0x1fd)]();const _0x4f02bc=await prompt(chalk[_0xd900ef(0x1c6)]('Use\x202Captcha\x20?\x20(y/n):\x20')),_0x94f8aa=_0x4f02bc[_0xd900ef(0x1ec)]()==='y',_0x4ac634=await prompt(chalk[_0xd900ef(0x1c6)]('Enter\x20Referral\x20Code:\x20')),_0x977744=await prompt(chalk['yellow'](_0xd900ef(0x1bb))),_0x468fc7=parseInt(await prompt(chalk[_0xd900ef(0x1c6)](_0xd900ef(0x1b3)))),_0x2c2fc4=loadProxies();!_0x2c2fc4&&console[_0xd900ef(0x1fd)](chalk[_0xd900ef(0x1c6)]('No\x20proxy\x20available.\x20Using\x20default\x20IP.'));let _0x5ea471=0x0;const _0x2506d5=fs[_0xd900ef(0x1cd)](_0xd900ef(0x1ca),{'flags':'a'});for(let _0x54f1ce=0x0;_0x54f1ce<_0x468fc7;_0x54f1ce++){console[_0xd900ef(0x1fd)](chalk[_0xd900ef(0x1e0)]('-'[_0xd900ef(0x1d0)](0x55))),logMessage(_0x54f1ce+0x1,_0x468fc7,_0xd900ef(0x1f7),_0xd900ef(0x1b5));const _0x559c04=await getRandomProxy(),_0x5c5b86=new ariChain(_0x4ac634,_0x559c04);try{const _0x174de7=_0x5c5b86[_0xd900ef(0x1ba)](),_0x575221=generateRandomPassword(),_0x5c8122=await _0x5c5b86[_0xd900ef(0x1e8)](_0x174de7,_0x94f8aa);if(!_0x5c8122)continue;const _0x8db768=await _0x5c5b86[_0xd900ef(0x1fc)](_0x174de7,_0x575221);if(_0x8db768){_0x2506d5[_0xd900ef(0x1dd)]('Email:\x20'+_0x174de7+'\x0a'),_0x2506d5[_0xd900ef(0x1dd)](_0xd900ef(0x1c5)+_0x575221+'\x0a'),_0x2506d5[_0xd900ef(0x1dd)](_0xd900ef(0x1e2)+_0x4ac634+'\x0a'),_0x2506d5[_0xd900ef(0x1dd)]('-'[_0xd900ef(0x1d0)](0x55)+'\x0a'),_0x5ea471++,logMessage(_0x54f1ce+0x1,_0x468fc7,_0xd900ef(0x1f0),_0xd900ef(0x1d8)),logMessage(_0x54f1ce+0x1,_0x468fc7,_0xd900ef(0x1e7)+_0x174de7,'success'),logMessage(_0x54f1ce+0x1,_0x468fc7,_0xd900ef(0x1c5)+_0x575221,_0xd900ef(0x1d8)),logMessage(_0x54f1ce+0x1,_0x468fc7,_0xd900ef(0x1f4)+_0x4ac634,_0xd900ef(0x1d8));const _0x3ef5dd=_0x8db768['result']['address'];try{const _0x376ed3=await _0x5c5b86['checkinDaily'](_0x3ef5dd);logMessage(_0x54f1ce+0x1,_0x468fc7,_0xd900ef(0x1f8),_0xd900ef(0x1d8));if(!_0x376ed3)throw new Error(_0xd900ef(0x1e4));const _0x47801f=await _0x5c5b86[_0xd900ef(0x1ff)](_0x174de7,_0x977744,_0x575221,0x3c);if(!_0x47801f)throw new Error(_0xd900ef(0x1b2));logMessage(_0x54f1ce+0x1,_0x468fc7,'Transfer\x20Token\x20Done',_0xd900ef(0x1d8));}catch(_0x4bd47b){logMessage(_0x54f1ce+0x1,_0x468fc7,_0x4bd47b['message'],_0xd900ef(0x1ce));continue;}}else logMessage(_0x54f1ce+0x1,_0x468fc7,_0xd900ef(0x1e5),_0xd900ef(0x1ce)),_0x5c5b86[_0xd900ef(0x1da)]&&logMessage(_0x54f1ce+0x1,_0x468fc7,'Failed\x20proxy:\x20'+_0x5c5b86['proxy'],_0xd900ef(0x1ce));}catch(_0x13d8ac){logMessage(_0x54f1ce+0x1,_0x468fc7,_0xd900ef(0x1e1)+_0x13d8ac['message'],_0xd900ef(0x1ce));}}_0x2506d5[_0xd900ef(0x1c9)](),console[_0xd900ef(0x1fd)](chalk['magenta'](_0xd900ef(0x1d4))),console[_0xd900ef(0x1fd)](chalk[_0xd900ef(0x1d3)](_0xd900ef(0x1f6)+_0x5ea471+_0xd900ef(0x1c1)+_0x468fc7+_0xd900ef(0x1e6))),console[_0xd900ef(0x1fd)](chalk[_0xd900ef(0x1c3)]('[*]\x20Result\x20in\x20accounts.txt')),rl[_0xd900ef(0x1fe)]();}module[_0x24db28(0x1dc)]={'main':main};
