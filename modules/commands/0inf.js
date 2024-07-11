module.exports.config = {
	name: "info",
	version: "1.0.1", 
	hasPermssion: 0,
	credits: "karan", //don't change the credits please
	description: "Admin and Bot info.",
	commandCategory: "...",
	cooldowns: 1,
	dependencies: 
	{
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};
module.exports.run = async function({ api,event,args,client,Users,Threads,__GLOBAL,Currencies }) {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
const time = process.uptime(),
		hours = Math.floor(time / (60 * 60)),
		minutes = Math.floor((time % (60 * 60)) / 60),
		seconds = Math.floor(time % 60);
const moment = require("moment-timezone");
var juswa = moment.tz("Asia/Kolkata").format("『D/MM/YYYY』 【HH:mm:ss】");
var link =                                     
["https://i.imgur.com/HtpZvt0.jpeg"];
var callback = () => api.sendMessage({body:`❤𝐀𝐃𝐌𝐈𝐍 𝐀𝐍𝐃 𝐁𝐎𝐓 𝐈𝐍𝐅𝐎𝐑𝐌𝐀𝐓𝐈𝐎𝐍 🇳🇵 


☄️Bot Name︎︎︎☄️ ⚔ ${global.config.BOTNAME} ⚔

🔥𝐁𝐨𝐭 𝐨𝐰𝐧𝐞𝐫 :- KARAN JALVANSHI  ☜︎︎︎✰ 
●▬▬▬▬๑۩۩๑▬▬▬▬
[[ 𝐋𝐄𝐆𝐄𝐍𝐃  𝐊𝐈𝐍𝐆 𝐉𝟒𝟏V𝟒𝐍𝟓|-|!! ]]
✧══════•❁❀❁•══════✧

🌸𝐁𝐨𝐭 𝐏𝐫𝐞𝐟𝐢𝐱🌸☞︎︎︎☜︎︎︎✰ ${global.config.PREFIX}

🥳UPTIME🥳

🌪️Today is🌪️ ☞︎︎︎☜︎︎︎✰ ${juswa} 

⚡Bot is running⚡ ${hours}:${minutes}:${seconds}.

✅Thanks for using My Bot ❤ ${global.config.BOTNAME} 🖤

`,attachment: fs.createReadStream(__dirname + "/cache/himal.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/himal.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname + "/cache/himal.jpg")).on("close",() => callback());
   };
