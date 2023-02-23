// BY WH MODS DEV
import fetch from 'node-fetch'
import axios from 'axios'
let handler = async(m, { conn, groupMetadata, usedPrefix, text, args, command }) => {
  let imgr = flaaa.getRandom()
if (command == 'ttkneoxr') {
if (!text) throw `Contoh:\n${usedPrefix + command} https://vt.tiktok.com/ZSeJ7P56G`
let f = await(await fetch(`https://api.neoxr.my.id/api/tiktok?url=${text}&apikey=cfALv5`)).json()
let x = f.data
let whmods = `*「 🇹 ᴛ ɪ ᴋ ᴛ ᴏ ᴋ 」*
                ████████▀▀▀████
                ████████────▀██
                ████████──█▄──█
                ███▀▀▀██──█████
                █▀──▄▄██──█████
                █──█████──█████
                █▄──▀▀▀──▄█████
                ███▄▄▄▄▄███████
────────── ⇆ㅤ◁ㅤ ❚❚ㅤ ▷ㅤ↻ ──────────
${cmenut} *Info Detail Tiktok*
${cmenub} *Caption:* ${f.caption}
${cmenuf}
`
conn.sendButton(m.chat, whmods, author, x.video, [["🎥 Video [WM]", usedPrefix + "get " + x.videoWM], ["🎶 Music", usedPrefix + "get " + x.audio]], m, fakes)
}

if (command == 'ttkzahwazein') {
  if (!text) throw `Contoh:\n${usedPrefix + command} https://vt.tiktok.com/ZSeJ7P56G`
  let f = await(await fetch("https://api.zahwazein.xyz/downloader/tiktok?apikey=LuOlangNgentot&url=" + text)).json()
  let x = f.result
  let thumbwahid = await(await fetch(x.author.avatar)).buffer()
  let whmods = `*「 🇹 ᴛ ɪ ᴋ ᴛ ᴏ ᴋ 」*
                  ████████▀▀▀████
                  ████████────▀██
                  ████████──█▄──█
                  ███▀▀▀██──█████
                  █▀──▄▄██──█████
                  █──█████──█████
                  █▄──▀▀▀──▄█████
                  ███▄▄▄▄▄███████
  ────────── ⇆ㅤ◁ㅤ ❚❚ㅤ ▷ㅤ↻ ──────────
  ${cmenut} *Info Detail Tiktok*
  ${cmenub} *Name :* ${x.author.name} | @${x.author.unique_id}
  ${readMore}${cmenub} *Deck Acc :* ${x.author.signature}
  ${cmenub} *Caption :* ${x.title}
  ${cmenub} *Uploaded Date :* ${x.created_at}
  ${cmenub} *Duration Video :* ${x.video.durationFormatted}
  ${cmenub} *Like :* ${x.stats.likeCount}
  ${cmenub} *Comment:* ${x.stats.commentCount}
  ${cmenub} *Share :* ${x.stats.shareCount}
  ${cmenub} *Play :* ${x.stats.playCount}
  ${cmenub} *Save :* ${x.stats.saveCount}
  ${cmenub} *Song :* ${x.music.title}-${x.music.author}
  ${cmenuf}
  `
  conn.sendButton(m.chat, whmods, author, x.video.noWatermark, [["🎥 Video [WM]", usedPrefix + "get " + x.video.watermark], ["🎶 Music", usedPrefix + "get " + x.music.play_url]], m, { contextInfo: { externalAdReply: { showAdAttribution: true,
    mediaUrl: "https://Instagram.com/_ctzhid",
    mediaType: "VIDEO",
    description: "https://www.instagram.com/p/CevoCg5hG-p/?utm_source=ig_web_copy_link", 
    title: 'WH-MODS-DEV-V1 MultiDevice',
    body: wm,
    thumbnail: thumbwahid,
    sourceUrl: sig
  }
  } })
  }

if (command == 'ttkxcoders') {
  if (!text) throw `Contoh:\n${usedPrefix + command} https://vt.tiktok.com/ZSeJ7P56G`
  let f = await axios(`https://api-xcoders.site/api/download/tiktok2?url=${text}&apikey=5S3epf7hC2`)
  let x = f.data
  let thumbwahid = await(await fetch(x.result.thumbnail)).buffer()
  let whmods = `*「 🇹 ᴛ ɪ ᴋ ᴛ ᴏ ᴋ 」*
                  ████████▀▀▀████
                  ████████────▀██
                  ████████──█▄──█
                  ███▀▀▀██──█████
                  █▀──▄▄██──█████
                  █──█████──█████
                  █▄──▀▀▀──▄█████
                  ███▄▄▄▄▄███████
  ────────── ⇆ㅤ◁ㅤ ❚❚ㅤ ▷ㅤ↻ ──────────
  ${cmenut} *Info Detail Tiktok*
  ${cmenub} *Username :* ${x.result.username}
  ${cmenub} *Name Tiktok :* ${x.result.name}
  ${cmenub} *Caption :* ${x.result.caption}
  ${cmenub} *Size WM :* ${x.result.link.size_watermark}
  ${cmenub} *Size No WM :* ${x.result.link.size_nowatermark}
  ${cmenub} *Title Audio :* ${x.result.link.title_audio}
  ${cmenuf}
  `
    let buttons = [{ buttonText: { displayText: 'WM' }, buttonId: `.get ${x.result.link.watermark}` }, { buttonText: { displayText: 'No WM' }, buttonId: `.get ${x.result.link.nowatermark}` }, { buttonText: { displayText: 'Audio' }, buttonId: `.get ${x.result.link.audio}` }]
    let msg = await conn.sendMessage(m.chat, { image: { url: thumbwahid}, caption: whmods, footer: botdate, buttons }, { quoted: m })
    conn.sendMessage(m.chat, { quoted: msg })
  }
  
  if (command == 'ttkzenzapis') {
    if (!text) throw `Contoh:\n${usedPrefix + command} https://vt.tiktok.com/ZSeJ7P56G`
    let f = await(await fetch("https://api.zahwazein.xyz/downloader/musically?apikey=LuOlangNgentot&url=" + text)).json()
    let x = f.result
    let thumbwahid = await(await fetch(x.thumb)).buffer()
    let whmods = `*「 🇹 ᴛ ɪ ᴋ ᴛ ᴏ ᴋ 」*
                    ████████▀▀▀████
                    ████████────▀██
                    ████████──█▄──█
                    ███▀▀▀██──█████
                    █▀──▄▄██──█████
                    █──█████──█████
                    █▄──▀▀▀──▄█████
                    ███▄▄▄▄▄███████
    ────────── ⇆ㅤ◁ㅤ ❚❚ㅤ ▷ㅤ↻ ──────────
    ${cmenut} *Info Detail Tiktok*
    ${cmenub} Silahkan Pilih Dibawah!!!
    ${cmenuf}
    `
    conn.sendButton(m.chat, whmods, author, x.url_hd, [["🎥 Video [WM]", usedPrefix + "get " + x.url_wm], ["🎥 Video [No WM]", usedPrefix + "get " + x.url_nowm], ["🎶 Music", usedPrefix + "get " + x.audio]], m, { contextInfo: { externalAdReply: { showAdAttribution: true,
      mediaUrl: "https://Instagram.com/_ctzhid",
      mediaType: "VIDEO",
      description: "https://www.instagram.com/p/CevoCg5hG-p/?utm_source=ig_web_copy_link", 
      title: 'WH-MODS-DEV-V1 MultiDevice',
      body: wm,
      thumbnail: thumbwahid,
      sourceUrl: sig
    }
    } })
  }
}

  handler.help = ['ttkneoxr', 'ttkxcoders', 'ttkzenzapis', 'ttkzahwazein'].map(v => v + ' <url>')
  handler.command = /^(ttkneoxr|ttkxcoders|ttkzenzapis|ttkzahwazein)$/i
      
  export default handler

  const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
