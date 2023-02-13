import fetch from 'node-fetch'

let handler = async (m, { conn, text }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
let name = await conn.getName(who)
    let hash = text
    if (m.quoted && m.quoted.fileSha256) hash = m.quoted.fileSha256.toString('hex')
    if (!hash) throw 'Hash not found'
    let sticker = global.db.data.sticker[hash]
    let str = `
*fileSha256:* ${hash}
*Text:* ${sticker.text}
*Time Create:* ${sticker.at}
*Locked:* ${sticker.locked ? 'Yes' : 'No'}
*Creator Name:* ${conn.getName(sticker.creator)}
*Creator Number:* ${splitM(sticker.creator)}
*Creator Jid:* ${sticker.creator}
${sticker.mentionedJid.length > 0 ? `*Cmd Mention:*
${sticker.mentionedJid.map((v, i) => `No. *${i + 1}*:\n*Mention Name:* ${conn.getName(v)}\n*Mention Number:* ${splitM(v)}\n*Mention Jid:* ${v}`).join('\n\n')}` : ''} 
`.trim()
    if (sticker) return conn.reply(m.chat, str, m, { contextInfo: {
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
    else m.reply('Sticker Not in the database')
}
handler.help = ['infocmd']
handler.tags = ['database']
handler.command = ['infocmd']

export default handler

/**
* split Jid
* @param {String} jid 
* @returns String
*/
function splitM(jid) {
    return jid.split('@')[0]
}

