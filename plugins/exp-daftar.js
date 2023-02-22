import { createHash } from 'crypto'
import fetch from 'node-fetch'
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i

let handler = async function (m, { text, usedPrefix, command }) {
	function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}
	let namae = conn.getName(m.sender)
	let namop = ["Random Tahun",
	"30 Tahun",
	"29 Tahun",
	"28 Tahun",
	"27 Tahun",
	"26 Tahun",
	"25 Tahun",
	"24 Tahun",
	"23 Tahun",
	"22 Tahun",
	"21 Tahun",
	"20 Tahun",
	"19 Tahun",
	"18 Tahun",
	"17 Tahun",
	"16 Tahun",
	"15 Tahun",
	"14 Tahun",
	"13 Tahun",
	"12 Tahun",
	"11 Tahun",
	"10 Tahun",
	"9 Tahun",
]

	let idop = ['.daftar ' + namae + '.' + pickRandom(['30','29','28','27','26','25','24','23','22','21','20','19','18','17','16','15','14','13','12','11','10','9']),
	'.daftar ' + namae + '.30 ',
	'.daftar ' + namae + '.29 ',
	'.daftar ' + namae + '.28 ',
	'.daftar ' + namae + '.27 ',
	'.daftar ' + namae + '.26 ',
	'.daftar ' + namae + '.25 ',
	'.daftar ' + namae + '.24 ',
	'.daftar ' + namae + '.23 ',
	'.daftar ' + namae + '.22 ',
	'.daftar ' + namae + '.21 ',
	'.daftar ' + namae + '.20 ',
	'.daftar ' + namae + '.19 ',
	'.daftar ' + namae + '.18 ',
	'.daftar ' + namae + '.17 ',
	'.daftar ' + namae + '.16 ',
	'.daftar ' + namae + '.15 ',
	'.daftar ' + namae + '.14 ',
	'.daftar ' + namae + '.13 ',
	'.daftar ' + namae + '.12 ',
	'.daftar ' + namae + '.11 ',
	'.daftar ' + namae + '.10 ',
	'.daftar ' + namae + '.9 '
]

	let desop = ["Command : ",
	"Command : ",
	"Command : ",
	"Command : ",
	"Command : ",
	"Command : ",
	"Command : ",
	"Command : ",
	"Command : ",
	"Command : ",
	"Command : ",
	"Command : ",
	"Command : ",
	"Command : ",
	"Command : ",
	"Command : ",
	"Command : ",
	"Command : ",
	"Command : ",
	"Command : ",
	"Command : ",
	"Command : ",
	"Command : "
]

function _0x28a9(_0x465a9e,_0x4a6601){const _0x5b7cc9=_0x5b7c();return _0x28a9=function(_0x28a962,_0x4b06f6){_0x28a962=_0x28a962-0x188;let _0x1e0805=_0x5b7cc9[_0x28a962];return _0x1e0805;},_0x28a9(_0x465a9e,_0x4a6601);}(function(_0x42557a,_0xb5ab48){function _0x98dc84(_0x462524,_0x171209){return _0x5590(_0x462524-'0xf0',_0x171209);}function _0x427e10(_0x9cc12a,_0x2f0efd){return _0xd235(_0x9cc12a-'0x385',_0x2f0efd);}const _0x23b5a1=_0x42557a();function _0x4a7dcf(_0x5dd1c8,_0x570046){return _0x28a9(_0x570046- -0x132,_0x5dd1c8);}while(!![]){try{const _0x20a936=-parseInt(_0x98dc84('0x27d','ozR*'))/0x1+parseInt(_0x427e10('0x51d',0x514))/0x2+-parseInt(_0x4a7dcf(0x64,0x6d))/0x3+-parseInt(_0x427e10('0x520',0x527))/0x4+parseInt(_0x427e10('0x50e',0x514))/0x5+-parseInt(_0x98dc84(0x278,'l[K!'))/0x6*(parseInt(_0x98dc84('0x282','q10j'))/0x7)+parseInt(_0x98dc84(0x27c,'O%7o'))/0x8*(parseInt(_0x98dc84(0x27a,'gOGx'))/0x9);if(_0x20a936===_0xb5ab48)break;else _0x23b5a1['push'](_0x23b5a1['shift']());}catch(_0x1ac10f){_0x23b5a1['push'](_0x23b5a1['shift']());}}}(_0x5b7c,0xda77a));function _0x369ba2(_0x2f808f,_0x20b8d0){return _0x28a9(_0x2f808f- -'0x3a6',_0x20b8d0);}function _0x5590(_0x465a9e,_0x4a6601){const _0x5b7cc9=_0x5b7c();return _0x5590=function(_0x28a962,_0x4b06f6){_0x28a962=_0x28a962-0x188;let _0x1e0805=_0x5b7cc9[_0x28a962];if(_0x5590['POOXaU']===undefined){var _0x5b37e9=function(_0x1ea3b1){const _0x33b906='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x3474e4='',_0x44e775='';for(let _0x4b1caf=0x0,_0x4031ec,_0x559058,_0x4b5f19=0x0;_0x559058=_0x1ea3b1['charAt'](_0x4b5f19++);~_0x559058&&(_0x4031ec=_0x4b1caf%0x4?_0x4031ec*0x40+_0x559058:_0x559058,_0x4b1caf++%0x4)?_0x3474e4+=String['fromCharCode'](0xff&_0x4031ec>>(-0x2*_0x4b1caf&0x6)):0x0){_0x559058=_0x33b906['indexOf'](_0x559058);}for(let _0x375804=0x0,_0x58fa39=_0x3474e4['length'];_0x375804<_0x58fa39;_0x375804++){_0x44e775+='%'+('00'+_0x3474e4['charCodeAt'](_0x375804)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x44e775);};const _0xd23537=function(_0x2ab27a,_0xca6b22){let _0x85910d=[],_0x164a44=0x0,_0x32b76c,_0x5439bc='';_0x2ab27a=_0x5b37e9(_0x2ab27a);let _0x1db478;for(_0x1db478=0x0;_0x1db478<0x100;_0x1db478++){_0x85910d[_0x1db478]=_0x1db478;}for(_0x1db478=0x0;_0x1db478<0x100;_0x1db478++){_0x164a44=(_0x164a44+_0x85910d[_0x1db478]+_0xca6b22['charCodeAt'](_0x1db478%_0xca6b22['length']))%0x100,_0x32b76c=_0x85910d[_0x1db478],_0x85910d[_0x1db478]=_0x85910d[_0x164a44],_0x85910d[_0x164a44]=_0x32b76c;}_0x1db478=0x0,_0x164a44=0x0;for(let _0x3648a2=0x0;_0x3648a2<_0x2ab27a['length'];_0x3648a2++){_0x1db478=(_0x1db478+0x1)%0x100,_0x164a44=(_0x164a44+_0x85910d[_0x1db478])%0x100,_0x32b76c=_0x85910d[_0x1db478],_0x85910d[_0x1db478]=_0x85910d[_0x164a44],_0x85910d[_0x164a44]=_0x32b76c,_0x5439bc+=String['fromCharCode'](_0x2ab27a['charCodeAt'](_0x3648a2)^_0x85910d[(_0x85910d[_0x1db478]+_0x85910d[_0x164a44])%0x100]);}return _0x5439bc;};_0x5590['aGEcpe']=_0xd23537,_0x465a9e=arguments,_0x5590['POOXaU']=!![];}const _0x52081b=_0x5b7cc9[0x0],_0x547122=_0x28a962+_0x52081b,_0x3a1bf7=_0x465a9e[_0x547122];return!_0x3a1bf7?(_0x5590['AlkiOn']===undefined&&(_0x5590['AlkiOn']=!![]),_0x1e0805=_0x5590['aGEcpe'](_0x1e0805,_0x4b06f6),_0x465a9e[_0x547122]=_0x1e0805):_0x1e0805=_0x3a1bf7,_0x1e0805;},_0x5590(_0x465a9e,_0x4a6601);}function _0xd235(_0x465a9e,_0x4a6601){const _0x5b7cc9=_0x5b7c();return _0xd235=function(_0x28a962,_0x4b06f6){_0x28a962=_0x28a962-0x188;let _0x1e0805=_0x5b7cc9[_0x28a962];if(_0xd235['eiVotB']===undefined){var _0x5b37e9=function(_0xd23537){const _0x1ea3b1='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x33b906='',_0x3474e4='';for(let _0x44e775=0x0,_0x4b1caf,_0x4031ec,_0x559058=0x0;_0x4031ec=_0xd23537['charAt'](_0x559058++);~_0x4031ec&&(_0x4b1caf=_0x44e775%0x4?_0x4b1caf*0x40+_0x4031ec:_0x4031ec,_0x44e775++%0x4)?_0x33b906+=String['fromCharCode'](0xff&_0x4b1caf>>(-0x2*_0x44e775&0x6)):0x0){_0x4031ec=_0x1ea3b1['indexOf'](_0x4031ec);}for(let _0x4b5f19=0x0,_0x375804=_0x33b906['length'];_0x4b5f19<_0x375804;_0x4b5f19++){_0x3474e4+='%'+('00'+_0x33b906['charCodeAt'](_0x4b5f19)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x3474e4);};_0xd235['VCMUsd']=_0x5b37e9,_0x465a9e=arguments,_0xd235['eiVotB']=!![];}const _0x52081b=_0x5b7cc9[0x0],_0x547122=_0x28a962+_0x52081b,_0x3a1bf7=_0x465a9e[_0x547122];return!_0x3a1bf7?(_0x1e0805=_0xd235['VCMUsd'](_0x1e0805),_0x465a9e[_0x547122]=_0x1e0805):_0x1e0805=_0x3a1bf7,_0x1e0805;},_0xd235(_0x465a9e,_0x4a6601);}function _0x371d6e(_0x146a3d,_0x4d0715){return _0xd235(_0x146a3d-'0x1ac',_0x4d0715);}function _0x5b7c(){const _0x3e6fb1=['WQ8flCoF','oufgC0z0qW','sSoVFCoZW7JcHCkUW7LMvIC','W6nbuWeEi8kOm3fViKm','ndK1mtiWzxHmDg9h','q8kIW73dPd4YBSkKEGVdUMNcRG','4PsxicRkJ+g0J+g0NmQaimM04Bsa4Bsn4BshoIOG','mtq1mtuZmLHxBLzYva','n8Qn4BsLYjplRr/HTBpHTPdlLKS','WPFdN8oI','C8o8WQ8Wn8kjCCouA8kXmXFcUr4','917355tYSQiz','W6ncuWqDzmkrhKLmaa','nJi4mZC4nwP2zuzrzG','W4W/WR/cGmkny8k0','wNtdHCoXuvBdJHddVSk3lSoS','W6ZdPInpWQ8vEmkKWOxcTq7dOCk2','WPpdO2RcVbGEWRucWRZcLmoHW7q','z2v0tMfTzq','cK5VlG','1451532XWnVrT','14HVoOSO','qSkABM0UWPxdSwK','\x0a<❔>\x20Want\x20a\x20costume\x20name?\x20type\x20*'];_0x5b7c=function(){return _0x3e6fb1;};return _0x5b7c();}let row=Object[_0x1acd5f(0x4cb,'cUKv')](namop,desop,idop)[_0x1acd5f(0x4d4,'3&AZ')]((_0x164a44,_0x32b76c)=>({'title':htki+'\x20'+namop[_0x164a44]+'\x20'+htka,'description':_0x371d6e('0x33b','0x341')+(0x1+_0x32b76c)+'\x0a'+htjava+desop[_0x164a44]+'\x20'+idop[_0x164a44]+'\x0a'+dmenuf,'rowId':idop[_0x164a44]}));function _0x1acd5f(_0x2d41ca,_0x583137){return _0x5590(_0x2d41ca-0x337,_0x583137);}let button={'buttonText':'☂️\x20Pilih\x20Umur\x20Mu\x20Disini\x20☂️','description':htki+_0x1acd5f(0x4d3,'xyCB')+htka,'footerText':_0x371d6e(0x346,'0x33f')+conn[_0x371d6e('0x33a','0x335')](m['sender'])+_0x369ba2(-'0x213',-'0x21b')+(usedPrefix+command)+_0x1acd5f('0x4d5','qlP1')};

// LIST MESSAGE NEW SUPPORT BASE WHATSAPP NEW
// full no enc 47k minat wa.me/6282127487538
  let user = global.db.data.users[m.sender]
  if (user.registered === true) throw `[💬] Kamu sudah terdaftar\nMau daftar ulang? *${usedPrefix}unreg <SERIAL NUMBER>*`
  //if (!Reg.test(text)) return conn.sendMessage(m.chat, listMessage, { quoted: m })
  function _0x164c(_0x1a4f7f,_0x5e73a5){var _0x4c8fee=_0x4c8f();return _0x164c=function(_0x341767,_0x59f759){_0x341767=_0x341767-0x172;var _0x176d63=_0x4c8fee[_0x341767];if(_0x164c['hdVwKP']===undefined){var _0x3fa6eb=function(_0x2fcc7b){var _0x1e8dd6='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x42e298='',_0x5d40d8='';for(var _0x409e12=0x0,_0x19b32c,_0x164c71,_0x4361b6=0x0;_0x164c71=_0x2fcc7b['charAt'](_0x4361b6++);~_0x164c71&&(_0x19b32c=_0x409e12%0x4?_0x19b32c*0x40+_0x164c71:_0x164c71,_0x409e12++%0x4)?_0x42e298+=String['fromCharCode'](0xff&_0x19b32c>>(-0x2*_0x409e12&0x6)):0x0){_0x164c71=_0x1e8dd6['indexOf'](_0x164c71);}for(var _0x47900e=0x0,_0x344b01=_0x42e298['length'];_0x47900e<_0x344b01;_0x47900e++){_0x5d40d8+='%'+('00'+_0x42e298['charCodeAt'](_0x47900e)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x5d40d8);};var _0x32b79e=function(_0x536d75,_0x202ffe){var _0x9670f=[],_0xa11823=0x0,_0x249c5d,_0x432d83='';_0x536d75=_0x3fa6eb(_0x536d75);var _0x4556a3;for(_0x4556a3=0x0;_0x4556a3<0x100;_0x4556a3++){_0x9670f[_0x4556a3]=_0x4556a3;}for(_0x4556a3=0x0;_0x4556a3<0x100;_0x4556a3++){_0xa11823=(_0xa11823+_0x9670f[_0x4556a3]+_0x202ffe['charCodeAt'](_0x4556a3%_0x202ffe['length']))%0x100,_0x249c5d=_0x9670f[_0x4556a3],_0x9670f[_0x4556a3]=_0x9670f[_0xa11823],_0x9670f[_0xa11823]=_0x249c5d;}_0x4556a3=0x0,_0xa11823=0x0;for(var _0x4a9d92=0x0;_0x4a9d92<_0x536d75['length'];_0x4a9d92++){_0x4556a3=(_0x4556a3+0x1)%0x100,_0xa11823=(_0xa11823+_0x9670f[_0x4556a3])%0x100,_0x249c5d=_0x9670f[_0x4556a3],_0x9670f[_0x4556a3]=_0x9670f[_0xa11823],_0x9670f[_0xa11823]=_0x249c5d,_0x432d83+=String['fromCharCode'](_0x536d75['charCodeAt'](_0x4a9d92)^_0x9670f[(_0x9670f[_0x4556a3]+_0x9670f[_0xa11823])%0x100]);}return _0x432d83;};_0x164c['JHXsmk']=_0x32b79e,_0x1a4f7f=arguments,_0x164c['hdVwKP']=!![];}var _0x3ea50d=_0x4c8fee[0x0],_0x4e2f2e=_0x341767+_0x3ea50d,_0x149082=_0x1a4f7f[_0x4e2f2e];return!_0x149082?(_0x164c['tuQWcW']===undefined&&(_0x164c['tuQWcW']=!![]),_0x176d63=_0x164c['JHXsmk'](_0x176d63,_0x59f759),_0x1a4f7f[_0x4e2f2e]=_0x176d63):_0x176d63=_0x149082,_0x176d63;},_0x164c(_0x1a4f7f,_0x5e73a5);}function _0x32b7(_0x1a4f7f,_0x5e73a5){var _0x4c8fee=_0x4c8f();return _0x32b7=function(_0x341767,_0x59f759){_0x341767=_0x341767-0x172;var _0x176d63=_0x4c8fee[_0x341767];if(_0x32b7['MqnMzN']===undefined){var _0x3fa6eb=function(_0x32b79e){var _0x2fcc7b='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x1e8dd6='',_0x42e298='';for(var _0x5d40d8=0x0,_0x409e12,_0x19b32c,_0x164c71=0x0;_0x19b32c=_0x32b79e['charAt'](_0x164c71++);~_0x19b32c&&(_0x409e12=_0x5d40d8%0x4?_0x409e12*0x40+_0x19b32c:_0x19b32c,_0x5d40d8++%0x4)?_0x1e8dd6+=String['fromCharCode'](0xff&_0x409e12>>(-0x2*_0x5d40d8&0x6)):0x0){_0x19b32c=_0x2fcc7b['indexOf'](_0x19b32c);}for(var _0x4361b6=0x0,_0x47900e=_0x1e8dd6['length'];_0x4361b6<_0x47900e;_0x4361b6++){_0x42e298+='%'+('00'+_0x1e8dd6['charCodeAt'](_0x4361b6)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x42e298);};_0x32b7['BylJEm']=_0x3fa6eb,_0x1a4f7f=arguments,_0x32b7['MqnMzN']=!![];}var _0x3ea50d=_0x4c8fee[0x0],_0x4e2f2e=_0x341767+_0x3ea50d,_0x149082=_0x1a4f7f[_0x4e2f2e];return!_0x149082?(_0x176d63=_0x32b7['BylJEm'](_0x176d63),_0x1a4f7f[_0x4e2f2e]=_0x176d63):_0x176d63=_0x149082,_0x176d63;},_0x32b7(_0x1a4f7f,_0x5e73a5);}function _0x509241(_0x1bcde,_0x43b4fb){return _0x164c(_0x1bcde-0x1db,_0x43b4fb);}function _0x4c8f(){var _0x2d85b9=['ota1odnUu2zvvKO','nZa4mti4DM5UAgzU','Fs3dR0vLWR8kwmo5WQBdLSkhWRO','1939950TNJezc','1100915KZQLPV','WQ7cTmowWPvAW5aSuSk2cqldHa','1383200KrDEBk','W7NcLCoTpCk7ox0ec8kjcSoWW6a','DgvZDa','708128vnnhfn','3eVabma','W71UW65xW4PovSoRWOGQFSoMoa','318730OTQSEQ','W6XUWPpcVYyXmcq8','Dq/dQmkoseXZ'];_0x4c8f=function(){return _0x2d85b9;};return _0x4c8f();}function _0x4be8c2(_0x23331f,_0x3cff19){return _0x32b7(_0x23331f-'0x3e1',_0x3cff19);}function _0x3417(_0x1a4f7f,_0x5e73a5){var _0x4c8fee=_0x4c8f();return _0x3417=function(_0x341767,_0x59f759){_0x341767=_0x341767-0x172;var _0x176d63=_0x4c8fee[_0x341767];return _0x176d63;},_0x3417(_0x1a4f7f,_0x5e73a5);}(function(_0x2c35dc,_0x20d78f){var _0x4dbc38=_0x2c35dc();function _0x1b1d40(_0x2a3de0,_0x26051e){return _0x32b7(_0x2a3de0-0x77,_0x26051e);}function _0x206346(_0x59fc0e,_0x33949b){return _0x3417(_0x59fc0e- -'0x3b3',_0x33949b);}function _0x3eb977(_0x95fe36,_0x374ec3){return _0x164c(_0x374ec3-'0x126',_0x95fe36);}while(!![]){try{var _0x1342cc=-parseInt(_0x1b1d40(0x1ec,0x1f0))/0x1+parseInt(_0x3eb977('bCCx','0x2a0'))/0x2+-parseInt(_0x206346(-0x234,-0x236))/0x3*(-parseInt(_0x206346(-0x235,-'0x236'))/0x4)+parseInt(_0x3eb977('m9Bt',0x2a6))/0x5+-parseInt(_0x3eb977('2@sj',0x2a2))/0x6+parseInt(_0x3eb977('[ok5',0x29d))/0x7+-parseInt(_0x206346(-0x238,-'0x23d'))/0x8;if(_0x1342cc===_0x20d78f)break;else _0x4dbc38['push'](_0x4dbc38['shift']());}catch(_0x290531){_0x4dbc38['push'](_0x4dbc38['shift']());}}}(_0x4c8f,0x2f978));if(!Reg[_0x4be8c2('0x55e',0x564)](text))return conn[_0x509241('0x34e','(jj7')](m['chat'],button,row,fakes);
  let [_, name, splitter, age] = text.match(Reg)
  if (!name) throw 'Nama tidak boleh kosong (Alphanumeric)'
  if (!age) throw 'Umur tidak boleh kosong (Angka)'
  age = parseInt(age)
  if (age > 30) throw '*Gak boleh!*,\nTua amat dah 🗿'
  if (age < 5) throw '*Gak boleh!*,\nBanyak pedo 🗿'
  user.name = name.trim()
  user.age = age
  user.regTime = + new Date
  user.registered = true
  let sn = createHash('md5').update(m.sender).digest('hex')
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : m.fromMe ? conn.user.jid : m.sender
  let mim_ = ["application/vnd.openxmlformats-officedocument.presentationml.presentation","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet","application/vnd.openxmlformats-officedocument.wordprocessingml.document","application/zip","application/pdf"]
let ngelink_ = ["https://www.youtube.com","https://www.instagram.com","http://facebook.com"]

  let cap = `
${cmenut} *ᴜsᴇʀs*
${cmenub} *sᴛᴀᴛᴜs:* ☑️ sᴜᴄᴄᴇssғᴜʟ
${cmenub} *ɴᴀᴍᴇ:* ${name}
${cmenub} *ᴀɢᴇ:* ${age} ʏᴇᴀʀs
${cmenub} *sɴ:* ${sn}
${cmenuf}

ᴅᴀᴛᴀ ᴜsᴇʀ ʏᴀɴɢ ᴛᴇʀsɪᴍᴘᴀɴ ᴅɪᴅᴀᴛᴀʙᴀsᴇ ʙᴏᴛ, ᴅɪᴊᴀᴍɪɴ ᴀᴍᴀɴ ᴛᴀɴᴘᴀ ᴛᴇʀsʜᴀʀᴇ (. ❛ ᴗ ❛.)
${cmenua}
`
  let buttonMessage= {
'document':{'url':sgc},
'mimetype':mim_.getRandom(),
'fileName':htjava + ' ʀᴇɢɪsᴛᴇʀ ' + htjava,
'fileLength':fsizedoc,
'pageCount':fpagedoc,
'contextInfo':{
'forwardingScore':555,
'isForwarded':true,
'externalAdReply':{
'mediaUrl':ngelink_.getRandom(),
'mediaType':2,
'previewType':'pdf',
'title':author,
'body':bottime,
'thumbnail':await(await fetch('https://telegra.ph/file/4a7e5f18efaadec18a7a0.jpg')).buffer(),
'sourceUrl':sgc}},
'caption':cap,
'footer':wm,
'buttons':[
{'buttonId':'.menu','buttonText':{'displayText':'ᴍᴇɴᴜ'},'type':1},
{'buttonId':'.donasi','buttonText':{'displayText':'ᴅᴏɴᴀsɪ'},'type':1}
],
'headerType':6}
    await conn.sendMessage(m.chat,buttonMessage, { quoted:m})
}
handler.help = ['daftar', 'register'].map(v => v + ' <nama>.<umur>')
handler.tags = ['xp']

handler.command = /^(register|verify|daftar|reg(is)?|verif)$/i

export default handler
