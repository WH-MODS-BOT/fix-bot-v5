import { youtubeSearch } from '@bochilteam/scraper'

let handler = async(m, { conn, usedPrefix, text, args, command }) => {
let name = await conn.getName(m.sender)

  if (!text) throw 'Cari apa?'
  let cari = await youtubeSearch(`${text}`)
    let dapet = cari.video
    let listSections = []
	Object.values(dapet).map((v, index) => {
	listSections.push([index + ' ' + cmenub + ' ' + v.title, [
          ['Video 🎥', usedPrefix + 'ytv ' + v.url + ' yes', '\n⌚ *Duration:* ' + v.durationH + '\n⏲️ *Uploaded:* ' + v.publishedTime + '\n👁️ *Views:* ' + v.view + '\n📎 *Url:* ' + v.url],
          ['Audio 🎧', usedPrefix + 'yta ' + v.url + ' yes', '\n⌚ *Duration:* ' + v.durationH + '\n⏲️ *Uploaded:* ' + v.publishedTime + '\n👁️ *Views:* ' + v.view + '\n📎 *Url:* ' + v.url]
        ]])
	})
	return conn.sendList(m.chat, htki + ' 📺 YT Search 🔎 ' + htka, `⚡ Silakan pilih YouTube Search di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`, author, `☂️ YouTube Search Disini ☂️`, listSections, m)
}
handler.help = ['', 'earch'].map(v => 'yts' + v + ' <pencarian>')
handler.tags = ['tools']
handler.command = /^y(outubesearch|ts(earch)?)$/i

export default handler
/*
import { youtubeSearch } from '@bochilteam/scraper'
let handler = async (m, { text }) => {
  if (!text) throw 'Cari apa?'
  const { video, channel } = await youtubeSearch(text)
  let teks = [...video, ...channel].map(v => {
    switch (v.type) {
      case 'video': return `
💌 *${v.title}* 
🔗 _${v.url}_
⏰ Duration: ${v.durationH}
📤 Uploaded ${v.publishedTime}
👁️ ${v.view} views
      `.trim()
      case 'channel': return `
╭──────━• *CHANNEL*
│🎀 *${v.channelName}* 
│🔗 _${v.url}_
│📛 _${v.subscriberH} Subscriber_
│🎥 ${v.videoCount} video
┗──────━•
`.trim()
    }
  }).filter(v => v).join('\n\n─────────────━─────────────\n\n')
  m.reply(`*${htki} SEARCH ${htka}*\n\n` + teks)
}
handler.help = ['', 'earch'].map(v => 'yts' + v + ' <pencarian>')
handler.tags = ['tools']
handler.command = /^yts(earch)?$/i

export default handler
*/