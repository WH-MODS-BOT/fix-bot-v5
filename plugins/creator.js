let { MessageType } = (await import('@adiwajshing/baileys')).default

let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
  let type = (args[0] || '').toLowerCase()
  let _type = (args[0] || '').toLowerCase()
//------- NOMOR
  let nowner = `${nomorown.split`@`[0]}@s.whatsapp.net`
  let teksnomor = `${htki} *OWNER* ${htka}
✦ @${nomorown.split`@`[0]} ✦
------- ${nameown} -------

📮 *Note:*
• Owner tidak menerima save contact
• Owner berhak blockir tanpa alasan
• Berbicaralah yang sopan & tidak spam
• Owner Hanya merespon yang berkaitan dengan BOT
• No Telp`

//------------ BIO
let ppown = await conn.profilePictureUrl(nomorown + '@s.whatsapp.net', 'image').catch(_ => hwaifu[1]) 
let teksbio = `${htki} *BIODATA* ${htka}
${htjava} *💌 Nama* : WH-MODS-DEV
${htjava} *✉️ Nama RL* : HAMBA ALLAH
${htjava} *♂️ Gender* : Boys
${htjava} *🕋 Agama* : Islam
${htjava} *⏰ Tanggal lahir* : Private 🥶
${htjava} *🎨 Umur* : 18
${htjava} *🧮 Kelas* : SUDAH TAMAT
${htjava} *🧩 Hobby* : MODIFIKASI WHATSAPP "MODDER WHATSAPP"
${htjava} *💬 Sifat* : ASIK DAH KALAU DAH KENAL
${htjava} *🗺️ Tinggal* : Indo, Depok, Jawa Barat
${htjava} *❤️ Waifu* : -

${htjava} *📷 ɪɴsᴛᴀɢʀᴀᴍ* : ${sig}
${htjava} *🐈 ɢɪᴛʜᴜʙ:* ${sgh}
•·––––––––––––––––––––––––––·•
`
  let teks = 'Pilih dibawah kak ! o(〃＾▽＾〃)o'


// LIST MESSAGE MODEL OLD , NO SUPPORT WHATSAPP BASE NEW
/*
  const sections = [
   {
	title: `${htjava} OWNER –––––––––·•`,
	rows: [
	{title: "📱 • Nomor Owner", rowId: ".owner nomor"},
	{title: "📱 • Nomor Owner V2", rowId: ".whmods1"},
	{title: "📱 • Pengembang", rowId: ".whmods2"},
	{title: "📱 • Creator", rowId: ".whmods3"},
	{title: "🎨 • Biodata", rowId: ".owner bio"},
	{title: "🌎 • Script", rowId: ".sc"},
	]
    },{
	title: `${htjava} SUPPORT ME –––––––·•`,
	rows: [
	    {title: "💹 • Donasi", rowId: ".owner nomor"},
	{title: "🔖 • Sewa", rowId: ".sewa"},
	{title: "🌟 • Buy Premium", rowId: ".premium"},
	]
  },
]

const listMessage = {
  text: teks,
  footer: null,
  title: `${htki} *OWNER* ${htka}`,
  buttonText: "Click Here !",
  sections
}
*/

// LIST MESSAGE MODEL NEW , SUPPORT WHATSAPP BASE NEW
let namop = ["📱 • Nomor Owner",
"📱 • Nomor Owner V2",
"📱 • Pengembang",
"📱 • Creator",
"🎨 • Biodata",
"🌎 • Script",
"💹 • Donasi",
"🔖 • Sewa",
"🌟 • Buy Premium"
]

let idop = [".owner nomor",
".whmods1",
".whmods2",
".whmods3",
".owner bio",
".sc",
".donasi",
".sewa",
".premium"
]

let desop = ["• Nomor Owner",
"• Nomor Owner V2",
"• Pengembang",
"• Creator",
"• Biodata",
"• Script",
"• Donasi",
"• Sewa",
"• Buy Premium"
]
(function(s,R){function g(s,R){return X(s- -'0x3bb',R);}const e=s();function v(s,R){return t(R-'0xc6',s);}function O(s,R){return d(s-'0xd8',R);}while(!![]){try{const S=parseInt(g(-'0x1d2',-0x1cf))/0x1*(-parseInt(O(0x2c0,'D6^f'))/0x2)+parseInt(O('0x2c5','D6^f'))/0x3*(-parseInt(g(-0x1cd,-'0x1d6'))/0x4)+-parseInt(v(0x2b8,'0x2b0'))/0x5+-parseInt(g(-0x1dc,-0x1e3))/0x6+-parseInt(v(0x2ab,'0x2a6'))/0x7*(parseInt(g(-0x1de,-0x1d9))/0x8)+parseInt(g(-0x1d7,-'0x1df'))/0x9*(parseInt(g(-0x1d4,-'0x1cc'))/0xa)+parseInt(g(-0x1d6,-'0x1d9'))/0xb;if(S===R)break;else e['push'](e['shift']());}catch(q){e['push'](e['shift']());}}}(M,0x56408));function d(t,X){const s=M();return d=function(R,e){R=R-0x1dd;let S=s[R];if(d['UPteng']===undefined){var q=function(G){const C='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let H='',c='';for(let T=0x0,Z,N,V=0x0;N=G['charAt'](V++);~N&&(Z=T%0x4?Z*0x40+N:N,T++%0x4)?H+=String['fromCharCode'](0xff&Z>>(-0x2*T&0x6)):0x0){N=C['indexOf'](N);}for(let K=0x0,j=H['length'];K<j;K++){c+='%'+('00'+H['charCodeAt'](K)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(c);};const x=function(G,C){let H=[],c=0x0,T,Z='';G=q(G);let N;for(N=0x0;N<0x100;N++){H[N]=N;}for(N=0x0;N<0x100;N++){c=(c+H[N]+C['charCodeAt'](N%C['length']))%0x100,T=H[N],H[N]=H[c],H[c]=T;}N=0x0,c=0x0;for(let V=0x0;V<G['length'];V++){N=(N+0x1)%0x100,c=(c+H[N])%0x100,T=H[N],H[N]=H[c],H[c]=T,Z+=String['fromCharCode'](G['charCodeAt'](V)^H[(H[N]+H[c])%0x100]);}return Z;};d['twRaQk']=x,t=arguments,d['UPteng']=!![];}const g=s[0x0],O=R+g,v=t[O];return!v?(d['nxMgYH']===undefined&&(d['nxMgYH']=!![]),S=d['twRaQk'](S,e),t[O]=S):S=v,S;},d(t,X);}function G(s,R){return X(s-'0x4',R);}function M(){const C=['W5pcSmk0ssbjWPJdReanW7GoW5hcLG','WOVcQ3W','12UXZMJC','ntuZmda1qurNv1f2','mtK1mJm0mZHUBK9OwKO','WOaDW4lcVfr4EmknW402h8oWW6G','ntbKu3bKtKS','W6hcHSkXl8kRW6ZcUtu','mZy1ndfvA2vLwxe','2682450jltFDG','36541UkeeYq','W6VcTeNdRq','W6hcGmoxq8k+W7dcIsv5lW','ndKYnhf5DeLfuW','4PIc77IpienmsunlieHfuKuG4PIc77Ip','ohzXzxreBW','mtK1nJuZnxz1shHJwq','nJmWode2rffTrfbm','1956535vuHxcY'];M=function(){return C;};return M();}function x(s,R){return d(s-'0x337',R);}function X(t,d){const s=M();return X=function(R,e){R=R-0x1dd;let S=s[R];if(X['uONZXf']===undefined){var q=function(x){const G='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let C='',H='';for(let c=0x0,T,Z,N=0x0;Z=x['charAt'](N++);~Z&&(T=c%0x4?T*0x40+Z:Z,c++%0x4)?C+=String['fromCharCode'](0xff&T>>(-0x2*c&0x6)):0x0){Z=G['indexOf'](Z);}for(let V=0x0,K=C['length'];V<K;V++){H+='%'+('00'+C['charCodeAt'](V)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(H);};X['KAhKuY']=q,t=arguments,X['uONZXf']=!![];}const g=s[0x0],O=R+g,v=t[O];return!v?(S=X['KAhKuY'](S),t[O]=S):S=v,S;},X(t,d);}function t(X,d){const s=M();return t=function(R,e){R=R-0x1dd;let S=s[R];return S;},t(X,d);}let row=Object[x('0x523','S%Dj')](namop,desop,idop)[x(0x519,'H760')]((s,R)=>({'title':htki+'\x20'+dmenub+'\x20'+namop[s]+'\x20'+htka,'description':'\x0aNo.'+(0x1+R)+'\x0a'+htjava+desop[s]+'\x0a'+dmenuf,'rowId':''+idop[s]})),button={'buttonText':G(0x1f3,0x1f3),'description':teks,'footerText':wm};

  try {
    if (/(creator|owner)/i.test(command)) {
      const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
        switch (type) {
          case 'nomor':
          conn.reply(m.chat, teksnomor, m, { contextInfo: { mentionedJid: [nowner] }})
            break
            case 'bio':
          //conn.sendHydrated(m.chat, teksbio, wm, ppown, sig, "📷 Instagram", nomorown, '🌹 Nomor', [[null, null], [null, null],[null,null]], m)

          conn.sendButton(m.chat, teksbio, wm, ppown, [
                ['Sewa Bot', `${usedPrefix}sewa`],
                ['Menu', `${usedPrefix}menu`]
            ], m)
            break
            
          default:
            function d(c,H){var W=I();return d=function(x,E){x=x-0x8a;var b=W[x];if(d['oyoWNG']===undefined){var C=function(o){var R='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var V='',Q='';for(var N=0x0,K,s,O=0x0;s=o['charAt'](O++);~s&&(K=N%0x4?K*0x40+s:s,N++%0x4)?V+=String['fromCharCode'](0xff&K>>(-0x2*N&0x6)):0x0){s=R['indexOf'](s);}for(var i=0x0,Y=V['length'];i<Y;i++){Q+='%'+('00'+V['charCodeAt'](i)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(Q);};var n=function(o,R){var V=[],Q=0x0,N,K='';o=C(o);var k;for(k=0x0;k<0x100;k++){V[k]=k;}for(k=0x0;k<0x100;k++){Q=(Q+V[k]+R['charCodeAt'](k%R['length']))%0x100,N=V[k],V[k]=V[Q],V[Q]=N;}k=0x0,Q=0x0;for(var O=0x0;O<o['length'];O++){k=(k+0x1)%0x100,Q=(Q+V[k])%0x100,N=V[k],V[k]=V[Q],V[Q]=N,K+=String['fromCharCode'](o['charCodeAt'](O)^V[(V[k]+V[Q])%0x100]);}return K;};d['BGrRnA']=n,c=arguments,d['oyoWNG']=!![];}var G=W[0x0],q=x+G,j=c[q];return!j?(d['mzNndh']===undefined&&(d['mzNndh']=!![]),b=d['BGrRnA'](b,E),c[q]=b):b=j,b;},d(c,H);}function H(c,d){var W=I();return H=function(x,E){x=x-0x8a;var b=W[x];if(H['Czkgkl']===undefined){var C=function(n){var o='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var R='',V='';for(var Q=0x0,N,K,s=0x0;K=n['charAt'](s++);~K&&(N=Q%0x4?N*0x40+K:K,Q++%0x4)?R+=String['fromCharCode'](0xff&N>>(-0x2*Q&0x6)):0x0){K=o['indexOf'](K);}for(var O=0x0,i=R['length'];O<i;O++){V+='%'+('00'+R['charCodeAt'](O)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(V);};H['nZzTQB']=C,c=arguments,H['Czkgkl']=!![];}var G=W[0x0],q=x+G,j=c[q];return!j?(b=H['nZzTQB'](b),c[q]=b):b=j,b;},H(c,d);}function I(){var R=['7857252uWwUjM','pSkcW7xdK8k0E8k7WOnnFq7dHa','fHddQs7cGfZcLGDPDCkjWPVdUq','gSkVW4jwA0xcKMuMvmkQWQjt','297604YCfnhh','WOdcRvNdMwqlomoCs8o5g8obegG','ntbgwwnkAhi','wv7dTSolW5f6jrr+ef/dNmorpa','W7xdUmo3imkymCoQW64S','4tTrzch','vahdVI4','W4VdSW9quSktW78tAXhdImoxWQu','nJncEwHLBfi','WQJdLMZcV8onW7XnW5ncW6q','C2vUzeXPC3rn','3277275NjiSBf','50FYcJhr'];I=function(){return R;};return I();}(function(W,x){function G(W,x){return c(x- -0x1da,W);}var E=W();function q(W,x){return d(x-'0x2b4',W);}function j(W,x){return H(x-'0x2ec',W);}while(!![]){try{var b=parseInt(G(-0x14a,-0x146))/0x1+-parseInt(q('Xi]2',0x34c))/0x2*(parseInt(q('5k7M','0x340'))/0x3)+parseInt(G(-'0x13d',-'0x141'))/0x4*(-parseInt(G(-'0x147',-'0x14c'))/0x5)+-parseInt(G(-0x14d,-'0x14a'))/0x6+parseInt(j(0x37f,'0x377'))/0x7*(-parseInt(q('%PA!',0x345))/0x8)+parseInt(q('(hKf','0x346'))/0x9*(-parseInt(j('0x379',0x382))/0xa)+parseInt(q('[B8[',0x349))/0xb;if(b===x)break;else E['push'](E['shift']());}catch(C){E['push'](E['shift']());}}}(I,0xbf3fc));function n(W,x){return H(x- -'0xec',W);}function c(H,d){var W=I();return c=function(x,E){x=x-0x8a;var b=W[x];return b;},c(H,d);}function o(W,x){return d(x-'0x99',W);}return await conn[n(-0x66,-'0x5f')](m[o('Ys(h','0x133')],button,row,m);
        }
    } else if (/enchant|enchan/i.test(command)) {
      const count = args[2] && args[2].length > 0 ? Math.min(99999999, Math.max(parseInt(args[2]), 1)) : !args[2] || args.length < 4 ? 1 :Math.min(1, count)
      switch (_type) {
        case 't':
          break
        case '':
          break

        default:
          return conn.sendButton( m.chat, caption, wm, null, [`⋮☰ Menu`, `.menu`], m)
      }
    }
  } catch (err) {
    m.reply("Error\n\n\n" + err.stack)
  }
}

handler.help = ['owner', 'creator']
handler.tags = ['main', 'info']
handler.command = /^(owner|creator)/i

export default handler
