import fetch from 'node-fetch'
let handler = async(m, { conn, usedPrefix, text, args, command }) => {

if (command == 'jooxs') {
  if (!text) throw `Contoh:
  ${usedPrefix + command} melukis senja`
  let f = await fetch(`https://violetics.pw/api/search/joox?apikey=beta&query=${text}`)
  let x = await f.json()
  let teks = `*Result:*
  *Name:* ${x.result.song.song_info.name}
  *Nama Album:* ${x.result.song.song_info.album_name}
  *Artis:* ${x.result.song.song_info.artist_list.name}
  `
    await conn.sendButton(m.chat, teks, wm, x.result.song.images, [
                  ['Joox Play', `${usedPrefix}jooxp ${text}`]
                //  ['Mp3!', `${usedPrefix}get ${x.result.audio[0].link}`]
              ], m)
              }

if (command == 'jooxp') {
if (!text) throw `Contoh:
${usedPrefix + command} melukis senja`
let f = await fetch(`https://api.lolhuman.xyz/api/jooxplay?apikey=${lolkey}&query=${text}`)
let x = await f.json()
let teks = `*Result:*
*singer:* ${x.result.info.singer}
*song:* ${x.result.info.song}
*album:* ${x.result.info.album}
*date:* ${x.result.info.date}
*duration:* ${x.result.info.duration}
*duration:* ${x.result.lirik}
`
  await conn.sendButton(m.chat, teks, wm, x.result.image, [
                ['Search!', `${usedPrefix}jooxs ${text}`],
                ['Mp3!', `${usedPrefix}get ${x.result.audio[0].link}`]
            ], m)
            }
            
}

handler.command = handler.help = ['jooxs', 'jooxp']
handler.tags = ['jooxmenu']

export default handler
