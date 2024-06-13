const configCommand = {
	name: 'autodl2',
	version: '1.1.1',
	hasPermssion: 2,
	credits: 'AYAN CHOWDHURY',
	description: 'Tự động tải xuống khi phát hiện liên kết',
	commandCategory: 'Công cụ',
	usages: '[]',
	cooldowns: 3
},
	axios = require('axios'),
	downloader = require('image-downloader'),
	fse = require('fs-extra'),
	toolsFb = {
		getVideoUrl: async (url) => {
			const res = await axios.get('https://apipremium-thanhali.thanhali.repl.co/fbdownload?apikey=ThanhAliVip_1234567890&url=' + encodeURIComponent(url));
			return res.data.data.medias[res.data.data.medias.length - 1].url;
		}
	},
	path = __dirname + '/cache/AYANSTATUS.json';

const https = require("https");
const agent = new https.Agent({
	rejectUnauthorized: false
});

async function streamURL(url, mime) {
	const name = global.utils.randomString(5) + '.' + mime;
	const res = await axios({
		url,
		method: 'GET',
		responseType: 'stream'
	});
	res.data.path = name;
	return res.data;
}

function onLoad() {
	if (!fse.existsSync(path)) fse.writeFileSync(path, '{}');
}

async function noprefix(arg) {
	const s = JSON.parse(fse.readFileSync(path));
	if (arg.event.senderID == (global.botID || arg.api.getCurrentUserID())) return;
	if ((typeof s[arg.event.threadID] == 'boolean' && !s[arg.event.threadID])) return;

	const out = (a, b, c, d) => arg.api.sendMessage(a, b ? b : arg.event.threadID, c ? c : null, d ? d : arg.event.messageID),
		arr = arg.event.args || [],
		regEx_tiktok = /(^https:\/\/)((vm|vt|www|v)\.)?(tiktok|douyin)\.com\//,
		regEx_youtube = /(^https:\/\/)((www)\.)?(youtube|youtu)(PP)*\.(com|be)\//,
		regEx_facebook = /(^https:\/\/)(\w+\.)?(facebook|fb)\.(com|watch|reel)\/\w+\/\w?(\/)?/,
		regEx_instagram = /http(s|):\/\/(www\.)?instagram\.com\/(reel|p)\/\w+/,
		regEx_SC = /^(https?:\/\/)?(www.)?(m\.)?soundcloud\.com\/[\w\-\.]+(\/)+[\w\-\.]+/,
		regEx_ZingMp3 = /^(https?:\/\/)?(www.)?(m\.)?(mp3|zing)mp3\.vn\/bai-hat\/[\w\-\.]+\/\w+/;

	for (const el of arr) {
		/* TỰ ĐỘNG TẢI VIDEO TIKTOK */
		if (regEx_tiktok.test(el)) {
			const data = (await axios.post(`https://www.tikwm.com/api/`, {
				url: el
			})).data.data;
			out({
				body: `=== 『 AUTO DOWN TIKTOK 』 ===\n━━━━━━━━━━━━━━━━\n『 🌸 』➜ शीर्षक: ${data.title}\n『 🌸 』➜ मनपर्छ: ${data.digg_count}\n『 🌸 』➜ टिप्पणीहरूको संख्या: ${data.comment_count}\n『 🌸 』➜ शेयर संख्या: ${data.share_count}\n『 🌸 』➜ डाउनलोडहरू: ${data.download_count}\n\n『 🌸 』➜ संगीत डाउनलोड गर्न भावना "❤️" छोड्नुहोस्`, attachment: await streamURL(data.play, 'mp4')
			}, '', (err, dataMsg) => global.client.handleReaction.push({
				name: 'autodownurl', messageID: dataMsg.messageID, url_audio: data.music
			})); // Video không logo thì sửa "wmplay" -> "play";
		}
		/* END */

		/* TỰ DỘNG TẢI VIDEO YOUTUBE */
		if (regEx_youtube.test(el)) {
			const data = (await axios.get(`https://apipremium-thanhali.thanhali.repl.co/youtube/download`, {
				params: {
					id: el,
					apikey: `ThanhAliVip_1234567890`
				}
			})).data;
			const info = (a) => `=== 『 AUTO DOWN YOUTUBE 』 ===\n━━━━━━━━━━━━━━━━\n『 🌸 』➜ Tiêu đề: ${a.title}\n『 🌸 』➜ Thời gian: ${a.t}s`;
			const MAX_SIZE = 87031808;
			const getFormatVideo = (data.links.find(f => f.type === "mp4" || f.type == 'm4a').qualitys.filter(f => f.size < MAX_SIZE) || []);
			const getFormatAudio = (data.links.find(f => f.type === "mp3").qualitys.filter(f => f.size < MAX_SIZE) || [])[0];
			// if (!getFormatVideo)
			//     return out({
			//         body: `Rất tiếc, không tìm thấy video nào có dung lượng nhỏ hơn 83MB`,
			//     }, '');
			let success = false;
			for (const video of getFormatVideo)
				if (video.size || 0 < 87031808) {
					const res = await axios({
						url: video.dlink,
						method: 'GET',
						responseType: 'stream',
						httpsAgent: agent
					});
					res.data.path = 'video.mp4';
					try {
						const datMsg = await out({
							body: `${info(data, data.timer)}\n\n『 🌸 』➜ संगीत डाउनलोड गर्न भावना "❤️" छोड्नुहोस्\n`,
							attachment: res.data
						}, '');
						global.client.handleReaction.push({
							name: 'autodownurl',
							messageID: datMsg.messageID,
							url_audio: getFormatAudio.dlink,
							agent
						});
						success = true;
						break;
					}
					catch (e) {
					}
				}
			if (!success)
				return out({
					body: `[⚜️]➜ Rất tiếc, đã có lỗi xảy ra khi tải video`,
				}, '');
			// else if (getFormatAudio.size || 0 < 26214400) {
			//     const res = await axios({
			//         url: getFormatAudio.dlink,
			//         method: 'GET',
			//         responseType: 'stream',
			//         httpsAgent: agent
			//     });
			//     res.data.path = 'audio.mp3';
			//     out({
			//         body: (info(data)) + `\n`,
			//         attachment: res.data
			//     });
			// }
		}

		/* TỰ ĐỘNG TẢI VIDEO FACEBOOK */
		if (el.includes('facebook.com/story.php') || regEx_facebook.test(el)) {
			const fdl = await toolsFb.getVideoUrl(el);
			// console.log(fdl);
			out({
				body: '『 🌸 』➜ आवाज पठाउन भावना "❤️" छोड्नुहोस्', attachment: await streamURL(fdl, 'mp4')
			}, '', async (err, dataMsg) => global.client.handleReaction.push({
				name: 'autodownurl', messageID: dataMsg.messageID, url_audio: fdl
			}));
		}
		/* END */

		if (regEx_instagram.test(el)) {
			try {
				// const isImage = /\/p\//.test(el);
        // console.log(`https://${global.configApi.domain}/instagram/dlpost?apikey=${global.configApi.apiKey}&url=${encodeURIComponent(el)}`)
				const res = await axios({
					url: `https://apipremium-thanhali.thanhali.repl.co/instagram/dlpost?apikey=ThanhAliVip_1234567890&url=${encodeURIComponent(el)}`,
					method: 'GET'
				});
				// const isImage = (res.data.carousel_media || res.data.image_versions2?.candidates) ? true : false;
				// console.log([{ image_versions2: res.data.image_versions2 }])
				// console.log(res.data.video_versions)

				// if (res.data.video_versions) {
				// 	const resStream = await axios({
				// 		url: res.data.video_versions[0].url,
				// 		method: 'GET',
				// 		responseType: 'stream'
				// 	});
				// 	resStream.data.path = 'video.mp4';
				// 	return out({
				// 		attachment: resStream.data
				// 	});
				// }
				// else if (isImage) {
				// 	const allImage = await Promise.all((res.data.carousel_media || [{ image_versions2: res.data.image_versions2 }]).map(item => axios.get(item.image_versions2.candidates[0].url, {
				// 		responseType: 'stream'
				// 	})
				// 		.then(res => {
				// 			res.data.path = `${Date.now()}.png`;
				// 			return res.data;
				// 		})));
				// 	return out({
				// 		attachment: allImage
				// 	});
				// }
        // console.log(res.data)
				const allAttachment = await Promise.all([...res.data.videos, ...res.data.images].map(item => axios.get(item, {
					responseType: 'stream'
				})
					.then(ress => {
						ress.data.path = `${Date.now()}.${res.data.videos.includes(item) ? 'mp4' : 'png'}`;
						return ress.data;
					})
          .catch(err => {
            console.log(err);
            return null;
          })
        ));
				return out({
					attachment: allAttachment
				});
			}
			catch (err) {
				console.log(err)
			}
		}

		// Auto SoundCloud
		if (regEx_SC.test(el)) {
			const audioStream = await axios.get(`https://apipremium-thanhali.thanhali.repl.co/soundcloud/download?apikey=ThanhAliVip_1234567890&link=${encodeURIComponent(el)}`, {
				responseType: 'stream'
			});
			audioStream.data.path = 'sing.mp3';
			return out({
				attachment: audioStream.data
			});
		}

		// Zingmp3
		if (regEx_ZingMp3.test(el)) {
			const audioStream = await axios.get(`https://apipremium-thanhali.thanhali.repl.co/zingmp3/download?apikey=ThanhAliVip_1234567890&link=${encodeURIComponent(el)}`, {
				responseType: 'stream'
			});
			audioStream.data.path = 'sing.mp3';
			return out({
				attachment: audioStream.data
			});
		}
	}
}


async function reactionMsg(arg) {
	if (arg.event.reaction == '❤') // code
	{
		const out = (a, b, c, d) => arg.api.sendMessage(a, b ? b : arg.event.threadID, c ? c : null, d),
			_ = arg.handleReaction;
		if ('url_audio' in _) {
			let streamFile;
			if (_.agent) {
				const res = await axios({
					url: _.url_audio,
					method: 'GET',
					responseType: 'stream',
					httpsAgent: _.agent
				});
				res.data.path = 'audio.mp3';
				streamFile = res.data;
			}
			else
				streamFile = await streamURL(_.url_audio, 'mp3');
			out({
				body: `『 🌸 』➜ Âm thanh từ video`, attachment: streamFile
			}, '', '', _.messageID);
		}
	}
}
function runCommand(arg) {
	const out = (a, b, c, d) => arg.api.sendMessage(a, b ? b : arg.event.threadID, c ? c : null, d ? d : arg.event.messageID);
	const data = JSON.parse(fse.readFileSync(path));
	const s = data[arg.event.threadID] = typeof data[arg.event.threadID] != 'boolean' || !!data[arg.event.threadID] ? false : true;
	fse.writeFileSync(path, JSON.stringify(data, 0, 4));
	out((s ? '[⚜️]➜ Kích hoạt thành công chế độ ' : '『 🌸 』➜ Tắt thành công chế độ ') + ' ' + configCommand.name);
}

module.exports = {
	config: configCommand,
	onLoad,
	run: runCommand,
	handleEvent: noprefix,
	handleReaction: reactionMsg
};
