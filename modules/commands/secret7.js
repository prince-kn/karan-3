module.exports.config = {
  name: "secretv7",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "𝗥𝗞𝗢 𝗕𝗥𝗢",
  description: "",
  commandCategory: "Picture",
  cooldowns: 0,
  dependencies: {
        "axios": "",y
        "fs-extra": ""
    }
}
module.exports.onLoad = async() => {
    const { resolve } = global.nodemodule["path"];
    const { existsSync, mkdirSync } = global.nodemodule["fs-extra"];
    const { downloadFile } = global.utils;
    const dirMaterial = __dirname + `/cache/canvas/`;
    const path = resolve(__dirname, 'cache/canvas', 'pair6.png');
    if (!existsSync(dirMaterial + "canvas")) mkdirSync(dirMaterial, { recursive: true });
    if (!existsSync(path)) await downloadFile("https://i.postimg.cc/fWYH1CrL/pair6-11zon.png", path);
}

async function makeImage({ one, two }) {
    const fs = global.nodemodule["fs-extra"];
    const path = global.nodemodule["path"];
    const axios = global.nodemodule["axios"]; 
    const jimp = global.nodemodule["jimp"];
    const __root = path.resolve(__dirname, "cache", "canvas");

    let pairing_img = await jimp.read(__root + "/pair6.png");
    let pathImg = __root + `/pairing_${one}__${two}.png`;
    let avatarOne = __root + `/avt_${one}.png`;
    let avatarTwo = __root + `/avt_${two}.png`;

    let getAvatarOne = (await axios.get(`https://graph.facebook.com/${one}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`, { responseType: 'arraybuffer' })).data;
    fs.writeFileSync(avatarOne, Buffer.from(getAvatarOne, 'utf-8'));

    let getAvatarTwo = (await axios.get(`https://graph.facebook.com/${two}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`, { responseType: 'arraybuffer' })).data;
    fs.writeFileSync(avatarTwo, Buffer.from(getAvatarTwo, 'utf-8'));

    let circleOne = await jimp.read(await circle(avatarOne));
    let circleTwo = await jimp.read(await circle(avatarTwo));
    pairing_img.composite(circleOne.resize(330, 330), 162, 194).composite(circleTwo.resize(330, 330), 785, 194);

    let raw = await pairing_img.getBufferAsync("image/png");

    fs.writeFileSync(pathImg, raw);
    fs.unlinkSync(avatarOne);
    fs.unlinkSync(avatarTwo);

    return pathImg;
}
async function circle(image) {
    const jimp = require("jimp");
    image = await jimp.read(image);
    image.circle();
    return await image.getBufferAsync("image/png");
}
module.exports. run = async function({ api, event, args, Users, Threads, Currencies }) {
  const axios = require("axios");
    const fs = require("fs-extra");
    const { threadID, messageID, senderID } = event;
    var tl = ['21%', '67%', '19%', '37%', '17%', '96%', '52%', '62%', '76%', '83%', '100%', '99%', "0%", "48%"];
        var tle = tl[Math.floor(Math.random() * tl.length)];
        let dataa = await api.getUserInfo(event.senderID);
        let namee = await dataa[event.senderID].name
        let loz = await api.getThreadInfo(event.threadID);
        var emoji = loz.participantIDs;
        var id = emoji[Math.floor(Math.random() * emoji.length)];

let hemang = ["𝙩𝙢𝙡𝙚 𝙠𝙝𝙖𝙣𝙖 𝙠𝙝𝙖𝙮𝙚𝙪 𝙙𝙚𝙖𝙧 💝🥀", "𝑱𝒂𝒊 𝑺𝒉𝒓𝒆𝒆 𝑲𝒓𝒊𝒔𝒉𝒏𝒂 🌹🚩💝", "𝑱𝒂𝒊 𝑺𝒉𝒓𝒆𝒆 𝑹𝒂𝒎🚩🚩💝🌷", "𝑹𝒂𝒅𝒉𝒆 𝑹𝒂𝒅𝒉𝒆 🪷🏵️", "𝑹𝒂𝒎 𝑹𝒂𝒎 𝒋𝒊 🚩🌹🌷", "𝑱𝒂𝒊 𝑯𝒐 🥰","𝑱𝒂𝒊 𝑩𝒉𝒐𝒍𝒆𝒏𝒂𝒕𝒉 ❤️🧡💛 ", "𝑳𝒐𝒗𝒆 𝒚𝒐𝒖 𝑫𝒐𝒔𝒕 💚🩵💙","𝑲 𝒙𝒂 𝒅𝒐𝒔𝒕 💗🌹", "𝑱𝒂𝒊 𝑺𝒉𝒓𝒆𝒆 𝑲𝒓𝒊𝒔𝒉𝒏𝒂 🚩🚩🌷🌹 ", "𝑱𝒂𝒊 𝑺𝒉𝒓𝒆𝒆 𝑹𝒂𝒎 🚩🌺🥀💐🌹", "𝑲𝒔𝒕𝒐 𝒗𝒂𝒚𝒐 𝒂𝒂𝒋𝒂 𝒌𝒂 𝒅𝒊𝒏 🍂🌻","𝒘𝒐𝒘🌈❤️","𝒋𝒖𝒔𝒕 𝒍𝒐𝒐𝒌𝒊𝒏𝒈 𝒍𝒊𝒌𝒆 𝒂 𝒘𝒐𝒘 "," 𝑻𝒊𝒎𝒓𝒐 100 𝒃𝒂𝒄𝒉𝒂 𝒉𝒐𝒔💖😏","𝑲𝒂𝒕𝒆 𝒄𝒖𝒕𝒆 𝒙𝒂𝒖 𝒓💛🧡","𝑻𝒊𝒎𝒓𝒐 𝒋𝒐𝒅𝒊 𝒃𝒂𝒏𝒚𝒐 𝒂𝒃𝒂 𝒎𝒆𝒓𝒐 𝒏𝒊 𝒌𝒉𝒐𝒋𝒅𝒆𝒖 💓💖"," 𝒂𝒃𝒂 𝒎𝒂𝒍𝒂𝒊 𝒏𝒊 𝒌𝒉𝒐𝒋𝒅𝒆𝒖 💓","𝑴𝒐𝒕𝒖 𝒐𝒓 𝑷𝒂𝒕𝒍𝒖 𝒌𝒊 𝒋𝒐𝒅𝒊 😹💞","𝑫𝒐𝒏𝒐 𝒎𝒐𝒕𝒆 𝒐𝒓 𝒊𝒏𝒌𝒆 𝒃𝒄𝒉𝒉𝒆 𝒊𝒏𝒔𝒆 𝒃𝒉𝒊 𝒎𝒐𝒕𝒆 😹💛" ,"𝒃𝒓𝒆𝒂𝒌𝒖𝒑 𝒈𝒂𝒓𝒂 𝒎𝒂 𝒈𝒂𝒓𝒙𝒖 𝒃𝒊𝒉𝒆💖","𝑻𝒊𝒎𝒓𝒐 𝑪𝒓𝒊𝒄𝒌𝒆𝒕 𝒕𝒆𝒂𝒎 𝒉𝒐𝒔🤭","𝑻𝒊𝒎𝒓𝒐 8 𝒃𝒂𝒄𝒉𝒉𝒂 𝒉𝒐𝒔😗","𝒌𝒊𝒔𝒔 𝒌𝒉𝒂𝒖 𝒌 😋","𝒗𝒂𝒏𝒂 𝑹𝒂𝒅𝒉𝒆 𝑹𝒂𝒅𝒉𝒆 💖🚩","𝑽𝒂𝒏𝒂 𝑱𝒂𝒊 𝒔𝒉𝒆𝒆 𝑲𝒓𝒊𝒔𝒉𝒏𝒂 💖🚩","7 𝒋𝒂𝒂𝒎 𝒌𝒐 𝒓𝒊𝒔𝒕𝒂 𝒉𝒐 𝒚𝒐💗💗","𝑺𝒂𝒔𝒕𝒆 𝑪𝒐𝒖𝒑𝒍𝒆𝒔"," 𝑻𝒉𝒂𝒓𝒌𝒊 𝒙𝒂𝒏 2 𝒚𝒐𝒕𝒂𝒊😏","1 𝒉𝒂𝒏𝒅𝒔𝒐𝒎𝒆 1 𝒃𝒆𝒖𝒕𝒊𝒇𝒖𝒍 🥰","𝑨à𝒚𝒂 𝑮 𝑶𝒐𝒐 𝑮 𝒈𝒂𝒓𝒏𝒆 𝒉𝒂𝒓𝒖 😂💓"," 𝑪𝒉𝒊𝒊𝒊 🤣"," 𝒀𝒆 𝑹𝒊𝒔𝒕𝒂.𝒌𝒚𝒂 𝒌𝒆𝒉𝒍𝒂𝒕𝒂 𝒉 🤭"," 𝑪𝒉𝒊𝒊 𝒚𝒆𝒔𝒕𝒐 𝒏𝒊 𝒉𝒖𝒏𝒙𝒂🥹","𝑪𝒉𝒊𝒊 𝑪𝒉𝒊𝒊 𝑻𝒉𝒖𝒖 𝑻𝒉𝒖𝒖 😆","𝑲𝒂𝒕𝒆 𝒏𝒂𝒓𝒂𝒎𝒓𝒐 🤣"," 𝑹𝒆𝒂𝒍 𝑩𝑭 𝑮𝑭 𝒂𝒂𝒊𝒈𝒂 💝"," 𝒊𝒎𝒓𝒐 𝒅𝒐𝒔𝒕𝒊 𝒃𝒂𝒏𝒅𝒂𝒊 𝒙𝒂 💞","𝒕𝒊𝒎𝒓𝒐 𝒋𝒐𝒅𝒊 𝒏𝒂𝒉𝒐𝒔 😗","𝑫𝒊𝒗𝒐𝒓𝒄𝒆 𝒉𝒐𝒔 𝒕𝒊𝒎𝒓𝒐😆","2 𝒚𝒐𝒕𝒂 𝑩𝒆𝒔𝒕𝒇𝒓𝒊𝒆𝒏𝒅 𝒔𝒂𝒏𝒈𝒂𝒊💓💗"," 𝒌𝒂𝒕𝒆 𝒓𝒂𝒎𝒓𝒐 𝒃𝒆𝒔𝒕𝒖 𝒃𝒆𝒔𝒕𝒊𝒆 𝒉𝒖𝒏 💗","𝑨𝒇𝒏𝒐 𝑮𝑭 𝒅𝒆𝒌𝒉𝒊 𝒍𝒖𝒌𝒆𝒓𝒂 𝒑𝒂𝒊𝒓 𝒑𝒂𝒊𝒓𝒈𝒂𝒓𝒅𝒂𝒊 𝒉𝒐 😏😏 ","𝒕𝒎𝒊 𝒉𝒂𝒓𝒖 𝒌𝒐 𝒋𝒐𝒅𝒊 7 𝒋𝒂𝒏𝒂𝒎 𝒔𝒂𝒏𝒈𝒂 𝒄𝒉𝒂𝒍𝒐𝒔💕","𝒈𝒂𝒓𝒂 2 𝒋𝒂𝒏𝒂 𝒔𝒆𝒕𝒕𝒊𝒏𝒈 𝒂𝒃𝒂🧡","𝑭𝒖𝒍𝒍 𝒔𝒆𝒕𝒕𝒊𝒏𝒈𝒃𝒂𝒛𝒊😋","𝑭𝒖𝒍𝒍 𝑳𝒊𝒏𝒆𝒃𝒂𝒛𝒊😏", " 𝑷𝒂𝒕𝒆𝒏𝒊𝒊 𝒚𝒐😁"," 𝑵𝒉𝒊 𝒑𝒂𝒕𝒏𝒆 𝒘𝒂𝒍𝒊 𝒚𝒆😂","𝑻𝒊𝒎𝒊 𝒔𝒂𝒅𝒉𝒂𝒊 𝒔𝒊𝒏𝒈𝒍𝒆 𝒉𝒖𝒏𝒙𝒂𝒖 😹","🌸 चाँडै एक अर्कालाई 💋 गरौं _____😝🦋", "𝒋𝒂u aba bedroom ma  "," 𝑱au 𝒃𝒆𝒅𝒓𝒐𝒐𝒎 𝒎 𝒎𝒐𝒋 gara 𝒂𝒃a 😏"," vagera bihe gara😗","𝑻𝒎𝒊 2 𝒋𝒂𝒏𝒂  𝒑𝒂𝒈𝒂𝒍 𝒗𝒂𝒚𝒆𝒖 𝒎𝒂𝒚𝒂 𝒎𝒂 😁","𝑮𝒉𝒖𝒔𝒂 2 𝒋𝒂𝒏𝒂 𝒂𝒃𝒂 𝒃𝒂𝒕𝒉𝒓𝒐𝒐𝒎 𝒎à 🥳","𝑱à𝒖 𝒎𝒂𝒚𝒂 𝒈𝒂𝒓𝒂  😋","𝑹𝒆𝒒𝒖𝒆𝒔𝒕 𝒑𝒂𝒕𝒉𝒂𝒖  𝒂𝒃à 💝🚩","𝑰𝒏𝒃𝒐𝒙 𝒎𝒂 𝒋𝒂𝒖 𝒍𝒐𝒗𝒆𝒃𝒂𝒛𝒊 𝒈𝒂𝒓𝒏𝒂💞💓"," 𝒃𝒊𝒉𝒆 𝒌𝒂𝒊𝒍𝒆 𝒈𝒂𝒓𝒏𝒆 𝒉𝒐 𝒂𝒃𝒂 💝","𝑳𝒈 𝒋𝒂𝒐 𝒌𝒂𝒎 𝒑 🥳","𝑺𝒆𝒕𝒕𝒊𝒏𝒈 𝒈𝒂𝒓𝒂 𝒂𝒋𝒐𝒊 𝒎𝒂𝒖𝒌𝒂 𝒙𝒂  💓💖","𝒃𝒂𝒊𝒔𝒉 𝒋𝒂𝒏𝒂 𝒍𝒂𝒈𝒚𝒐 𝒂𝒃𝒂 𝒕𝒂 𝒃𝒊𝒉𝒆 𝒈𝒂𝒓𝒂 🎉🎊","𝒌𝒖𝒓𝒂 𝒌𝒂𝒏𝒊 𝒔𝒖𝒓𝒖 𝒈𝒂𝒓𝒂 𝒊𝒏𝒃𝒐𝒙 𝒎𝒂🎂🎁"];
 let sheoran = hemang[Math.floor(Math.random() * hemang.length)];


        let data = await api.getUserInfo(id);
        let name = await data[id].name
        var arraytag = [];
                arraytag.push({id: event.senderID, tag: namee});
                arraytag.push({id: id, tag: name});

        var sex = await data[id].gender;
        var gender = sex == 2 ? "Male🧑" : sex == 1 ? "Female👩‍  " : "Tran Duc Bo";
var one = senderID, two = id;
    return makeImage({ one, two }).then(path => api.sendMessage({ body: `💞${namee}\n                   🌺   𝗟𝗼𝘃𝗲   🌺\n💞${name}\n      ✧═══•❁『 ${tle} 』❁•═══✧\n                              `, mentions: arraytag, attachment: fs.createReadStream(path) }, threadID, () => fs.unlinkSync(path), messageID));
}
