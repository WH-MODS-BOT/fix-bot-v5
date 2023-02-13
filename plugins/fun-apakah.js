let handler = async (m, { text, args, command }) => {
  if (!args[0]) throw `Use example .${command} halo`
  m.reply(`
*Pertanyaan:* ${m.text}
*Jawaban:* ${['Ya', 'Mungkin iya', 'Mungkin', 'Mungkin tidak', 'Tidak', 'Tidak mungkin'].getRandom()}
  `.trim(), null, m.mentionedJid ? {
  mentions: m.mentionedJid
} : {})
}
handler.help = ['apakah'].map(v => v + ' <teks>')
handler.tags = ['kerang', 'fun']
handler.command = /^apakah$/i

export default handler