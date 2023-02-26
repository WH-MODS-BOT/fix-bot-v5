import uploadImage from '../lib/uploadImage.js'
import deepai from 'deepai'
import fetch from 'node-fetch'
import FormData from 'form-data'

deepai.setApiKey('04f02780-e0bd-44c1-afa2-14cf5a78948c')

let handler = async (m, { conn, args, usedPrefix, command }) => {
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || q.mediaType || ''
    if (/image/g.test(mime) && !/webp/g.test(mime)) {
    	try {
			let img = await q.download?.()
			let out = await uploadImage(img)
			var resp = await deepai.callStandardApi("waifu2x", {
                        image: out,
                    })
                    let w2x1 = resp['output_url']
           var resep = await deepai.callStandardApi("waifu2x", {
                        image: w2x1,
                    })
                    // console.log(resp);
                    let w2x2 = resep['output_url']
           var resup = await   deepai.callStandardApi("torch-srgan", {
            image: w2x2,
            })
            await conn.sendFile(m.chat, resup['output_url'], 'simpcard.png', 'simp', m)
    	} catch {
    		await m.reply('Sedang membuat...')
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw 'Fotonya Mana?'
  if (!/image\/(jpe?g|png)/.test(mime)) throw `Tipe ${mime} tidak didukung!`
  let img = await q.download()
  let body = new FormData
  body.append('image', img, 'image')
  let res = await fetch('http://max-image-resolution-enhancer.codait-prod-41208c73af8fca213512856c7a09db52-0000.us-east.containers.appdomain.cloud/model/predict', {
    method: 'POST',
    body
  })
  if (res.status !== 200) throw await res.json()
  await conn.sendFile(m.chat, await res.buffer(), 'hd.jpg', 'Nihh,, Hade kan?', m)
    	}
    } else {
    	m.reply(`Kirim gambar dengan caption *${usedPrefix + command}* atau tag gambar yang sudah dikirim`)
    }
}
handler.help = ['hd', 'enhance']
handler.tags = ['tools']
handler.command = /^(hd|enhance)$/i

handler.limit = true

export default handler
