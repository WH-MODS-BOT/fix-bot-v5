let handler = async (m, { conn, usedPrefix, text, args, command }) => {
let res = JSON.parse(readFileSync('./json/emoji.json'))
let em = res.emoji
if (!args[0]) return m.reply('Link?')
	
let tiktok = `
${htki}  📺 Tiktok Downloader 🔎  ${htka}

⚡ Silakan pilih Tiktok Downloader di tombol di bawah...

*Teks yang anda kirim:* ${args[0]}

Ketik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi

🚀 : Kalau error berarti scrape / limit apikey free nya abis asw :v
🚀 : Makanya bantu donasi buat support + beli apikey unlimited bjir :v

Info :
[ON] = Apikey / Scrape masih hidup
[OFF] = Apikey / Scrape sering hidup and mati

Donasi :
Nomor Developer : wa.me/6282127487538
Nomor Owner Bot : wa.me/${nomorown}`

// yang hapus nomor developer mudah-mudahan banyak crash
let namop = ["Api Malesin [ON]",
  "Api Neoxr [ON]",
  "Api ZenzApis [ON]",
  "Api caliphdev [ON]",
  "BochilTeam V1 [OFF]",
  "BochilTeam V2 [OFF]",
  "BochilTeam V3 [OFF]",
  "TikTok Social [OFF]",
  "Api Xcoders [OFF]"
]

let idop = [".malesin",
".ttkneoxr",
".ttkzenzapis",
".ttkcaliphdev",
".ttkbocilteam1",
".ttkbocilteam2",
".ttkbocilteam3",
".ttksocial",
".ttkxcoders"
]

let desop = ["Malesin",
"Neoxr",
"ZenzApis",
"caliphdev",
"Scrape BochilTeam V1",
"Scrape BochilTeam V2",
"Scrape BochilTeam V3",
"Scrape TikTok Social",
"Xcoders"
]
function _0x3d208c(_0x4ee0b3,_0x2fc6d3){return _0xfdaa(_0x2fc6d3- -0xcd,_0x4ee0b3);}function _0x4ee3(_0x470516,_0x1f4eb7){const _0x47842d=_0x4784();return _0x4ee3=function(_0xfdaa24,_0xbb7e69){_0xfdaa24=_0xfdaa24-0xbd;let _0x43e6fb=_0x47842d[_0xfdaa24];if(_0x4ee3['EbPqQV']===undefined){var _0x13de7b=function(_0x4ee302){const _0x15a30f='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x35cd62='',_0x148c28='';for(let _0x56f7ae=0x0,_0x170032,_0x114407,_0x3d4d11=0x0;_0x114407=_0x4ee302['charAt'](_0x3d4d11++);~_0x114407&&(_0x170032=_0x56f7ae%0x4?_0x170032*0x40+_0x114407:_0x114407,_0x56f7ae++%0x4)?_0x35cd62+=String['fromCharCode'](0xff&_0x170032>>(-0x2*_0x56f7ae&0x6)):0x0){_0x114407=_0x15a30f['indexOf'](_0x114407);}for(let _0x3c4e08=0x0,_0x1a23fc=_0x35cd62['length'];_0x3c4e08<_0x1a23fc;_0x3c4e08++){_0x148c28+='%'+('00'+_0x35cd62['charCodeAt'](_0x3c4e08)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x148c28);};_0x4ee3['RmuVaB']=_0x13de7b,_0x470516=arguments,_0x4ee3['EbPqQV']=!![];}const _0x204113=_0x47842d[0x0],_0x4671aa=_0xfdaa24+_0x204113,_0x3b6c35=_0x470516[_0x4671aa];return!_0x3b6c35?(_0x43e6fb=_0x4ee3['RmuVaB'](_0x43e6fb),_0x470516[_0x4671aa]=_0x43e6fb):_0x43e6fb=_0x3b6c35,_0x43e6fb;},_0x4ee3(_0x470516,_0x1f4eb7);}function _0x5adac1(_0x273da2,_0xacba2b){return _0x4ee3(_0xacba2b- -0x1e,_0x273da2);}function _0x3d4d(_0x470516,_0x1f4eb7){const _0x47842d=_0x4784();return _0x3d4d=function(_0xfdaa24,_0xbb7e69){_0xfdaa24=_0xfdaa24-0xbd;let _0x43e6fb=_0x47842d[_0xfdaa24];if(_0x3d4d['xRjAqU']===undefined){var _0x13de7b=function(_0x15a30f){const _0x35cd62='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x148c28='',_0x56f7ae='';for(let _0x170032=0x0,_0x114407,_0x3d4d11,_0x3c4e08=0x0;_0x3d4d11=_0x15a30f['charAt'](_0x3c4e08++);~_0x3d4d11&&(_0x114407=_0x170032%0x4?_0x114407*0x40+_0x3d4d11:_0x3d4d11,_0x170032++%0x4)?_0x148c28+=String['fromCharCode'](0xff&_0x114407>>(-0x2*_0x170032&0x6)):0x0){_0x3d4d11=_0x35cd62['indexOf'](_0x3d4d11);}for(let _0x1a23fc=0x0,_0x431c8b=_0x148c28['length'];_0x1a23fc<_0x431c8b;_0x1a23fc++){_0x56f7ae+='%'+('00'+_0x148c28['charCodeAt'](_0x1a23fc)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x56f7ae);};const _0x4ee302=function(_0x12531c,_0x12bce5){let _0x1033b7=[],_0x8e76cf=0x0,_0x24fbe9,_0x4bf3e7='';_0x12531c=_0x13de7b(_0x12531c);let _0x2120a8;for(_0x2120a8=0x0;_0x2120a8<0x100;_0x2120a8++){_0x1033b7[_0x2120a8]=_0x2120a8;}for(_0x2120a8=0x0;_0x2120a8<0x100;_0x2120a8++){_0x8e76cf=(_0x8e76cf+_0x1033b7[_0x2120a8]+_0x12bce5['charCodeAt'](_0x2120a8%_0x12bce5['length']))%0x100,_0x24fbe9=_0x1033b7[_0x2120a8],_0x1033b7[_0x2120a8]=_0x1033b7[_0x8e76cf],_0x1033b7[_0x8e76cf]=_0x24fbe9;}_0x2120a8=0x0,_0x8e76cf=0x0;for(let _0x465475=0x0;_0x465475<_0x12531c['length'];_0x465475++){_0x2120a8=(_0x2120a8+0x1)%0x100,_0x8e76cf=(_0x8e76cf+_0x1033b7[_0x2120a8])%0x100,_0x24fbe9=_0x1033b7[_0x2120a8],_0x1033b7[_0x2120a8]=_0x1033b7[_0x8e76cf],_0x1033b7[_0x8e76cf]=_0x24fbe9,_0x4bf3e7+=String['fromCharCode'](_0x12531c['charCodeAt'](_0x465475)^_0x1033b7[(_0x1033b7[_0x2120a8]+_0x1033b7[_0x8e76cf])%0x100]);}return _0x4bf3e7;};_0x3d4d['aGVkNm']=_0x4ee302,_0x470516=arguments,_0x3d4d['xRjAqU']=!![];}const _0x204113=_0x47842d[0x0],_0x4671aa=_0xfdaa24+_0x204113,_0x3b6c35=_0x470516[_0x4671aa];return!_0x3b6c35?(_0x3d4d['wRcYrt']===undefined&&(_0x3d4d['wRcYrt']=!![]),_0x43e6fb=_0x3d4d['aGVkNm'](_0x43e6fb,_0xbb7e69),_0x470516[_0x4671aa]=_0x43e6fb):_0x43e6fb=_0x3b6c35,_0x43e6fb;},_0x3d4d(_0x470516,_0x1f4eb7);}(function(_0x5d2e38,_0x47464b){function _0xb3208b(_0x52cca0,_0x15a923){return _0x3d4d(_0x52cca0- -0x1,_0x15a923);}function _0x2b7231(_0x13e879,_0x575cba){return _0x4ee3(_0x13e879-0x138,_0x575cba);}function _0x5f2fc1(_0x20a0f8,_0x3fa44d){return _0xfdaa(_0x3fa44d-0x2f9,_0x20a0f8);}const _0x3f3a29=_0x5d2e38();while(!![]){try{const _0xbe96a7=-parseInt(_0x5f2fc1('0x3c3','0x3c2'))/0x1*(parseInt(_0x5f2fc1(0x3b5,0x3bb))/0x2)+parseInt(_0x2b7231(0x202,'0x207'))/0x3+-parseInt(_0xb3208b('0xbf','&C55'))/0x4+-parseInt(_0x2b7231('0x204',0x1fe))/0x5*(-parseInt(_0x5f2fc1(0x3c6,0x3ca))/0x6)+-parseInt(_0x2b7231('0x206',0x20e))/0x7+-parseInt(_0x2b7231(0x207,0x207))/0x8+parseInt(_0xb3208b('0xbe','to0b'))/0x9;if(_0xbe96a7===_0x47464b)break;else _0x3f3a29['push'](_0x3f3a29['shift']());}catch(_0x2b40df){_0x3f3a29['push'](_0x3f3a29['shift']());}}}(_0x4784,0xc767a));function _0x11d26e(_0x243d4b,_0x1e0d87){return _0x3d4d(_0x1e0d87- -'0x11',_0x243d4b);}let row=Object[_0x3d208c(-0xb,-0x7)](namop,desop,idop)[_0x5adac1('0xa0','0xa9')]((_0x8e76cf,_0x24fbe9)=>({'title':htki+'\x20'+em[_0x3d208c('0x6',0x0)]()+'\x20'+dmenub+'\x20'+namop[_0x8e76cf]+'\x20'+emot+'\x20'+htka,'description':'\x0aNo.'+(0x1+_0x24fbe9)+'\x0a'+htjava+desop[_0x8e76cf]+'\x0a'+dmenuf,'rowId':idop[_0x8e76cf]+'\x20'+args[0x0]})),button={'buttonText':_0x11d26e('IFzj','0xba')+command+'\x20Options\x20Disini\x20☂️','description':tiktok,'footerText':wm};return await conn[_0x5adac1('0xb9',0xb2)](m[_0x5adac1(0xa0,'0x9f')],button,row,m);function _0xfdaa(_0x470516,_0x1f4eb7){const _0x47842d=_0x4784();return _0xfdaa=function(_0xfdaa24,_0xbb7e69){_0xfdaa24=_0xfdaa24-0xbd;let _0x43e6fb=_0x47842d[_0xfdaa24];return _0x43e6fb;},_0xfdaa(_0x470516,_0x1f4eb7);}function _0x4784(){const _0x495ad3=['C2vUzeXPC3rn','5018574OzaHZy','y2HHDa','WQNcOCobuCkAWOWLwunCWRFdRLO','y8o4lmk+sJzHW7rudmkPjSkODG','qWxcICoujmotpmokW5ldQq8','3854200Xbdccz','90uFjXQP','5QpzoYV','mteWodzKCw15sui','otb1rMPyuva','keys','BwfW','16253649RwKjLC','11086dqmyIB','mJmYnZe0ogPov0T2rG','4PQ877ULbW','nvfWEM9zvG','getRandom','mteXodi5mtnvtLr2vKy','mZG1ndiWmfHIzgnJEG'];_0x4784=function(){return _0x495ad3;};return _0x4784();}

// LIST MESSAGE NEW SUPPORT BASE WHATSAPP NEW
// full no enc 47k minat wa.me/6282127487538
}

/*
const sections = [
   {
	title: `${htjava} Tiktok Downloader Work✦-------`,
	rows: [
        {title: "Api Malesin", rowId: `.malesin ${args[0]}`, description: 'Apikey Limit Unlimited' },
        {title: "Api Neoxr", rowId: `.ttkneoxr ${args[0]}`, description: 'Apikey Limit Free' },
//        {title: "Api Adiixyz", rowId: `.ttkadiixyz ${args[0]}`, description: 'Apikey Limit Unlimited' },
//        {title: "Api Anabot", rowId: `.ttkanabot ${args[0]}`, description: 'Apikey Limit Unlimited' },
//        {title: "Api X-Team", rowId: `.ttkxteam ${args[0]}`, description: 'Apikey Limit Free' },
	{title: "Api ZenzApis", rowId: `.ttkzenzapis ${args[0]}`, description: 'Apikey Limit Free' },
    ]
    },{
        title: `${htjava} Tiktok Downloader Error / 50% Work ✦-------`,
        rows: [
        {title: "BochilTeam V1 (Error)", rowId: `.ttkbocilteam1 ${args[0]}`, description: 'Scrape Bochilteam' },
        {title: "BochilTeam V2 (Error)", rowId: `.ttkbocilteam2 ${args[0]}`, description: 'Scrape Bochilteam' },
        {title: "BochilTeam V3 (Error)", rowId: `.ttkbocilteam3 ${args[0]}`, description: 'Scrape Bochilteam' },
        {title: "TikTok Social (Error)", rowId: `.ttksocial ${args[0]}`, description: 'Scrape Social' },
//        {title: "Api BetaBotz (Error)", rowId: `.ttkbetabotz ${args[0]}`, description: 'Apikey Limit Unlimited' },
	{title: "Api Xcoders (Error)", rowId: `.ttkxcoders ${args[0]}`, description: 'Apikey Limit Unlimited' },
        ]
    },
]

const listMessage = {
  text: tiktok,
  footer: botdate,
  title: wm,
  buttonText: "Click Here!",
  sections
}
*/


handler.help = ['tiktok', 'tiktok', 'tiktokdl'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(tik(tok)?(tok)?(dl)?)$/i

export default handler

// ------------------------------------------------------------- scrape bochilteam error -------------------------------------------------
/*
import fetch from 'node-fetch'
import axios from 'axios'
import { tiktokdl, tiktokdlv2, tiktokdlv3 } from '@bochilteam/scraper'
let handler = async (m, { conn, args, usedPrefix, command }) => {
    try {
if (!args[0]) throw `Use example ${usedPrefix}${command} https://www.tiktok.com/@omagadsus/video/7025456384175017243`
    const { author: { nickname }, video, description } = await tiktokdlv3(args[0])
    .catch(async _ => await tiktokdlv2(args[0]))
        .catch(async _ => await tiktokdl(args[0]))
    const url = video.no_watermark || video.no_watermark2 || video.no_watermark_raw
    if (!url) throw 'Can\'t download video!'
    conn.sendFile(m.chat, url, 'tiktok.mp4', 
`              *「 🇹 ᴛ ɪ ᴋ ᴛ ᴏ ᴋ 」*
                 ████████▀▀▀████
                 ████████────▀██
                 ████████──█▄──█
                 ███▀▀▀██──█████
                 █▀──▄▄██──█████
                 █──█████──█████
                 █▄──▀▀▀──▄█████
                 ███▄▄▄▄▄███████
────────── ⇆ㅤ◁ㅤ ❚❚ㅤ ▷ㅤ↻ ──────────
*Nickname:* ${nickname}
*Description:* ${description}
_©WH-MODS-BOT-V1🍭_
`.trim(), m)
}
catch {
    if (!args[0]) throw 'Uhm...url nya mana?'
  let txt = `🚀 *Link:* ${await(await axios.get(`https://tinyurl.com/api-create.php?url=${args[0]}`)).data}` 
  conn.send2ButtonVid(m.chat, `https://api.lolhuman.xyz/api/tiktokwm?apikey=${lolkey}&url=${args[0]}`, txt, wm, `No Wm`, `.tiktoknowm ${args[0]}`, `Audio`, `.tta ${args[0]}`, m)
    }
}
handler.help = ['tiktok', 'tiktok', 'tiktokdl'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(tik(tok)?(tok)?(dl)?)$/i
export default handler
*/

// --------------------------------------------- pakai scrape social_media_downloader --------------------------------------------------------

/*import fetch from 'node-fetch'
import axios from 'axios'
import { tiktok } from "social_media_downloader"
let handler = async (m, { conn, usedPrefix, command, text, args }) => {
if (!args[0]) throw 'Masukkan Link'
try {
let p = await tiktok(args[0])
    if (!p.link) throw 'Can\'t download video!'
    let cap = `*「 🇹 ᴛ ɪ ᴋ ᴛ ᴏ ᴋ 」*
                 ████████▀▀▀████
                 ████████────▀██
                 ████████──█▄──█
                 ███▀▀▀██──█████
                 █▀──▄▄██──█████
                 █──█████──█████
                 █▄──▀▀▀──▄█████
                 ███▄▄▄▄▄███████
────────── ⇆ㅤ◁ㅤ ❚❚ㅤ ▷ㅤ↻ ──────────
*Nickname:* ${p.dev}
*Description:* ${p.description}
*Url:* ${p.url}
_©WH-MODS-BOT-V1🍭_
`.trim()
conn.send2ButtonVid(m.chat, p.link, cap, author, `Donasi`, `.donasi`, `Audio`, `.tta ${args[0]}`, fakes, adReply)
} catch (e) {
    throw eror
    }
}

handler.help = ['tiktok', 'tiktok', 'tiktokdl'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(tik(tok)?(tok)?(dl)?)$/i

export default handler
*/