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

let desop = ["Nomor Owner",
"Nomor Owner V2",
"Pengembang",
"Creator",
"Biodata",
"Script",
"Donasi",
"Sewa",
"Buy Premium"
]
function w(){const Z=['W7SwbLXerdJcKfBcKSkbqhew','keys','1594770QfysXD','WR3dRCoXs3S5W51coW','2104456AeXxnc','1235206dTsSrM','tSo1W7Cb','mtiZntiWnMruC1nYtq','otC5mtzPwev3tw0','mta2odK2nNfOB1HTBW','ndyYovnuB1zJzq','4PMF77Mywmo3zanKcHNdL1/dMN7cRUkzSo+4Rq','gCkpcSotWQqXWPhdSLO','WQddO8kQqKqtqSkYcCocCW','mtuYmdiYmJrNCvvmyMq','WOxdHqXZW5CBWO86ebO','1516MIUpFX','pbddKSk5ESkVn8onWQrtW5b5W4K'];w=function(){return Z;};return w();}function l(c,i){const F=w();return l=function(J,o){J=J-0x90;let A=F[J];if(l['YIWPon']===undefined){var U=function(D){const s='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let Z='',I='';for(let b=0x0,d,T,P=0x0;T=D['charAt'](P++);~T&&(d=b%0x4?d*0x40+T:T,b++%0x4)?Z+=String['fromCharCode'](0xff&d>>(-0x2*b&0x6)):0x0){T=s['indexOf'](T);}for(let H=0x0,C=Z['length'];H<C;H++){I+='%'+('00'+Z['charCodeAt'](H)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(I);};l['zCLGEN']=U,c=arguments,l['YIWPon']=!![];}const m=F[0x0],K=J+m,L=c[K];return!L?(A=l['zCLGEN'](A),c[K]=A):A=L,A;},l(c,i);}const s=i,D=c;function i(c,l){const F=w();return i=function(J,o){J=J-0x90;let A=F[J];if(i['sSZIVx']===undefined){var U=function(s){const Z='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let I='',b='';for(let d=0x0,T,P,H=0x0;P=s['charAt'](H++);~P&&(T=d%0x4?T*0x40+P:P,d++%0x4)?I+=String['fromCharCode'](0xff&T>>(-0x2*d&0x6)):0x0){P=Z['indexOf'](P);}for(let C=0x0,z=I['length'];C<z;C++){b+='%'+('00'+I['charCodeAt'](C)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(b);};const D=function(Z,I){let b=[],d=0x0,T,P='';Z=U(Z);let H;for(H=0x0;H<0x100;H++){b[H]=H;}for(H=0x0;H<0x100;H++){d=(d+b[H]+I['charCodeAt'](H%I['length']))%0x100,T=b[H],b[H]=b[d],b[d]=T;}H=0x0,d=0x0;for(let k=0x0;k<Z['length'];k++){H=(H+0x1)%0x100,d=(d+b[H])%0x100,T=b[H],b[H]=b[d],b[d]=T,P+=String['fromCharCode'](Z['charCodeAt'](k)^b[(b[H]+b[d])%0x100]);}return P;};i['UlwFCB']=D,c=arguments,i['sSZIVx']=!![];}const m=F[0x0],K=J+m,L=c[K];return!L?(i['wfRrEt']===undefined&&(i['wfRrEt']=!![]),A=i['UlwFCB'](A,o),c[K]=A):A=L,A;},i(c,l);}(function(F,J){const L=c,K=i,m=l,o=F();while(!![]){try{const A=-parseInt(m(0x99))/0x1+parseInt(m(0x9b))/0x2+-parseInt(m('0x9c'))/0x3*(-parseInt(K('0xa1','ZKXs'))/0x4)+parseInt(L('0x94'))/0x5+parseInt(K('0x95','%FSx'))/0x6*(-parseInt(K(0x9f,'5w)j'))/0x7)+-parseInt(K('0x91','y6#I'))/0x8+parseInt(K('0x92','Szxc'))/0x9;if(A===J)break;else o['push'](o['shift']());}catch(U){o['push'](o['shift']());}}}(w,0xac56b));function c(l,i){const F=w();return c=function(J,o){J=J-0x90;let A=F[J];return A;},c(l,i);}let row=Object[D(0x93)](namop,desop,idop)['map']((F,J)=>({'title':htki+'\x20'+dmenub+'\x20'+namop[F]+'\x20'+htka,'description':s('0x98','DM[o')+(0x1+J)+'\x0a'+htjava+desop[F]+'\x0a'+dmenuf,'rowId':''+idop[F]})),button={'buttonText':s('0x9d','dZ$i'),'description':teks,'footerText':wm};

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
