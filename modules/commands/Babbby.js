const axios = require("axios");

module.exports.config = {
name: "bby",
version: "1.0.0",
hasPermission: 0, 
credits: "dipto", 
description: "better then all Sim simi with multiple conversation",
usePrefix: false,
usages: "[message]",
commandCategory: "ChatBots",
cooldowns: 5,
};

module.exports.handleReply = async function ({ api, event }) {
//api.unsendMessage(handleReply.messageID);
if (event.type == "message_reply") {
const reply = event.body.toLowerCase();
if (isNaN(reply)) {
const response = await axios.get(`${global.config.api}/baby?text=${encodeURIComponent(reply)}`)
const ok = response.data.reply;
await api.sendMessage(ok ,event.threadID,(error, info) => {
global.client.handleReply.push({
name: this.config.name,
type: 'reply',
messageID: info.messageID,
author: event.senderID,
link: ok
})}, event.messageID)
}
}
}
module.exports.run = async function ({ api, args, event }) {
try {
const dipto = args.join(" ").toLowerCase();
if (!args[0]) {
api.sendMessage("Please provide a question to answer\n\nExample:\nbby ki koro", event.threadID, event.messageID); 
return;
}
if (dipto) {
const response = await axios.get(`${global.config.api}/baby?text=${dipto}`);
const mg = response.data.reply;
await api.sendMessage({ body: mg }, event.threadID, (error, info) => {
global.client.handleReply.push({
name: this.config.name,
type: 'reply',
messageID: info.messageID,
author: event.senderID,
link: mg
})
}, event.messageID
);
}
} catch (error) {
console.error(`YESKO REPLY SAVE GAREKO XINS TEACH GARA PAILE 🥺`);
api.sendMessage(`YESKO REPLY SAVE GAREKO XINS TEACH GARA PAILE 🥺`,event.threadID,event.messageID);
}
};
