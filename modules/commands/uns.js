module.exports.config = {
	name: "uns",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "karan jalvanshi",
	description: "Gỡ tin nhắn của bot",
	commandCategory: "system",
	usages: "unsend",
	cooldowns: 0,
  usePrefix: "false"
};

module.exports.languages = {
	"vi": {
		"returnCant": "Không thể gỡ tin nhắn của người khác.",
		"missingReply": "Hãy reply tin nhắn cần gỡ."
	},
	"en": {
		"returnCant": "mere jo msg dlt karna h uspe swip karke dlt karo .",
		"missingReply": "💝Mero Jun Msg lai Unsend garbe ho tesma  Reply garera lekha💕  ."
	}
}

module.exports.run = function({ api, event, getText }) {
	if (event.messageReply.senderID != api.getCurrentUserID()) return api.sendMessage(getText("returnCant"), event.threadID, event.messageID);
	if (event.type != "message_reply") return api.sendMessage(getText("missingReply"), event.threadID, event.messageID);
	return api.unsendMessage(event.messageReply.messageID);
	}
