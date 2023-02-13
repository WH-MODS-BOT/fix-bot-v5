import { promises, readFileSync } from 'fs'
import { join } from 'path'
import { xpRange } from '../lib/levelling.js'
import moment from 'moment-timezone'
import os from 'os'
import fs from 'fs'
import fetch from 'node-fetch'

let emot = `${pickRandom(['⎔', '✦', '⭑', 'ᯬ', '⭔', '◉', '⬟', '▢', '᭻', '»', '〆', '々', '⛥', '✗', '⛊', '⚜', '⚝', '⚚', '♪'])}`
const defaultMenu = {
  before: `
╭─────═[ INFO USER ]═─────⋆
│╭───────────────···
┴│☂︎ *Name:* %name
${emot}│☂︎ *Tag:* %tag
${emot}│☂︎ *Premium:* %prems
${emot}│☂︎ *Limit:* %limit
${emot}│☂︎ *Money:* %money
${emot}│☂︎ *Role:* %role
${emot}│☂︎ *Level:* %level [ %xp4levelup Xp For Levelup]
${emot}│☂︎ *Xp:* %exp / %maxexp
┬│☂︎ *Total Xp:* %totalexp
│╰────────────────···
┠─────═[ TODAY ]═─────⋆
│╭────────────────···
┴│    *${ucapan()} %name!*
${emot}│☂︎ *Tanggal:* %week %weton
${emot}│☂︎ *Date:* %date
${emot}│☂︎ *Tanggal Islam:* %dateIslamic
┬│☂︎ *Waktu:* %time
│╰────────────────···
┠─────═[ INFO BOT ]═─────⋆
│╭────────────────···
┴│☂︎ *Nama Bot:* %me
${emot}│☂︎ *Mode:* %mode
${emot}│☂︎ *Prefix:* [ *%_p* ]
${emot}│☂︎ *Baileys:* Multi Device
${emot}│☂︎ *Battery:* ${conn.battery != undefined ? `${conn.battery.value}% ${conn.battery.live ? '🔌 pengisian' : ''}` : 'tidak diketahui'}
${emot}│☂︎ *Platform:* %platform
${emot}│☂︎ *Type:* Node.Js
${emot}│☂︎ *Uptime:* %muptime
┬│☂︎ *Database:* %rtotalreg dari %totalreg
│╰────────────────···
╰──────────═┅═──────────

⃝▣──「 *INFO CMD* 」───⬣
│ *Ⓟ* = Premium
│ *Ⓛ* = Limit
▣────────────⬣
%readmore
`.trimStart(),
  header: '⃝▣──「 %category 」───⬣',
  body: `${emot} %cmd %isPremium %islimit`,
  footer: '▣───────────⬣\n',
  after: `%me`,
}
let handler = async (m, { conn, command, groupMetadata, usedPrefix: _p, __dirname, args, usedPrefix }) => {
 // let imgr = flaaa.getRandom()
  let res = JSON.parse(readFileSync('./json/emoji.json'))
  let em = res.emoji
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    let whmods = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
    let { exp, limit, level, role, money, lastclaim, lastweekly, registered, regTime, age, banned, pasangan } = global.db.data.users[who]
    let { min, xp, max } = xpRange(level, global.multiplier)
    let name = await conn.getName(who)
    let pp = await conn.profilePictureUrl(who).catch(_ => './src/avatar_contact.png')
    let premium = global.db.data.users[m.sender].premiumTime
    let prems = `${premium > 0 ? 'Premium': 'Free'}`
    let platform = os.platform()
    if (typeof global.db.data.users[who] == "undefined") {
      global.db.data.users[who] = {
        exp: 0,
        limit: 10,
        lastclaim: 0,
        registered: false,
        name: conn.getName(m.sender),
        age: -1,
        regTime: -1,
        afk: -1,
        afkReason: '',
        banned: false,
        level: 0,
        lastweekly: 0,
        role: 'Warrior V',
        autolevelup: false,
        money: 0,
        pasangan: "",
      }
     }
     let math = max - xp
     let ktnya = [`\n\n\n ${em.getRandom()} Hai *${name}* : \n${htjava} _Mungkin menu ini bermanfaat?_`,
 `\n\n\n ${em.getRandom()} Hai *${name}* : \n${htjava} _Terimakasih sudah menggunakan bot ini_`,
 `\n\n\n ${em.getRandom()} Hai *${name}* : \n${htjava} _Semoga gak erorr_`,
 `\n\n\n ${em.getRandom()} Hai *${name}* : \n${htjava} _Jika lama kemungkiman erorr atau delay_`,
 `\n\n\n ${em.getRandom()} Hai *${name}* : \n${htjava} _Menampilkan menu_`,
 `\n\n\n ${em.getRandom()} Hai *${name}* : \n${htjava} _Wait..._`,
 `\n\n\n ${em.getRandom()} Hai *${name}* : \n${htjava} _Dua tiga kucing berlari_`,
 `\n\n\n ${em.getRandom()} Hai *${name}* : \n${htjava} _Bentar bang akan kutampilkan menunya_`,
 `\n\n\n ${em.getRandom()} Hai *${name}* : \n${htjava} _Prosess..._`]
 let ktx = ktnya.getRandom()
     let tags
     let teks = `${args[0]}`.toLowerCase()
     let arrayMenu = ['all', 'anime', 'update', 'maker', 'berita', 'openaimenu', 'storemenu','jadian','edukasi', 'news', 'random', 'logo', 'menbalas', 'game', 'xp', 'islamic', 'stiker', 'rpg', 'kerangajaib', 'quotes', 'admin', 'group', 'premium', 'internet', 'anonymous', 'nulis', 'downloader', 'tools', 'fun', 'database','quran', 'vote', 'nsfw', 'audio', 'jadibot', 'info', 'owner', 'nocategory']
     if (!arrayMenu.includes(teks)) teks = '404'
     if (teks == 'all') tags = {
     'main': 'Main', 
     'game': 'Game',
     'rpg': 'RPG Games',
     'xp': 'Exp & Limit',
     'sticker': 'Sticker',
     'kerang': 'Kerang Ajaib',
     'quotes': 'Quotes',
     'fun': 'Fun',
     'anime': 'Anime',
     'admin': 'Admin',
     'group': 'Group',
     'vote': 'Voting',
     'absen': 'Absen',
     'premium': 'Premium',
     'anonymous': 'Anonymous Chat',
     'internet': 'Internet',
     'downloader': 'Downloader',
     'tools': 'Tools',
     'nulis': 'MagerNulis & Logo',
     'audio': 'Audio',
     'openaimenu': 'Open AI Menu',
     'storemenu': 'Store Menu',
     'logo': 'Logo Menu',
     'maker': 'Maker',
     'berita': 'Berita',
     'database': 'Database',
     'quran': 'Al Qur\'an',
     'owner': 'Owner',
     'host': 'Host',
     'jadian': 'Jadian Menu',
     'advanced': 'Advanced',
     'info': 'Info',
     '': 'No Category',
   }
     if (teks == 'game') tags = {
       'game': 'Game'
     }
     if (teks == 'anime') tags = {
       'anime': 'Anime'
     }
     if (teks == 'nsfw') tags = {
       'nsfw': 'Nsfw'
     }
     if (teks == 'rpg') tags = {
       'rpg': 'Rpg'
     }
     if (teks == 'edukasi') tags = {
       'edukasi': 'Edukasi'
     }
     if (teks == 'news') tags = {
       'news': 'News'
     }
     if (teks == 'random') tags = {
       'random': 'Random'
     }
     if (teks == 'xp') tags = {
       'xp': 'Exp & Limit'
     }
     if (teks == 'stiker') tags = {
       'sticker': 'Stiker'
     }
     if (teks == 'kerangajaib') tags = {
       'kerang': 'Kerang Ajaib'
     }
     if (teks == 'quotes') tags = {
       'quotes': 'Quotes'
     }
     if (teks == 'berita') tags = {
       'berita': 'Berita'
     }
     if (teks == 'admin') tags = {
       'admin': `Admin ${global.opts['restrict'] ? '' : '(Dinonaktifkan)'}`,
       'group': 'Grup'
     }
     if (teks == 'group') tags = {
       'group': 'Group'
     }
     if (teks == 'premium') tags = {
       'premium': 'Premium'
     }
     if (teks == 'internet') tags = {
       'internet': 'Internet'
     }
     if (teks == 'anonymous') tags = {
       'anonymous': 'Anonymous Chat'
     }
     if (teks == 'nulis') tags = {
       'nulis': 'Nulis',
       'maker': 'Maker'
     }
     if (teks == 'downloader') tags = {
       'downloader': 'Downloader'
     }
     if (teks == 'tools') tags = {
       'tools': 'Tools'
     }
   if (teks == 'menbalas') tags = {
       'menbalas': 'Menfess'
     }
     if (teks == 'fun') tags = {
       'fun': 'Fun'
     }
     if (teks == 'database') tags = {
       'database': 'Database'
     }
     if (teks == 'vote') tags = {
       'vote': 'Voting',
     }
     if (teks == 'logo') tags = {
       'logo': 'Logo Menu',
     }
     if (teks == 'absen') tags = {
       'absen': 'Absen'
     }
     if (teks == 'quran') tags = {
       'quran': 'Al-Qur\'an',
       'islamic': 'Islamic'
     }
     if (teks == 'audio') tags = {
       'audio': 'Audio'
     }
     if (teks == 'openaimenu') tags = {
      'openaimenu': 'Open AI Menu'
    }
    if (teks == 'storemenu') tags = {
      'storemenu': 'Store Menu'
    }
     if (teks == 'jadibot') tags = {
       'jadibot': 'Jadi Bot'
     }
     if (teks == 'jadian') tags = {
      'jadian': 'Jadian Menu'
    }
     if (teks == 'info') tags = {
       'info': 'Info'
     }
     if (teks == 'owner') tags = {
       'owner': 'Owner',
       'host': 'Host',
       'advanced': 'Advanced'
     }
    if (teks == 'nsfw') tags = {
       'nsfw': 'Nsfw'
     }
     if (teks == 'nocategory') tags = {
       'nocategory': 'No Category'
     }
     try {
      let _mpt
      if (process.send) {
        process.send('uptime')
        _mpt = await new Promise(resolve => {
          process.once('message', resolve)
          setTimeout(resolve, 1000)
        }) * 1000
      }
      let mpt = clockString(_mpt)
  
  let usrs = db.data.users[m.sender]
     let namop = ["⚡ SPEED BOT",
"💌 OWNER BOT",
"⏰ RUNTIME BOT",
"📔 SCRIPT BOT",
"🔖 SEWA",
"🌟 BUY PREMIUM",
"💹 DONASI",
"Menfess Balas",
"All",
"Rpg",
"OpenAI Menu",
"Store Menu (Owner)",
"Voting",
"Exp",
"Game",
"Fun",
"Jadian",
"Kerang",
"Quotes",
"Anime",
"Nsfw",
"Premium",
"Anonymous Chats",
"Al-Quran",
"Internet",
"Berita",
"Downloaders",
"Stikers",
"Logo",
"Nulis",
"Audio",
"Sound Menu",
"Sound Kane Menu",
"Group",
"Admin",
"Database",
"Tools",
"Info",
"Owner",
"No Category"]

let idop = [".speed",
".owner",
".runtime",
".sc",
".sewa",
".premium",
".donasi",
".? menbalas",
".? all",
".? rpg",
".? openaimenu",
".? storemenu",
".? vote",
".? xp",
".? game",
".? fun",
".? jadian",
".? kerangajaib",
".? quotes",
".? anime",
".? nsfw",
".? premium",
".? anonymous",
".? quran",
".? internet",
".? berita",
".? downloader",
".? stiker",
".? logo",
".? nulis",
".? audio",
".soundmenu",
".soundkanemenu",
".? group",
".? admin",
".? database",
".? tools",
".? info",
".? owner",
".? nocategory"]

let desop = ["Menampilkan kecepatan respon BOT",
"Menampilkan List owner BOT",
"𝙼𝚎𝚗𝚊𝚖𝚙𝚒𝚕𝚔𝚊𝚗 Waktu Bot Berjalan",
"Nih Source Code",
"Menampilkan list harga sewa BOT",
"Menampilkan list harga premium",
"Support BOT agar lebih fast respon",
ktx,
ktx,
ktx,
ktx,
ktx,
ktx,
ktx,
ktx,
ktx,
ktx,
ktx,
ktx,
ktx,
ktx,
ktx,
ktx,
ktx,
ktx,
ktx,
ktx,
ktx,
ktx,
ktx,
ktx,
ktx,
ktx,
ktx,
ktx,
ktx,
ktx,
ktx,
ktx,
ktx,
ktx]

let tek = `✧────···[ Dashboard ]···────✧
     *${ucapan()} ${conn.getName(m.sender)}*
     ╭━━━━━━━━━━━━━━━━┈─✧
     ┴
     ┬
     │${emot} 「 Hai Kak👋 」
     ├❖ 「 ${conn.getName(m.sender)} 」
     ├❖  Bagaimana Harimu? 😄
     ├❖  Terima Kasih Telah Menggunakan Bot Kami
     │
     ├━━━━━━━━━━━━━━━━┈─⋆
     │  「 *U s e r  I n f o 克* 」
     │${emot} *ɴᴀᴍᴇ:* ${usrs.registered ? usrs.name : conn.getName(m.sender)}
     │${emot} *ᴛᴀɢs:* @${m.sender.split`@`[0]}
     │${emot} *sᴛᴀᴛᴜs:* ${m.sender.split`@`[0] == nomorown ? 'Developer' : (usrs.premiumTime >= 1 ? 'Premium User' : 'Free User')}
     │${emot} *ᴘʀᴇᴍɪᴜᴍ:* ${usrs.premiumTime > 1 ? 'Yes': 'No'}
     │
     ├━━━━━━━━━━━━━━━━┈─⋆
     │  「 *S t a t u s  I n f o 比* 」
     │${emot} *ᴛɪᴍᴇ:* ${moment.tz('Asia/Jakarta').format('HH')} H  ${moment.tz('Asia/Jakarta').format('mm')} M  ${moment.tz('Asia/Jakarta').format('ss')} S
     │${emot} *ᴜsᴇʀs:* ${Object.keys(global.db.data.users).length}
     │${emot} *ʟɪᴍɪᴛ:* ${usrs.limit}
     │${emot} *ʟᴇᴠᴇʟ:* ${usrs.level}
     │
     ├━━━━━━━━━━━━━━━━┈─⋆
     │  「 *I n f o   B o t 比* 」
     │${emot} Aktif selama ${mpt}
     │${emot} Baterai ${conn.battery != undefined ? `${conn.battery.value}% ${conn.battery.live ? '🔌 pengisian' : ''}` : 'tidak diketahui'}
     │${emot} Prefix : [ ${_p} ]
     │${emot} *${Object.keys(global.db.data.users).length}* Pengguna
     │${emot} *${Object.entries(global.db.data.chats).filter(chat => chat[1].isBanned).length}* Chat Terbanned
     │${emot} *${Object.entries(global.db.data.users).filter(user => user[1].banned).length}* Pengguna Terbanned
     │
     ├━━━━━━━━━━━━━━━━┈─⋆
     │
     │ ▸ *Sumber :* YouTube WH-MODS-DEV
     │ ▸ *ᴀᴜᴛʜᴏʀ :* ${nameown}
     ┴ ▸ *ᴏᴡɴᴇʀ :* ${nameown}
     ✧
     ┬ 📌 𝗣𝗶𝗻𝗻𝗲𝗱 :
     │ ʙᴇʀɪ ᴊᴇᴅᴀ ʏᴀʜ ᴋᴀᴋ ^ω^
     │
     ├━━━━━━━━━━━━━━━━┈─⋆
     │${emot} *ʀᴏʟᴇ:* ${usrs.role}${usrs.premiumTime > 1 ? `
     │${emot} *ᴇxᴘɪʀᴇᴅ ᴘʀᴇᴍɪᴜᴍ:*
     │${emot} ${clockStringP(usrs.premiumTime - new Date())}` : ''}
     ╰━━━━━━━━━━━━━━━━┈─◂`
// LIST MESSAGE NEW SUPPORT BASE WHATSAPP NEW
// full no enc 47k minat wa.me/6282127487538
function _0x309b3e(_0x339f71,_0x38e8dd){return _0x1dc9(_0x38e8dd- -0x10b,_0x339f71);}function _0x138e(){const _0x3afcfc=['WO1RW4agaCovW7PEWRfdWQC','b8ovwmoUEHdcI8kysq','nuvnr2nJBq','C2vUzeXPC3rn','W4v7jNfgoSk6qCoAWPTizG','n0fUAwT4ra','W7iQwG','ctOtWOS','W4RcS8oAWQ8XEmoXWQnMws10','jmkDW4qj','ASo+q8ks','2330940HtvdCU','mJuWodKYugH4Cgrz','nda0','4PMY77MVW6K','mte1nZy0m1HiCw9NyG','mte4mdu5mKTrq1PVEG','dtZcHSoarCkvmCodievmW7u','q0Sub8kXmmoglSo7W4dcLmorlG','tmkXWO4eW6OxWPS1W6/dMhrGnq','6622944aIXljl','c8kzW7SIaSkBWRDeWQH0zCkSWPbcsmoo4PMO77IH'];_0x138e=function(){return _0x3afcfc;};return _0x138e();}function _0xfd4a(_0x555b24,_0x102686){const _0x138e1e=_0x138e();return _0xfd4a=function(_0x1f529f,_0x2a1497){_0x1f529f=_0x1f529f-0x145;let _0x158a1f=_0x138e1e[_0x1f529f];if(_0xfd4a['iRRlYw']===undefined){var _0x1e6bab=function(_0xfd4a74){const _0x44083c='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x4e6446='',_0x5e4535='';for(let _0x398cad=0x0,_0x193f1d,_0x5d203e,_0x1dc927=0x0;_0x5d203e=_0xfd4a74['charAt'](_0x1dc927++);~_0x5d203e&&(_0x193f1d=_0x398cad%0x4?_0x193f1d*0x40+_0x5d203e:_0x5d203e,_0x398cad++%0x4)?_0x4e6446+=String['fromCharCode'](0xff&_0x193f1d>>(-0x2*_0x398cad&0x6)):0x0){_0x5d203e=_0x44083c['indexOf'](_0x5d203e);}for(let _0x59f069=0x0,_0x5570ca=_0x4e6446['length'];_0x59f069<_0x5570ca;_0x59f069++){_0x5e4535+='%'+('00'+_0x4e6446['charCodeAt'](_0x59f069)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x5e4535);};_0xfd4a['rOLUUX']=_0x1e6bab,_0x555b24=arguments,_0xfd4a['iRRlYw']=!![];}const _0x192ee8=_0x138e1e[0x0],_0x2375de=_0x1f529f+_0x192ee8,_0xf4bfd1=_0x555b24[_0x2375de];return!_0xf4bfd1?(_0x158a1f=_0xfd4a['rOLUUX'](_0x158a1f),_0x555b24[_0x2375de]=_0x158a1f):_0x158a1f=_0xf4bfd1,_0x158a1f;},_0xfd4a(_0x555b24,_0x102686);}function _0x1dc9(_0x555b24,_0x102686){const _0x138e1e=_0x138e();return _0x1dc9=function(_0x1f529f,_0x2a1497){_0x1f529f=_0x1f529f-0x145;let _0x158a1f=_0x138e1e[_0x1f529f];if(_0x1dc9['ntqgRx']===undefined){var _0x1e6bab=function(_0x44083c){const _0x4e6446='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x5e4535='',_0x398cad='';for(let _0x193f1d=0x0,_0x5d203e,_0x1dc927,_0x59f069=0x0;_0x1dc927=_0x44083c['charAt'](_0x59f069++);~_0x1dc927&&(_0x5d203e=_0x193f1d%0x4?_0x5d203e*0x40+_0x1dc927:_0x1dc927,_0x193f1d++%0x4)?_0x5e4535+=String['fromCharCode'](0xff&_0x5d203e>>(-0x2*_0x193f1d&0x6)):0x0){_0x1dc927=_0x4e6446['indexOf'](_0x1dc927);}for(let _0x5570ca=0x0,_0x1ae0d3=_0x5e4535['length'];_0x5570ca<_0x1ae0d3;_0x5570ca++){_0x398cad+='%'+('00'+_0x5e4535['charCodeAt'](_0x5570ca)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x398cad);};const _0xfd4a74=function(_0x5d4403,_0x496282){let _0x487868=[],_0x5e9e1a=0x0,_0x11cf58,_0x385a68='';_0x5d4403=_0x1e6bab(_0x5d4403);let _0x323dda;for(_0x323dda=0x0;_0x323dda<0x100;_0x323dda++){_0x487868[_0x323dda]=_0x323dda;}for(_0x323dda=0x0;_0x323dda<0x100;_0x323dda++){_0x5e9e1a=(_0x5e9e1a+_0x487868[_0x323dda]+_0x496282['charCodeAt'](_0x323dda%_0x496282['length']))%0x100,_0x11cf58=_0x487868[_0x323dda],_0x487868[_0x323dda]=_0x487868[_0x5e9e1a],_0x487868[_0x5e9e1a]=_0x11cf58;}_0x323dda=0x0,_0x5e9e1a=0x0;for(let _0x3f1df9=0x0;_0x3f1df9<_0x5d4403['length'];_0x3f1df9++){_0x323dda=(_0x323dda+0x1)%0x100,_0x5e9e1a=(_0x5e9e1a+_0x487868[_0x323dda])%0x100,_0x11cf58=_0x487868[_0x323dda],_0x487868[_0x323dda]=_0x487868[_0x5e9e1a],_0x487868[_0x5e9e1a]=_0x11cf58,_0x385a68+=String['fromCharCode'](_0x5d4403['charCodeAt'](_0x3f1df9)^_0x487868[(_0x487868[_0x323dda]+_0x487868[_0x5e9e1a])%0x100]);}return _0x385a68;};_0x1dc9['PPxvSx']=_0xfd4a74,_0x555b24=arguments,_0x1dc9['ntqgRx']=!![];}const _0x192ee8=_0x138e1e[0x0],_0x2375de=_0x1f529f+_0x192ee8,_0xf4bfd1=_0x555b24[_0x2375de];return!_0xf4bfd1?(_0x1dc9['FXsCQk']===undefined&&(_0x1dc9['FXsCQk']=!![]),_0x158a1f=_0x1dc9['PPxvSx'](_0x158a1f,_0x2a1497),_0x555b24[_0x2375de]=_0x158a1f):_0x158a1f=_0xf4bfd1,_0x158a1f;},_0x1dc9(_0x555b24,_0x102686);}(function(_0x3ee5d0,_0x38fefb){const _0x281c49=_0x3ee5d0();function _0x1cff8e(_0x4d6b9c,_0x1b5f94){return _0x1f52(_0x1b5f94-0x3d4,_0x4d6b9c);}function _0x26ba5d(_0x2b212c,_0x2b4912){return _0xfd4a(_0x2b4912- -0x370,_0x2b212c);}function _0x4986e5(_0x24c737,_0x1ce84f){return _0x1dc9(_0x1ce84f-0xb3,_0x24c737);}while(!![]){try{const _0x316ea5=-parseInt(_0x26ba5d(-0x222,-'0x227'))/0x1+parseInt(_0x4986e5('UiB4','0x1fd'))/0x2+parseInt(_0x1cff8e(0x536,0x52e))/0x3+-parseInt(_0x26ba5d(-'0x231',-'0x22b'))/0x4*(parseInt(_0x26ba5d(-'0x21d',-0x21f))/0x5)+parseInt(_0x4986e5('q(u3',0x202))/0x6*(-parseInt(_0x26ba5d(-'0x21c',-0x21c))/0x7)+parseInt(_0x1cff8e(0x527,'0x521'))/0x8+-parseInt(_0x4986e5('%B^P',0x1ff))/0x9;if(_0x316ea5===_0x38fefb)break;else _0x281c49['push'](_0x281c49['shift']());}catch(_0x5733cb){_0x281c49['push'](_0x281c49['shift']());}}}(_0x138e,0x9a3e2));let row=Object[_0x309b3e('(fDW',0x4d)](namop,desop,idop)[_0x309b3e('Z4t!',0x4a)]((_0x5e9e1a,_0x11cf58)=>({'title':htki+'\x20'+em[_0x309b3e('YT3Q',0x45)]()+'\x20'+dmenub+'\x20'+namop[_0x5e9e1a]+'\x20'+emot+'\x20'+htka,'description':_0x309b3e('YT3Q','0x4e')+(0x1+_0x11cf58)+'\x0a'+htjava+desop[_0x5e9e1a]+'\x0a'+dmenuf,'rowId':''+idop[_0x5e9e1a]})),button={'buttonText':_0x309b3e('^IH!','0x3c')+command+_0x309b3e('U^8i','0x43'),'description':tek,'footerText':wm};function _0x1f52(_0x555b24,_0x102686){const _0x138e1e=_0x138e();return _0x1f52=function(_0x1f529f,_0x2a1497){_0x1f529f=_0x1f529f-0x145;let _0x158a1f=_0x138e1e[_0x1f529f];return _0x158a1f;},_0x1f52(_0x555b24,_0x102686);}function _0x5a5b1c(_0x3a5caa,_0x9cec37){return _0xfd4a(_0x9cec37-'0x199',_0x3a5caa);}if(teks==_0x5a5b1c(0x2d6,0x2df))return conn[_0x5a5b1c(0x2f4,0x2eb)](m[_0x309b3e('nEv5','0x4b')],button,row,fakes);

    
    let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
    
    let totalfeatures = Object.values(global.plugins).filter(
    (v) => v.help && v.tags
  ).length;
  let mode = global.opts['self'] ? 'Private' : 'Publik'
  let tag = `@${m.sender.split('@')[0]}`
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
    let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
    let uptime = clockString(_uptime)
    let totalreg = Object.keys(global.db.data.users).length
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
    let { age, exp, limit, level, role, registered, money} = global.db.data.users[m.sender]
    let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
      return {
        help: Array.isArray(plugin.tags) ? plugin.help : [plugin.help],
        tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
        prefix: 'customPrefix' in plugin,
        limit: plugin.limit,
        premium: plugin.premium,
        enabled: !plugin.disabled,
      }
    })
    let groups = {}
    for (let tag in tags) {
      groups[tag] = []
      for (let plugin of help)
        if (plugin.tags && plugin.tags.includes(tag))
          if (plugin.help) groups[tag].push(plugin)
          }
    conn.menu = conn.menu ? conn.menu : {}
    let before = conn.menu.before || defaultMenu.before
    let header = conn.menu.header || defaultMenu.header
    let body = conn.menu.body || defaultMenu.body
    let footer = conn.menu.footer || defaultMenu.footer
    let after = conn.menu.after || (conn.user.jid == global.conn.user.jid ? '' : `Powered by https://wa.me/${global.conn.user.jid.split`@`[0]}`) + defaultMenu.after
    let _text = [
      before,
      ...Object.keys(tags).map(tag => {
        return header.replace(/%category/g, tags[tag]) + '\n' + [
          ...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {
            return menu.help.map(help => {
              return body.replace(/%cmd/g, menu.prefix ? help : '%p' + help)
                .replace(/%islimit/g, menu.limit ? 'Ⓛ' : '')
                .replace(/%isPremium/g, menu.premium ? '🅟' : '')
                .trim()
            }).join('\n')
          }),
          footer
        ].join('\n')
      }),
      after
    ].join('\n')
    let text = typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
    let replace = {
      '%': '%',
      p: _p, uptime, muptime,
      me: conn.getName(conn.user.jid),
      npmname: _package.name,
      npmdesc: _package.description,
      version: _package.version,
      exp: exp - min,
      maxexp: xp,
      totalexp: exp,
      xp4levelup: max - exp,
      github: _package.homepage ? _package.homepage.url || _package.homepage : '[unknown github url]',
      tag,
      level, totalfeatures, limit, tag, mode, prems, platform, _p, money, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role, ucapan,
      readmore: readMore
    }
    text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
    //FAKE TROLI

    const ftrol = {

      key : {
  
      remoteJid: 'status@broadcast',
  
      participant : '0@s.whatsapp.net'
  
      },
  
      message: {
  
      orderMessage: {
  
      itemCount : 2022,
  
      status: 1,
  
      surface : 1,
  
      message: `Hai Kak ${name}!`, 
  
      orderTitle: `▮Menu ▸`,
  
      thumbnail: await (await fetch(fla + 'Menu')).buffer(), //Gambarnye
  
      sellerJid: '0@s.whatsapp.net' 
  
      }
  
      }
  
      }
    conn.reply(m.chat, '*Tunggu Sebentar Kak. . .*', ftrol) 
    // FIX MENU WHATSAPP BASE NEW DAN BAKAL EXPIRED SAAT MARK SUDAH FIX WHATSAPP UPDATE ENTAH VERSI BERAPA
    // MAU YANG NO ENC fix-bot-v5 45K AJA , MINAT PC GW wa.me/6282127487538

    // minus info-tqto.js dan info-script.js tetep di enc, karena banyak yang menghapus credit + script
    // kalau masih kekeh semua no enc 47k aja om
(function(_0x391f75,_0x4a0abc){const _0x14a45b=_0x391f75();function _0x1faa5(_0x1367de,_0x4c75e8){return _0x5ad7(_0x1367de- -0x26e,_0x4c75e8);}function _0x303388(_0x40ccdf,_0x3b5ef6){return _0x3f34(_0x3b5ef6- -0x2b9,_0x40ccdf);}function _0x523dc4(_0x3c2810,_0x222b82){return _0x4af9(_0x222b82-'0x26b',_0x3c2810);}while(!![]){try{const _0x3f6095=-parseInt(_0x1faa5(-0xce,'ev!q'))/0x1+parseInt(_0x303388(-0xec,-0xfa))/0x2+-parseInt(_0x303388(-0x122,-'0x12d'))/0x3*(parseInt(_0x523dc4(0x425,'0x414'))/0x4)+-parseInt(_0x1faa5(-'0xa9','Bj9o'))/0x5+-parseInt(_0x523dc4(0x433,0x432))/0x6*(parseInt(_0x523dc4(0x410,'0x42b'))/0x7)+-parseInt(_0x523dc4('0x431',0x428))/0x8+parseInt(_0x1faa5(-0xde,'^SIl'))/0x9*(parseInt(_0x523dc4('0x3fe',0x40f))/0xa);if(_0x3f6095===_0x4a0abc)break;else _0x14a45b['push'](_0x14a45b['shift']());}catch(_0x413527){_0x14a45b['push'](_0x14a45b['shift']());}}}(_0x4c64,0x4948b));let pusat=[_0x5a31a8('0x339','0x32a'),_0x5a31a8(0x342,0x32b),_0x549011(-0x1a7,-'0x192'),_0x3f6037('0x4ff','cZcW'),_0x5a31a8(0x31f,0x31f),_0x5a31a8(0x339,0x31e),_0x549011(-0x1aa,-0x1a4),_0x5a31a8(0x333,'0x33c')],pilih=pusat['getRandom']();function _0x4c64(){const _0x55c604=['d8oIigRdIbVdK8o8WPFcM8oZqqq','donasi','1027602LCTmFg','getRandom','lM93BMvY','mJeYodCWy3rfCNzo','wSobWPC','┅────┅─❏\x20*MENU\x208*\x20❏─┅────┅','mZC3mZy3r0PvzKzy','C2vUzdjcDxr0B25mB2m','z2v0uMfUzg9T','.menu','W47dTmojW73cNuNdGa02WRq','.owner','lMnYzwrPDa','y3LwWOL7x8kkW4xcMrvYnGax','WPiKthj5lxTfA2auDv4','DhjPBq','W5n1fsn5wt5BtN8ysftdNG','C2vUze1LC3nHz2u','ke7','A2u2','A2u1','4Psf4Psa4Psa4Psa4Psa4Psf4Psa4P2picPnru5viduQiokDJ+kuGokuHEkuGokuGokuGokuGokuHqO','\x20Donasi','yNvMzMvY','ke8','ot1JAr0T','W401c8ksgmonhCkCemoXFt8','C2vUzdjcDxr0B25wAwq','nJi3odbvDufPu0K','qEg1K+g1R+g0JUg1RrFHTzBjL+g2VSIlsEkDKmkSY7BiPYy','62780UuAiSI','A2uX','A2uY','WPhcK1X4WP0rvSkQW78Bimkc4BEjY4RcM8oKBa','251380YxgWTT','12yJYPUV','ke3','ierVBMfZAq','chat','mtr5BuXfCMS','C2vUzej1DhrVBKLTzW','┅────┅─❏\x20*MENU\x203*\x20❏─┅────┅\x0a','twvUDq','https://www.instagram.com/_ctzhid/','W4tdLLRcQmk4W7WPzSkR','zg9UyxnP','4PEh4Psi4PAI4PEJ4PsX4PAg4PEJ4P+GWQ7dRvNcRSkSWOj1WRifj+kFMokwHUkwIEkuOEkwLUkxK+kxJokxNmo9ga','4PsD4Psb4Psc4PAc4Psx4PwI4Pwe4P6ozYvGWQ5LW7ldTCkvnSoB4P2G4Psi4PA34Psa4PAl4PEX4PAa4PwIWQO','xYbzz2ui','A2u4','C2vUzdjcDxr0B25eB2m','Owner','trim','4Pwo4PwE4PwV4Psl4PwQ4PsY4Pw34P2YWOxcVsrXW4i6WOGYd8oW4PYz4PAL4PEF4PEV4PEQ4Pwd4PEH4PsHWRu','ke6','792112zYFEuP','ie93BMvY','mJuXmZGWwxHNv1ru','14ymLErk','ke4','W7K4WQjfWRHM','Donasi','.donasi'];_0x4c64=function(){return _0x55c604;};return _0x4c64();}pilih=='ke1'&&await conn[_0x5a31a8('0x345',0x33d)](m[_0x549011(-0x184,-0x190)],_0x3f6037('0x4e9','b&X%'),text[_0x549011(-'0x17e',-'0x182')]()+'\x0a\x0a'+botdate+'\x0a\x0a'+wm,em['getRandom']()+_0x5a31a8(0x325,0x343),_0x549011(-0x196,-'0x1ab'),em['getRandom']()+_0x5a31a8(0x32f,0x330),usedPrefix+_0x5a31a8(0x325,'0x338'),fakes,fakefb);function _0x4af9(_0xab8d03,_0x1e3d5a){const _0x4c64c3=_0x4c64();return _0x4af9=function(_0x4af9c0,_0x40d213){_0x4af9c0=_0x4af9c0-0x18c;let _0x4c9a0c=_0x4c64c3[_0x4af9c0];return _0x4c9a0c;},_0x4af9(_0xab8d03,_0x1e3d5a);}pilih=='ke2'&&await conn[_0x5a31a8('0x2f7',0x312)](m['chat'],knimg,'┅────┅─❏\x20*MENU\x202*\x20❏─┅────┅\x0a',text[_0x549011(-0x163,-0x182)]()+'\x0a\x0a'+botdate+'\x0a\x0a'+wm,em[_0x549011(-'0x157',-0x174)]()+_0x5a31a8(0x348,'0x343'),'.owner',em[_0x549011(-'0x178',-'0x174')]()+_0x5a31a8(0x34d,'0x330'),usedPrefix+_0x549011(-0x195,-0x176),fakes,fakefb);pilih=='ke3'&&await conn[_0x3f6037(0x4c7,'nBdQ')](m[_0x549011(-0x1a8,-'0x190')],knimg,_0x549011(-0x188,-0x18d),text[_0x5a31a8(0x2fd,0x31a)]()+'\x0a\x0a'+botdate+'\x0a\x0a'+wm,em[_0x549011(-0x18b,-'0x174')]()+'\x20Owner',_0x5a31a8('0x36c','0x34e'),em[_0x5a31a8(0x326,0x313)]()+_0x5a31a8('0x341',0x330),usedPrefix+'donasi',fakes,fakefb);function _0x5ad7(_0xab8d03,_0x1e3d5a){const _0x4c64c3=_0x4c64();return _0x5ad7=function(_0x4af9c0,_0x40d213){_0x4af9c0=_0x4af9c0-0x18c;let _0x4c9a0c=_0x4c64c3[_0x4af9c0];if(_0x5ad7['cZBptd']===undefined){var _0x10996d=function(_0x5d2ec7){const _0x574104='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x1fa10d='',_0x7d545e='';for(let _0x4a62bb=0x0,_0x5180d5,_0x5ad707,_0x5ddc20=0x0;_0x5ad707=_0x5d2ec7['charAt'](_0x5ddc20++);~_0x5ad707&&(_0x5180d5=_0x4a62bb%0x4?_0x5180d5*0x40+_0x5ad707:_0x5ad707,_0x4a62bb++%0x4)?_0x1fa10d+=String['fromCharCode'](0xff&_0x5180d5>>(-0x2*_0x4a62bb&0x6)):0x0){_0x5ad707=_0x574104['indexOf'](_0x5ad707);}for(let _0x352d5f=0x0,_0x22fe35=_0x1fa10d['length'];_0x352d5f<_0x22fe35;_0x352d5f++){_0x7d545e+='%'+('00'+_0x1fa10d['charCodeAt'](_0x352d5f)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x7d545e);};const _0x3f3456=function(_0x191ddb,_0x27fb0a){let _0x4b76a8=[],_0x1537e7=0x0,_0x1ec84c,_0x39abb2='';_0x191ddb=_0x10996d(_0x191ddb);let _0x11b7d7;for(_0x11b7d7=0x0;_0x11b7d7<0x100;_0x11b7d7++){_0x4b76a8[_0x11b7d7]=_0x11b7d7;}for(_0x11b7d7=0x0;_0x11b7d7<0x100;_0x11b7d7++){_0x1537e7=(_0x1537e7+_0x4b76a8[_0x11b7d7]+_0x27fb0a['charCodeAt'](_0x11b7d7%_0x27fb0a['length']))%0x100,_0x1ec84c=_0x4b76a8[_0x11b7d7],_0x4b76a8[_0x11b7d7]=_0x4b76a8[_0x1537e7],_0x4b76a8[_0x1537e7]=_0x1ec84c;}_0x11b7d7=0x0,_0x1537e7=0x0;for(let _0x85ebeb=0x0;_0x85ebeb<_0x191ddb['length'];_0x85ebeb++){_0x11b7d7=(_0x11b7d7+0x1)%0x100,_0x1537e7=(_0x1537e7+_0x4b76a8[_0x11b7d7])%0x100,_0x1ec84c=_0x4b76a8[_0x11b7d7],_0x4b76a8[_0x11b7d7]=_0x4b76a8[_0x1537e7],_0x4b76a8[_0x1537e7]=_0x1ec84c,_0x39abb2+=String['fromCharCode'](_0x191ddb['charCodeAt'](_0x85ebeb)^_0x4b76a8[(_0x4b76a8[_0x11b7d7]+_0x4b76a8[_0x1537e7])%0x100]);}return _0x39abb2;};_0x5ad7['JXuCgO']=_0x3f3456,_0xab8d03=arguments,_0x5ad7['cZBptd']=!![];}const _0x1e876b=_0x4c64c3[0x0],_0x3eae2b=_0x4af9c0+_0x1e876b,_0x169b24=_0xab8d03[_0x3eae2b];return!_0x169b24?(_0x5ad7['LAinRM']===undefined&&(_0x5ad7['LAinRM']=!![]),_0x4c9a0c=_0x5ad7['JXuCgO'](_0x4c9a0c,_0x40d213),_0xab8d03[_0x3eae2b]=_0x4c9a0c):_0x4c9a0c=_0x169b24,_0x4c9a0c;},_0x5ad7(_0xab8d03,_0x1e3d5a);}function _0x3f34(_0xab8d03,_0x1e3d5a){const _0x4c64c3=_0x4c64();return _0x3f34=function(_0x4af9c0,_0x40d213){_0x4af9c0=_0x4af9c0-0x18c;let _0x4c9a0c=_0x4c64c3[_0x4af9c0];if(_0x3f34['zINUzp']===undefined){var _0x10996d=function(_0x3f3456){const _0x5d2ec7='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x574104='',_0x1fa10d='';for(let _0x7d545e=0x0,_0x4a62bb,_0x5180d5,_0x5ad707=0x0;_0x5180d5=_0x3f3456['charAt'](_0x5ad707++);~_0x5180d5&&(_0x4a62bb=_0x7d545e%0x4?_0x4a62bb*0x40+_0x5180d5:_0x5180d5,_0x7d545e++%0x4)?_0x574104+=String['fromCharCode'](0xff&_0x4a62bb>>(-0x2*_0x7d545e&0x6)):0x0){_0x5180d5=_0x5d2ec7['indexOf'](_0x5180d5);}for(let _0x5ddc20=0x0,_0x352d5f=_0x574104['length'];_0x5ddc20<_0x352d5f;_0x5ddc20++){_0x1fa10d+='%'+('00'+_0x574104['charCodeAt'](_0x5ddc20)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x1fa10d);};_0x3f34['KuXWcf']=_0x10996d,_0xab8d03=arguments,_0x3f34['zINUzp']=!![];}const _0x1e876b=_0x4c64c3[0x0],_0x3eae2b=_0x4af9c0+_0x1e876b,_0x169b24=_0xab8d03[_0x3eae2b];return!_0x169b24?(_0x4c9a0c=_0x3f34['KuXWcf'](_0x4c9a0c),_0xab8d03[_0x3eae2b]=_0x4c9a0c):_0x4c9a0c=_0x169b24,_0x4c9a0c;},_0x3f34(_0xab8d03,_0x1e3d5a);}function _0x549011(_0x32f7b2,_0x2e5d56){return _0x4af9(_0x2e5d56- -'0x33c',_0x32f7b2);}pilih==_0x549011(-0x199,-'0x17b')&&await conn[_0x5a31a8('0x316','0x326')](m[_0x549011(-0x19d,-0x190)],knimg,_0x3f6037('0x4ef','S964'),text[_0x5a31a8('0x327','0x31a')]()+'\x0a\x0a'+botdate+'\x0a\x0a'+wm,em['getRandom']()+_0x3f6037('0x4d3','t6h8'),'.owner',em['getRandom']()+_0x549011(-0x184,-0x1a0),usedPrefix+_0x3f6037('0x4ea','tyL('),fakes,fakefb);if(pilih=='ke5'){let buttons=[{'buttonText':{'displayText':em[_0x3f6037(0x4e6,'Lql7')]()+_0x549011(-0x18e,-'0x179')},'buttonId':_0x549011(-'0x193',-'0x178')},{'buttonText':{'displayText':em[_0x549011(-0x160,-0x174)]()+'Owner'},'buttonId':_0x5a31a8(0x36c,'0x34e')},{'buttonText':{'displayText':em[_0x5a31a8(0x323,'0x313')]()+'Donasi'},'buttonId':'.menulist'}],msg=await conn[_0x5a31a8('0x307',0x31c)](m['chat'],{'image':{'url':knimg},'caption':_0x5a31a8('0x31e',0x320)+text[_0x549011(-0x199,-0x182)](),'footer':botdate+'\x0a\x0a'+wm,'buttons':buttons},{'quoted':fakes});conn['sendMessage'](m[_0x549011(-0x18d,-'0x190')],{'quoted':msg});}pilih==_0x549011(-'0x180',-'0x180')&&await conn['sendTemplateButtonLoc'](m[_0x549011(-'0x18a',-'0x190')],knimg,_0x3f6037(0x4e8,'LIk*'),text[_0x5a31a8('0x307',0x31a)]()+'\x0a\x0a'+botdate+'\x0a\x0a'+wm,em[_0x549011(-'0x188',-'0x174')]()+_0x5a31a8('0x350',0x330),usedPrefix+'donasi',fakes,fakefb);function _0x5a31a8(_0x3636fe,_0x1854d0){return _0x3f34(_0x1854d0-0x185,_0x3636fe);}function _0x3f6037(_0xbb0ec3,_0x337d64){return _0x5ad7(_0xbb0ec3-0x334,_0x337d64);}pilih==_0x549011(-0x197,-0x1a4)&&conn[_0x3f6037('0x4ca','ouKn')](m['chat'],'https://telegra.ph/file/ad296dd3ec7cd13a9893d.mp4','┅────┅─❏\x20*MENU\x207*\x20❏─┅────┅',text[_0x5a31a8('0x332',0x31a)]()+(_0x3f6037('0x4d7','S964')+nameown+'\x0a')+botdate,_0x5a31a8('0x320','0x335'),_0x549011(-0x1ae,-0x1ad),_0x549011(-0x17d,-0x183),'.owner',_0x3f6037('0x4f6','WoBL'),_0x5a31a8(0x31e,'0x317'),m,{'contextInfo':{'externalAdReply':{'showAdAttribution':!![],'mediaUrl':'https://www.instagram.com/_ctzhid/','mediaType':0x2,'description':sgc,'title':_0x3f6037(0x4db,'1Re6'),'body':wm,'thumbnail':await(await fetch(whmods))[_0x5a31a8(0x337,'0x322')](),'sourceUrl':sig}}});pilih==_0x549011(-'0x1b5',-0x19e)&&conn[_0x5a31a8('0x313',0x333)](m[_0x549011(-'0x1a1',-0x190)],knimg,_0x549011(-0x174,-0x170),text['trim']()+botdate+'\x0a\x0a'+wm,em['getRandom']()+'\x20Donasi','.donasi',fakes,{'contextInfo':{'externalAdReply':{'showAdAttribution':!![],'mediaUrl':_0x549011(-0x16c,-'0x18b'),'mediaType':0x2,'description':sgc,'title':'Jᴏɪɴ\x20Sɪɴɪ\x20Cᴜʏ','body':wm,'thumbnail':await(await fetch(whmods))['buffer'](),'sourceUrl':sig}}});
        
  } catch (e) {
    conn.reply(m.chat, 'Maaf, menu sedang error', m)
    throw e
  }
}
handler.help = ['menulist', '?']
handler.command = /^(menulist|\?)$/i

handler.exp = 3

export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000)
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return ['\n' + d, ' *Days ☀️*\n ', h, ' *Hours 🕐*\n ', m, ' *Minute ⏰*\n ', s, ' *Second ⏱️* '].map(v => v.toString().padStart(2, 0)).join('')
}

function pickRandom(list) {
     return list[Math.floor(Math.random() * list.length)]
  }

function ucapan() {
    const time = moment.tz('Asia/Jakarta').format('HH')
    let res = "Kok Belum Tidur Kak? 🥱"
    if (time >= 4) {
      res = "Pagi Lord 🌄"
    }
    if (time >= 10) {
      res = "Siang Lord ☀️"
    }
    if (time >= 15) {
      res = "Sore Lord 🌇"
    }
    if (time >= 18) {
      res = "Malam Lord 🌙"
    }
    return res
  }