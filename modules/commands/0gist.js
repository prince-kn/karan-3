const fs = require('fs');
const request = require('request');
const baseApiUrl = async () => {
    const base = await require('axios').get(`https://raw.githubusercontent.com/Blankid018/D1PT0/main/baseApiUrl.json`);
    return base.data.api;
};

module.exports.config = {
  name: "gist",
  version: "6.9.0",
  hasPermission: 2,
  credits: "karan",
  usePrefix: true,
  description: "Convert code into link",
  commandCategory: "convert",
  usages: "[filename]/[reply and file name]",
  cooldowns: 1
};

module.exports.run = async function ({ api, event, args }) {
  const admin = ["1100093685579556"];
  const fileName = args[0];
  if (!admin.includes(event.senderID)) {
    api.sendMessage("⚠ | You do not have permission to use this command.", event.threadID, event.messageID);
    return;
  }
  const path = `modules/commands/${fileName}.js`;
  try {
    let code = '';
    if (event.type === "message_reply") {
      code = event.messageReply.body;
    } else {
      code = await fs.promises.readFile(path, 'utf-8');
    }
    const en = encodeURIComponent(code);
    const options = {
      url: `${await baseApiUrl()}/gist`,
      method: 'POST',
      json: true,
      body: {
        code: en,
        nam: `${fileName}.js`
      }
    };
    request(options, (error, response, body) => {
      if (error) {
        api.sendMessage("Error occurred while processing the command.", event.threadID, event.messageID);
        return;
      }
      const diptoUrl = body.data;
      api.sendMessage(diptoUrl, event.threadID, event.messageID);
    });
  } catch (error) {
    console.error("An error occurred:", error);
    api.sendMessage("Error occurred while processing the command.", event.threadID, event.messageID);
  }
};
