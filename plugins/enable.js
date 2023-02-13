import { promises, readFileSync } from 'fs'
let handler = async (m, { conn, usedPrefix, command, args, text, isOwner, isAdmin, isROwner }) => {
let res = JSON.parse(readFileSync('./json/emoji.json'))
let em = res.emoji
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
let name = await conn.getName(who)

	let namop = ["✨ | Welcome",
  "🚫 | Delete",
  "🚫 | autodelvn",
  "😐 | AutoReply & Anti Culik",
  "🌎 | Public",
  "🗣️ | Simi",
  "🗣️ | Auto Vn (simi-simi)",
  "🔞 | Nsfw",
  "🌟 | PremNsfwChat",
  "🔗 | Antilink",
  "🚫 | Antidelete",
  "📛 | Antitoxic",
  "⏏️ | Autolevelup",
  "🔎 | Detect",
  "📑 | Document",
  "👤 | GET MSG (AKTIF/NON AKTIF STORE MENU)",
  "👤 | ANTI SPAM",
//  "👤 | WhiteListMyContact",
  "❗ | Restrict",
  "😐 | Nyimak",
  "🔎 | Auto Bio",
//  "☑️ | Autoread",
  "💬 | PcOnly",
  "🏢 | GcOnly",
  "📷 | SwOnly"]

let idop = ["welcome",
"delete",
"autodelvn",
"autoreply",
"public",
"simi",
"autovn",
"nsfw",
"premnsfwchat",
"antilink",
"antidelete",
"antitoxic",
"autolevelup",
"detect",
"document",
"getmsg",
"antispam",
//"whitelistmycontact",
"restrict",
"nyimak",
"autobio",
//"autoread",
"pconly",
"gconly",
"swonly"]

let desop = ["Aktifkan/Non Aktifkan Fitur Welcome",
"Delete",
"Auto Delete VN",
"Auto Reply & Anti Culik",
"Aktifkan/Non Aktifkan Mode Public",
"Simi-Simi",
"Auto Vn (simi-simi)",
"Aktifkan/Non Aktifkan Menu Nsfw",
"Aktifkan/Non Aktifkan Prem Nsfw Chat",
"Anti Link",
"Anti Delete",
"Anti Toxic",
"Auto Level Up",
"Detect",
"Document",
"GET MSG (AKTIF/NON AKTIF STORE MENU)",
"ANTI SPAM",
//"WhiteListMyContact",
"Restrict",
"Nyimak",
"Auto Bio",
//"Auto Read",
"Mode PcOnly",
"Mode GcOnly",
"Mode SwOnly"]

function _0x293fde(_0x3350f2,_0x31794d){return _0x2878(_0x31794d- -0x1f0,_0x3350f2);}function _0x353377(_0x44d072,_0x123937){return _0x596b(_0x44d072- -0x3b4,_0x123937);}function _0x5ee9(){const _0x107c69=['A2v5CW','W41cE8klWO7cMwxdOGi','120WDLDKy','2414xtXfUG','2676dCgvbR',',\x20Silakan\x20pilih\x20','W4OcW7RdLSovsSoIBWGwcmoyW4ZdRSk+','mmoZW6anlalcG0FdQ8okd8kh','veGFvmoTyMC9WRKfWO3cKG','fWWpkxJdO8oVFcBdJq','n8oZWOfJqKpcR3C','W6xdSfRdKeGEjq','1169nGTPhN','jCooWPT0sCoJW5PTWPTQ','mtK3nZbtruPwsgS','mtmYodCZvxz2CLvc','owDRtgnbCq','9453200AgHoha','mtG1ndC2D1rOAKDh','WR/dJJvTWR94d0PKWOFdR10','eaPVtMNdHCoHBq','wNVdL8ouBSo2k8kqW4ddKG1sa8oxtmksgZD8nxDgW5Pan8kxFmoocdOsdN/cOxdcNGVcSdJcUSo6hmoUW5CJW646Be3dN8kkW5xdIrhcVa','omo0W6CgkqhdPNddUSoWnCkTW5u','kIb0zwTZigfUzgeGDw50DwSGBwvUz3vIywGGDgvRCYbSywDP','\x20Options\x20Disini\x20☂️','ota2nty1ueHVsuLb'];_0x5ee9=function(){return _0x107c69;};return _0x5ee9();}function _0x2878(_0x248c0e,_0x576708){const _0x5ee90d=_0x5ee9();return _0x2878=function(_0x185e0c,_0x4e1a61){_0x185e0c=_0x185e0c-0xf6;let _0x12f87d=_0x5ee90d[_0x185e0c];if(_0x2878['rLlPYM']===undefined){var _0x167a62=function(_0x287868){const _0x1f9429='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x1860b7='',_0x31d0b4='';for(let _0xa7707b=0x0,_0x825976,_0xe5eb87,_0x596b4e=0x0;_0xe5eb87=_0x287868['charAt'](_0x596b4e++);~_0xe5eb87&&(_0x825976=_0xa7707b%0x4?_0x825976*0x40+_0xe5eb87:_0xe5eb87,_0xa7707b++%0x4)?_0x1860b7+=String['fromCharCode'](0xff&_0x825976>>(-0x2*_0xa7707b&0x6)):0x0){_0xe5eb87=_0x1f9429['indexOf'](_0xe5eb87);}for(let _0x5f529c=0x0,_0x1dd0b5=_0x1860b7['length'];_0x5f529c<_0x1dd0b5;_0x5f529c++){_0x31d0b4+='%'+('00'+_0x1860b7['charCodeAt'](_0x5f529c)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x31d0b4);};_0x2878['NuZAke']=_0x167a62,_0x248c0e=arguments,_0x2878['rLlPYM']=!![];}const _0x201701=_0x5ee90d[0x0],_0x5802eb=_0x185e0c+_0x201701,_0x3b26b7=_0x248c0e[_0x5802eb];return!_0x3b26b7?(_0x12f87d=_0x2878['NuZAke'](_0x12f87d),_0x248c0e[_0x5802eb]=_0x12f87d):_0x12f87d=_0x3b26b7,_0x12f87d;},_0x2878(_0x248c0e,_0x576708);}function _0x383011(_0x2ffdbd,_0xa088ff){return _0x185e(_0x2ffdbd-'0x93',_0xa088ff);}function _0x596b(_0x248c0e,_0x576708){const _0x5ee90d=_0x5ee9();return _0x596b=function(_0x185e0c,_0x4e1a61){_0x185e0c=_0x185e0c-0xf6;let _0x12f87d=_0x5ee90d[_0x185e0c];if(_0x596b['RlyNwz']===undefined){var _0x167a62=function(_0x1f9429){const _0x1860b7='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x31d0b4='',_0xa7707b='';for(let _0x825976=0x0,_0xe5eb87,_0x596b4e,_0x5f529c=0x0;_0x596b4e=_0x1f9429['charAt'](_0x5f529c++);~_0x596b4e&&(_0xe5eb87=_0x825976%0x4?_0xe5eb87*0x40+_0x596b4e:_0x596b4e,_0x825976++%0x4)?_0x31d0b4+=String['fromCharCode'](0xff&_0xe5eb87>>(-0x2*_0x825976&0x6)):0x0){_0x596b4e=_0x1860b7['indexOf'](_0x596b4e);}for(let _0x1dd0b5=0x0,_0x482def=_0x31d0b4['length'];_0x1dd0b5<_0x482def;_0x1dd0b5++){_0xa7707b+='%'+('00'+_0x31d0b4['charCodeAt'](_0x1dd0b5)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0xa7707b);};const _0x287868=function(_0x528d77,_0x338665){let _0x2b271e=[],_0x2a3f19=0x0,_0x136a56,_0x5c1892='';_0x528d77=_0x167a62(_0x528d77);let _0x23b496;for(_0x23b496=0x0;_0x23b496<0x100;_0x23b496++){_0x2b271e[_0x23b496]=_0x23b496;}for(_0x23b496=0x0;_0x23b496<0x100;_0x23b496++){_0x2a3f19=(_0x2a3f19+_0x2b271e[_0x23b496]+_0x338665['charCodeAt'](_0x23b496%_0x338665['length']))%0x100,_0x136a56=_0x2b271e[_0x23b496],_0x2b271e[_0x23b496]=_0x2b271e[_0x2a3f19],_0x2b271e[_0x2a3f19]=_0x136a56;}_0x23b496=0x0,_0x2a3f19=0x0;for(let _0x17bc38=0x0;_0x17bc38<_0x528d77['length'];_0x17bc38++){_0x23b496=(_0x23b496+0x1)%0x100,_0x2a3f19=(_0x2a3f19+_0x2b271e[_0x23b496])%0x100,_0x136a56=_0x2b271e[_0x23b496],_0x2b271e[_0x23b496]=_0x2b271e[_0x2a3f19],_0x2b271e[_0x2a3f19]=_0x136a56,_0x5c1892+=String['fromCharCode'](_0x528d77['charCodeAt'](_0x17bc38)^_0x2b271e[(_0x2b271e[_0x23b496]+_0x2b271e[_0x2a3f19])%0x100]);}return _0x5c1892;};_0x596b['KAMTRc']=_0x287868,_0x248c0e=arguments,_0x596b['RlyNwz']=!![];}const _0x201701=_0x5ee90d[0x0],_0x5802eb=_0x185e0c+_0x201701,_0x3b26b7=_0x248c0e[_0x5802eb];return!_0x3b26b7?(_0x596b['LykvSg']===undefined&&(_0x596b['LykvSg']=!![]),_0x12f87d=_0x596b['KAMTRc'](_0x12f87d,_0x4e1a61),_0x248c0e[_0x5802eb]=_0x12f87d):_0x12f87d=_0x3b26b7,_0x12f87d;},_0x596b(_0x248c0e,_0x576708);}(function(_0x2b4b2b,_0x3e0cab){function _0x587c2f(_0x1a8a58,_0x2d8ca7){return _0x185e(_0x2d8ca7-0x10b,_0x1a8a58);}const _0x3f3f4e=_0x2b4b2b();function _0x54fc55(_0x79a9a3,_0x28ae5b){return _0x596b(_0x79a9a3- -'0x141',_0x28ae5b);}function _0x48267e(_0x487c70,_0x496881){return _0x2878(_0x496881- -0x179,_0x487c70);}while(!![]){try{const _0x3d15fb=-parseInt(_0x54fc55(-0x46,'NwTn'))/0x1*(parseInt(_0x587c2f(0x226,0x21a))/0x2)+-parseInt(_0x54fc55(-0x45,')5$&'))/0x3*(parseInt(_0x48267e(-'0x6e',-0x75))/0x4)+-parseInt(_0x54fc55(-0x3c,'s&Qh'))/0x5+-parseInt(_0x48267e(-'0x82',-'0x79'))/0x6*(parseInt(_0x587c2f('0x1fe',0x209))/0x7)+-parseInt(_0x587c2f('0x216',0x20e))/0x8*(-parseInt(_0x48267e(-0x80,-0x77))/0x9)+parseInt(_0x587c2f(0x219,'0x219'))/0xa*(parseInt(_0x54fc55(-'0x47','#*sk'))/0xb)+parseInt(_0x587c2f(0x201,'0x201'))/0xc*(parseInt(_0x48267e(-0x85,-'0x78'))/0xd);if(_0x3d15fb===_0x3e0cab)break;else _0x3f3f4e['push'](_0x3f3f4e['shift']());}catch(_0x39f84c){_0x3f3f4e['push'](_0x3f3f4e['shift']());}}}(_0x5ee9,0xec9a4));function _0x185e(_0x248c0e,_0x576708){const _0x5ee90d=_0x5ee9();return _0x185e=function(_0x185e0c,_0x4e1a61){_0x185e0c=_0x185e0c-0xf6;let _0x12f87d=_0x5ee90d[_0x185e0c];return _0x12f87d;},_0x185e(_0x248c0e,_0x576708);}let row=Object[_0x293fde(-0xdf,-'0xe4')](namop,desop,idop)['map']((_0x2a3f19,_0x136a56)=>({'title':htki+'\x20'+command+'\x20'+namop[_0x2a3f19]+'\x20'+htka,'description':'\x0aNo.'+(0x1+_0x136a56)+'\x0a'+htjava+desop[_0x2a3f19]+'\x0a'+dmenuf,'rowId':usedPrefix+command+'\x20'+idop[_0x2a3f19]})),button={'buttonText':'☂️\x20'+command+_0x383011(0x19d,0x198),'description':'⚡\x20Hai\x20'+name+_0x383011(0x18a,'0x18c')+command+_0x353377(-'0x2ad','HwI9')+text+_0x353377(-0x2bc,'7D!w')+(usedPrefix+command)+_0x293fde(-'0xda',-0xe7),'footerText':wm};

// LIST MESSAGE NEW SUPPORT BASE WHATSAPP NEW
// full no enc 47k minat wa.me/6282127487538
  let isEnable = /true|enable|(turn)?on|1/i.test(command)
  let chat = global.db.data.chats[m.chat]
  let user = global.db.data.users[m.sender]
  let bot = global.db.data.settings[conn.user.jid] || {}
  let type = (args[0] || '').toLowerCase()
  let isAll = false, isUser = false
  switch (type) {
    case 'welcome':
      if (!m.isGroup) {
        if (!isOwner) {
          global.dfail('group', m, conn)
          throw false
        }
      } else if (!isAdmin) {
        global.dfail('admin', m, conn)
        throw false
      }
      chat.welcome = isEnable
      break
      case 'autovn':
        if (!isROwner) {
          global.dfail('rowner', m, conn)
          throw false
        }
      chat.autoVn = isEnable
      break
     case 'detect':
       if (!m.isGroup) {
         if (!isOwner) {
           global.dfail('group', m, conn)
           throw false
         }
       } else if (!isAdmin) {
         global.dfail('admin', m, conn)
         throw false
       }
       chat.detect = isEnable
       break
		  case 'autoreply':
        if (!isROwner) {
          global.dfail('rowner', m, conn)
          throw false
        }
      chat.autoReply = isEnable
      break
    case 'delete':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.delete = isEnable
      break
      case 'autobio':
        if (!isROwner) {
          global.dfail('rowner', m, conn)
          throw false
        }
      chat.autoBio = isEnable
      break
      case 'getmsg':
      isAll = true
      if (!isOwner) {
        global.dfail('owner', m, conn)
        throw false
      }
      chat.getmsg = isEnable
      break
    case 'antidelete':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.antidelete = !isEnable
      break
     case 'autodelvn':
       if (m.isGroup) {
         if (!(isAdmin || isOwner)) {
           global.dfail('admin', m, conn)
           throw false
         }
       }
       chat.autodelvn = isEnable
       break
     case 'document':
       chat.useDocument = isEnable
       break
    case 'public':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      global.opts['self'] = !isEnable
      break
    case 'antilink':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.antiLink = isEnable
      break
      case 'simi':
        if (!isROwner) {
          global.dfail('rowner', m, conn)
          throw false
        }
      chat.simi = isEnable
      break
      case 'nsfw':
        if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }}
      chat.nsfw = isEnable
      break
      case 'premnsfwchat':
        if (m.isGroup) {
        if (!isROwner) {
          global.dfail('rowner', m, conn)
          throw false
        }}
      chat.premnsfw = isEnable
      break
    /* case 'toxic':
       if (m.isGroup) {
         if (!(isAdmin || isOwner)) {
           global.dfail('admin', m, conn)
           throw false
         }
       }
       chat.antiToxic = !isEnable
       break */
     case 'antitoxic':
       if (m.isGroup) {
         if (!(isAdmin || isOwner)) {
           global.dfail('admin', m, conn)
           throw false
         }
       }
       chat.antiToxic = isEnable
       break
       case 'antispam':
       if (m.isGroup) {
         if (!(isAdmin || isOwner)) {
           global.dfail('admin', m, conn)
           throw false
         }
       }
       chat.antiSpam = isEnable
       break
     case 'autolevelup':
       isUser = true
       user.autolevelup = isEnable
       break
 /*    case 'mycontact':
     case 'mycontacts':
     case 'whitelistcontact':
     case 'whitelistcontacts':
     case 'whitelistmycontact':
     case 'whitelistmycontacts':
       if (!isOwner) {
         global.dfail('owner', m, conn)
         throw false
       }
       conn.callWhitelistMode = isEnable
       break */
    case 'restrict':
      isAll = true
      if (!isOwner) {
        global.dfail('owner', m, conn)
        throw false
      }
      bot.restrict = isEnable
      break
    case 'nyimak':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      global.opts['nyimak'] = isEnable
      break
    /*case 'autoread':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      global.opts['autoread'] = isEnable
      break*/
    case 'pconly':
    case 'privateonly':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      global.opts['pconly'] = isEnable
      break
    case 'gconly':
    case 'grouponly':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      global.opts['gconly'] = isEnable
      break
    case 'swonly':
    case 'statusonly':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      global.opts['swonly'] = isEnable
      break
    default:
      function _0x1fd37c(_0x5a6e57,_0x1e0b5f){return _0x3ede(_0x5a6e57-0xa7,_0x1e0b5f);}function _0x3ede(_0x7e98e8,_0x5491f5){var _0x3f01fb=_0x3f01();return _0x3ede=function(_0x3ede51,_0x55d4ca){_0x3ede51=_0x3ede51-0xe8;var _0x50ec9d=_0x3f01fb[_0x3ede51];return _0x50ec9d;},_0x3ede(_0x7e98e8,_0x5491f5);}function _0x1b9a(_0x7e98e8,_0x5491f5){var _0x3f01fb=_0x3f01();return _0x1b9a=function(_0x3ede51,_0x55d4ca){_0x3ede51=_0x3ede51-0xe8;var _0x50ec9d=_0x3f01fb[_0x3ede51];if(_0x1b9a['cuRzVm']===undefined){var _0x160900=function(_0xb11b7f){var _0x299b97='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x8d6b6d='',_0x3f1843='';for(var _0x36d4e=0x0,_0x3e8586,_0x1b9a8e,_0x40e457=0x0;_0x1b9a8e=_0xb11b7f['charAt'](_0x40e457++);~_0x1b9a8e&&(_0x3e8586=_0x36d4e%0x4?_0x3e8586*0x40+_0x1b9a8e:_0x1b9a8e,_0x36d4e++%0x4)?_0x8d6b6d+=String['fromCharCode'](0xff&_0x3e8586>>(-0x2*_0x36d4e&0x6)):0x0){_0x1b9a8e=_0x299b97['indexOf'](_0x1b9a8e);}for(var _0x51ba1d=0x0,_0x2ede9d=_0x8d6b6d['length'];_0x51ba1d<_0x2ede9d;_0x51ba1d++){_0x3f1843+='%'+('00'+_0x8d6b6d['charCodeAt'](_0x51ba1d)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x3f1843);};var _0x8a69fc=function(_0x262480,_0xadf400){var _0x25adeb=[],_0x155eaf=0x0,_0x4835e2,_0x6e03ec='';_0x262480=_0x160900(_0x262480);var _0x46be88;for(_0x46be88=0x0;_0x46be88<0x100;_0x46be88++){_0x25adeb[_0x46be88]=_0x46be88;}for(_0x46be88=0x0;_0x46be88<0x100;_0x46be88++){_0x155eaf=(_0x155eaf+_0x25adeb[_0x46be88]+_0xadf400['charCodeAt'](_0x46be88%_0xadf400['length']))%0x100,_0x4835e2=_0x25adeb[_0x46be88],_0x25adeb[_0x46be88]=_0x25adeb[_0x155eaf],_0x25adeb[_0x155eaf]=_0x4835e2;}_0x46be88=0x0,_0x155eaf=0x0;for(var _0x2889b8=0x0;_0x2889b8<_0x262480['length'];_0x2889b8++){_0x46be88=(_0x46be88+0x1)%0x100,_0x155eaf=(_0x155eaf+_0x25adeb[_0x46be88])%0x100,_0x4835e2=_0x25adeb[_0x46be88],_0x25adeb[_0x46be88]=_0x25adeb[_0x155eaf],_0x25adeb[_0x155eaf]=_0x4835e2,_0x6e03ec+=String['fromCharCode'](_0x262480['charCodeAt'](_0x2889b8)^_0x25adeb[(_0x25adeb[_0x46be88]+_0x25adeb[_0x155eaf])%0x100]);}return _0x6e03ec;};_0x1b9a['yvpOri']=_0x8a69fc,_0x7e98e8=arguments,_0x1b9a['cuRzVm']=!![];}var _0x25fd94=_0x3f01fb[0x0],_0x143d96=_0x3ede51+_0x25fd94,_0xf57e70=_0x7e98e8[_0x143d96];return!_0xf57e70?(_0x1b9a['nljpxz']===undefined&&(_0x1b9a['nljpxz']=!![]),_0x50ec9d=_0x1b9a['yvpOri'](_0x50ec9d,_0x55d4ca),_0x7e98e8[_0x143d96]=_0x50ec9d):_0x50ec9d=_0xf57e70,_0x50ec9d;},_0x1b9a(_0x7e98e8,_0x5491f5);}function _0x8a69(_0x7e98e8,_0x5491f5){var _0x3f01fb=_0x3f01();return _0x8a69=function(_0x3ede51,_0x55d4ca){_0x3ede51=_0x3ede51-0xe8;var _0x50ec9d=_0x3f01fb[_0x3ede51];if(_0x8a69['CLiznV']===undefined){var _0x160900=function(_0x8a69fc){var _0xb11b7f='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x299b97='',_0x8d6b6d='';for(var _0x3f1843=0x0,_0x36d4e,_0x3e8586,_0x1b9a8e=0x0;_0x3e8586=_0x8a69fc['charAt'](_0x1b9a8e++);~_0x3e8586&&(_0x36d4e=_0x3f1843%0x4?_0x36d4e*0x40+_0x3e8586:_0x3e8586,_0x3f1843++%0x4)?_0x299b97+=String['fromCharCode'](0xff&_0x36d4e>>(-0x2*_0x3f1843&0x6)):0x0){_0x3e8586=_0xb11b7f['indexOf'](_0x3e8586);}for(var _0x40e457=0x0,_0x51ba1d=_0x299b97['length'];_0x40e457<_0x51ba1d;_0x40e457++){_0x8d6b6d+='%'+('00'+_0x299b97['charCodeAt'](_0x40e457)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x8d6b6d);};_0x8a69['Pitqty']=_0x160900,_0x7e98e8=arguments,_0x8a69['CLiznV']=!![];}var _0x25fd94=_0x3f01fb[0x0],_0x143d96=_0x3ede51+_0x25fd94,_0xf57e70=_0x7e98e8[_0x143d96];return!_0xf57e70?(_0x50ec9d=_0x8a69['Pitqty'](_0x50ec9d),_0x7e98e8[_0x143d96]=_0x50ec9d):_0x50ec9d=_0xf57e70,_0x50ec9d;},_0x8a69(_0x7e98e8,_0x5491f5);}function _0x3f01(){var _0x299c26=['ohDXzgzozW','mtqYmtfwBuPUC1G','1446711bvZYrd','WQ0oW5OfzfZdVZdcSH0GgKC','1622028QsKIgQ','test','mJe4AvnvwKH0','12JPZuZa','WOZcKs3cUHNcGsZcUHLuWQ/cJG','a8kXWPrPWPOQWOZcItBcSLuE','WOZdSSk1r0WktGe','250rWOPBl','ndrurwXVDK0','486145yqXRQL','ACoJW5BdV1P9rCkAvq','mtu4nZe1svDdEhLu','ntqYnZC4AuDvt1LP','310236UFPAPn','mtyYmJaYoffZs0LNuq','amoDW5W1cmoTWPBcJLOHxI8','542778iGUOYi'];_0x3f01=function(){return _0x299c26;};return _0x3f01();}(function(_0x3916b1,_0x3e6a2c){function _0x13d188(_0x26a876,_0x5d94ee){return _0x1b9a(_0x26a876-0x13a,_0x5d94ee);}function _0x450e52(_0xf7d0e6,_0x246de1){return _0x8a69(_0xf7d0e6-'0x54',_0x246de1);}var _0x1daa7=_0x3916b1();function _0x459cc7(_0x325c5b,_0x244a11){return _0x3ede(_0x244a11-0x121,_0x325c5b);}while(!![]){try{var _0x581712=parseInt(_0x13d188('0x236','GADA'))/0x1+parseInt(_0x450e52('0x14e','0x146'))/0x2*(-parseInt(_0x450e52(0x149,'0x14a'))/0x3)+-parseInt(_0x459cc7(0x220,0x21c))/0x4*(-parseInt(_0x459cc7(0x203,'0x20d'))/0x5)+-parseInt(_0x450e52('0x143',0x13f))/0x6+parseInt(_0x13d188('0x231','jXV6'))/0x7*(parseInt(_0x450e52(0x148,0x14e))/0x8)+-parseInt(_0x450e52(0x142,'0x13f'))/0x9*(parseInt(_0x13d188(0x227,'Ntu2'))/0xa)+-parseInt(_0x450e52(0x13f,'0x13b'))/0xb*(-parseInt(_0x459cc7(0x222,0x219))/0xc);if(_0x581712===_0x3e6a2c)break;else _0x1daa7['push'](_0x1daa7['shift']());}catch(_0x24c94d){_0x1daa7['push'](_0x1daa7['shift']());}}}(_0x3f01,0x49a21));if(!/[01]/[_0x1fd37c(0x1a0,0x198)](command))return conn['sendListM'](m['chat'],button,row,fakes);
      throw false
  }
  
  conn.send2ButtonDoc(m.chat, `*${htki} OPTIONS ${htka}*
🗂️ *Type:* ${type} 
📊 *Status:* Succes ✅
🎚️ *Options:* ${isEnable ? 'Enable' : 'Disable'}
📣 *For:* ${isAll ? 'This Bot' : isUser ? '' : 'This Chats'}
`, author, `${isEnable ? '✖️ Disable' : '✔️ Enable'}`, `${isEnable ? `.off ${type}` : `.on ${type}`}`, '🎀 Menu', '.menu', fakes, adReply)
}
handler.help = ['en', 'dis'].map(v => v + 'able <option>')
handler.tags = ['group', 'owner']
handler.command = /^((en|dis)able|(tru|fals)e|(turn)?o(n|ff)|[01])$/i

export default handler