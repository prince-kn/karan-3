module.exports.config = {
	name: "uid",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "𝐃𝐚𝐫𝐤 𝐑𝐮𝐥𝐞𝐱 𝐊𝐢𝐧𝐠 𝐀𝐧𝐮𝐩",
	description: "Get id user",
	commandCategory: "other",
	cooldowns: 5
};

module.exports.run = function({ api, event }) {
 var {mentions, senderID, threadID, messageID} = event;
	if (Object.keys(mentions) == 0) return api.sendMessage(`${senderID}`, threadID, messageID);
	else {
		for (var i = 0; i < Object.keys(mentions).length; i++) api.sendMessage(`${Object.values(mentions)[i].replace('@', '')}: ${Object.keys(mentions)[i]}`, threadID);
		return;
	}
}
