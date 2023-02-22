import fetch from 'node-fetch'
import fs from 'fs'
import axios from 'axios'
let handler = async(m, { conn, groupMetadata, usedPrefix, text, args, command }) => {
let imgr = flaaa.getRandom()
if (command == 'igstalk') {
if (!text) throw `Contoh:\n${usedPrefix + command} _ctzhid`
let f = await axios(`https://violetics.pw/api/stalk/instagram?apikey=beta&username=${text}`)
let x = f.data
let whmods = `${cmenut} *Info Detail Instagram*
${cmenub} *ID :* ${x.result.id}
${cmenub} *Usename :* @${x.result.username}
${cmenub} *Bio :* ${x.result.biography}
${cmenub} *Name :* ${x.result.full_name}
${cmenub} *Total Media :* ${x.result.edge_owner_to_timeline_media.count} Foto / Video
${cmenub} *Followers :* ${x.result.edge_followed_by.count}
${cmenub} *Following :* ${x.result.edge_follow.count}
${cmenuf}
`
let buttons = [{ buttonText: { displayText: 'Profile' }, buttonId: `.profile` }, { buttonText: { displayText: 'Donasi' }, buttonId: '.donasi' }, { buttonText: { displayText: 'Sewa' }, buttonId: '.sewa' }]
let msg = await conn.sendMessage(m.chat, { image: { url: `${x.result.profile_pic_url}`}, caption: whmods, footer: botdate, buttons }, { quoted: m })
conn.sendMessage(m.chat, { quoted: msg })
}
}
handler.help = ['igstalk'].map(v => v + ' <username>')
handler.tags = ['downloader']

handler.command = /^(igstalk)$/i

export default handler

// ------------------------------- scrape bochilteam error-----------------------------
/*
import { instagramStalk } from '@bochilteam/scraper'

let handler= async (m, { args, usedPrefix, command }) => {
if (!args[0]) throw `Example use ${usedPrefix}${command} <username>`
const {
  username,
  name,
  description,
  followersH,
  followingH,
  postsH,
} = await instagramStalk(args[0])
m.reply(`
${name} *(${username})*
https://instagram.com/${username.replace(/^@/, '')}
*${followersH}* Followers
*${followingH}* Following
*${postsH}* Posts
*Bio:* ${description}
`.trim())
}

handler.help = ['igstalk'].map(v => v + ' <username>')
handler.tags = ['downloader']

handler.command = /^(igstalk)$/i

export default handler
*/