const _0x59a49b=_0x2d6b;(function(_0x39077a,_0x30a739){const _0x35466a=_0x2d6b,_0x271466=_0x39077a();while(!![]){try{const _0x38b9d7=-parseInt(_0x35466a(0x109))/0x1+parseInt(_0x35466a(0xf8))/0x2*(parseInt(_0x35466a(0xc4))/0x3)+-parseInt(_0x35466a(0x103))/0x4+parseInt(_0x35466a(0xf4))/0x5*(parseInt(_0x35466a(0xed))/0x6)+-parseInt(_0x35466a(0xd9))/0x7+parseInt(_0x35466a(0xcc))/0x8+parseInt(_0x35466a(0xce))/0x9;if(_0x38b9d7===_0x30a739)break;else _0x271466['push'](_0x271466['shift']());}catch(_0x16709d){_0x271466['push'](_0x271466['shift']());}}}(_0x1c60,0x46ca4));function _0x2d6b(_0x4cdda3,_0x3303a5){const _0x1c6058=_0x1c60();return _0x2d6b=function(_0x2d6bfa,_0x35613e){_0x2d6bfa=_0x2d6bfa-0xc3;let _0x540c47=_0x1c6058[_0x2d6bfa];return _0x540c47;},_0x2d6b(_0x4cdda3,_0x3303a5);}function _0x1c60(){const _0x33b646=['Failed\x20proxy:\x20','2TAxNjJ','Checkin\x20Daily\x20Done','Process','includes','Error:\x20','green','toLowerCase','parse','createWriteStream','exit','Register\x20Account\x20Failed','744684qQEnKh','\x20akun','readFileSync','../config/token.json','Author\x20:\x20Nofan\x20Rambe','error','119427oQCxQB','result','token_uri','Use\x202Captcha\x20?\x20(y/n):\x20','\x0a[*]\x20Done\x20Sir!','../config/config.js','994206jJDQHy','write','Account\x20Success\x20Create!','./classes/proxy','Password:\x20','./classes/ariChain','magenta','[*]\x20Account\x20Done!\x20','1375632fxECBN','yellow','510777XiYCmL','log','success','No\x20proxy\x20available.\x20Using\x20default\x20IP.','path','Reff\x20To\x20:\x20','Reff\x20To:\x20','exports','Enter\x20target\x20address\x20for\x20token\x20transfer:\x20','chalk','installed','3522799kKTtyh','Enter\x20Referral\x20Code:\x20','message','sendEmailCode','client_id','config.js\x20not\x20found.\x20Please\x20provide\x20a\x20valid\x20config.js\x20file.','red','Transfer\x20Token\x20Failed','Email:\x20','access_token','debug','auth_provider_x509_cert_url','every','close','proxy','config.js\x20contains\x20example\x20values.\x20Please\x20provide\x20valid\x20credentials.','existsSync','./classes/authGmail','ARI\x20WALLET\x20REFERRAL\x20BOT','accounts.txt','6uHilfe','./utils/generator','Checkin\x20Failed','client_secret','repeat','How\x20many\x20do\x20you\x20want?\x20','end','2693510Mpjrve','resolve','registerAccount'];_0x1c60=function(){return _0x33b646;};return _0x1c60();}const {prompt,logMessage,rl}=require('./utils/logger'),ariChain=require(_0x59a49b(0xc9)),{generateRandomPassword}=require(_0x59a49b(0xee)),{authorize}=require(_0x59a49b(0xea)),{getRandomProxy,loadProxies}=require(_0x59a49b(0xc7)),chalk=require(_0x59a49b(0xd7)),fs=require('fs'),path=require(_0x59a49b(0xd2));async function checkAuth(){const _0x434eef=_0x59a49b,_0x53317d=path[_0x434eef(0xf5)](__dirname,_0x434eef(0xc3)),_0x18c36f=path[_0x434eef(0xf5)](__dirname,_0x434eef(0x106));!fs[_0x434eef(0xe9)](_0x53317d)&&(console[_0x434eef(0x108)](chalk[_0x434eef(0xdf)](_0x434eef(0xde))),process['exit'](0x1));const _0x276b74=JSON['parse'](fs[_0x434eef(0x105)](_0x53317d)),_0x3e83f6=[_0x434eef(0xdd),'project_id','auth_uri',_0x434eef(0x10b),_0x434eef(0xe4),_0x434eef(0xf0)],_0x2027ad=_0x3e83f6[_0x434eef(0xe5)](_0x141fa5=>_0x276b74[_0x434eef(0xd8)][_0x141fa5]&&!_0x276b74['installed'][_0x141fa5][_0x434eef(0xfb)]('your_'));!_0x2027ad&&(console[_0x434eef(0x108)](chalk[_0x434eef(0xdf)](_0x434eef(0xe8))),process[_0x434eef(0x101)](0x1));if(!fs[_0x434eef(0xe9)](_0x18c36f))console['log'](chalk['yellow']('Token\x20not\x20found.\x20Starting\x20Gmail\x20Authentication...')),await authorize();else try{const _0x284a71=JSON[_0x434eef(0xff)](fs[_0x434eef(0x105)](_0x18c36f));!_0x284a71[_0x434eef(0xe2)]&&(console['log'](chalk[_0x434eef(0xcd)]('Invalid\x20token.\x20Starting\x20Gmail\x20Authentication...')),await authorize());}catch(_0x4ce7ff){console['log'](chalk[_0x434eef(0xcd)]('Error\x20reading\x20token.\x20Starting\x20Gmail\x20Authentication...')),await authorize();}}async function main(){const _0x5757a5=_0x59a49b;await checkAuth(),console['log'](_0x5757a5(0xeb)),console[_0x5757a5(0xcf)](_0x5757a5(0x107)),console[_0x5757a5(0xcf)]('Welcome\x20&\x20Enjoy\x20Sir!');const _0x4f4df9=await prompt(chalk[_0x5757a5(0xcd)](_0x5757a5(0x10c))),_0x1194ab=_0x4f4df9[_0x5757a5(0xfe)]()==='y',_0x12b5de=await prompt(chalk['yellow'](_0x5757a5(0xda))),_0x145745=await prompt(chalk[_0x5757a5(0xcd)](_0x5757a5(0xd6))),_0x625b9a=parseInt(await prompt(chalk[_0x5757a5(0xcd)](_0x5757a5(0xf2)))),_0x5ee24e=loadProxies();!_0x5ee24e&&console[_0x5757a5(0xcf)](chalk[_0x5757a5(0xcd)](_0x5757a5(0xd1)));let _0x5d984f=0x0;const _0x2a53e5=fs[_0x5757a5(0x100)](_0x5757a5(0xec),{'flags':'a'});for(let _0x26d6a0=0x0;_0x26d6a0<_0x625b9a;_0x26d6a0++){console[_0x5757a5(0xcf)](chalk['white']('-'[_0x5757a5(0xf1)](0x55))),logMessage(_0x26d6a0+0x1,_0x625b9a,_0x5757a5(0xfa),_0x5757a5(0xe3));const _0x314cef=await getRandomProxy(),_0x413f33=new ariChain(_0x12b5de,_0x314cef);try{const _0x4238c5=_0x413f33['generateTempEmail'](),_0x3b96fb=generateRandomPassword(),_0x66298=await _0x413f33[_0x5757a5(0xdc)](_0x4238c5,_0x1194ab);if(!_0x66298)continue;const _0x2a1999=await _0x413f33[_0x5757a5(0xf6)](_0x4238c5,_0x3b96fb);if(_0x2a1999){_0x2a53e5['write'](_0x5757a5(0xe1)+_0x4238c5+'\x0a'),_0x2a53e5[_0x5757a5(0xc5)](_0x5757a5(0xc8)+_0x3b96fb+'\x0a'),_0x2a53e5[_0x5757a5(0xc5)](_0x5757a5(0xd4)+_0x12b5de+'\x0a'),_0x2a53e5['write']('-'[_0x5757a5(0xf1)](0x55)+'\x0a'),_0x5d984f++,logMessage(_0x26d6a0+0x1,_0x625b9a,_0x5757a5(0xc6),_0x5757a5(0xd0)),logMessage(_0x26d6a0+0x1,_0x625b9a,_0x5757a5(0xe1)+_0x4238c5,'success'),logMessage(_0x26d6a0+0x1,_0x625b9a,_0x5757a5(0xc8)+_0x3b96fb,_0x5757a5(0xd0)),logMessage(_0x26d6a0+0x1,_0x625b9a,_0x5757a5(0xd3)+_0x12b5de,_0x5757a5(0xd0));const _0x2e948b=_0x2a1999[_0x5757a5(0x10a)]['address'];try{const _0x445236=await _0x413f33['checkinDaily'](_0x2e948b);logMessage(_0x26d6a0+0x1,_0x625b9a,_0x5757a5(0xf9),_0x5757a5(0xd0));if(!_0x445236)throw new Error(_0x5757a5(0xef));const _0x2e8f70=await _0x413f33['transferToken'](_0x4238c5,_0x145745,_0x3b96fb,0x3c);if(!_0x2e8f70)throw new Error(_0x5757a5(0xe0));logMessage(_0x26d6a0+0x1,_0x625b9a,'Transfer\x20Token\x20Done',_0x5757a5(0xd0));}catch(_0x482396){logMessage(_0x26d6a0+0x1,_0x625b9a,_0x482396[_0x5757a5(0xdb)],_0x5757a5(0x108));continue;}}else logMessage(_0x26d6a0+0x1,_0x625b9a,_0x5757a5(0x102),_0x5757a5(0x108)),_0x413f33['proxy']&&logMessage(_0x26d6a0+0x1,_0x625b9a,_0x5757a5(0xf7)+_0x413f33[_0x5757a5(0xe7)],_0x5757a5(0x108));}catch(_0x595c23){logMessage(_0x26d6a0+0x1,_0x625b9a,_0x5757a5(0xfc)+_0x595c23['message'],_0x5757a5(0x108));}}_0x2a53e5[_0x5757a5(0xf3)](),console[_0x5757a5(0xcf)](chalk[_0x5757a5(0xca)](_0x5757a5(0x10d))),console[_0x5757a5(0xcf)](chalk[_0x5757a5(0xfd)](_0x5757a5(0xcb)+_0x5d984f+'\x20from\x20'+_0x625b9a+_0x5757a5(0x104))),console['log'](chalk[_0x5757a5(0xca)]('[*]\x20Result\x20in\x20accounts.txt')),rl[_0x5757a5(0xe6)]();}module[_0x59a49b(0xd5)]={'main':main};
