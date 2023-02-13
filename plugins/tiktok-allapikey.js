import fetch from 'node-fetch'
import fs from 'fs'
import axios from 'axios'
let handler = async(m, { conn, groupMetadata, usedPrefix, text, args, command }) => {
  let imgr = flaaa.getRandom()
if (command == 'ttkneoxr') {
if (!text) throw `Contoh:\n${usedPrefix + command} https://vt.tiktok.com/ZSeJ7P56G`
let f = await axios(`https://api.neoxr.my.id/api/tiktok?url=${text}&apikey=5VC9rvNx`)
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
${cmenub} *Caption:* ${x.caption}
${cmenuf}
`
  let buttons = [{ buttonText: { displayText: 'WM' }, buttonId: `.get ${x.data.videoWM}` }, { buttonText: { displayText: 'No WM' }, buttonId: `.get ${x.data.video}` }, { buttonText: { displayText: 'Audio' }, buttonId: `.get ${x.data.audio}` }]
  let msg = await conn.sendMessage(m.chat, { image: { url: `${imgr + 'Api Neoxr'}`}, caption: whmods, footer: botdate, buttons }, { quoted: m })
  conn.sendMessage(m.chat, { quoted: msg })
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
    let f = await axios(`https://zenzapis.xyz/downloader/musically?apikey=f9fccfcff1&url=${text}`)
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
    ${cmenub} Silahkan Pilih Dibawah!!!
    ${cmenuf}
    `
    const sections = [
      {
     title: `${htjava} Video✦-------`,
     rows: [
          {title: "Video", rowId: `.get ${x.result.video}`, description: 'Video' },
          {title: "No WM", rowId: `.get ${x.result.nowm}`, description: 'Anti WM' },
          {title: "Original", rowId: `.get ${x.result.video_original}`, description: 'Original Abis' },
           ]
       },{
           title: `${htjava} Audio ✦-------`,
           rows: [
          {title: "Audio", rowId: `.get ${x.result.audio}`, description: 'Audio' },
          {title: "Audio Original", rowId: `.get ${x.result.audio_original}`, description: 'Original Abis' },
           ]
       },
   ]
   
   const listMessage = {
     text: whmods,
     footer: botdate,
     title: wm,
     buttonText: "Download !!!",
     sections
   }
   await conn.sendMessage(m.chat, listMessage, { quoted: fakes, mentions: await conn.parseMention(whmods), contextInfo:{ forwardingScore: 99999, isForwarded: true }})
   
  }
}

  handler.help = ['ttkneoxr', 'ttkxcoders', 'ttkzenzapis'].map(v => v + ' <url>')
  handler.command = /^(ttkneoxr|ttkxcoders|ttkzenzapis)$/i
      
  export default handler
/*
if (command == 'ttkbetabotz') {
if (!text) throw `Contoh:\n${usedPrefix + command} https://vt.tiktok.com/ZSeJ7P56G`
let f = await axios(`https://betabotz-api.herokuapp.com/api/download/tiktok?url=${text}&apikey=BetaBotz`)
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
${cmenub} Jangan Lupa Subscribe Channel WH MODS DEV
${cmenuf}
`
  let buttons = [{ buttonText: { displayText: 'WM' }, buttonId: `.get ${x.result.link.watermark}` }, { buttonText: { displayText: 'No WM' }, buttonId: `.get ${x.result.link.nowatermark}` }, { buttonText: { displayText: 'Audio' }, buttonId: `.get ${x.result.link.audio}` }]
  let msg = await conn.sendMessage(m.chat, { image: { url: `${imgr + 'Api BetaBotz'}`}, caption: whmods, footer: botdate, buttons }, { quoted: m })
  conn.sendMessage(m.chat, { quoted: msg })
}

if (command == 'ttkadiixyz') {
  if (!text) throw `Contoh:\n${usedPrefix + command} https://vt.tiktok.com/ZSeJ7P56G`
  let f = await axios(`https://adiixyzapi.herokuapp.com/api/tiktok?url=${text}`)
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
  ${cmenub} Jangan Lupa Subscribe Channel WH MODS DEV
  ${cmenuf}
  `
    let buttons = [{ buttonText: { displayText: 'No WM' }, buttonId: `.get ${x.result.nowm}` }, { buttonText: { displayText: 'MP4' }, buttonId: `.get ${x.result.mp4}` }, { buttonText: { displayText: 'Original' }, buttonId: `.get ${x.result.original}` }]
    let msg = await conn.sendMessage(m.chat, { image: { url: `${imgr + 'Api Adiixyz'}`}, caption: whmods, footer: botdate, buttons }, { quoted: m })
    conn.sendMessage(m.chat, { quoted: msg })
  }

if (command == 'ttkanabot') {
if (!text) throw `Contoh:\n${usedPrefix + command} https://vt.tiktok.com/ZSeJ7P56G`
let f = await axios(`https://anabotofc.herokuapp.com/api/download/tiktok2?url=${text}&apikey=AnaBot`)
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
${cmenub} Jangan Lupa Subscribe Channel WH MODS DEV
${cmenuf}
`
      let buttons = [{ buttonText: { displayText: 'No WM' }, buttonId: `.get ${x.result.nowm}` }, { buttonText: { displayText: 'MP4' }, buttonId: `.get ${x.result.mp4}` }, { buttonText: { displayText: 'Original' }, buttonId: `.get ${x.result.original}` }]
      let msg = await conn.sendMessage(m.chat, { image: { url: `${imgr + 'Api Anabot'}`}, caption: whmods, footer: botdate, buttons }, { quoted: m })
      conn.sendMessage(m.chat, { quoted: msg })
    }

if (command == 'ttkxteam') {
if (!text) throw `Contoh:\n${usedPrefix + command} https://vt.tiktok.com/ZSeJ7P56G`
let f = await axios(`https://api.xteam.xyz/dl/tiktok?url=${text}&APIKEY=HIRO`)
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
${cmenub} *Name :* ${x.result.name}
${cmenub} *Caption :* ${x.result.caption}
${cmenuf}
`
  let buttons = [{ buttonText: { displayText: 'Download' }, buttonId: `.get ${x.result.link}` }, { buttonText: { displayText: 'Donasi' }, buttonId: '.donasi' }, { buttonText: { displayText: 'Sewa' }, buttonId: '.sewa' }]
  let msg = await conn.sendMessage(m.chat, { image: { url: `${imgr + 'Api X-Team'}`}, caption: whmods, footer: botdate, buttons }, { quoted: m })
  conn.sendMessage(m.chat, { quoted: msg })
  }
*/

// handler.help = ['ttkneoxr', 'ttkbetabotz', 'ttkxcoders', 'ttkadiixyz', 'ttkanabot', 'ttkxteam', 'ttkzenzapis'].map(v => v + ' <url>')
//handler.command = /^(ttkneoxr|ttkbetabotz|ttkxcoders|ttkadiixyz|ttkanabot|ttkxteam|ttkzenzapis)$/i
