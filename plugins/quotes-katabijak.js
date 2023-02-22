import fetch from 'node-fetch'
import util from 'util'
import fs from 'fs'
let handler = async (m, { text }) => {
                let body = fs.readFileSync('./lib/katabijak.txt', 'utf-8')
                let splitnix = body.split('\n')
                let randomnix = splitnix[Math.floor(Math.random() * splitnix.length)]
                m.reply(randomnix)
}
// handler.help = ['katabijak'].map(v => v + ' <opsi>')
handler.help = ['katabijak']
handler.tags = ['quotes']
handler.command = /^(katabijak|jagokata)$/i

export default handler

/*
import { quotes } from '../lib/jagokata.js'
let handler = async (m, { command, args, usedPrefix }) => {
    let er = `contoh:\n\n${usedPrefix + command} cinta
Opsi Tersedia:
• cinta
• rindu
• mimpi
• sendiri
• sabar
• kesedihan
• pernikahan
• kemerdekaan`
    if (!args[0]) throw er
    switch (args[0].toLowerCase()) {
        case 'cinta':
        case 'rindu':
        case 'mimpi':
        case 'sendiri':
        case 'sabar':
        case 'kesedihan':
        case 'pernikahan':
        case 'kemerdekaan':
            quotes(args[0].toLowerCase()).then(res => {
                let data = JSON.stringify(res)
                let json = JSON.parse(data)
                let random = Math.floor(Math.random() * json.data.length)
                let hasil = json.data[random]
                let { author, bio, quote } = hasil
                m.reply(`“${quote}”\n\n${author} - ${bio}`)
            })
            break
        default:
            throw er
    }
} */