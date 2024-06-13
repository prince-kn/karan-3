module.exports.config = {
  name: "reallove",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "MewMew fix get by Jukie",
  description: "तपाईंको अर्को आधा खोज्दै"तपाईंको अर्को आधा खोज्दै ",
  commandCategory: "Tình yêu",
  usages: "[boy/girl]",
  cooldowns: 15
}
module.exports.run = async ({ api, event,args, Users }) => {
 const axios = global.nodemodule["axios"];
  const fs = global.nodemodule["fs-extra"];
  if (!args[0]) {
            var ThreadInfo = await api.getThreadInfo(event.threadID);
    var name = (await Users.getData(id)).name
            var all = ThreadInfo.userInfo
            let data = [];
            for (let u of all) {
                if (u.gender == "MALE") {
                 if ( u != event.senderID) data.push(u.id)   
                }
                if (u.gender == "FEMALE") {
                  if ( u != event.senderID) data.push(u.id)  
              }
            }
            console.log(data)
            if (data.length == 0) return api.sendMessage("❌माफ गर्नुहोस्! आफ्नो आधा जीवन भेट्टाउन सक्नुहुन्न 😭", event.threadID, event.messageID);
            let e = data[Math.floor(Math.random() * data.length)]
            let a = (Math.random() * 50)+50;
            var n = (await Users.getData(e)).name
            const url = api.getCurrentUserID(e);
         

            let getAvatar = (await axios.get(`https://graph.facebook.com/${e}/picture?height=1500&width=1500&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`, { responseType: "arraybuffer" } )).data; 
            fs.writeFileSync( __dirname + "/cache/avt.png", Buffer.from(getAvatar, "utf-8") );
            api.sendMessage({ body: `[⚜️] तपाईंको अन्य आधा पत्ता लगाउँदै [⚜️]\n💘 नाम: ${n}\n💟 सम्बन्धतपाईंको अन्य आधा पत्ता लगाउँदै [⚜️]\n💘 नाम: ${n}\n💟 सम्बन्ध: एकल (सम्भवतः)\n💞 मिलान: ${a.toFixed(2)}%\n🌸 तपाईंको IDएकल (सम्भवतः)\n💞 मिलान: ${a.toFixed(2)}%\n🌸 तपाईंको ID: ${url}\n🌈 Link fb: https://m.facebook.com/${e}`,
                  attachment: fs.createReadStream(__dirname + `/cache/avt.png`)
            }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/avt.png`), event.messageID);
  }
  else {            
    var ThreadInfo = await api.getThreadInfo(event.threadID);
    var all = ThreadInfo.userInfo
            let data = [];
      if(args[0] == "boy"){
            for (let u of all) {
        if (u.gender == "MALE") {
                if (u != event.senderID) data.push(u.id)   
                }
            }}  
     
      else if(args[0] == "girl"){
            for (let u of all) {
                if (u.gender == "FEMALE") {
                if (u != event.senderID) data.push(u.id)  
                }
            }}
            console.log(data)
                     
            if (data.length == 0) return api.sendMessage("❌माफ गर्नुहोस्! आफ्नो आधा जीवन भेट्टाउन सक्नुहुन्न 😭", event.threadID, event.messageID);
            let e = data[Math.floor(Math.random() * data.length)]
            let a = (Math.random() * 50)+50;
            var n = (await Users.getData(e)).name
            const url = api.getCurrentUserID(e);
            let getAvatar = (await axios.get(`https://graph.facebook.com/${e}/picture?height=1500&width=1500&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`, { responseType: "arraybuffer" } )).data; 
            fs.writeFileSync( __dirname + "/cache/avt.png", Buffer.from(getAvatar, "utf-8") );
            api.sendMessage({ body: `[⚜️] आफ्नो अन्य आधा [⚜️] खोज्नुहोस्\n💘 नाम: ${n}\n💟आफ्नो अन्य आधा [⚜️] खोज्नुहोस्\n💘 नाम सम्बन्ध: एकल (सम्भवतः)\n💞 अनुकूलता: ${a.toFixed(2)}%\n🌸  सम्बन्ध: एकल (सम्भवतः)\n💞 अनुकूलता तपाईंको आईडी: ${url}\n🌈 Link fb: https://m.facebook.com/${e}`,
                  attachment: fs.createReadStream(__dirname + `/cache/avt.png`)
            }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/avt.png`), event.messageID);}

};
