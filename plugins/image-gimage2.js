import fetch from 'node-fetch'


let handler = async(m, { conn, groupMetadata, usedPrefix, text, args, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
let name = await conn.getName(who)
if (!text) return m.reply(`Example : ${usedPrefix + command} query`)
try {
if (command == 'image2') {
let caption = `*Hasil pencarian* ${text}\n\n*Note:* Lolhuman`
let url = `https://api.lolhuman.xyz/api/gimage?apikey=${global.lolkey}&query=${text}`
await conn.sendButton(m.chat, caption, wm, url, [
      ['IMG 1', usedPrefix + 'image1 ' + text],
      ['IMG 2', usedPrefix + 'image2 ' + text],
      ['IMG 3', usedPrefix + 'image3 ' + text]
    ], m, {
            fileLength: fsizedoc,
            seconds: fsizedoc,
            jpegThumbnail: Buffer.alloc(0), contextInfo: {
          externalAdReply :{
    mediaUrl: sig,
    mediaType: 2,
    description: wm, 
    title: '👋 Hai, ' + name + ' ' + ucapan,
    body: botdate,
    thumbnail: await(await fetch(pp)).buffer(),
    sourceUrl: sgc
     }}
  })
    }

if (command == 'image3') {
let caption = `*Hasil pencarian* ${text}\n\n*Note:* Lolhuman`
let url = `https://api.lolhuman.xyz/api/gimage2?apikey=${global.lolkey}&query=${text}`
let js = await fetch(url)
let jp = await js.json()
let x = jp.result
await conn.sendButton(m.chat, caption, wm, x.getRandom(), [
      ['IMG 3', usedPrefix + 'image3 ' + text],
      ['IMG 2', usedPrefix + 'image2 ' + text],
      ['IMG 5', usedPrefix + 'image5 ' + text]
    ], m, {
            fileLength: fsizedoc,
            seconds: fsizedoc,
            jpegThumbnail: Buffer.alloc(0), contextInfo: {
          externalAdReply :{
    mediaUrl: sig,
    mediaType: 2,
    description: wm, 
    title: '👋 Hai, ' + name + ' ' + ucapan,
    body: botdate,
    thumbnail: await(await fetch(pp)).buffer(),
    sourceUrl: sgc
     }}
  })
    }
if (command == 'image5') {
let url = `https://api-xcoders.xyz/api/search/image?query=${text}&apikey=5S3epf7hC2`
let js = await fetch(url)
let jsons = await js.json()
let caption = `*⎔┉━「 ${jsons.result[0].title} 」━┉⎔*\n`

        await conn.sendButton(m.chat, caption, wm, jsons.result[0].url, [
      ['IMG 2', usedPrefix + 'image2 ' + text],
      ['IMG 5', usedPrefix + 'image5 ' + text],
      ['IMG 4', usedPrefix + 'image4 ' + text]
    ], m, {
            fileLength: fsizedoc,
            seconds: fsizedoc,
            jpegThumbnail: Buffer.alloc(0), contextInfo: {
          externalAdReply :{
    mediaUrl: sig,
    mediaType: 2,
    description: wm, 
    title: '👋 Hai, ' + name + ' ' + ucapan,
    body: botdate,
    thumbnail: await(await fetch(pp)).buffer(),
    sourceUrl: sgc
     }}
  })
    }

if (command == 'image4') {
let caption = `*Hasil pencarian* ${text}\n*Note:* xcoders`
let url = `https://api-xcoders.xyz/api/search/image2?query=${text}&apikey=5S3epf7hC2`
let js = await fetch(url)
let jp = await js.json()
await conn.sendButton(m.chat, caption, wm, jp.result[0].url, [
      ['IMG 3', usedPrefix + 'image3 ' + text],
      ['IMG 5', usedPrefix + 'image5 ' + text],
      ['IMG 2', usedPrefix + 'image2 ' + text]
    ], m, {
            fileLength: fsizedoc,
            seconds: fsizedoc,
            jpegThumbnail: Buffer.alloc(0), contextInfo: {
          externalAdReply :{
    mediaUrl: sig,
    mediaType: 2,
    description: wm, 
    title: '👋 Hai, ' + name + ' ' + ucapan,
    body: botdate,
    thumbnail: await(await fetch(pp)).buffer(),
    sourceUrl: sgc
     }}
  })
    }
  } catch {
    throw eror
    }
    
    }
    handler.command = handler.help = ['image2', 'image3', 'image5', 'image4']
    
    export default handler
/*
if (command == 'image4') {
let caption = `*Hasil pencarian* ${text}\n\n*Note:* bx-hunter`
let url = `https://bx-hunter.herokuapp.com/api/googleimage?query=${text}&apikey=W46QBtQGOhiqfiClaxHqyAaIR`
let js = await fetch(url)
let jp = await js.json()
let x = jp.result
await conn.sendButton(m.chat, caption, wm, x.getRandom(), [
  ['IMG 2', usedPrefix + 'image2 ' + text],
  ['IMG 5', usedPrefix + 'image5 ' + text],
  ['IMG 6', usedPrefix + 'image6 ' + text]
    ], m, {
            fileLength: fsizedoc,
            seconds: fsizedoc,
            jpegThumbnail: Buffer.alloc(0), contextInfo: {
          externalAdReply :{
    mediaUrl: sig,
    mediaType: 2,
    description: wm, 
    title: '👋 Hai, ' + name + ' ' + ucapan,
    body: botdate,
    thumbnail: await(await fetch(pp)).buffer(),
    sourceUrl: sgc
     }}
  })
    }

if (command == 'image7') {
let caption = `*Hasil pencarian* ${text}\n\n*Note:* nzcha`
let url = `https://nzcha-apii.herokuapp.com/googleimage?q=${text}`
let js = await fetch(url)
let jp = await js.json()
let x = jp.result
await conn.sendButton(m.chat, caption, wm, x.getRandom(), [
      ['IMG 7', usedPrefix + 'image7 ' + text],
      ['IMG ', usedPrefix + 'image2 ' + text],
      ['IMG 3', usedPrefix + 'image3 ' + text]
    ], m, {
            fileLength: fsizedoc,
            seconds: fsizedoc,
            jpegThumbnail: Buffer.alloc(0), contextInfo: {
          externalAdReply :{
    mediaUrl: sig,
    mediaType: 2,
    description: wm, 
    title: '👋 Hai, ' + name + ' ' + ucapan,
    body: botdate,
    thumbnail: await(await fetch(pp)).buffer(),
    sourceUrl: sgc
     }}
  })
    }
*/
