module.exports.config = {
  name: "dalle",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Nayan",
  description: "",
  commandCategory: "Image",
  usages: "dalle cat",
  cooldowns: 5
};

module.exports.run = async function({ api, event, args }) {
    const axios = require("axios");
    const fs = require("fs-extra");
    const prompt = args.join(" ");
    const key = this.config.credits;
    if (!prompt) return api.sendMessage('use : /bing cat', event.threadID, event.messageID); 

    const rndm = ['1RP2NejFdSr8cyHso92Lcgumrl89GcFn2cvYl9AgLEdVoKOyBC4lAAepmXdgsKH-j5uH0UcQ6yxMYJIe76TzfYhfp78pB2_YyyZnGe6MbrDFgG9smmGLpqrFI1gLOvH90IpJ7sKbAnFSRSqmIWOwpp6TMIM8SXnjJJDe7QcDk4UjpgFobgzw-HEeKdStAklLf1TMS6pEgWgrXV9_tGm5-7Q'];  //input cooki here
    var cookie = rndm[Math.floor(Math.random() * rndm.length)];

    const res = await axios.get(`https://bing-api-5dpl.onrender.com/bing-img?key=${key}&cookie=${cookie}&prompt=${encodeURIComponent(prompt)}`);

    console.log(res.data);
    const data = res.data.result;
    const numberSearch = data.length;
    var num = 0;
    var imgData = [];
    for (var i = 0; i < parseInt(numberSearch); i++) {
        let path = __dirname + `/cache/${num += 1}.jpg`;
        let getDown = (await axios.get(`${data[i]}`, { responseType: 'arraybuffer' })).data;
        fs.writeFileSync(path, Buffer.from(getDown, 'utf-8'));
        imgData.push(fs.createReadStream(__dirname + `/cache/${num}.jpg`));
    }

    await api.sendMessage({
        attachment: imgData,
        body: "🥀Dalle Search Result💝\n\nPrompt: " + prompt + "\n\n#🌹Number of Images💓: " + numberSearch
    }, event.threadID, event.messageID); 

    for (let ii = 1; ii < parseInt(numberSearch); ii++) {
        fs.unlinkSync(__dirname + `/cache/${ii}.jpg`);
    }
};
