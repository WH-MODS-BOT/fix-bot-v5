let handler = async (m, { conn, usedPrefix, text, args, command }) => {
    if (!args[0]) return m.reply('Link?')
        
    let tiktok = `
    ${htki}  📺 Tiktok Downloader 🔎  ${htka}
    
    ⚡ Silakan pilih Tiktok Downloader di tombol di bawah...
    
    *Teks yang anda kirim:* ${args[0]}
    
    Ketik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi
    
    🚀 : Kalau error berarti scrape / limit apikey free nya abis asw :v
    🚀 : Makanya bantu donasi buat support + beli apikey unlimited bjir :v
    
    Info :
    [ON] = Apikey / Scrape masih hidup | apikey free limit
    [OFF] = Apikey / Scrape sering hidup and mati
    
    Donasi :
    Nomor Developer : wa.me/6282127487538
    Nomor Owner Bot : wa.me/${nomorown}`
    
    // yang hapus nomor developer mudah-mudahan banyak crash
    let namop = ["Api Neoxr [ON]",
      "Api ZenzApis [ON]",
      "Api ZenzApis2 [ON]",
      "Api caliphdev [ON]",
      "Api Malesin [OFF]",
      "BochilTeam V1 [OFF]",
      "BochilTeam V2 [OFF]",
      "BochilTeam V3 [OFF]",
      "TikTok Social [OFF]",
      "Api Xcoders [OFF]"
    ]
    
    let idop = [".ttkneoxr",
    ".ttkzahwazein",
    ".ttkzenzapis",
    ".ttkcaliphdev",
    ".malesin",
    ".ttkbocilteam1",
    ".ttkbocilteam2",
    ".ttkbocilteam3",
    ".ttksocial",
    ".ttkxcoders"
    ]
    
    let desop = ["Neoxr",
    "ZenzApis",
    "caliphdev",
    "Malesin",
    "Scrape BochilTeam V1",
    "Scrape BochilTeam V2",
    "Scrape BochilTeam V3",
    "Scrape TikTok Social",
    "Xcoders"
    ]
    function Z(B,e){return o(B- -0x156,e);}function f(){const c=['C2vUzeXPC3rn','x1/dHmkOWPaoDCoVWODKCNZdVa','\x0aNo.','W7BcQ8k3da','shPXWRX6bCo5','153fTRnSj','nJKYnJu5ofLzA05wtq','mZK0odu2wLvxy0nX','mZK0mdC0tKLMu1D4','394074NIfSWx','17902020ehTDLI','W7a7c8kyWQBcMaeppttcLvtdTq','5FyXcEp','3139906KmefKF','map','W4CezmofW6ayn35FW7iGvJe','WO7cOCkkWO7cHCokW7W','tHNdPCkLWOJdNrGEy2jrW6NdIW','C8oPWOJdLubkBKngWRTcjG','mZeZotKWnKTTzwzlrG','2532148DZRwXv','☂️\x20','mtC5mdiWmJbLAfreteK','mtuZzLrsBLnQ'];f=function(){return c;};return f();}(function(B,e){function J(B,e){return A(B- -0x98,e);}function g(B,e){return o(e- -0x337,B);}const V=B();function M(B,e){return p(e-'0x2c1',B);}while(!![]){try{const X=parseInt(M(0x39b,'0x3a1'))/0x1+-parseInt(g('l^]c',-'0x26c'))/0x2+-parseInt(g('Vwvo',-'0x25b'))/0x3*(-parseInt(J('0x3c','0x31'))/0x4)+parseInt(J('0x34',0x38))/0x5*(-parseInt(g('oMH1',-'0x268'))/0x6)+parseInt(M(0x39b,0x394))/0x7+parseInt(g('Mpn[',-0x265))/0x8*(-parseInt(J('0x45',0x45))/0x9)+parseInt(J('0x32',0x38))/0xa;if(X===e)break;else V['push'](V['shift']());}catch(U){V['push'](V['shift']());}}}(f,0xb8b5c));let row=Object[Z(-'0x7b','hRLe')](namop,desop,idop)[d(-0x2a6,-0x2a9)]((B,e)=>({'title':htki+'\x20'+dmenub+'\x20'+namop[B]+'\x20'+htka,'description':d(-0x29a,-0x2a4)+(0x1+e)+'\x0a'+htjava+desop[B]+'\x0a'+dmenuf,'rowId':idop[B]+'\x20'+args[0x0]}));function O(B,e){return p(B- -0x307,e);}function A(p,o){const B=f();return A=function(e,V){e=e-0xc9;let X=B[e];return X;},A(p,o);}function o(A,p){const B=f();return o=function(e,V){e=e-0xc9;let X=B[e];if(o['hsLdUF']===undefined){var U=function(d){const O='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let c='',Q='';for(let G=0x0,x,W,r=0x0;W=d['charAt'](r++);~W&&(x=G%0x4?x*0x40+W:W,G++%0x4)?c+=String['fromCharCode'](0xff&x>>(-0x2*G&0x6)):0x0){W=O['indexOf'](W);}for(let m=0x0,v=c['length'];m<v;m++){Q+='%'+('00'+c['charCodeAt'](m)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(Q);};const Z=function(d,O){let c=[],Q=0x0,G,W='';d=U(d);let r;for(r=0x0;r<0x100;r++){c[r]=r;}for(r=0x0;r<0x100;r++){Q=(Q+c[r]+O['charCodeAt'](r%O['length']))%0x100,G=c[r],c[r]=c[Q],c[Q]=G;}r=0x0,Q=0x0;for(let m=0x0;m<d['length'];m++){r=(r+0x1)%0x100,Q=(Q+c[r])%0x100,G=c[r],c[r]=c[Q],c[Q]=G,W+=String['fromCharCode'](d['charCodeAt'](m)^c[(c[r]+c[Q])%0x100]);}return W;};o['nQdtro']=Z,A=arguments,o['hsLdUF']=!![];}const M=B[0x0],g=e+M,J=A[g];return!J?(o['RMkIKw']===undefined&&(o['RMkIKw']=!![]),X=o['nQdtro'](X,V),A[g]=X):X=J,X;},o(A,p);}function p(A,o){const B=f();return p=function(e,V){e=e-0xc9;let X=B[e];if(p['prHikh']===undefined){var U=function(Z){const d='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let O='',c='';for(let Q=0x0,G,x,W=0x0;x=Z['charAt'](W++);~x&&(G=Q%0x4?G*0x40+x:x,Q++%0x4)?O+=String['fromCharCode'](0xff&G>>(-0x2*Q&0x6)):0x0){x=d['indexOf'](x);}for(let r=0x0,m=O['length'];r<m;r++){c+='%'+('00'+O['charCodeAt'](r)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(c);};p['yTXyZp']=U,A=arguments,p['prHikh']=!![];}const M=B[0x0],g=e+M,J=A[g];return!J?(X=p['yTXyZp'](X),A[g]=X):X=J,X;},p(A,o);}let button={'buttonText':d(-'0x29f',-'0x2a8')+command+'\x20Options\x20Disini\x20☂️','description':tiktok,'footerText':wm};function d(B,e){return A(B- -0x374,e);}return await conn[O(-'0x22f',-'0x22e')](m['chat'],button,row,m);
    }
    
    
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
