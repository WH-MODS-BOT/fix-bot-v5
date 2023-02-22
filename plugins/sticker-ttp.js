import Canvas from "canvas"
import {
    sticker
} from "../lib/sticker.js"
import uploadImage from "../lib/uploadImage.js"
import fs from "fs"
let handler = async (m, {
    conn,
    args,
    usedPrefix,
    command
}) => {
    let text
    if (args.length >= 1) {
        text = args.slice(0).join(" ")
    } else if (m.quoted && m.quoted.text) {
        text = m.quoted.text
    } else throw "Input Teks"
    let urut = text.split`|`
    let one = urut[0]
    let two = urut[1]
    let three = urut[2]

    var files = fs.readdirSync("./src/font/")

    if (command == "ttps") {
        let listSections = []
        Object.keys(files).map((v, index) => {
            listSections.push(["Model [ " + ++index + " ]", [
                [files[v], usedPrefix + command + "get " + files[v] + "|" + text, "➥"]
            ]])
        })
        return conn.sendList(m.chat, htki + " 📺 Models 🔎 " + htka, `⚡ Silakan pilih Model di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`, author, "☂️ M O D E L ☂️", listSections, m)
    }

    if (command == "ttpsget") {
        Canvas.registerFont("./src/font/" + one, {
            family: one.toString()
        })
        let length = two.length

        var font = 90
        if (length > 12) {
            font = 68
        }
        if (length > 15) {
            font = 58
        }
        if (length > 18) {
            font = 55
        }
        if (length > 19) {
            font = 50
        }
        if (length > 22) {
            font = 48
        }
        if (length > 24) {
            font = 38
        }
        if (length > 27) {
            font = 35
        }
        if (length > 30) {
            font = 30
        }
        if (length > 35) {
            font = 26
        }
        if (length > 39) {
            font = 25
        }
        if (length > 40) {
            font = 20
        }
        if (length > 49) {
            font = 10
        }

        var ttp = {}
        ttp.create = Canvas.createCanvas(576, 576)
        ttp.context = ttp.create.getContext("2d")
        ttp.context.font = font + "px " + one
        ttp.context.strokeStyle = "black"
        ttp.context.lineWidth = 3
        ttp.context.textAlign = "center"
        ttp.context.strokeText(two, 290, 300)
        ttp.context.fillStyle = "white"
        ttp.context.fillText(two, 290, 300)
        let buff = ttp.create.toBuffer()
        let img = await uploadImage(buff)
        let stiker = await sticker(false, img, global.packname, global.author)
        if (stiker) await conn.sendFile(m.chat, stiker, "sticker.webp", "", m, null, adReplyS)
    }
}
handler.help = ["ttps"]
handler.command = ["ttps", "ttpsget"]
handler.tags = ['sticker']

export default handler
/*
import { sticker } from '../lib/sticker.js'

let handler = async (m, { conn, text }) => {
    let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
    let stiker = await sticker(null, global.API('xteam', '/ttp', { file: '', text: teks }), global.packname, global.author)
    if (stiker) return conn.sendFile(m.chat, stiker, 'sticker.webp', '', m)
    throw stiker.toString()
}
handler.help = ['ttp <teks>']
handler.tags = ['sticker']

handler.command = /^ttp$/i

export default handler
*/