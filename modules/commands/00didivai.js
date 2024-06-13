const fs = require("fs");
module.exports = {
  config:{
	name: "didi vai",
        version: "1.0.1",
	permssion: 0,
	credits: "nayan", 
	description: "Fun",
	commandCategory: "no prefix",
	usages: "🥰",
        cooldowns: 5, 
},

handleEvent: async function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
  const content = event.body ? event.body : '';
  const body = content.toLowerCase();
  const axios = require('axios')
const media = (
    await axios.get(
      'https://i.imgur.com/PCPkZt2.mp4',
      { responseType: 'stream' }
    )
  ).data;

	if (body.indexOf("didi vai")==0 || body.indexOf("boine dai")==0 || body.indexOf("vai didi")==0 || body.indexOf("brother sister")==0 || body.indexOf("sister brother")==0 || body.indexOf("didi vai ko maya")==0 || body.indexOf("dai boine")==0) {
		var msg = {
				body: "💝दिदी भाइको माया यस्तो हुन पर्छ🥺💝🥺",
				attachment: media
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🖤", event.messageID, (err) => {}, true)
		}
	},
	run: function({}) {
  }
}
