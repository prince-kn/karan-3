const fs = require("fs");
module.exports.config = {
  name: "OWNER",
    version: "1.0.1",
  hasPermssion: 0,
  credits: "karan jalvanshi", 
  description: "no prefix",
  commandCategory: "No command marks needed",
  usages: "...",
    cooldowns: 1, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  let react = event.body.toLowerCase();
  if(react.includes("owner") ||
     react.includes("Owner") || 
react.includes("Admin")) {
    var msg = {
        body: "★𝗢𝘄𝗻𝗲𝗿 + 𝗠𝗮𝗱𝗲 𝗕𝘆★\n\n✦❏NAME:- KARAN JALVANSHI - ❏Facebook name/Id link :(https://www.facebook.com/Legend.king.jalvanshi                               ❏BOT NAME [ SARKARI BF 😘  ❏Bot admin✦\n☞✦ KARAN JALVANSHI `",
        attachment: fs.createReadStream(__dirname + `/noprefix/https://i.imgur.com/BywlKOm.jpeg`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("👑", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

        }

