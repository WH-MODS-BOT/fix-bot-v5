let limit = 80
import fetch from 'node-fetch'
import axios from 'axios'
import { youtubeSearch, youtubedl, youtubedlv2, youtubedlv3 } from '@bochilteam/scraper';
let handler = async (m, { conn, groupMetadata, usedPrefix, text, args, command, isPrems, isOwner }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
let name = await conn.getName(who)
if (!args || !args[0]) throw 'Uhm... urlnya mana?'
try {
  let chat = global.db.data.chats[m.chat]
  const isY = /y(es)/gi.test(args[1])
  const { thumbnail, video: _video, title} = await youtubedlv2(args[0]).catch(async _ => await youtubedl(args[0])).catch(async _ => await youtubedlv3(args[0]))
  const limitedSize = (isPrems || isOwner ? 99 : limit) * 1024
  let video, source, res, link, lastError, isLimit
  for (let i in _video) {
    try {
      video = _video[i]
      isLimit = limitedSize < video.fileSize
      if (isLimit) continue
      link = await video.download()
      if (link) res = await fetch(link)
      isLimit = res?.headers.get('content-length') && parseInt(res.headers.get('content-length')) < limitedSize
      if (isLimit) continue
      if (res) source = await res.arrayBuffer()
      if (source instanceof ArrayBuffer) break
    } catch (e) {
      video = source = link = null
      lastError = e
    }
  }
  if ((!(source instanceof ArrayBuffer) || !link || !res.ok) && !isLimit) throw 'Error: ' + (lastError || 'Can\'t download video')
  if (!isY && !isLimit) await conn.sendFile(m.chat, thumbnail, 'thumbnail.jpg', `
*${htki} YOUTUBE ${htka}*

*${htjava} Title:* ${title}
*${htjava} Filesize:* ${video.fileSizeH}
`.trim(), m)
  let _thumb = {}
  try { _thumb = { thumbnail: await (await fetch(thumbnail)).buffer() } }
  catch (e) { }
  if (!isLimit) await conn.sendButton(m.chat, `*${htki} YOUTUBE ${htka}*

*${htjava} Title:* ${title}
*${htjava} Filesize:* ${video.fileSizeH}`, title + '.mp4', await(await fetch(link)).buffer(), [['🎀 Menu', '/menu']], m, {
            fileLength: fsizedoc,
            seconds: fsizedoc,
            jpegThumbnail: Buffer.alloc(0), contextInfo: {
            mimetype: 'video/mp4',
          externalAdReply :{
    body: 'Size: ' + video.fileSizeH,
    containsAutoReply: true,
    mediaType: 2, 
    mediaUrl: args[0],
    showAdAttribution: true,
    sourceUrl: args[0],
    thumbnailUrl: thumbnail,
    renderLargerThumbnail: true,
    title: 'Nihh Kak, ' + name,
     }}
  })
  } catch {
 // try {
let res = await axios('https://violetics.pw/api/downloader/youtube?apikey=beta&url=' + text)
let json = res.data
let dapet = json.result.url
	let row = Object.values(dapet).map((v, index) => ({
		title: htjava + '📌 Quality: ' + v.subname,
		description: '\n⌚ Host: ' + json.result.hosting + '\n⏲️ Title: ' + json.result.meta.title + '\n📎 URL: ' + v.url + '\n📌 Source: ' + json.result.meta.source + '\n📌 Duration: ' + json.result.meta.duration,
		rowId: usedPrefix + 'get ' + v.url
	}))
	let button = {
		buttonText: `☂️ ${command} Search Disini ☂️`,
		description: `⚡ Hai ${name}, Silakan pilih ${command} Search di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`,
		footerText: wm
	}
	return conn.sendListM(m.chat, button, row, m)
}
}
handler.help = ['mp4', 'v', ''].map(v => 'yt' + v + ` <url> <without message>`)
handler.tags = ['downloader', 'limitmenu']
handler.command = /^y(outube(mp4|vdl)|t((mp4|v)|vdl))$/i

handler.exp = 0
handler.register = false
handler.limit = true

export default handler
  /*} catch {
  let res = await fetch(`https://rest-beni.herokuapp.com/api/youtube?url=${args[0]}`)
let v = await res.json()
let caption = `*${htki} YOUTUBE ${htka}*

*ID:* ${v.result.id}
*title:* ${v.result.title}
*size:* ${v.result.size}
*quality:* ${v.result.quality}
`
await conn.sendButton(m.chat, caption, wm, v.result.thumb, [
                ['Mp4', `${usedPrefix}get ${v.result.link}`],
                ['Mp3', `${usedPrefix}get ${v.result.mp3}`]
            ], m)
  }*/


/*
let limit = 80
import fetch from 'node-fetch'
import { youtubeSearch, youtubedl, youtubedlv2, youtubedlv3 } from '@bochilteam/scraper';
let handler = async (m, { conn, args, isPrems, isOwner }) => {
  if (!args || !args[0]) throw 'Uhm... urlnya mana?'
  let chat = global.db.data.chats[m.chat]
  const isY = /y(es)/gi.test(args[1])
  const { thumbnail, video: _video, title} = await youtubedlv2(args[0]).catch(async _ => await youtubedl(args[0])).catch(async _ => await youtubedlv3(args[0]))
  const limitedSize = (isPrems || isOwner ? 99 : limit) * 1024
  let video, source, res, link, lastError, isLimit
  for (let i in _video) {
    try {
      video = _video[i]
      isLimit = limitedSize < video.fileSize
      if (isLimit) continue
      link = await video.download()
      if (link) res = await fetch(link)
      isLimit = res?.headers.get('content-length') && parseInt(res.headers.get('content-length')) < limitedSize
      if (isLimit) continue
      if (res) source = await res.arrayBuffer()
      if (source instanceof ArrayBuffer) break
    } catch (e) {
      video = source = link = null
      lastError = e
    }
  }
  if ((!(source instanceof ArrayBuffer) || !link || !res.ok) && !isLimit) throw 'Error: ' + (lastError || 'Can\'t download video')
  if (!isY && !isLimit) await conn.sendFile(m.chat, thumbnail, 'thumbnail.jpg', `
*${htki} YOUTUBE ${htka}*

*${htjava} Title:* ${title}
*${htjava} Quality:* 360p
*${htjava} Filesize:* ${video.fileSizeH}
`.trim(), m)
  let _thumb = {}
  try { _thumb = { thumbnail: await (await fetch(thumbnail)).buffer() } }
  catch (e) { }
  if (!isLimit) await conn.sendFile(m.chat, link, title + '.mp4', `
*${htki} YOUTUBE ${htka}*

*${htjava} Title:* ${title}
*${htjava} Quality:* 360p
*${htjava} Filesize:* ${video.fileSizeH}
`.trim(), m, false, {
    ..._thumb,
    asDocument: chat.useDocument
  })
}
handler.help = ['mp4', 'v', ''].map(v => 'yt' + v + ` <url> <without message>`)
handler.tags = ['downloader', 'limitmenu']
handler.command = /^yt(v|mp4)?$/i

handler.exp = 0
handler.register = false
handler.limit = true


export default handler
*/