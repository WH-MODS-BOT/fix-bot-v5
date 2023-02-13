
let handler = async (m, { conn, groupMetadata, usedPrefix }) => {
    let id = m.chat
    conn.vote = conn.vote ? conn.vote : {}
    if (!(id in conn.vote)) await conn.sendButton(m.chat, `Tidak ada voting digrup ini!`, author, null, [
    ['vote', `${usedPrefix}+vote`],
    ['menu', `${usedPrefix}menu`]
], m)

    let [reason, upvote, devote] = conn.vote[id]
    let caption = `*${htjava} DAFTAR VOTE ${htjava}*
*Alasan:* ${reason}

*${htjava} UPVOTE ${htjava}*
*Total:* ${upvote.length}
${dmenut}
${upvote.map((v, i) => `${dmenub} ${i + 1}.  @${v.split`@`[0]}`).join('\n')}
${dmenuf}

*${htjava} DEVOTE ${htjava}*
*Total:* ${devote.length}
${dmenut}
${devote.map((v, i) => `${dmenub} ${i + 1}.  @${v.split`@`[0]}`).join('\n')}
${dmenuf}
`.trim()
await conn.sendButton(m.chat, caption, author, null, [
        ['upvote', `${usedPrefix}upvote`],
        ['devote', `${usedPrefix}devote`],
        ['hapusvote', `${usedPrefix}-vote`]
    ], m, { mentions: conn.parseMention(caption) })
}
handler.help = ['cekvote']
handler.tags = ['vote']
handler.command = /^cekvote$/i

export default handler
