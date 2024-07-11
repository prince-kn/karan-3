const fs = require("fs");
module.exports.config = {
	name: "jaishreeram",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "karan jalvanshi", 
	description: "jai shree ram",
	commandCategory: "no prefix",
	usages: "jai shree ram",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("jai shree ram")==0 || event.body.indexOf("ram ram")==0 || event.body.indexOf("jai siya ram")==0 || event.body.indexOf("sita ram")==0) {
		var msg = {
				body: "🔱🫶♡⤾🙏🏼🩷जय श्री ༢།म >𝟑♥🌍",
				attachment: fs.createReadStream(__dirname + `/noprefix/sad/nepal`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("💝", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
