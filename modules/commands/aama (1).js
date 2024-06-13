const fs = require("fs");
module.exports.config = {
name: "aama",
version: "1.0.1",
hasPermssion: 0,
credits: "RKO BRO", 
description: "Don't Change Credits",
commandCategory: "no prefix",
usages: "video",
cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
var { threadID, messageID } = event;
if (event.body.indexOf("aama")==0 || event.body.indexOf("Aama")==0 || event.body.indexOf("mom")==0 || event.body.indexOf("mummy")==0 || event.body.indexOf("Mummy")==0 || event.body.indexOf("aama")==0 || event.body.indexOf("AAMA")==0 || event.body.indexOf("MUMMY")==0 || event.body.indexOf("MOM")==0 || event.body.indexOf("AaMa")==0) {
var msg = {
body: "aama ko yaad aayo🥺🥺💝🥰",
attachment: fs.createReadStream(__dirname + `/noprefix/aama.mp4`)
}
api.sendMessage(msg, threadID, messageID);
api.setMessageReaction("👩‍👧‍👦", event.messageID, (err) => {}, true)
}
}
module.exports.run = function({ api, event, client, __GLOBAL }) {

}