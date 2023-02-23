import fs from 'fs'
import fetch from 'node-fetch'
let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = fs.readFileSync('./mp3/waalaikumsalam.ogg')

let td = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
conn.sendFile(m.chat, info, '', '', m, true)
}
handler.customPrefix = /^(assalamualaikum)$/i
handler.command = new RegExp

export default handler
