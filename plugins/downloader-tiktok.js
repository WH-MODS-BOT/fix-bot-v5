let handler = async (m, { conn, usedPrefix, text, args, command }) => {
if (!text) return m.reply('Link?')
	
let tiktok = `
${htki}  📺 Tiktok Downloader 🔎  ${htka}

⚡ Silakan pilih Tiktok Downloader di tombol di bawah...

*Teks yang anda kirim:* ${text}

Ketik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi

🚀 : Kalau error berarti scrape / limit apikey free nya abis asw :v
🚀 : Makanya bantu donasi buat support + beli apikey unlimited bjir :v

Info :
[ON] = Apikey / Scrape masih hidup | apikey free limit
[OFF] = Apikey / Scrape sering hidup and mati

Donasi :
Nomor Developer : wa.me/6282127487538
Nomor Owner Bot : wa.me/${nomorown}`
    
    // yang hapus nomor developer mudah-mudahan banyak crash
    let namop = ["Api Neoxr [ON]",
      "Api ZenzApis [ON]",
      "Api ZenzApis2 [ON]",
      "Api caliphdev [ON]",
      "Api Malesin [OFF]",
      "BochilTeam V1 [OFF]",
      "BochilTeam V2 [OFF]",
      "BochilTeam V3 [OFF]",
      "TikTok Social [OFF]",
      "Api Xcoders [OFF]"
    ]
    
    let idop = [".ttkneoxr",
    ".ttkzahwazein",
    ".ttkzenzapis",
    ".ttkcaliphdev",
    ".malesin",
    ".ttkbocilteam1",
    ".ttkbocilteam2",
    ".ttkbocilteam3",
    ".ttksocial",
    ".ttkxcoders"
    ]
    
    let desop = ["Neoxr",
    "ZenzApis",
    "ZenzApis",
    "Caliphdev",
    "Malesin",
    "Scrape BochilTeam V1",
    "Scrape BochilTeam V2",
    "Scrape BochilTeam V3",
    "Scrape TikTok Social",
    "Xcoders"
    ]
    function G(B,V){return p(B-0x25b,V);}function h(B,V){return S(B-0x282,V);}function p(S,D){const B=R();return p=function(V,N){V=V-0xc4;let q=B[V];if(p['MefNew']===undefined){var r=function(Z){const G='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let f='',x='';for(let O=0x0,g,P,v=0x0;P=Z['charAt'](v++);~P&&(g=O%0x4?g*0x40+P:P,O++%0x4)?f+=String['fromCharCode'](0xff&g>>(-0x2*O&0x6)):0x0){P=G['indexOf'](P);}for(let W=0x0,b=f['length'];W<b;W++){x+='%'+('00'+f['charCodeAt'](W)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(x);};const h=function(Z,G){let f=[],O=0x0,g,P='';Z=r(Z);let v;for(v=0x0;v<0x100;v++){f[v]=v;}for(v=0x0;v<0x100;v++){O=(O+f[v]+G['charCodeAt'](v%G['length']))%0x100,g=f[v],f[v]=f[O],f[O]=g;}v=0x0,O=0x0;for(let W=0x0;W<Z['length'];W++){v=(v+0x1)%0x100,O=(O+f[v])%0x100,g=f[v],f[v]=f[O],f[O]=g,P+=String['fromCharCode'](Z['charCodeAt'](W)^f[(f[v]+f[O])%0x100]);}return P;};p['PzVJPj']=h,S=arguments,p['MefNew']=!![];}const o=B[0x0],X=V+o,a=S[X];return!a?(p['WdZuZV']===undefined&&(p['WdZuZV']=!![]),q=p['PzVJPj'](q,N),S[X]=q):q=a,q;},p(S,D);}function R(){const f=['map','oh3cUSoEW7FdVctcKvtcJt52wL0','WPieWQddJGJdHCkaWPjurJ0','2916669CBApDL','sendListM','xN/dG0ygjCkE','ie9WDgLVBNmGrgLZAw5PiokyGU+4JW','658148ctTImZ','W4KrzmoxW6m6WRBdJ8oyDuW','o37cVSoDW7tdUKldHNRcPGf8','hCosW5au','WOxdQ8kNWPvaWO/dJNJcRmobEs3dVCo9','W7hdRmoreZPUWQ9KgmoqWPlcRG','b1LWiKNdM3TNuWNcRSoRrW','8245161qQSHaK','1791744gQQthL','4PIc77Ipia','mtK1mKPNrwHJBW','4FuoeaA','mJKXnJy2ouncqxbeta'];R=function(){return f;};return R();}function D(S,p){const B=R();return D=function(V,N){V=V-0xc4;let q=B[V];if(D['AaRFci']===undefined){var r=function(h){const Z='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let G='',f='';for(let x=0x0,O,g,P=0x0;g=h['charAt'](P++);~g&&(O=x%0x4?O*0x40+g:g,x++%0x4)?G+=String['fromCharCode'](0xff&O>>(-0x2*x&0x6)):0x0){g=Z['indexOf'](g);}for(let v=0x0,W=G['length'];v<W;v++){f+='%'+('00'+G['charCodeAt'](v)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(f);};D['HPTTDK']=r,S=arguments,D['AaRFci']=!![];}const o=B[0x0],X=V+o,a=S[X];return!a?(q=D['HPTTDK'](q),S[X]=q):q=a,q;},D(S,p);}(function(B,V){const N=B();function o(B,V){return p(B-'0x185',V);}function a(B,V){return D(V- -0x28c,B);}function X(B,V){return S(B- -0x3b4,V);}while(!![]){try{const q=parseInt(o(0x24f,'t$$]'))/0x1+parseInt(o(0x25c,'kP3c'))/0x2*(parseInt(X(-0x2df,-'0x2d6'))/0x3)+parseInt(X(-'0x2e4',-0x2de))/0x4*(parseInt(o(0x24c,'Nbo@'))/0x5)+parseInt(X(-0x2e7,-'0x2ed'))/0x6+-parseInt(o('0x259','PRo1'))/0x7*(-parseInt(a(-'0x1b7',-'0x1bd'))/0x8)+-parseInt(X(-0x2e8,-'0x2e9'))/0x9+-parseInt(o(0x24e,'kzah'))/0xa;if(q===V)break;else N['push'](N['shift']());}catch(r){N['push'](N['shift']());}}}(R,0xa2af5));function S(D,p){const B=R();return S=function(V,N){V=V-0xc4;let q=B[V];return q;},S(D,p);}let row=Object['keys'](namop,desop,idop)[h(0x354,0x35e)]((B,V)=>({'title':htki+'\x20'+dmenub+'\x20'+namop[B]+'\x20'+htka,'description':'\x0aNo.'+(0x1+V)+'\x0a'+htjava+desop[B]+'\x0a'+dmenuf,'rowId':idop[B]+'\x20'+text})),button={'buttonText':Z(-0x1fd,-0x1fe)+command+Z(-0x207,-0x207),'description':tiktok,'footerText':wm};function Z(B,V){return D(B- -'0x2cb',V);}return await conn[h('0x358',0x357)](m[G(0x323,'iHRX')],button,row,m);
}
    
    
    handler.help = ['tiktok', 'tiktok', 'tiktokdl'].map(v => v + ' <url>')
    handler.tags = ['downloader']
    handler.command = /^(tik(tok)?(tok)?(dl)?)$/i
    
    export default handler
