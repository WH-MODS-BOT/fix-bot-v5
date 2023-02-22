import fetch from 'node-fetch'
let handler = async (m, { conn, command }) => {
let jsn = await fetch(`https://api.akuari.my.id/randomimage/ppcouple`)
let json = await jsn.json()
conn.sendButton(m.chat, '𝙶𝚒𝚛𝚕𝚜', wm, json.hasil.cewek,[['🔄 Next 🔄', `/${command}`]], m)
conn.sendButton(m.chat, '𝙱𝚘𝚢𝚜', wm, json.hasil.cowok, [['🔄 Next 🔄', `/${command}`]], m)
}
handler.help = ['ppcouple']
handler.tags = ['internet']
handler.command = /^(ppcp|ppcouple)$/i
export default handler
