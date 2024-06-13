const fs = require("fs");
module.exports.config = {
	name: "gf",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "MrTomXxX", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "began ayee",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("girlfriend chaiyo")==0 || event.body.indexOf("gf chaiyo")==0 || event.body.indexOf("Baigan")==0 || event.body.indexOf("Began")==0) {
		var msg = {
				body: "yesto gf vaya pugxa ni🥵😂",
				attachment: fs.createReadStream(__dirname + `/noprefix/gf.mp4`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("💋", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
