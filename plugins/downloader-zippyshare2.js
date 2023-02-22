
import fetch from 'node-fetch'
import { szippydl } from '../lib/scrape.js'

let handler = async (m, { conn, args, usedPrefix, command }) => {
    if (!args[0]) throw `Use example ${usedPrefix}${command} https://www.tiktok.com/@omagadsus/video/7025456384175017243`
   let res = await szippydl(args[0])
   let done = `*title:* ${res.title}
*extension:* ${res.extension}
*filesize:* ${res.filesize}
*upload:* ${res.upload}
*link:* ${res.link}`
 if (res.link) return conn.send2ButtonDoc(m.chat, done, author, '🔖 Get', usedPrefix + 'get ' + res.link, 'ℹ️ Menu', '.menu', fakes, adReply)
 else throw eror
}
handler.help = ['zippyshare2'].map(v => v + ' <url>')
handler.tags = ['downloader', 'limitmenu']
handler.alias = ['zs2', 'zippy2', 'zippydl2', 'zippyshare2']
handler.command = /^z(s2|ippy(dl2|share2)?)$/i 
handler.limit = true
export default handler
