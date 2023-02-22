import fetch from 'node-fetch'
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  if (!args) throw 'Masukkan Parameter'
  m.reply('Sedang Diproses...')
  let res = `https://api.xteam.xyz/randomimage/wpmobile?apikey=ebb6251cc00f9c63`
  conn.sendFile(m.chat, res, 'wpmobile.jpg', `wangy wangy wangy`, m, false)
}
handler.help = ['wpmobile'].map(v => v + ' ')
handler.tags = ['image']
handler.command = /^(wpmobile)$/i

export default handler
