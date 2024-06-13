const axios = require('axios');

module.exports.config = {
    name: "imgur",
    usePrefix: true,
    version: "1.0.0",
    credits: "dipto",
    cooldowns: 5,
    hasPermission: 0,
    description: "convert image/video into Imgur link",
    commandCategory: "tools",
    usages: "reply [image, video]"
  },

module.exports.run = async function ({ api, event }) {
    const dip = event.messageReply?.attachments[0]?.url;
    if (!dip) {
      return api.sendMessage('Please reply to an image or video.', event.threadID, event.messageID);
    }
    try {
      const res = await axios.get(`https://noobs-api2.onrender.com/dipto/imgur?url=${encodeURIComponent(dip)}`);
      const dipto = res.data.data;
         api.sendMessage(dipto, event.threadID, event.messageID);
    } catch (error) {
      console.error(error);
      return api.sendMessage('Failed to convert image or video into link.', event.threadID, event.messageID);
    }
};
