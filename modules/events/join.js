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
		return api.sendMessage(`${global.config.BOTNAME}\n\nHello dosto 💀 SARKARI BF 💀 is enter ⛓️
		🌺🦋🌺 
<------------------------------> 
   OWNER :- KARAN JALVANSHI 
<------------------------------->
\n\n𝗕𝗢𝗧 𝗣𝗥𝗘𝗙𝗜𝗫: 【 ${global.config.PREFIX} 】\n\nPREFIX LAGA KE HELP TYP KARO SAB CAMMAND AA JAYEGA 
`, threadID);
	}
	else {
		try {
const request = require("request");
			const fs = global.nodemodule["fs-extra"];
			let { threadName, participantIDs } = await api.getThreadInfo(threadID);

			const threadData = global.data.threadData.get(parseInt(threadID)) || {};
			
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
			
			(typeof threadData.customJoin == "undefined") ? msg = "» HELLO, {name},\n─────────────────\n AAP IS GROUP KI {soThanhVien}TH MEMBER HO GRUP KAA NAAM 「 {threadName} 」HAI \n\nBOT OWNER:「 KARAN JALVANSHI 」" : msg = threadData.customJoin;
			msg = msg
			.replace(/\{uName}/g, nameArray.join(', '))
			.replace(/\{type}/g, (memLength.length > 1) ? 'you' : 'Friend')
			.replace(/\{soThanhVien}/g, memLength.join(', '))
			.replace(/\{threadName}/g, threadName);			

var link = [
"https://i.postimg.cc/T20CvhtW/ezgif-2-c305128791.gif",
];
				var callback = () => api.sendMessage({ body: msg, attachment: fs.createReadStream(__dirname + "/cache/leiamnashJ.jpg"), mentions }, event.threadID, () => fs.unlinkSync(__dirname + "/cache/leiamnashJ.jpg"));
return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname + "/cache/leiamnashJ.jpg")).on("close", () => callback()); 
	 }
})
}
}catch (err) {
return console.log("ERROR: "+err);
}
	}
} 
