const axios = require('axios');
const fs = require('fs');

module.exports.config = {
  name: "createfile",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Claude2",
  description: "Create a new file with code from a link",
  commandCategory: "utility",
  usages: "[link]",
  cooldowns: 5
};

module.exports.run = async ({ api, event, args }) => {
  try {
    const link = args[1];
    if (!link) {
      return api.sendMessage("Please provide a valid link!", event.threadID, event.messageID);
    }

    const response = await axios.get(link);
    const code = response.data;

    const fileName = `modules/commands/${args[0]}.js`;
    fs.writeFileSync(fileName, code,'utf-8');

    api.sendMessage(`✅ File created successfully: ${fileName}`, event.threadID, event.messageID);
  } catch (error) {
    console.error("Error:", error);
    api.sendMessage("An error occurred while creating the file.", event.threadID, event.messageID);
  }
};
