const fs = require("fs");
module.exports.config = {
	name: "women",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung - Fixed by LTD", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "women",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Women")==0 || event.body.indexOf("Women")==0 || event.body.indexOf("WOMEN")==0 || event.body.indexOf("WOmen")==0) {
		var msg = {
				body: "hehe women, ☕☕☕☕ ek cup chay ☕ aur Prem se bolo Women☕ 🤣",
				attachment: fs.createReadStream(__dirname + `/noprefix/wm.mp4`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("☕", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }