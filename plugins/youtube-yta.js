let limit = 80
import fetch from 'node-fetch'
import { youtubedl, youtubedlv2, youtubedlv3 } from '@bochilteam/scraper';
import { youtube } from "social_media_downloader"

let handler = async (m, { conn, args, isPrems, isOwner }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
let name = await conn.getName(who)

  if (!args || !args[0]) throw 'Uhm... urlnya mana?'
  let chat = global.db.data.chats[m.chat]
  const isY = /y(es)/gi.test(args[1])
  const { thumbnail, audio: _audio, title } = await youtubedlv2(args[0]).catch(async _ => await youtubedl(args[0])).catch(async _ => await youtubedlv3(args[0]))
  const limitedSize = (isPrems || isOwner ? 99 : limit) * 1024
  let audio, source, res, link, lastError, isLimit
  for (let i in _audio) {
    try {
      audio = _audio[i]
      isLimit = limitedSize < audio.fileSize
      if (isLimit) continue
      link = await audio.download()
      if (link) res = await fetch(link)
      isLimit = res?.headers.get('content-length') && parseInt(res.headers.get('content-length')) < limitedSize
      if (isLimit) continue
      if (res) source = await res.arrayBuffer()
      if (source instanceof ArrayBuffer) break
    } catch (e) {
      audio = link = source = null
      lastError = e
    }
  }
  if ((!(source instanceof ArrayBuffer) || !link || !res.ok) && !isLimit) throw 'Error: ' + (lastError || 'Can\'t download audio')
  if (!isY && !isLimit) await conn.sendFile(m.chat, thumbnail, 'thumbnail.jpg', `
*${htki} YOUTUBE ${htka}*

*${htjava} Title:* ${title}
*${htjava} Type:* mp3
*${htjava} Filesize:* ${audio.fileSizeH}

*L O A D I N G. . .*
`.trim(), m)
try {
  if (!isLimit) await conn.sendFile(m.chat, source, title + '.mp3', '', fakes, null, { fileLength: fsizedoc, seconds: fsizedoc, mimetype: 'audio/mp4', contextInfo: {
          externalAdReply :{
    body: 'Size: ' + audio.fileSizeH,
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
  if (args[1] == 'deno') {
let p = await youtube(args[0])
let dapet = p.result
    let listSections = []
	Object.values(dapet).map((v, index) => {
	listSections.push([index + ' ' + cmenub + ' ' + v.format, [
          [v.ext, usedPrefix + 'get ' + v.url, '\n⏲️ *filesize:* ' + v.filesize]
        ]])
	})
	return conn.sendList(m.chat, htki + ' 📺 Youtube Search 🔎 ' + htka, `⚡ Silakan pilih YouTube Search di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`, author, `☂️ YouTube Search Disini ☂️`, listSections, m)
}
} catch (e) {
    throw eror
    }
}
handler.help = ['mp3', 'a'].map(v => 'yt' + v + ` <url> <without message>`)
handler.tags = ['downloader', 'limitmenu']
handler.command = /^yt(a|mp3)$/i

handler.exp = 0
handler.register = true
handler.limit = true

export default handler
/*
let limit = 80
import fetch from 'node-fetch'
import { youtubedl, youtubedlv2, youtubedlv3 } from '@bochilteam/scraper';
let handler = async (m, { conn, args, isPrems, isOwner }) => {
  if (!args || !args[0]) throw 'Uhm... urlnya mana?'
  let chat = global.db.data.chats[m.chat]
  const isY = /y(es)/gi.test(args[1])
  const { thumbnail, audio: _audio, title } = await youtubedlv2(args[0]).catch(async _ => await youtubedl(args[0])).catch(async _ => await youtubedlv3(args[0]))
  const limitedSize = (isPrems || isOwner ? 99 : limit) * 1024
  let audio, source, res, link, lastError, isLimit
  for (let i in _audio) {
    try {
      audio = _audio[i]
      isLimit = limitedSize < audio.fileSize
      if (isLimit) continue
      link = await audio.download()
      if (link) res = await fetch(link)
      isLimit = res?.headers.get('content-length') && parseInt(res.headers.get('content-length')) < limitedSize
      if (isLimit) continue
      if (res) source = await res.arrayBuffer()
      if (source instanceof ArrayBuffer) break
    } catch (e) {
      audio = link = source = null
      lastError = e
    }
  }
  if ((!(source instanceof ArrayBuffer) || !link || !res.ok) && !isLimit) throw 'Error: ' + (lastError || 'Can\'t download audio')
  if (!isY && !isLimit) await conn.sendFile(m.chat, thumbnail, 'thumbnail.jpg', `
*${htki} YOUTUBE ${htka}*

*${htjava} Title:* ${title}
*${htjava} Type:* mp3
*${htjava} Filesize:* ${audio.fileSizeH}

*L O A D I N G. . .*
`.trim(), m) // title + '.mp3',
  if (!isLimit) await conn.sendFile(m.chat, source, title + '.mpeg', `
*${htki} YOUTUBE ${htka}*

*${htjava} Title:* ${title}
*${htjava} Type:* mp3
*${htjava} Filesize:* ${audio.fileSizeH}

*L O A D I N G. . .*
`.trim(), m, null, {
    asDocument: chat.useDocument
  })
}
handler.help = ['mp3', 'a'].map(v => 'yt' + v + ` <url> <without message>`)
handler.tags = ['downloader', 'limitmenu']
handler.command = /^yt(a|mp3)$/i

handler.exp = 0
handler.register = true
handler.limit = true

export default handler
*/
