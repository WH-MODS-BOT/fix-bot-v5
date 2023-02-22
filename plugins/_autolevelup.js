import { canLevelUp, xpRange } from '../lib/levelling.js'
import { levelup } from '../lib/canvas.js'

export async function before(m) {
    let user = global.db.data.users[m.sender]
    if (!user.autolevelup)
        return !0
    if (!canLevelUp(user.level, user.exp, global.multiplier)) {
        let { min, xp, max } = xpRange(user.level, global.multiplier)
        throw `
Level ${user.level} 📊
*${user.exp - min} / ${xp}*
Kurang *${max - user.exp}* lagi! ✨
`.trim()
    }
    let before = user.level * 1
    while (canLevelUp(user.level, user.exp, global.multiplier)) user.level++
    if (before !== user.level) {
        let teks = `Selamat ${this.getName(m.sender)} naik 🧬level\n.             ${user.role}`
        let str = `${this.getName(m.sender)} naik 🧬level\n.             ${user.role}

*🎉 C O N G R A T S 🎉*
*${before}* ➔ *${user.level}* [ *${user.role}* ]

• 🧬Level Sebelumnya : ${before}
• 🧬Level Baru : ${user.level}
• Pada Jam : ${new Date().toLocaleString('id-ID')}

*Note:* _Semakin sering berinteraksi dengan bot Semakin Tinggi level kamu_
`.trim()
            let knights = await(await import('knights-canvas'))
            let image = await new knights.Up()
    .setAvatar(hwaifu.getRandom())
    .toAttachment();
  let data = image.toBuffer();
            try {
            let img = await levelup(teks, user.level)
            this.sendButton(m.chat, str, botdate, img, [['INVENTORY', '.inv']], m)
            } catch (e) {
            this.sendButton(m.chat, str, botdate, data, [['INVENTORY', '.inv']], m)
            }

    }
}
/*
import db from '../lib/database.js'
import { canLevelUp } from '../lib/levelling.js'

export function before(m) {
    let user = db.data.users[m.sender]
    if (!user.autolevelup)
        return !0
    let before = user.level * 1
    while (canLevelUp(user.level, user.exp, global.multiplier))
        user.level++

    if (before !== user.level) {
        user.role = global.rpg.role(user.level).name
        m.reply(`
🎉ᴄᴏɴɢʀᴀᴛᴜʟᴀᴛɪᴏɴs, ${this.getName(m.sender)} ʟᴇᴠᴇʟ ᴜᴩ﹗
• 📉 ᴩʀᴇᴠɪᴏᴜs ʟᴇᴠᴇʟ : ${before}
• 📈 ɴᴇᴡ ʟᴇᴠᴇʟ : ${user.level}
• 🎎 ʀᴏʟᴇ : ${user.role}
gunakan *.profile* untuk mengecek
	`.trim())
    }
}
export const disabled = true
*/
/*
import { canLevelUp, xpRange } from '../lib/levelling.js'
import { levelup } from '../lib/canvas.js'

export async function before(m, { conn }) {
    let user = global.db.data.users[m.sender]
    if (!user.autolevelup)
        return !0
    if (!canLevelUp(user.level, user.exp, global.multiplier)) {
        let { min, xp, max } = xpRange(user.level, global.multiplier)
        throw `
Level ${user.level} 📊
*${user.exp - min} / ${xp}*
Kurang *${max - user.exp}* lagi! ✨
`.trim()
    }
    let before = user.level * 1
    while (canLevelUp(user.level, user.exp, global.multiplier)) user.level++
    if (before !== user.level) {
        let teks = `Selamat ${conn.getName(m.sender)} naik 🧬level\n.             ${user.role}`
        let str = `${conn.getName(m.sender)} naik 🧬level\n.             ${user.role}

*🎉 C O N G R A T S 🎉*
*${before}* ➔ *${user.level}* [ *${user.role}* ]

• 🧬Level Sebelumnya : ${before}
• 🧬Level Baru : ${user.level}
• Pada Jam : ${new Date().toLocaleString('id-ID')}

*Note:* _Semakin sering berinteraksi dengan bot Semakin Tinggi level kamu_
`.trim()
            let knights = await(await import('knights-canvas'))
            let image = await new knights.Up()
    .setAvatar(hwaifu.getRandom())
    .toAttachment();
  let data = image.toBuffer();
            try {
            let img = await levelup(teks, user.level)
            conn.sendButton(m.chat, str, botdate, img, [['INVENTORY', '.inv']], m)
            } catch (e) {
            conn.sendButton(m.chat, str, botdate, data, [['INVENTORY', '.inv']], m)
            }

    }
}
export const disabled = true
*/