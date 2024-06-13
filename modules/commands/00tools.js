const path = require('path');
const fs = require('fs');
const axios = require('axios');

module.exports.config = {
  name: "tools",
  version: "9",
  hasPermission: 0,
  credits: "Eugene Aguilar",
  usages: "ai [ your question ]\n tiktokdl [ tiktok link ]\nCupcut [ cupcut template link ]\nTiksearch [ title ]\n shoti [ simple type ]\nRemini [ reply a photo ]",
  description: "Ai, tiktokdl, Cupcut, Tiksearch, shoti, remini",
  commandCategory: "tools",
  cooldowns: 9,
};

module.exports.run = async function ({ api, event, args }) {
if (args.length === 0)
  api.sendMessage(`wrong format: use tools /ai [ your question
/tiktokdl [ link from tiktok ]
/tiksearch [ title ]
/cupcut [ link from template ]
/shoti [ simple type ]
/remini [ reply a photo ]`, event.threadID, event.messageID);

  try {
	 if (args[0] === "list") {
		api.sendMessage(`List of available tools:\n1 tiksearch\n2 tiktokdl\n3 cupcut\n4 shoti\n4 ai\n5 remini`, event.threadID, event.messageID);
	 } else if (args[0] === "remini") {
 const messageReply = event.messageReply;

  if (!messageReply || !messageReply.attachments || messageReply.attachments.length === 0 || messageReply.attachments[0].type !== "photo") {
	 return api.sendMessage("Please reply to a photo to use this command.", event.threadID, event.messageID);
  }

  const photoUrl = messageReply.attachments[0].url;

	  const reminiResponse = await axios.get(`https://eurix-api.replit.app/remini?input=${encodeURIComponent(photoUrl)}`);

	  const photo = reminiResponse.data.image_data;
	  const buratResponse = await axios.get(photo, { responseType: 'arraybuffer' });
	  const photoBuffer = Buffer.from(buratResponse.data, 'binary');

	  const photoPath = path.join(__dirname, 'cache', 'bugok.jpg');
	  fs.writeFileSync(photoPath, photoBuffer);

	  api.sendMessage({ body: "✨ Enhance successfully", attachment: fs.createReadStream(photoPath) }, event.threadID, event.messageID);
	
	 } else if (args[0] === "ai") {
		const question = args.slice(1).join(" "); 
		if (!question) {
		  api.sendMessage(`Missing question prompt!!`, event.threadID, event.messageID);
		  return;
		}
		api.sendMessage(`Answering your question...`, event.threadID, event.messageID);
		const response = await axios.get(`https://eurix-api.replit.app/gpt4?ask=${question}`);
		const ans = response.data.answer;
		api.sendMessage(ans, event.threadID, event.messageID);
	 } else if (args[0] === "tiktokdl") {
		const link = args[1];
		if (!link) {
		  api.sendMessage(`Please provide a TikTok video link.`, event.threadID, event.messageID);
		  return;
		}
api.sendMessage(`downloading please wait...`, event.threadID, event.messageID);
		const response = await axios.get(`https://eurix-api.replit.app/api/tiktokdl/tools?link=${link}`);
		const videoUrl = response.data.url;
		const i = response.data.title;
		const videoPath = __dirname + "/cache/tiktokdl.mp4";
		const writer = fs.createWriteStream(videoPath);
		const videoStream = await axios.get(videoUrl, { responseType: "stream" });
		videoStream.data.pipe(writer);
		writer.on("finish", () => {
		  api.sendMessage({ body: `Here's your Tiktok video:\nTitle: ${i}`, attachment: fs.createReadStream(videoPath) }, event.threadID, event.messageID);
		});
	 } else if (args[0] === "cupcut") {
		const url = args[1];
		if (!url) {
		  api.sendMessage(`Please provide a URL from cupcut`, event.threadID, event.messageID);
		  return;
		}
api.sendMessage(`downloading please wait...`, event.threadID, event.messageID);
		const response = await axios.get(`https://eurix-api.replit.app/api/cupcutdl/tools?url=${url}`);
		const videoUrl = response.data.url;
		const t = response.data.title;
		const videoPath = __dirname + "/cache/ccdl.mp4";
		const writer = fs.createWriteStream(videoPath);
		const videoStream = await axios.get(videoUrl, { responseType: "stream" });
		videoStream.data.pipe(writer);
		writer.on("finish", () => {
		  api.sendMessage({ body: `Here's your cupcut video\nTitle: ${t}`, attachment: fs.createReadStream(videoPath) }, event.threadID, event.messageID);
		});
	 } else if (args[0] === "shoti") {
api.sendMessage(`shoti is sending please wait...`, event.threadID, event.messageID);
		const response = await axios.post(`https://eurix-api.replit.app/shoti`, { apikey: 'eugeneaguilar89' });
		const video = response.data.url;
		const title = response.data.username; 
		const nickname = response.data.nickname; 
		const filePath = __dirname + "/cache/shoti.mp4";
		const writer = fs.createWriteStream(filePath);
		const videoStream = await axios.get(video, { responseType: "stream" });
		videoStream.data.pipe(writer);
		writer.on('finish', () => {
		  api.sendMessage({ body: `Here's your random shoti\nUsername: ${title}\nNickname: ${nickname}`, attachment: fs.createReadStream(filePath) }, event.threadID, event.messageID);
		});
	 } else if (args[0] === "tiksearch") {
		const query = args.slice(1).join(" ");
		if (!query) {
		  api.sendMessage(`Please provide a query`, event.threadID, event.messageID);
		  return;
		}
api.sendMessage(`searching please wait...`, event.threadID, event.messageID);
		const response = await axios.get(`https://eurix-api.replit.app/api/tiksearch/tools?search=${query}`);
		const videos = response.data.data.videos;
		const videoData = videos[0];
		const videoUrl = videoData.play;
		const title = videoData.title;
		const path = __dirname + "/cache/tiksearch.mp4";
		const writer = fs.createWriteStream(path);
		const videoStream = await axios.get(videoUrl, { responseType: "stream" });
		videoStream.data.pipe(writer);
		writer.on('finish', () => {
		  api.sendMessage({ body: `Here's your tiktok\nTitle: ${title}`, attachment: fs.createReadStream(path) }, event.threadID, event.messageID);
		});
	 }
  } catch (error) {
	 api.sendMessage(`Error fetching tools!!`, event.threadID, event.messageID);
	 console.log(error);
  }
};
