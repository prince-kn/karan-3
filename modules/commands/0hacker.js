const fs = require("fs");
module.exports.config = {
  name: "hacker",
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
  if (event.body.indexOf("Hacker")==0 || event.body.indexOf("hacker")==0 || event.body.indexOf("hacker ho")==0 || event.body.indexOf("hack garxa")==0) {
    var msg = {
        body: "Um hack vayo aba 👽☠",
        attachment: fs.createReadStream(__dirname + `/noprefix/hacker.mp3`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("☠", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

  }