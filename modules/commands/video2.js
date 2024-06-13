const path = require("path");
const axios = require("axios");
const fs = require("fs");

module.exports.config = {
name: "video2",
version: "9",
credits: "RKO BRO",
description: "Search video from YouTube",
commandCategory: "media",
hasPermssion: 0,
cooldowns: 9,
usages: "[video [search]",
role: 0,
hasPrefix: false,
};

module.exports .run = async function ({ api, args, event }) {
try {
const searchQuery = args.join(" ");
if (!searchQuery) {
api.sendMessage("Usage: video <search text>", event.threadID);
return;
}

api.sendMessage("⏱️ | Searching, Video please wait...", event.threadID);

api.setMessageReaction("🕥", event.messageID, (err) => {}, true);

const response = await axios.get(`http://158.101.198.227:8609/video?q=${encodeURIComponent(searchQuery)}&apikey=syugg`);

const data = response.data.datas;
const videoUrl = data.url;
const title = data.title;
const thumbnail = data.thumb;
const channel = data.channel;
const published = data.published;
const views = data.views;

const videoPath = path.join(__dirname, "cache", "video.mp4");

const videoResponse = await axios.get(videoUrl, { responseType: "arraybuffer" });

fs.writeFileSync(videoPath, Buffer.from(videoResponse.data));

api.setMessageReaction("✅", event.messageID, (err) => {}, true);

await api.sendMessage(
{
body: `Here's your video, enjoy!🥰\n\nTitle: ${title}\nChannel: ${channel}\nPublished: ${published}\nViews: ${views}`,
attachment: fs.createReadStream(videoPath),
},
event.threadID,
event.messageID
);

fs.unlinkSync(videoPath);
} catch (error) {
api.sendMessage(`error: ${error.message}`, event.threadID, event.messageID);
console.log(error);
}
};
