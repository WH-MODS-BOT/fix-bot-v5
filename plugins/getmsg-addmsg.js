const { proto } = (await import('@adiwajshing/baileys')).default

let handler = async (m, { conn, text, command, usedPrefix }) => {
	let M = proto.WebMessageInfo;
	if (!m.quoted) throw `balas pesan dengan perintah *${usedPrefix + command}*`;
	if (!text) throw `penggunaan: ${usedPrefix + command} <teks>\n\ncontoh:\n${usedPrefix + command} tes`;
	let msgs = global.db.data.msgs
	if (text in msgs) throw `'${text}' telah terdaftar di List Msg`
	msgs[text] = M.fromObject(await m.getQuotedObj()).toJSON()
	m.reply(`berhasil menambahkan ${text} ke List Msg.\n\nakses dengan mengetik namanya`.trim())
}
handler.help = ['vn', 'msg', 'video', 'audio', 'img', 'stiker', 'gif'].map(v => 'add' + v + ' <teks>')
handler.tags = ['database']
handler.command = /^add(vn|msg|video|audio|img|stic?ker|gif)$/

export default handler