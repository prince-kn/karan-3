const fs = require("fs");
module.exports.config = {
  name: "chuppa",
    version: "1.0.1",
  hasPermssion: 0,
  credits: "VanHung - Fixed By Arun", 
  description: "hihihihi",
  commandCategory: "no prefix",
  usages: "Ishika",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  if (event.body.indexOf("Chuppa")==0 || event.body.indexOf("chuppa")==0 || event.body.indexOf("kiss deu")==0 || event.body.indexOf("cuppa deu")==0) {
    var msg = {
        body: "Lau babe chupaa😘💋💋",
        attachment: fs.createReadStream(__dirname + `/noprefix/chupaa.mp4`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("💋", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

  }