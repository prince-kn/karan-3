const fs = require("fs");
module.exports.config = {
	name: "Nepal",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "MrTomXxX", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "india",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("India")==0 || event.body.indexOf("Hind")==0 || event.body.indexOf("Bharat")==0 || event.body.indexOf("desh")==0) {
		var msg = {
				body: "Mero desh nepal💝♻️🇳🇵🇳🇵",
				attachment: fs.createReadStream(__dirname + `/noprefix/sad/nepal.mp4`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🇳🇵", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
