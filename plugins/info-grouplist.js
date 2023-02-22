let handler = async (m, { conn, usedPrefix, text, command, args, isOwner, isAdmin, isROwner }) => {
	let groups = Object.values(await conn.groupFetchAllParticipating())
    let listSections = []
	Object.keys(groups).map((i, index) => {
	listSections.push([++index + ' ' + cmenub + ' ' + groups[i].subject, [
          ['More Information', usedPrefix + command + ' gw ' + [i], '']
        ]])
	})
	
  let type = (args[0] || '').toLowerCase()

  switch (type) {
      case 'gw':
      let i = args[1]
      let ppgc = await conn.profilePictureUrl(groups[i].id, 'image')
      let str = `*${dmenut}* ${[i]}
*${dmenub} Name :* ${groups[i].subject}
*${dmenub} Owner :* ${groups[i].owner ? "@" + groups[i].owner.split("@")[0] : "Unknown"}
*${dmenub} Subject Owner :* ${groups[i].subjectOwner ? "@" + groups[i].subjectOwner.split("@")[0] : "Unknown"}
*${dmenub} ID :* ${groups[i].id}
*${dmenub} Restrict :* ${groups[i].restrict}
*${dmenub} Announce :* ${groups[i].announce}
*${dmenub} Ephemeral :* ${new Date(groups[i].ephemeralDuration* 1000).toDateString()}
*${dmenub} Desc ID :* ${groups[i].descId}
*${dmenub} Description :* ${groups[i].desc?.toString().slice(0, 10) + '...' || 'unknown'}
*${dmenub} Admins :* ${groups[i].participants.filter(p => p.admin).map((v, i) => `\n${dmenub} ${i + 1}. @${v.id.split('@')[0]}`).join(' [admin]')}
${isOwner ? `*${dmenub} Participants :* ${groups[i].participants.length}` : ''}
${isOwner ? `*${dmenub} isBotAdmin :* [ ${!!groups[i].participants.find(v => v.id == conn.user.jid).admin} ]` : ''}
*${dmenub} Created :* ${new Date(groups[i].subjectTime* 1000).toDateString()}
*${dmenub} Creation :* ${new Date(groups[i].creation* 1000).toDateString()}
*${dmenub} Size :* ${groups[i].size}
${dmenuf}`
      await conn.sendButtonImg(m.chat, ppgc ? ppgc : logo, str, author, 'B A C K', '.menu', fakes, adReply)
       break
    default:
      if (!/[01]/.test(command)) return conn.sendList(m.chat, htki + ' 📺 Group List 🔎 ' + htka, `⚡ Silakan pilih Group List di tombol di bawah...\n*Teks yang anda kirim:* ${text ? text : 'Kosong'}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`, author, `☂️ Group List Disini ☂️`, listSections, m)
      throw false
  }
}
handler.menugroup = ['groups', 'grouplist']
handler.tagsgroup = ['group']
handler.command = /^((gro?ups?list)|(listgro?ups?)|(listgc))$/i

export default handler