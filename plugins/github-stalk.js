import fetch from 'node-fetch'
import fs from 'fs'
import axios from 'axios'
let handler = async(m, { conn, groupMetadata, usedPrefix, text, args, command }) => {

if (command == 'githubstalk') {
if (!text) throw `Contoh:\n${usedPrefix + command} _ctzhid`
let f = await axios(`https://violetics.pw/api/stalk/instagram?apikey=beta&username=${text}`)
let x = f.data
let whmods = `*── 「 GITHUB STALK 」 ──*
➸ *Name Github:* ${x.result.login}
➸ *Link :* ${x.result.html_url}
➸ *Type Account :* ${x.result.type}
➸ *Name :* ${x.result.name}
➸ *Blog :* ${x.result.blog}
➸ *Bio :* ${x.result.bio}
➸ *Public Repostory :* Ada ${x.result.public_repos} Repos Public
➸ *Followers :* ${x.result.followers}
➸ *Following :* ${x.result.following}
`

  let buttons = [{ buttonText: { displayText: 'Menu' }, buttonId: '.menu' }, { buttonText: { displayText: 'Donasi' }, buttonId: '.donasi' }, { buttonText: { displayText: 'Sewa' }, buttonId: '.sewa' }]
  let msg = await conn.sendMessage(m.chat, { image: { url: `${x.result.avatar_url}`}, caption: whmods, footer: botdate, buttons }, { quoted: m })
  conn.sendMessage(m.chat, { quoted: msg })
  }
}
handler.help = ['githubstalk'].map(v => v + ' <query>')
handler.tags = ['tools']
handler.command = /^(githubstalk)$/i

export default handler


/*
import fetch from 'node-fetch'

let handler = async(m, { conn, text }) => {

  if (!text) return conn.reply(m.chat, 'Harap Masukan Username', m)

  await m.reply('Searching...')
    let res = await fetch(`https://hadi-api.herokuapp.com/api/githubstalk?username=${text}`)
    let json = await res.json()
    if (res.status !== 200) throw await res.text()
    if (!json.status) throw json
    let thumb = await (await fetch(json.result.avatar)).buffer()
    let hasil = `*── 「 GITHUB STALK 」 ──*

➸ *Bio*: ${json.result.bio}
➸ *Perusahaan*: ${json.result.company}
➸ *Email:* ${json.result.email}
➸ *Twitter:* ${json.result.twiter_username}
➸ *Repo Publik:* ${json.result.public_repo}
➸ *Gists Publik:* ${json.result.public_gists}
➸ *Follower:* ${json.result.follower}
➸ *Following:* ${json.result.following}
➸ *Lokasi:* ${json.result.location}
➸ *Type:* ${json.result.Type}
`

    conn.sendFile(m.chat, thumb, 'githubstalk.jpg', hasil, m)
}
handler.help = ['githubstalk'].map(v => v + ' <query>')
handler.tags = ['tools']
handler.command = /^(githubstalk)$/i

export default handler
*/