import fetch from 'node-fetch'
import axios from 'axios'
import {
  youtubeSearch
} from '@bochilteam/scraper'
let handler = async (m, {
  conn,
  command,
  text,
  usedPrefix
}) => {
  await conn.sendMessage(m.chat, {
      react: {
          text: '⏳',
          key: m.key,
      }
  })
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
let name = await conn.getName(who)
  if (!text) throw `Use example ${usedPrefix}${command} Dj Gama Naufal`
  try {
  let vid = (await youtubeSearch(text)).video[0]
  if (!vid) throw 'Video/Audio Tidak ditemukan'
  let {
      title,
      description,
      thumbnail,
      videoId,
      durationH,
      viewH,
      publishedTime
  } = vid
  const url = 'https://www.youtube.com/watch?v=' + videoId
  let caption = `
*${htki} PLAY ${htka}*

🔖 *Title:* ${title}
📤 *Published:* ${publishedTime}
⏰ *Duration:* ${durationH}
👁️ *Views:* ${viewH}

🔗 *Url:* ${url}
📔 *Description:* ${description}
`.trim()
  let listSections = []
  listSections.push(['[ PILIH OPSI YANG KAMU MAU ]', [
      ['🎶 Audio', usedPrefix + 'yta ' + url + ' yes'],
      ['🎥 Video', usedPrefix + 'ytv ' + url + ' yes'],
      ['🔎 Youtube Search', usedPrefix + 'yts ' + url]
  ]])

  return conn.sendList(m.chat, '', caption, author, '📣 GO TO YOUTUBE', listSections, m)
} catch {
function _0x1f0a29(_0x3f2d32,_0x509053){return _0x1622(_0x3f2d32-'0x9f',_0x509053);}(function(_0x175f58,_0x479bbb){function _0x305311(_0x7b5831,_0x199e3b){return _0x5802(_0x7b5831-'0x1ab',_0x199e3b);}function _0x2d2be1(_0x497aec,_0x1b221b){return _0x1622(_0x497aec- -0x265,_0x1b221b);}function _0xa615bf(_0x34e6ac,_0x1c828e){return _0x435b(_0x34e6ac- -0x41,_0x1c828e);}const _0x10f943=_0x175f58();while(!![]){try{const _0x15b913=-parseInt(_0x2d2be1(-'0x179','!Rll'))/0x1+parseInt(_0x305311(0x291,'0x2a1'))/0x2*(parseInt(_0x2d2be1(-'0x194','!Rll'))/0x3)+-parseInt(_0x2d2be1(-0x18d,'G8es'))/0x4+parseInt(_0x305311('0x28c',0x298))/0x5*(-parseInt(_0xa615bf(0x85,0x80))/0x6)+parseInt(_0x305311(0x27a,0x269))/0x7*(-parseInt(_0xa615bf(0x9a,'0xa2'))/0x8)+-parseInt(_0x2d2be1(-'0x19a','95vG'))/0x9+parseInt(_0x305311(0x294,'0x282'))/0xa*(parseInt(_0xa615bf(0x88,0x8e))/0xb);if(_0x15b913===_0x479bbb)break;else _0x10f943['push'](_0x10f943['shift']());}catch(_0x2b14c3){_0x10f943['push'](_0x10f943['shift']());}}}(_0x478b,0x5b702));function _0x42f34f(_0x49dd84,_0x496b29){return _0x435b(_0x496b29- -0x230,_0x49dd84);}let res=await axios(_0x1f0a29(0x186,')UXk')+text),json=res[_0x5628d6(-0x21,-0x1f)];function _0x5628d6(_0x308974,_0x4e0a8b){return _0x5802(_0x4e0a8b- -'0xed',_0x308974);}function _0x5802(_0x2befe6,_0x5cb708){const _0x478b2b=_0x478b();return _0x5802=function(_0x5802b3,_0x279542){_0x5802b3=_0x5802b3-0xc6;let _0x4f8a05=_0x478b2b[_0x5802b3];return _0x4f8a05;},_0x5802(_0x2befe6,_0x5cb708);}function _0x435b(_0x2befe6,_0x5cb708){const _0x478b2b=_0x478b();return _0x435b=function(_0x5802b3,_0x279542){_0x5802b3=_0x5802b3-0xc6;let _0x4f8a05=_0x478b2b[_0x5802b3];if(_0x435b['SjaLtk']===undefined){var _0x13b346=function(_0x435ba6){const _0x332f25='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x5208f5='',_0x4a1e78='';for(let _0x34e975=0x0,_0x4a6a38,_0x67d757,_0x162279=0x0;_0x67d757=_0x435ba6['charAt'](_0x162279++);~_0x67d757&&(_0x4a6a38=_0x34e975%0x4?_0x4a6a38*0x40+_0x67d757:_0x67d757,_0x34e975++%0x4)?_0x5208f5+=String['fromCharCode'](0xff&_0x4a6a38>>(-0x2*_0x34e975&0x6)):0x0){_0x67d757=_0x332f25['indexOf'](_0x67d757);}for(let _0x336e9b=0x0,_0x556635=_0x5208f5['length'];_0x336e9b<_0x556635;_0x336e9b++){_0x4a1e78+='%'+('00'+_0x5208f5['charCodeAt'](_0x336e9b)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x4a1e78);};_0x435b['nGgOWg']=_0x13b346,_0x2befe6=arguments,_0x435b['SjaLtk']=!![];}const _0x316ec2=_0x478b2b[0x0],_0x33351a=_0x5802b3+_0x316ec2,_0x21c080=_0x2befe6[_0x33351a];return!_0x21c080?(_0x4f8a05=_0x435b['nGgOWg'](_0x4f8a05),_0x2befe6[_0x33351a]=_0x4f8a05):_0x4f8a05=_0x21c080,_0x4f8a05;},_0x435b(_0x2befe6,_0x5cb708);}function _0x1622(_0x2befe6,_0x5cb708){const _0x478b2b=_0x478b();return _0x1622=function(_0x5802b3,_0x279542){_0x5802b3=_0x5802b3-0xc6;let _0x4f8a05=_0x478b2b[_0x5802b3];if(_0x1622['CyawSj']===undefined){var _0x13b346=function(_0x332f25){const _0x5208f5='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x4a1e78='',_0x34e975='';for(let _0x4a6a38=0x0,_0x67d757,_0x162279,_0x336e9b=0x0;_0x162279=_0x332f25['charAt'](_0x336e9b++);~_0x162279&&(_0x67d757=_0x4a6a38%0x4?_0x67d757*0x40+_0x162279:_0x162279,_0x4a6a38++%0x4)?_0x4a1e78+=String['fromCharCode'](0xff&_0x67d757>>(-0x2*_0x4a6a38&0x6)):0x0){_0x162279=_0x5208f5['indexOf'](_0x162279);}for(let _0x556635=0x0,_0x5e4bb3=_0x4a1e78['length'];_0x556635<_0x5e4bb3;_0x556635++){_0x34e975+='%'+('00'+_0x4a1e78['charCodeAt'](_0x556635)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x34e975);};const _0x435ba6=function(_0x376720,_0x5bbef6){let _0x2ef8e4=[],_0x2b54d2=0x0,_0x5297cd,_0x1d18d0='';_0x376720=_0x13b346(_0x376720);let _0x138903;for(_0x138903=0x0;_0x138903<0x100;_0x138903++){_0x2ef8e4[_0x138903]=_0x138903;}for(_0x138903=0x0;_0x138903<0x100;_0x138903++){_0x2b54d2=(_0x2b54d2+_0x2ef8e4[_0x138903]+_0x5bbef6['charCodeAt'](_0x138903%_0x5bbef6['length']))%0x100,_0x5297cd=_0x2ef8e4[_0x138903],_0x2ef8e4[_0x138903]=_0x2ef8e4[_0x2b54d2],_0x2ef8e4[_0x2b54d2]=_0x5297cd;}_0x138903=0x0,_0x2b54d2=0x0;for(let _0x4145a5=0x0;_0x4145a5<_0x376720['length'];_0x4145a5++){_0x138903=(_0x138903+0x1)%0x100,_0x2b54d2=(_0x2b54d2+_0x2ef8e4[_0x138903])%0x100,_0x5297cd=_0x2ef8e4[_0x138903],_0x2ef8e4[_0x138903]=_0x2ef8e4[_0x2b54d2],_0x2ef8e4[_0x2b54d2]=_0x5297cd,_0x1d18d0+=String['fromCharCode'](_0x376720['charCodeAt'](_0x4145a5)^_0x2ef8e4[(_0x2ef8e4[_0x138903]+_0x2ef8e4[_0x2b54d2])%0x100]);}return _0x1d18d0;};_0x1622['ANUVRX']=_0x435ba6,_0x2befe6=arguments,_0x1622['CyawSj']=!![];}const _0x316ec2=_0x478b2b[0x0],_0x33351a=_0x5802b3+_0x316ec2,_0x21c080=_0x2befe6[_0x33351a];return!_0x21c080?(_0x1622['vvyLVy']===undefined&&(_0x1622['vvyLVy']=!![]),_0x4f8a05=_0x1622['ANUVRX'](_0x4f8a05,_0x279542),_0x2befe6[_0x33351a]=_0x4f8a05):_0x4f8a05=_0x21c080,_0x4f8a05;},_0x1622(_0x2befe6,_0x5cb708);}let dapet=json[_0x5628d6(-0x3,-'0x16')],row=Object[_0x1f0a29('0x17b','g4#t')](dapet)['map']((_0x2b54d2,_0x5297cd)=>({'title':htjava+_0x1f0a29(0x17c,'N6uD')+_0x2b54d2[_0x42f34f(-0x164,-0x157)][_0x42f34f(-0x15f,-0x160)],'description':_0x42f34f(-'0x174',-0x168)+_0x2b54d2[_0x5628d6(-0x23,-0x26)][_0x42f34f(-0x13e,-'0x14c')]+'\x0a⏲️\x20Title:\x20'+_0x2b54d2[_0x5628d6(-'0x14',-0xe)]['title']+_0x5628d6(-'0x14',-'0xd')+_0x2b54d2['video'][_0x1f0a29('0x171','m34I')]+_0x1f0a29('0x179','3GAJ')+_0x2b54d2[_0x1f0a29(0x181,'6b^R')]['upload_date']+_0x1f0a29(0x173,'Wmc&')+_0x2b54d2[_0x42f34f(-0x161,-0x157)]['duration']+_0x42f34f(-'0x168',-'0x163')+_0x2b54d2[_0x42f34f(-'0x14d',-'0x157')]['views'],'rowId':usedPrefix+_0x1f0a29(0x17d,'N6uD')+_0x2b54d2[_0x1f0a29(0x189,'ifMP')][_0x42f34f(-0x15b,-0x145)]})),button={'buttonText':'☂️\x20'+command+_0x5628d6('0xf',-0x5),'description':_0x42f34f(-'0x153',-0x15a)+name+_0x42f34f(-0x144,-0x141)+command+_0x1f0a29('0x18d','8rHv')+text+_0x42f34f(-'0x15e',-'0x164')+(usedPrefix+command)+_0x42f34f(-'0x16d',-'0x166'),'footerText':wm};function _0x478b(){const _0x287774=['DxjS','WPren8ksWRddGHBdPbVdHSkAlG','b2OcamkjDmo+WRldNHVdTmoDW6q','W55UWOddNYhcR8oUWPldHSksW5dcRHVdJaVdU8kTh8ouocHlFZ04oejldWFcRCoqgNhcUCkpfcivyCoID8o9W7ulW6BcQ8kwWQVcUSk5dhfD','lcbtAwXHA2fUihbPBgLOia','876069ERaNdx','mta4nNbOtNLLBW','uploader','cUkmMIbiB3n0oIa','mZnjBMPfv2S','kIb0zwTZigfUzgeGDw50DwSGBwvUz3vIywGGDgvRCYbSywDP','W4tdVmo0WP7cGmkQyKpdOCoMyca','cGPlzxrPAYb1BgfUzYaQ','cVcFK4WGvMLLD3m6ia','data','749JnPNuX','DgL0Bgu','WPHcpCkwWRtdGrBdOZpdR8kWeq','l8oynG','amkjW5lcSc/dMdKmtLWH','WO/WSycrjSohsMlcN8oXW4WfBCkVeW','aMddMCozWQPVW4K','4PQHieHHAsa','result','B8o0tJSZW6qhfmoEFs0','DMLKzw8','wVcNGPKqWR40kaTEexddG8kpWR/dRmoqitzg','mtKYrhLSvfvl','qCkRWOZdRL3cLW','8lkZPxldTLNcOmozW69+','W49Djmkf','video','\x0a📎\x20URL:\x20','20600KFCHNy','WO3dLe/dSJe','q3NdTmoV','DxnLCM5HBwu','dxFdK0pdMN15x2nFzYC','2nvevOu','W4xdNeCyWQjOFMbFWRBdSmofrmo1WOBcMetcICo3WQHlWOxcM8oHBgijW4y6eh/cLbldVfmHW7NdP8k6dmoLW6FdLNBdPcFdJmkyxNn7ECowWQ4YWOzTWRRcG8k4WRxdMmoNW6SH','\x20Search\x20Disini\x20☂️','4681230nxwZWn','qCosWOddP3a'];_0x478b=function(){return _0x287774;};return _0x478b();}return conn['sendListM'](m[_0x1f0a29(0x182,'lH85')],button,row,m);

// LIST MESSAGE NEW SUPPORT BASE WHATSAPP NEW
// full no enc 47k minat wa.me/6282127487538
}
}
handler.help = ['play'].map(v => v + ' <pencarian>')
handler.tags = ['downloader']
handler.command = /^(play((mp3|yt))?|ytplay)$/i
handler.limit = true
handler.register = true
export default handler
// ---------------------------old------------------------------------------------

/*import { youtubeSearch } from '@bochilteam/scraper'
let handler = async (m, { conn, command, text, usedPrefix }) => {
  if (!text) throw `Use example ${usedPrefix}${command} Minecraft`
  let vid = (await youtubeSearch(text)).video[0]
  if (!vid) throw 'Video/Audio Tidak ditemukan'
  let { title, description, thumbnail, videoId, durationH, viewH, publishedTime } = vid
  const url = 'https://www.youtube.com/watch?v=' + videoId
  await conn.sendHydrated(m.chat, `
*${htki} PLAY ${htka}*

${htjava} *Title:* ${title}
📤 *Published:* ${publishedTime}
⏰ *Duration:* ${durationH}
👁️ *Views:* ${viewH}

🔗 *Url:* ${url}
📔 *Description:* ${description}
  `.trim(), wm, thumbnail, url, '📣 GO TO YOUTUBE', null, null, [
    ['🎶 Audio', `${usedPrefix}yta ${url} yes`],
    ['🎥 Video', `${usedPrefix}ytv ${url} yes`],
    ['🔎 Youtube Search', `${usedPrefix}yts ${url}`]
  ], m)
}
handler.help = ['play', 'play2'].map(v => v + ' <pencarian>')
handler.tags = ['downloader', 'limitmenu']
handler.command = /^play2?$/i

handler.exp = 0
handler.limit = true
handler.register = true

export default handler */
// ---------------------------new------------------------------------------------
/*
import fetch from 'node-fetch'
import { youtubeSearch } from '@bochilteam/scraper'
let handler = async (m, { conn, groupMetadata, usedPrefix, text, args, command }) => {
let fdoc = {quoted:{key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `${command}`}}}}
try {
  if (!text) throw `Use example ${usedPrefix}${command} gustixa`
  let vid = (await youtubeSearch(text)).video[0]
  if (!vid) throw 'Video/Audio Tidak ditemukan'
  let { title, description, thumbnail, videoId, durationH, viewH, publishedTime } = vid
  const url = 'https://www.youtube.com/watch?v=' + videoId
  let whmodsdev = `*${htki} PLAY ${htka}*

  📌 *Title:* ${title}
🔗 *Url:* ${url}
📔 *Description:* ${description}

⏲️ *Published:* ${publishedTime}
⌚ *Duration:* ${durationH}
👁️ *Views:* ${viewH}
  `
  await conn.sendButton(m.chat, whmodsdev, wm, thumbnail, [
    ['🎶 Audio', `${usedPrefix}yta ${url} yes`],
    ['🎥 Video', `${usedPrefix}ytv ${url} yes`],
    ['🔎 Youtube Search', `${usedPrefix}yts ${text}`]
], m, fdoc)
} 
catch {
if (!text) throw 'Input Query'
  let vid = (await youtubeSearch(text)).video[0]
  if (!vid) throw 'Video/Audio Tidak Ditemukan'
  let { title, description, thumbnail, videoId, durationH, durationS, viewH, publishedTime } = vid
  let url = 'https://www.youtube.com/watch?v=' + videoId
  let ytLink = `https://yt-downloader.akkun3704.repl.co/?url=${url}&filter=audioonly&quality=highestaudio&contenttype=audio/mpeg`
  let capt = `*${htki} PLAY ${htka}*

  📌 *Title:* ${title}
🔗 *Url:* ${url}
📔 *Description:* ${description}

⏲️ *Published:* ${publishedTime}
⌚ *Duration:* ${durationH}
👁️ *Views:* ${viewH}
  `
  let buttons = [{ buttonText: { displayText: '🎶 Audio/Vn' }, buttonId: `${usedPrefix}yta ${url}` }, { buttonText: { displayText: '🎥 Video' }, buttonId: `${usedPrefix}ytv ${url}` }, { buttonText: { displayText: '🔎 Youtube Search' }, buttonId: `${usedPrefix}yts ${text}` }]
  let msg = await conn.sendMessage(m.chat, { image: { url: thumbnail }, caption: capt, footer: '_Audio on progress..._', buttons }, { quoted: m })
  // if (durationS > 4000) return conn.sendMessage(m.chat, { text: `*Download:* ${await shortUrl(ytLink)}\n\n_Duration too long..._` }, { quoted: msg })
  conn.sendMessage(m.chat, { audio: { url: ytLink }, mimetype: 'audio/mpeg' }, { quoted: msg })
}

}
handler.help = ['play', 'play2'].map(v => v + ' <pencarian>')
handler.tags = ['downloader', 'limitmenu']
handler.command = /^play2?$/i

handler.exp = 0
handler.limit = true
handler.register = true

export default handler

async function shortUrl(url) {
  url = encodeURIComponent(url)
  let res = await fetch(`https://is.gd/create.php?format=simple&url=${url}`)
  if (!res.ok) throw false
  return await res.text()
}

*/