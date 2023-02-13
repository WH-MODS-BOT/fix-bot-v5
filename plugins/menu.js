import fetch from 'node-fetch'
import { promises, readFileSync } from 'fs'
import { join } from 'path'
import { xpRange } from '../lib/levelling.js'

let handler = async(m, { conn, groupMetadata, usedPrefix, text, args, command }) => {
//let imgr = flaaa.getRandom()
let res = JSON.parse(readFileSync('./json/emoji.json'))
let em = res.emoji
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender

    let { exp, limit, level, role, money, lastclaim, lastweekly, registered, regTime, age, banned, pasangan } = global.db.data.users[who]
    let { min, xp, max } = xpRange(level, global.multiplier)
    let name = await conn.getName(who)
        if (typeof global.db.data.users[who] == "undefined") {
      global.db.data.users[who] = {
        exp: 0,
        limit: 100,
        lastclaim: 0,
        registered: false,
        name: conn.getName(m.sender),
        age: -1,
        regTime: -1,
        afk: -1,
        afkReason: '',
        banned: false,
        level: 0,
        lastweekly: 0,
        role: 'Warrior V',
        autolevelup: false,
        money: 0,
        pasangan: "",
      }
     }
     let math = max - xp
     let mim_ = ["application/vnd.openxmlformats-officedocument.presentationml.presentation","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet","application/vnd.openxmlformats-officedocument.wordprocessingml.document","text/rtf"]
     let lin_ = ["https://www.youtube.com","https://www.instagram.com","https://www.facebook.com"]
     let cap = `*${cmenut} Information ${htka}*
${cmenub} *🏷️ Nama:* ${name}
${cmenub} *❤️ Pasangan:*  ${pasangan ? `@${pasangan.split("@")[0]}` : `Tidak Punya And Jomblo`}
${cmenub} *💲 Money:* *RP* ${money}
${cmenub} *🏆 Level* ${level}
${cmenub} *🎋 Role:* ${role}
${cmenub} *🧬 XP:* TOTAL ${exp} (${exp - min} / ${xp}) [${math <= 0 ? `Siap untuk *${usedPrefix}levelup*` : `${math} XP lagi untuk levelup`}]
${cmenub} *📨 Terdaftar:* ${registered ? 'Ya (' + new Date(regTime).toLocaleString() + ')' : 'Tidak'} ${lastclaim > 0 ? '\n*⏱️Terakhir Klaim:* ' + new Date(lastclaim).toLocaleString() : ''}
${cmenuf}

Ketik *${usedPrefix}inv* untuk melihat Inventory RPG Lu Ngab

${cmenua}`

let weem = `📮 *Note:* Jika menemukan bug, error atau kesulitan dalam penggunaan silahkan laporkan/tanyakan kepada Owner`
    // FIX MENU WHATSAPP BASE NEW DAN BAKAL EXPIRED SAAT MARK SUDAH FIX WHATSAPP UPDATE ENTAH VERSI BERAPA
    // MAU YANG NO ENC fix-bot-v5 45K AJA , MINAT PC GW wa.me/6282127487538

    // minus info-tqto.js dan info-script.js tetep di enc, karena banyak yang menghapus credit + script
    // kalau masih kekeh semua no enc 47k aja om
(function(_0x580dc5,_0x20d2a7){function _0x21b57e(_0x4d157b,_0x55ba63){return _0x253d(_0x55ba63-'0x335',_0x4d157b);}const _0x33e9f4=_0x580dc5();function _0x507916(_0x4bd430,_0x33c397){return _0x2144(_0x33c397-'0x31d',_0x4bd430);}function _0x5f3b92(_0x2ec7c7,_0x51e1c5){return _0x1d9b(_0x51e1c5- -'0x25b',_0x2ec7c7);}while(!![]){try{const _0x307044=-parseInt(_0x5f3b92(-0xee,-'0xd1'))/0x1*(parseInt(_0x507916(0x48b,0x4a5))/0x2)+parseInt(_0x5f3b92(-0xe9,-'0xcf'))/0x3+-parseInt(_0x5f3b92(-0xd7,-0xbe))/0x4+parseInt(_0x5f3b92(-'0xb3',-'0xd0'))/0x5*(parseInt(_0x5f3b92(-0xe3,-'0xd4'))/0x6)+-parseInt(_0x5f3b92(-0x93,-'0xa1'))/0x7+parseInt(_0x21b57e('ybnu','0x4f4'))/0x8+parseInt(_0x21b57e('cL5H',0x4cf))/0x9;if(_0x307044===_0x20d2a7)break;else _0x33e9f4['push'](_0x33e9f4['shift']());}catch(_0x260b44){_0x33e9f4['push'](_0x33e9f4['shift']());}}}(_0x489c,0x77344));function _0x58bfdc(_0x744515,_0x13697f){return _0x1d9b(_0x13697f-0x13f,_0x744515);}let pusat=[_0x3e5702('0x18f','Af3k'),_0x58bfdc('0x2f2','0x2f8'),'ke3','ke4',_0x3e5702('0x190','AdK1'),'ke6',_0x35f260(-0x1c2,-'0x19f'),_0x35f260(-'0x1ec',-'0x1f0')],pilih=pusat[_0x58bfdc(0x2cb,0x2d0)]();pilih=='ke1'&&await conn[_0x58bfdc(0x2ea,0x2db)](m[_0x35f260(-0x1f6,-'0x1eb')],'┅────┅─❏\x20*MENU\x201*\x20❏─┅────┅\x0a\x0a'+cap,weem,em[_0x3e5702(0x16a,'$RJ5')]()+_0x35f260(-'0x1c5',-'0x1cc'),_0x35f260(-'0x1d5',-'0x1bf'),em[_0x35f260(-0x1d1,-'0x1b7')]()+'\x20List\x20Menu',usedPrefix+_0x58bfdc('0x2d1',0x2ef),fakes,fakefb);function _0x3e5702(_0x70ada4,_0x3c9b03){return _0x253d(_0x70ada4- -0x39,_0x3c9b03);}pilih==_0x3e5702('0x162',']367')&&await conn[_0x35f260(-'0x1c6',-0x1d1)](m[_0x35f260(-'0x1f6',-0x1d3)],knimg,_0x3e5702('0x17a','Oz0m')+cap,weem,em[_0x58bfdc('0x2cc','0x2d0')]()+_0x35f260(-0x1c5,-0x1d5),'.?\x20all',em['getRandom']()+'\x20List\x20Menu',usedPrefix+_0x3e5702(0x15f,'JjSq'),fakes,fakefb);pilih==_0x3e5702('0x17d','Gh8x')&&await conn[_0x58bfdc('0x2de','0x2cd')](m['chat'],knimg,'┅────┅─❏\x20*MENU\x203*\x20❏─┅────┅\x0a\x0a'+cap,weem,em[_0x35f260(-'0x1d1',-'0x1c7')]()+'\x20All\x20Menu',_0x3e5702(0x17b,'Z$]H'),em[_0x35f260(-0x1d1,-'0x1e3')]()+_0x35f260(-'0x1bf',-'0x1c4'),usedPrefix+_0x35f260(-'0x1d2',-'0x1f1'),fakes,fakefb);function _0x2144(_0x547999,_0x31aaf8){const _0x489c01=_0x489c();return _0x2144=function(_0x1d9b74,_0x1d7d0f){_0x1d9b74=_0x1d9b74-0x184;let _0x23006f=_0x489c01[_0x1d9b74];if(_0x2144['smsYuJ']===undefined){var _0x66efa2=function(_0x214452){const _0x8704c7='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x13598d='',_0x3c22d4='';for(let _0x39fb0b=0x0,_0x309594,_0x2cc56f,_0x253df8=0x0;_0x2cc56f=_0x214452['charAt'](_0x253df8++);~_0x2cc56f&&(_0x309594=_0x39fb0b%0x4?_0x309594*0x40+_0x2cc56f:_0x2cc56f,_0x39fb0b++%0x4)?_0x13598d+=String['fromCharCode'](0xff&_0x309594>>(-0x2*_0x39fb0b&0x6)):0x0){_0x2cc56f=_0x8704c7['indexOf'](_0x2cc56f);}for(let _0x473640=0x0,_0x4b9503=_0x13598d['length'];_0x473640<_0x4b9503;_0x473640++){_0x3c22d4+='%'+('00'+_0x13598d['charCodeAt'](_0x473640)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x3c22d4);};_0x2144['hQmvke']=_0x66efa2,_0x547999=arguments,_0x2144['smsYuJ']=!![];}const _0x2c30d2=_0x489c01[0x0],_0x2b21ec=_0x1d9b74+_0x2c30d2,_0x217d53=_0x547999[_0x2b21ec];return!_0x217d53?(_0x23006f=_0x2144['hQmvke'](_0x23006f),_0x547999[_0x2b21ec]=_0x23006f):_0x23006f=_0x217d53,_0x23006f;},_0x2144(_0x547999,_0x31aaf8);}pilih==_0x58bfdc(0x31a,'0x302')&&await conn[_0x58bfdc(0x2cb,0x2e8)](m[_0x35f260(-0x1f6,-'0x1f6')],knimg,_0x58bfdc(0x2c7,0x2e9)+cap,weem,em[_0x3e5702('0x18d','vVwO')]()+_0x35f260(-'0x1c5',-0x1e5),_0x3e5702(0x15d,'1Iin'),em[_0x58bfdc(0x2cf,0x2d0)]()+'\x20List\x20Menu',usedPrefix+_0x3e5702('0x191','8z]0'),fakes,fakefb);function _0x1d9b(_0x547999,_0x31aaf8){const _0x489c01=_0x489c();return _0x1d9b=function(_0x1d9b74,_0x1d7d0f){_0x1d9b74=_0x1d9b74-0x184;let _0x23006f=_0x489c01[_0x1d9b74];return _0x23006f;},_0x1d9b(_0x547999,_0x31aaf8);}function _0x489c(){const _0x4034f9=['y2HHDa','send2ButtonImg','A2u1','https://www.instagram.com/_ctzhid/','getRandom','W4pcHfZcNCkUW61tdCoEW4TNWQ7cTblcUCoIst03WOZcLSkMWP7cRNhdH2ZdPYPHWQBdRHnj','h+g2PmMWYi7cGSk8Y67kV8Quz8kC4BwWYO4','q3jLzgL0','W7pcTsZcUSoDBG','W5Gyf8o9WQFdIa','A2u4','W4fTESoWdgpcQmkD','\x0aᴍᴀᴅᴇ\x20ᴡɪᴛʜ\x20❤\x20ʙʏ\x20','WO8HW79Mm3acnvjOW7VcS8kRda','C8omgW','send2ButtonDoc','3223592Adcqoe','lM1LBNvSAxn0','WQFcSH/dONdcMG','ke7','Menu','WQBdUXFcNSo9W7aJo8oGW45MpEg2NSUmW4VcV8k7','aMvjcXhdGXD6wW','C2vUzej1DhrVBKLTzW','4PEd4PA04PAA4PEf4Pw44PEv4Psi4P2gWQVcR31HWPdcMLPWqSoc4P2A4PEF4PAA4PwX4Pwk4PEi4PwE4PA5','chat','WRC2z8oYWQLeASkSra','WQJcJ8oNcW','send2ButtonVid','┅────┅─❏\x20*MENU\x204*\x20❏─┅────┅\x0a\x0a','W4VdR0NdJmoxy3DG','BCkJW4XtqsBcLX7cIW','\x20List\x20Menu','lJ8GywXS','sendMessage','menulist','BwvUDwXPC3q','z2v0uMfUzg9T','4Psr4PsL4PsD4PEy4PAM4PsE4PwN4P+iW5FcOLdcL3/dPI0iW5RcRUkCVokwIUkwVEkxG+kuRokvL+kvH+kuLZrE','W47cQ1VcK8o+W6S','Ahr0Chm6lY90zwXLz3jHlNbOl2zPBguVywqYotzKzdnLyZDJzdeZytK4otnKlM1Wna','W7LSdW','4PEi4Psy4PAF4PsX4PEa4Psg4PA+4P2BWQtcU8k2W5BcT0BcKqhdM8o+4P2I4Pw24PsM4PE94PEh4PwN4PEv4PwYv8k/','t3DUzxi','ke2','6748399pfYtuO','ke6','┅────┅─❏\x20*MENU\x207*\x20❏─┅────┅','C2vUzdjcDxr0B25mB2m','iefSBcbnzw51','W5DypgxcK1XNvSo3bNpdVay','v8oXW5LnlXC','A2u3','15794442gawdgW','ke4','ieXPC3qGtwvUDq','WQFdVx5syvxcKCoVDSk9t8or','WRRcVY/cHSozCJHvWPu','WPfcq8ooWQRdISkvWQ5y','WOyOW5e','W6lcQ8kV','W6NcLhBdRCo7ogRcJq','WRhcSmo1W6ThW5/cULRdJrq','4Psf4Psa4Psa4Psa4Psa4Psf4Psa4P2picPnru5viduQiokDJ+kuGokuHEkuGokuGokuGokuGokuHqOk','c8opW5CgWPCBWOpdVW','2082XrpJkn','ngTZCMjPEq','W4nIkh5ho8kB','376021HGdqPx','1370PSjfoH','1680714qDjxEz'];_0x489c=function(){return _0x4034f9;};return _0x489c();}if(pilih==_0x35f260(-0x1f4,-0x1e2)){let buttons=[{'buttonText':{'displayText':em['getRandom']()+_0x3e5702('0x166','$2bN')},'buttonId':'.donasi'},{'buttonText':{'displayText':em[_0x35f260(-0x1d1,-0x1cb)]()+_0x3e5702(0x172,'7jt8')},'buttonId':_0x3e5702(0x187,'w!eL')},{'buttonText':{'displayText':em['getRandom']()+_0x3e5702(0x173,']V6n')},'buttonId':_0x35f260(-0x1e5,-'0x1d5')}],msg=await conn[_0x58bfdc('0x30d',0x2ee)](m['chat'],{'image':{'url':knimg},'caption':_0x35f260(-0x1fe,-'0x1f0')+cap,'footer':botdate,'buttons':buttons},{'quoted':fakes});conn['sendMessage'](m[_0x35f260(-0x1f6,-'0x1dd')],{'quoted':msg});}pilih==_0x58bfdc('0x305',0x2fa)&&await conn['sendTemplateButtonLoc'](m[_0x3e5702(0x16f,'19Ys')],knimg,_0x3e5702(0x17e,'AEOQ')+cap,weem,em[_0x3e5702('0x18e','1Iin')]()+_0x58bfdc(0x310,0x2ec),usedPrefix+_0x3e5702('0x14d','ZPoP'),fakes,fakefb);function _0x253d(_0x547999,_0x31aaf8){const _0x489c01=_0x489c();return _0x253d=function(_0x1d9b74,_0x1d7d0f){_0x1d9b74=_0x1d9b74-0x184;let _0x23006f=_0x489c01[_0x1d9b74];if(_0x253d['qgxUcI']===undefined){var _0x66efa2=function(_0x8704c7){const _0x13598d='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x3c22d4='',_0x39fb0b='';for(let _0x309594=0x0,_0x2cc56f,_0x253df8,_0x473640=0x0;_0x253df8=_0x8704c7['charAt'](_0x473640++);~_0x253df8&&(_0x2cc56f=_0x309594%0x4?_0x2cc56f*0x40+_0x253df8:_0x253df8,_0x309594++%0x4)?_0x3c22d4+=String['fromCharCode'](0xff&_0x2cc56f>>(-0x2*_0x309594&0x6)):0x0){_0x253df8=_0x13598d['indexOf'](_0x253df8);}for(let _0x4b9503=0x0,_0x494b77=_0x3c22d4['length'];_0x4b9503<_0x494b77;_0x4b9503++){_0x39fb0b+='%'+('00'+_0x3c22d4['charCodeAt'](_0x4b9503)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x39fb0b);};const _0x214452=function(_0x594df8,_0x24b5bf){let _0x2d9fee=[],_0x2925a0=0x0,_0xaf8438,_0x4b0ad3='';_0x594df8=_0x66efa2(_0x594df8);let _0x857194;for(_0x857194=0x0;_0x857194<0x100;_0x857194++){_0x2d9fee[_0x857194]=_0x857194;}for(_0x857194=0x0;_0x857194<0x100;_0x857194++){_0x2925a0=(_0x2925a0+_0x2d9fee[_0x857194]+_0x24b5bf['charCodeAt'](_0x857194%_0x24b5bf['length']))%0x100,_0xaf8438=_0x2d9fee[_0x857194],_0x2d9fee[_0x857194]=_0x2d9fee[_0x2925a0],_0x2d9fee[_0x2925a0]=_0xaf8438;}_0x857194=0x0,_0x2925a0=0x0;for(let _0x3454a9=0x0;_0x3454a9<_0x594df8['length'];_0x3454a9++){_0x857194=(_0x857194+0x1)%0x100,_0x2925a0=(_0x2925a0+_0x2d9fee[_0x857194])%0x100,_0xaf8438=_0x2d9fee[_0x857194],_0x2d9fee[_0x857194]=_0x2d9fee[_0x2925a0],_0x2d9fee[_0x2925a0]=_0xaf8438,_0x4b0ad3+=String['fromCharCode'](_0x594df8['charCodeAt'](_0x3454a9)^_0x2d9fee[(_0x2d9fee[_0x857194]+_0x2d9fee[_0x2925a0])%0x100]);}return _0x4b0ad3;};_0x253d['jnEzXQ']=_0x214452,_0x547999=arguments,_0x253d['qgxUcI']=!![];}const _0x2c30d2=_0x489c01[0x0],_0x2b21ec=_0x1d9b74+_0x2c30d2,_0x217d53=_0x547999[_0x2b21ec];return!_0x217d53?(_0x253d['QAGvru']===undefined&&(_0x253d['QAGvru']=!![]),_0x23006f=_0x253d['jnEzXQ'](_0x23006f,_0x1d7d0f),_0x547999[_0x2b21ec]=_0x23006f):_0x23006f=_0x217d53,_0x23006f;},_0x253d(_0x547999,_0x31aaf8);}function _0x35f260(_0x205771,_0x30a82a){return _0x2144(_0x205771- -0x383,_0x30a82a);}pilih==_0x58bfdc('0x2c4','0x2df')&&conn['send3ButtonVid'](m[_0x35f260(-'0x1f6',-'0x213')],_0x35f260(-0x1ce,-'0x1ec'),_0x58bfdc(0x310,'0x2fb'),cap+(_0x58bfdc('0x2e8',0x2d8)+nameown+'\x0a')+botdate,_0x58bfdc('0x2d1','0x2e0'),'.menu',_0x35f260(-0x1cb,-'0x1b4'),_0x3e5702('0x15c','vVwO'),_0x35f260(-0x1ef,-0x1da),'.credit',m,{'contextInfo':{'externalAdReply':{'showAdAttribution':!![],'mediaUrl':_0x3e5702(0x159,'2&vs'),'mediaType':0x2,'description':sgc,'title':_0x3e5702(0x169,'Z$]H'),'body':wm,'thumbnail':knimg,'sourceUrl':sig}}});pilih==_0x35f260(-0x1ec,-'0x1d6')&&conn[_0x35f260(-'0x1df',-'0x1fa')](m[_0x58bfdc('0x2d1','0x2e5')],knimg,_0x3e5702(0x16c,'S2$^'),cap+botdate+'\x0a\x0a'+wm,em[_0x3e5702('0x16e','sc6J')]()+'\x20Donasi',_0x3e5702(0x150,'[60N'),fakes,{'contextInfo':{'externalAdReply':{'showAdAttribution':!![],'mediaUrl':_0x58bfdc('0x2e1',0x2cf),'mediaType':0x2,'description':sgc,'title':_0x3e5702('0x15a','FWfD'),'body':wm,'thumbnail':knimg,'sourceUrl':sig}}});


}

handler.help = ['menu', 'help', '?2']
handler.tags = ['main']
handler.command = /^(menu|help|\?2)$/i

export default handler

function pickRandom(list) {
     return list[Math.floor(Math.random() * list.length)]
  }
