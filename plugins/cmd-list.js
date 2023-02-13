import fetch from 'node-fetch'

let handler = async (m, { conn }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
let name = await conn.getName(who)
    let str = `
${htjava} *DAFTAR HASH* ${htjava}
${Object.entries(global.db.data.sticker).map(([key, value], index) => `*${index + 1}.* ${value.locked ? `(Terkunci) ${key}` : key} : ${value.text}`).join('\n')}
`.trim()
    conn.reply(m.chat, str, m, { mentions: Object.values(global.db.data.sticker).map(x => x.mentionedJid).reduce((a, b) => [...a, ...b], []), contextInfo: {
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


handler.help = ['listcmd']
handler.tags = ['database']
handler.command = ['listcmd']

export default handler
