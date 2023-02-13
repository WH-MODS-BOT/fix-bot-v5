
import fetch from 'node-fetch'
import fs from 'fs'

let toM = a => '@' + a.split('@')[0]
let handler = async(m, { conn, groupMetadata, usedPrefix, text, args, command }) => {
let frep = { contextInfo: { externalAdReply: {title: global.wm, body: global.author, sourceUrl: snh, thumbnail: fs.readFileSync('./thumbnail.jpg')}}}
let imgr = flaaa.getRandom()

if (command == 'kapankah') {
return m.reply(`
*Pertanyaan:* ${m.text}
*Jawaban:* ${(10).getRandom()} ${['detik', 'menit', 'jam', 'hari', 'minggu', 'bulan', 'tahun', 'dekade', 'abad'].getRandom()} lagi ...
  `.trim(), null, m.mentionedJid ? {
  mentions: m.mentionedJid
} : {})
}

if (command == 'akankah') {
return m.reply(`
*Pertanyaan:* ${m.text}
*Jawaban:* ${['Ya', 'Mungkin iya', 'Mungkin', 'Mungkin tidak', 'Tidak', 'Tidak mungkin'].getRandom()}
  `.trim(), null, m.mentionedJid ? {
  mentions: m.mentionedJid
} : {})
}

if (command == 'siapakah') {
let ps = groupMetadata.participants.map(v => v.id)
    let a = ps.getRandom()
    m.reply(`${toM(a)} Dia bang.🗿`, null, {
        mentions: [a]
    })
}

if (command == 'mengapa') {
return m.reply(`
*Pertanyaan:* ${m.text}
*Jawaban:* ${['Karena anda ganteng', 'Karna lo wibu :[', 'karna lo didikan wahyu', 'Karna gw gk tau', 'Lo punya jin', 'Tidak mungkin'].getRandom()}
  `.trim(), null, m.mentionedJid ? {
  mentions: m.mentionedJid
} : {})
}

if (command == 'bisakah') {
return m.reply(`
*Pertanyaan:* ${m.text}
*Jawaban:* ${['Ya', 'Mungkin iya', 'Mungkin', 'Mungkin tidak', 'Tidak', 'Tidak mungkin'].getRandom()}
  `.trim(), null, m.mentionedJid ? {
  mentions: m.mentionedJid
} : {})
}

if (command == 'misteribox') {
let klb = `${pickRandom(['kecil', 'lumayan', 'besar'])}`
let klb1 = `${pickRandom(['kecil', 'lumayan', 'besar'])}`
let klb2 = `${pickRandom(['kecil', 'lumayan', 'besar'])}`

if (args[0] == 'kecil') {
let angka1 = Math.floor(Math.random() * 10)
    let angka2 = Math.floor(Math.random() * 100)
    let angka3 = Math.floor(Math.random() * 1000)
    
    global.db.data.users[m.sender].limit += angka1
    global.db.data.users[m.sender].exp += angka2
    global.db.data.users[m.sender].money += angka3
await conn.sendButton(m.chat, `*Result : ${args[0]}*
+ *${angka1}* EXP Banh
+ *${angka2}* Limit Banh
+ *${angka3}* Money Banh`, wm, null, [
                ['Ngechit', `${usedPrefix}ngechit`]
            ], fakes, adReply)
}
if (args[0] == 'lumayan') {
let angka1 = Math.floor(Math.random() * 1000)
    let angka2 = Math.floor(Math.random() * 10000)
    let angka3 = Math.floor(Math.random() * 100000)
    
    global.db.data.users[m.sender].limit += angka1
    global.db.data.users[m.sender].exp += angka2
    global.db.data.users[m.sender].money += angka3
await conn.sendButton(m.chat, `*Result : ${args[0]}*
+ *${angka1}* EXP Banh
+ *${angka2}* Limit Banh
+ *${angka3}* Money Banh`, wm, null, [
                ['Ngechit', `${usedPrefix}ngechit`]
            ], fakes, adReply)
}
if (args[0] == 'besar') {
let angka1 = Math.floor(Math.random() * 10000)
    let angka2 = Math.floor(Math.random() * 100000)
    let angka3 = Math.floor(Math.random() * 1000000)
    
    global.db.data.users[m.sender].limit += angka1
    global.db.data.users[m.sender].exp += angka2
    global.db.data.users[m.sender].money += angka3
await conn.sendButton(m.chat, `*Result : ${args[0]}*
+ *${angka1}* EXP Banh
+ *${angka2}* Limit Banh
+ *${angka3}* Money Banh`, wm, null, [
                ['Ngechit', `${usedPrefix}ngechit`]
            ], fakes, adReply)
}
await conn.sendButton(m.chat, `*Silahkan pilih di bawah:*
  ${command}`, wm, null, [
                ['🎁 Box A', `${usedPrefix + command} ${klb}`],
                ['🎁 Box B', `${usedPrefix + command} ${klb1}`],
                ['🎁 Box C', `${usedPrefix + command} ${klb2}`]
            ], fakes, adReply)
}

}
handler.command = handler.help = ['kapankah', 'akankah', 'siapakah', 'mengapa', 'bisakah', 'misteribox']
handler.tags = ['kerang']

export default handler

function pickRandom(list) {
     return list[Math.floor(Math.random() * list.length)]
  }