module.exports.config = {
	name: "joinNoti",
	eventType: ["log:subscribe"],
	version: "1.0.1",
	credits: "AYAN CHOWDHURY",
	description: "Notify bots or people entering the group",
	dependencies: {
		"fs-extra": ""
	}
};
module.exports.run = async function({ api, event }) {

	const request = require("request");
	const { threadID } = event;
	if (event.logMessageData.addedParticipants.some(i => i.userFbId == api.getCurrentUserID())) {
		api.changeNickname(`【 ${global.config.PREFIX} 】 ${global.config.BOTNAME}`, threadID, api.getCurrentUserID());
		const fs = require("fs");
		return api.sendMessage("Hello Everyone🙋‍♂️ RKO 𝐁𝐨𝐭 𝐢𝐬 𝐍𝐨𝐰 𝐂𝐨𝐧𝐧𝐞𝐜𝐭𝐞𝐝⛓️", event.threadID, () => api.sendMessage({body:`🌺🦋🌺 
𝐁𝐨𝐭 Made By RKO BRO ☘️
<------------------------------> 
BOT CONNECTED SUCCESFUL !!! 

APPROVAL ALLOW IN THIS GROUP!!!
<------------------------------>

USE HELP TO SEE COMMAND 
\n\nUse ${global.config.PREFIX}help to see commands.\n\nexample :\n${global.config.PREFIX}video7 (video songs)\n${global.config.PREFIX}music (audio songs)\n${global.config.PREFIX}help (command list)\n${global.config.PREFIX}info 
<<<<<------------------------------>>>>>
AND FOR ANY REPORT OR CONTACT BOT DEVELOPE𝐫 `, attachment: fs.createReadStream(__dirname + "/cache/joinmp4/intro.mp4")} ,threadID));
}
	else {
	 
try {
const { createReadStream, existsSync, mkdirSync, readdirSync } = global.nodemodule["fs-extra"];
			let { threadName, participantIDs } = await api.getThreadInfo(threadID);

			const threadData = global.data.threadData.get(parseInt(threadID)) || {};
			const path = join(__dirname, "cache", "joinGif");
			const pathGif = join(path, `${threadID}.gif`);
	
			var mentions = [], nameArray = [], memLength = [], i = 0;
			
let addedParticipants1 = event.logMessageData.addedParticipants;
for (let newParticipant of addedParticipants1) {
let userID = newParticipant.userFbId
api.getUserInfo(parseInt(userID), (err, data) => {
if(err){ return console.log(err)}
var obj = Object.keys(data);
var userName = data[obj].name.replace("@", ""); 	if (userID !== api.getCurrentUserID()) { 

				nameArray.push(userName);
				mentions.push({ tag: userName, id: userID, fromIndex: 0 });

				memLength.push(participantIDs.length - i++);
memLength.sort((a, b) => a - b);
			
			(typeof threadData.customJoin == "undefined") ? msg = "╔════•| ✿ |•════╗\n 🌿𝗛𝗲𝗹𝗹𝗼 🌿Friend 🌿\n╚════•| ✿ |•════╝\n\n ✨🆆🅴🅻🅻 🅲🅾🅼🅴✨\n\n ❥𝐍𝐄𝐖~\n\n ~🇲‌🇪‌🇲‌🇧‌🇪‌🇷‌~\n\n [ {name} ]\n\n༄ 𝗜𝗻 𝗼𝘂𝗿 𝗚𝗿𝗼𝘂𝗽✺࿐\n\n{threadName}\n\n 🥰🖤🌸𝗛𝗮𝗽𝗽𝘆🍀𝗘𝗻𝗷𝗼𝘆🍀—🌸🥀\n\n 🥀𝗺𝗲𝗹𝗲𝗿𝗮 𝗯𝗮𝘀𝗻𝘂🥀\n\n༄✺𝗮𝗻𝗶 𝗧𝗺𝗶 𝘆𝗼 𝗚𝗿𝗼𝘂𝗽 𝗞𝗼 {soThanhVien} 𝗠𝗲𝗺𝗯𝗲𝗿 𝗛𝗮𝘂 𝗘𝗻𝗷𝗼𝘆 🥳 # ]࿐\n\n ╔╦══• •✠•❀•✠ • •══╦╗\n ♥ ═╩╝" : msg = threadData.customJoin;
			msg = msg
			.replace(/\{uName}/g, nameArray.join(', '))
			.replace(/\{type}/g, (memLength.length > 1) ? 'you' : 'Friend')
			.replace(/\{soThanhVien}/g, memLength.join(', '))
			.replace(/\{threadName}/g, threadName);			

var link = [
"", 
];
				var callback = () => api.sendMessage({ body: msg, attachment: fs.createReadStream(__dirname + "/cache/"), mentions }, event.threadID, () => fs.unlinkSync(__dirname + "/cache/"));
return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname + "/cache/")).on("close", () => callback()); 
	 }
})
}
}catch (err) {
return console.log("ERROR: "+err);
}
	}
} 
