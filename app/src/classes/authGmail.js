function _0x2354(){const _0x4a52f1=['generateAuthUrl','setCredentials','3996EcoVaN','9537939ghutQO','https://www.googleapis.com/auth/gmail.readonly','express','offline','../json/token.json','stringify','close','Authentication\x20failed','readFileSync','query','log','75265MnqqGx','code','installed','auth','18823YqmfXf','googleapis','Error\x20retrieving\x20access\x20token','/oauth2callback','writeFileSync','13574112BBjHsl','36Qsgixm','Authentication\x20successful!\x20You\x20can\x20close\x20this\x20window.','getToken','parse','4073241FNfcHi','path','12ftcbKM','exports','resolve','23610490qofcMq','OAuth2','Authorize\x20this\x20app\x20by\x20visiting\x20this\x20url:','get','1891100FiQRmh','Listening\x20on\x20port\x203000\x20for\x20OAuth2\x20callback','status','send'];_0x2354=function(){return _0x4a52f1;};return _0x2354();}const _0x41104f=_0x556a;function _0x556a(_0x12a021,_0x274503){const _0x2354d1=_0x2354();return _0x556a=function(_0x556ab1,_0x4801f7){_0x556ab1=_0x556ab1-0x148;let _0xbb2b69=_0x2354d1[_0x556ab1];return _0xbb2b69;},_0x556a(_0x12a021,_0x274503);}(function(_0x30770d,_0x328b68){const _0x42e573=_0x556a,_0x552ac6=_0x30770d();while(!![]){try{const _0x247846=-parseInt(_0x42e573(0x151))/0x1*(parseInt(_0x42e573(0x15b))/0x2)+-parseInt(_0x42e573(0x15f))/0x3+-parseInt(_0x42e573(0x161))/0x4*(parseInt(_0x42e573(0x168))/0x5)+parseInt(_0x42e573(0x16e))/0x6*(parseInt(_0x42e573(0x155))/0x7)+parseInt(_0x42e573(0x15a))/0x8+-parseInt(_0x42e573(0x16f))/0x9+parseInt(_0x42e573(0x164))/0xa;if(_0x247846===_0x328b68)break;else _0x552ac6['push'](_0x552ac6['shift']());}catch(_0x1ff3e4){_0x552ac6['push'](_0x552ac6['shift']());}}}(_0x2354,0xe5eab));const fs=require('fs'),path=require(_0x41104f(0x160)),express=require(_0x41104f(0x148)),{google}=require(_0x41104f(0x156)),credentials=JSON[_0x41104f(0x15e)](fs[_0x41104f(0x14e)](path[_0x41104f(0x163)](__dirname,'../json/client_secret.json'))),SCOPES=['https://www.googleapis.com/auth/gmail.send',_0x41104f(0x170)],TOKEN_PATH=path['join'](__dirname,_0x41104f(0x14a)),{client_secret,client_id,redirect_uris}=credentials[_0x41104f(0x153)],oAuth2Client=new google[(_0x41104f(0x154))][(_0x41104f(0x165))](client_id,client_secret,redirect_uris[0x0]);function getAccessToken(){return new Promise((_0xffeace,_0x324f95)=>{const _0x33b45a=_0x556a,_0x11035f=oAuth2Client[_0x33b45a(0x16c)]({'access_type':_0x33b45a(0x149),'scope':SCOPES});console[_0x33b45a(0x150)](_0x33b45a(0x166),_0x11035f);const _0x1dafa7=express();_0x1dafa7[_0x33b45a(0x167)](_0x33b45a(0x158),(_0x58202f,_0x3e036c)=>{const _0x29b358=_0x33b45a,_0x14502b=_0x58202f[_0x29b358(0x14f)][_0x29b358(0x152)];oAuth2Client[_0x29b358(0x15d)](_0x14502b,(_0x4fc43f,_0x55604a)=>{const _0x9054ec=_0x29b358;if(_0x4fc43f)return console['error'](_0x9054ec(0x157),_0x4fc43f),_0x3e036c[_0x9054ec(0x16a)](0x1f4)['send'](_0x9054ec(0x14d)),_0x324f95(_0x4fc43f);oAuth2Client[_0x9054ec(0x16d)](_0x55604a),fs[_0x9054ec(0x159)](TOKEN_PATH,JSON[_0x9054ec(0x14b)](_0x55604a)),_0x3e036c[_0x9054ec(0x16b)](_0x9054ec(0x15c)),_0xffeace(oAuth2Client),_0xd626ea[_0x9054ec(0x14c)]();});});const _0xd626ea=_0x1dafa7['listen'](0xbb8,()=>{const _0x59eed7=_0x33b45a;console[_0x59eed7(0x150)](_0x59eed7(0x169));});});}async function authorize(){const _0x10c0c3=_0x41104f;try{const _0x2e5250=JSON['parse'](fs[_0x10c0c3(0x14e)](TOKEN_PATH));return oAuth2Client[_0x10c0c3(0x16d)](_0x2e5250),oAuth2Client;}catch(_0x391059){return await getAccessToken();}}module[_0x41104f(0x162)]={'authorize':authorize};
