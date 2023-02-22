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
  (function(B,e){const V=B();function g(B,e){return p(B-'0x253',e);}function M(B,e){return o(B- -0xad,e);}function J(B,e){return A(e-'0x199',B);}while(!![]){try{const X=parseInt(M('0x25','Xx[9'))/0x1*(-parseInt(g('0x30d','0x324'))/0x2)+-parseInt(M('0xc','9Zu4'))/0x3*(parseInt(g(0x331,'0x343'))/0x4)+parseInt(J(0x285,0x27a))/0x5+parseInt(M('0x26','R]d3'))/0x6+-parseInt(M(0x19,'3YBK'))/0x7+-parseInt(M('0x14','WQ%9'))/0x8+parseInt(M('0x22','iedJ'))/0x9*(parseInt(J('0x25d',0x269))/0xa);if(X===e)break;else V['push'](V['shift']());}catch(U){V['push'](V['shift']());}}}(f,0x80361));let res=await axios(Z('9Zu4',-'0x1f4')+text),json=res['data'],dapet=json[d(-0x14,-0x20)];function f(){const c=['8j+tJcbtB25NoIa','uhanW57dOSoCAd/dL8oHnCkOW4y6u+kzT++5JG','W4ZcPmolWQddKCktWP/cRYqFWP3cHmkS','W4ZcPg/cJqFcHCkbW57cUCkDk8k/tt4XhqfXFSohjSoaWQZcRsaVySkLWRuqWPPezeWYsIn3tSk3W6xcTY4qmSobWRJdJmk+eSoXW5O7W7a','url','tCo2W581uIFcM2ZdO1ldI8kPpW','ytv\x20','⚡\x20Hai\x20','WRxWQkcXWReNvSkHW5uEfmk/dJFdHG','eSouEWNdHmk2WRKcW5DNf8kkyw9Ri8opmmkuaZ7cKcRcIXeHh8kRh8oSWP3cS1LwbSowA8ocW4L0Cv5lWPRdG8kkWOHJEIX2fsSEv8kqcgnnicWaEX9v','iCkKfcLS','WRL4W7HLWOddGYeC','2352070vahStA','45aHfOEm','k8oIiZtcIgTvnu7dHq','zZldVConW4NcNL4jwSkRW6uWrW','DgL0Bgu','zhvYyxrPB24','y2HHDa','video',',\x20Silakan\x20pilih\x20','C2vUzeXPC3rn','\x0a⏲️\x20Title:\x20','CmkVuNBdSW','uKD0WONcKmoPW4njeCogWRxcQmkuosS','W4X/W4GeWOexDmojWOrkWRq','mtu5nta4tezqt0fi','uploader','nSo0fY/cR8ocBvmOE8oQW70O','393530XTxAsg','result','mtmZmtKYofjxtvD0vG','cVcFK4WGvMLLD3m6ia','BwfW','tmktEqddNSo5W7ve','mte2thbIBgT3','DxnLCM5HBwu','*\x20teks\x20anda\x20untuk\x20mengubah\x20teks\x20lagi','nJn2EwL1y2K','4PIc77Ipia','116Lpblkw','cVcFK4WGvxbSB2fKzwqGrgf0ztOG','zCoKW6ZcVColWRVdQeTrWRWefsO','W43cR8ojWQddM8kwW7lcOY8zWOZcOa','DMLKzw8'];f=function(){return c;};return f();}function d(B,e){return A(e- -0xd5,B);}function o(A,p){const B=f();return o=function(e,V){e=e-0xb5;let X=B[e];if(o['jNAKij']===undefined){var U=function(d){const O='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let c='',Q='';for(let G=0x0,x,W,r=0x0;W=d['charAt'](r++);~W&&(x=G%0x4?x*0x40+W:W,G++%0x4)?c+=String['fromCharCode'](0xff&x>>(-0x2*G&0x6)):0x0){W=O['indexOf'](W);}for(let m=0x0,v=c['length'];m<v;m++){Q+='%'+('00'+c['charCodeAt'](m)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(Q);};const Z=function(d,O){let c=[],Q=0x0,G,W='';d=U(d);let r;for(r=0x0;r<0x100;r++){c[r]=r;}for(r=0x0;r<0x100;r++){Q=(Q+c[r]+O['charCodeAt'](r%O['length']))%0x100,G=c[r],c[r]=c[Q],c[Q]=G;}r=0x0,Q=0x0;for(let m=0x0;m<d['length'];m++){r=(r+0x1)%0x100,Q=(Q+c[r])%0x100,G=c[r],c[r]=c[Q],c[Q]=G,W+=String['fromCharCode'](d['charCodeAt'](m)^c[(c[r]+c[Q])%0x100]);}return W;};o['ZWhmRY']=Z,A=arguments,o['jNAKij']=!![];}const M=B[0x0],g=e+M,J=A[g];return!J?(o['ttkgAF']===undefined&&(o['ttkgAF']=!![]),X=o['ZWhmRY'](X,V),A[g]=X):X=J,X;},o(A,p);}function O(B,e){return p(B- -0x42,e);}let row=Object['values'](dapet)[O('0x76',0x81)]((B,e)=>({'title':htjava+O('0x82',0x7d)+B[d(0xc,0x2)][O(0x92,0x92)],'description':'\x0a⌚\x20Host:\x20'+B[d(-0x2,0xa)][O('0x79','0x70')]+d(-0x10,0x5)+B[d(-0x8,'0x2')][Z('teCS',-'0x1e6')]+'\x0a📎\x20URL:\x20'+B[Z('3@hx',-0x1f3)][d(-'0xf',-0xd)]+O(0x7e,0x68)+B[O(0x81,'0x88')][Z('TTSP',-'0x1e4')]+Z('%vbJ',-0x1f5)+B['video'][O(0x93,0x9d)]+O('0x75',0x65)+B['video']['views'],'rowId':usedPrefix+d(-0xf,-0xb)+B[d(-0xe,'0x2')][d('0x3',-'0xd')]+'\x20yes'})),button={'buttonText':O(0x7c,'0x6f')+command+Z('0#)V',-0x1fc),'description':d(-'0x20',-'0xa')+name+d('0x6',0x3)+command+Z('tB$A',-'0x1fa')+text+Z('&[I]',-0x1e5)+(usedPrefix+command)+d(-0x15,-'0x19'),'footerText':wm};function A(p,o){const B=f();return A=function(e,V){e=e-0xb5;let X=B[e];return X;},A(p,o);}function p(A,o){const B=f();return p=function(e,V){e=e-0xb5;let X=B[e];if(p['NDZjRS']===undefined){var U=function(Z){const d='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let O='',c='';for(let Q=0x0,G,x,W=0x0;x=Z['charAt'](W++);~x&&(G=Q%0x4?G*0x40+x:x,Q++%0x4)?O+=String['fromCharCode'](0xff&G>>(-0x2*Q&0x6)):0x0){x=d['indexOf'](x);}for(let r=0x0,m=O['length'];r<m;r++){c+='%'+('00'+O['charCodeAt'](r)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(c);};p['tqcnZh']=U,A=arguments,p['NDZjRS']=!![];}const M=B[0x0],g=e+M,J=A[g];return!J?(X=p['tqcnZh'](X),A[g]=X):X=J,X;},p(A,o);}function Z(B,e){return o(e- -'0x2c1',B);}return conn[O('0x97',0x86)](m[O(0x94,'0x9c')],button,row,m);
} catch {
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
}
}
handler.help = ['play'].map(v => v + ' <pencarian>')
handler.tags = ['downloader']
handler.command = /^(play((mp3|yt))?|ytplay)$/i
handler.limit = true
handler.register = true
export default handler
