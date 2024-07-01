const axios = require('axios');
const fs = require('fs-extra');
const path = require('path');

module.exports.config = {
    name: "bing",
    version: "1.0",
    credits: "RKO BRO",
    hasPermssion: 2,
    description: "Generate images by Dalle-3 AI",
    commandCategory: "download",
    usages: "[text] \nJamon [A 17/18/19 years old boy/girl watching football match on tv and written Aadi and 69 on the back of his Dress , 4k]",
    cooldowns: 5
  };

module.exports.run = async function ({ api, event, args }) {
  const prompt = event.messageReply?.body.split("dalle")[1] ||  args.join(" ");
  if (!prompt) {
   return api.sendMessage("❌| Wrong Formet .✅ | Use 17/18 years old boy/girl watching football match on tv and written Aadi and 69 on the back of his Dress , 4k",event.threadID,event.messageID);
  }
    try {
      const w = await api.sendMessage("Wait gara baby < 😽", event.threadID);
  
const response = await axios.get(`https://www.noobs-api.000.pe/dipto/dalle?prompt=${prompt}&key=dipto008&cookies=1V9IbofqJdidRsZYgcbmK5w9vyNbnRBa0BquQW14NswLnG0cmIE_NPS8AMb93IOVg0cXs4rwSx5WlVFoD7zo_-eogjKIMpHlJNbAub-Uh9YuHtEqABtXzu9Z2bzLb_GL3tLbATGBrE_9C7irgTWoHxO2kLQ_zilqT2F_X01LZtY3yMCSCN0IQqnu1GDBiOcGCpYFokxGlT6-5Hhs3UXQ-0A`)
      const data = response.data.imgUrls;
      if (!data || data.length === 0) {
        api.sendMessage("Empty response or no images generated.",event.threadID,event.messageID);
      }
      const diptoo = [];
      for (let i = 0; i < data.length; i++) {
        const imgUrl = data[i];
        const imgResponse = await axios.get(imgUrl, { responseType: 'arraybuffer' });
        const imgPath = path.join(__dirname, 'dalle', `${i + 1}.jpg`);
        await fs.outputFile(imgPath, imgResponse.data);
        diptoo.push(fs.createReadStream(imgPath));
      }
      await api.unsendMessage(w.messageID);
      await api.sendMessage({
  body: `✅ |Your pic Generated <😘`,
        attachment: diptoo
      },event.threadID, event.messageID);
    } catch (error) {
      console.error(error);
      await api.sendMessage(`Generation failed!\nError: ${error.message}`,event.threadID, event.messageID);
    }
  };
