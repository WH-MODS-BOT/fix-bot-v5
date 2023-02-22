import axios from "axios"
import fetch from "node-fetch"
import cheerio from "cheerio"
import got from "got"

let handler = async (m, { conn, text, args, usedPrefix, command }) => {
let spas = "                "
try {
if (!text) throw "\nSertakan querinya kak !\n\nContoh: .tiktok url"
    m.reply(wait)
    let ler = await(await fetch("https://api.tikdl.caliphdev.codes/video?url=" + text)).json()
    let cer = ler.result
	let cap = `${spas}*[ T I K T O K ]*

*ID:* ${cer.id}
*Title:* ${cer.title}
*Created:* ${cer.created_at}

${readMore}${spas}*[ S T A T S ]*
*Like:* ${cer.stats.likeCount}
*Comment:* ${cer.stats.commentCount}
*Share:* ${cer.stats.shareCount}
*Play:* ${cer.stats.playCount}
*Saved:* ${cer.stats.saveCount}

${spas}*[ V I D E O ]*
*Widh:* ${cer.video.width}
*Height:* ${cer.video.height}
*Duration:* ${cer.video.durationFormatted}
*Ratio:* ${cer.video.ratio}

${spas}*[ A U D I O ]*
*ID:* ${cer.music.id}
*Title:* ${cer.music.title}
*Author:* ${cer.music.author}
*Duration:* ${cer.music.durationFormatted}
`
 conn.sendButton(m.chat, cap, author, cer.video.watermark, [["🎥 Video [NO WM]", usedPrefix + "get " + cer.video.noWatermark], ["🎶 Music", usedPrefix + "get " + cer.music.play_url]], m, adReplyS)
 } catch (e) {
 if (!text) throw "\nSertakan querinya kak !\n\nContoh: .tiktok url"
    m.reply(wait)
    let ler = await Tiktokdl(text)
    let cer = ler.result
	let cap = `${spas}*「 T I K T O K 」*

*📛Author:* ${cer.author.nickname}
*📒Title:* ${cer.desc}
`
 conn.sendButton(m.chat, cap, author, cer.download.wm, [["🎥 Video [NO WM]", usedPrefix + "get " + cer.download.nowm], ["🎶 Music", usedPrefix + "get " + cer.download.music]], m, adReplyS)
 }
}
handler.help = ["ttkcaliphdev"]
handler.command = /^(ttkcaliphdev)$/i

export default handler
const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

/* New Line */

//@xct007/tiktok-scraper

async function Tiktokdl(url) {
//async function tiktokdl(url) {
    try {
        function API_URL(aweme) {
            return `https://api16-core-c-useast1a.tiktokv.com/aweme/v1/feed/?aweme_id=${aweme}&version_name=1.0.4&version_code=104&build_number=1.0.4&manifest_version_code=104&update_version_code=104&openudid=4dsoq34x808ocz3m&uuid=6320652962800978&_rticket=1671193816600&ts=1671193816&device_brand=POCO&device_type=surya&device_platform=android&resolution=1080*2179&dpi=440&os_version=12&os_api=31&carrier_region=US&sys_region=US%C2%AEion=US&app_name=TikMate%20Downloader&app_language=en&language=en&timezone_name=Western%20Indonesia%20Time&timezone_offset=25200&channel=googleplay&ac=wifi&mcc_mnc=&is_my_cn=0&aid=1180&ssmix=a&as=a1qwert123&cp=cbfhckdckkde1`;
        };
        async function getAwemeId(url) {
    // any :/
            let result;
            const Konto1 = /video\/([\d|\+]+)?\/?/;
            const valid = url.match(Konto1);
            if (valid) {
                return valid[1];
            }
            else {
                try {
                    const data = await got
                    .get(url, {
                        headers: {
                            "Accept-Encoding": "deflate",
                        },
                        maxRedirects: 0,
                    })
                    .catch((e) => e.response.headers.location);
                    const _url = data;
                    const _valid = _url.match(Konto1);
                    if (_valid) {
                        result = _valid[1];
                    }
                }
                catch (error) {
            // console.log(error)
                    result = false;
                }
            }
            return result;
        };
        const valid = await getAwemeId(url);
        //if (!valid) return false // result = false
        const data = await got
        .get(API_URL(valid), {
            headers: {
                "Accept-Encoding": "deflate",
                "User-Agent": "okhttp/3.14.9",
            },
        })
        .catch((e) => e.response);
        //if (!data) return false // result = false
        const body = JSON.parse(data.body);
        const obj = body.aweme_list.find((o) => o.aweme_id === valid)
        const results = {
            aweme_id: obj.aweme_id,
            region: obj.region,
            desc: obj.desc,
            create_time: obj.create_time,
            author: {
                uid: obj.author.uid,
                unique_id: obj.author.unique_id,
                nickname: obj.author.nickname,
                birthday: obj.author.birthday,
            },
            duration: obj.music.duration,
            download: {
                nowm: obj.video.play_addr.url_list[0],
                wm: obj.video.download_addr.url_list[0],
                music: obj.music.play_url.url_list[0],
                music_info: {
                    id: obj.music.id,
                    title: obj.music.title,
                    author: obj.music.author,
                    is_original: obj.music.is_original,
                    cover_hd: obj.music.cover_hd.url_list[0],
                    cover_large: obj.music.cover_large.url_list[0],
                    cover_medium: obj.music.cover_medium.url_list[0],
                },
            },
        };
        return {
            status: true,
            result: results//data.body //valid
        }
    } catch (e) {
        return { status: false, result: e }
    }
}