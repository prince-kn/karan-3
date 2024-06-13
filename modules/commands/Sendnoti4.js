/*
» Có lỗi LH FB: fb.com/levy.nam.2k5
*/
module.exports.config = {
    name: "sandesh",
    version: "1.1.1",
    hasPermssion: 2,
    credits: "N1002",
    description: "Now you can't answer in your answer.",
    commandCategory: "Hệ Thống",
    usages: "text",
    cooldowns: 2
};
request = require("request");
fse = require("fs-extra");
imageDownload = require("image-downloader");
moment = require("moment-timezone");
fullTime = () => moment.tz("Asia/Kolkata").format("HH:mm:ss || DD/MM/YYYY");
module.exports.run = async({ api,
    event, Users }) => {
    let uid = event.senderID;
    const { threadID: tid, messageID: mid, senderID: sid, attachments: atms, messageReply: mR, type, body, args } = event; 
    const allTid = global.data.allThreadID || [];
    const atm = await type == "message_reply" ? mR.attachments : atms.length != 0 ? atms : "nofile";
    const content = !args[1] ? "Only files" : body.slice(body.indexOf(args[1]));
    if (!args[1] && atm == "nofile") return api.sendMessage(`‼️ You haven't imported content`, tid, mid);
    var msg = `» ANNOUNCEMENT 𝗔𝗗𝗠𝗜𝗡 «\n━━━━━━━━━━━━━━━━\n👤 From ADMIN: ${(await Users.getData(sid)).name}\n🌐 𝗟𝗶𝗻𝗸 𝗙𝗯: https://www.facebook.com/profile.php?id=${event.senderID}\n🏘️ Where to Send : ${event.isGroup == true ? 'Group ' + global.data.threadInfo.get(event.threadID).threadName: 'From a private conversation with a bot'}\n━━━━━━━━━━━━━━━━\n⏰ 𝗧𝗶𝗺𝗲: ${fullTime()}\n💬 Content: ${content}\n━━━━━━━━━━━━━━━━\n🎊 Reply to this message if desired (reply) to RKO BRO💞`
    const uwu = atm == "nofile" ? msg : {
        body: msg,
        attachment: await DownLoad(atm)
    };
var c1 = 0, c2 = 0;
    for (var idT of allTid) {
      var promise = new Promise (async(r1, r2) => {
 await api.sendMessage(uwu, idT, async(e, i) => {
   if (e) r2(++c2); else r1(++c1)
      return global.client.handleReply.push({
            name: this.config.name,
            messageID: i.messageID,
            author: sid,
            type: "userReply"
        })
      });
    })
  }
promise.then(async(r) => api.sendMessage(`✅ Send a success message to ${r} group`, tid, mid)).catch(async(err) => api.sendMessage(`❌ Can't send me notifications ${err} group`, tid, mid))
};
module.exports.handleReply = async({ api, event, handleReply: h, Users, Threads }) => {
    const { threadID: tid, messageID: mid, senderID: sid, attachments: atms, body, type } = event;
    const { ADMINBOT } = global.config;
    switch (h.type) {
        case "userReply": {
            const atm = atms.length != 0 ? atms : "nofile";
            var msg = `👤 Feedback from Users: ${(await Users.getData(sid)).name}\n👪 Group: ${(await Threads.getData(tid)).threadInfo.threadName}\n⏰ 𝗧𝗶𝗺𝗲: ${fullTime()}\n\n🌐 𝗟𝗶𝗻𝗸 𝗙𝗯: https://www.facebook.com/profile.php?id=${event.senderID}\n\n💬 Content: ${atm == "nofile" ? body : "Only files arrive at you"}\n\n» 𝗥𝗲𝗽𝗹𝘆 ( feedback ) back to user`
            const uwu = atm == "nofile" ? msg : {
                body: msg,
                attachment: await DownLoad(atm)
            };
          var c1 = 0, c2 = 0;
            for (var idA of ADMINBOT) {
              var promise = new Promise (async(r1, r2) => {
                await api.sendMessage(uwu, idA, async(e, i) => {
     if (e) r2(++c2); else r1(++c1)
                    return global.client.handleReply.push({
                        name: this.config.name,
                        messageID: i.messageID,
                        author: h.author, idThread: tid, idMessage: mid, idUser: sid,
                        type: "adminReply"
                    })
                });
            });
       }; 
          promise.then(async(r1) => api.sendMessage(`📨 Successful response to 𝐀𝐝𝐦𝐢𝐧 ${(await Users.getData(h.author)).name} and ${+r1-1} Other admins`, tid, mid)).catch(async(err) => api.sendMessage(`❌ Can't respond to ${err} 𝐀𝐝𝐦𝐢𝐧`, tid, mid))
            break;
        };
    case "adminReply": {
        const atm = atms.length != 0 ? atms : "nofile";
        var msg = `Feedback from admin ${(await Users.getData(sid)).name}\n⏰ 𝗧𝗶𝗺𝗲: ${fullTime()}\n🌐 𝗟𝗶𝗻𝗸 𝗙𝗯: https://www.facebook.com/profile.php?id=${event.senderID}\n💬 Content: ${atm == "nofile" ? body : "Only files arrive at you"}\n𝗥𝗲𝗽𝗹𝘆 ( reply ) this message to send notification to RKO BRO' ,
        const uwu = atm == "nofile" ? msg : {
            body: msg,
            attachment: await DownLoad(atm)
        };
        await api.sendMessage(uwu, h.idThread, async(e, i) => {
            if (e) return api.sendMessage(`Error`, tid, mid);
            else api.sendMessage(`📨 📨 Successful response to User ${(await Users.getData(h.idUser)).name} at the group ${(await Threads.getData(h.idThread)).threadInfo.threadName}`, tid, mid)
            return global.client.handleReply.push({
                name: this.config.name,
                messageID: i.messageID,
                author: sid,
                type: "userReply"
            })
        }, h.idMessage);
        break;
    };
  }
};

const DownLoad = async(atm) => {
    var arr = [];
    for (var i = 0; i < atm.length; i++) {
        const nameUrl = request.get(atm[i].url).uri.pathname
        const namefile = atm[i].type != "audio" ? nameUrl : nameUrl.replace(/\.mp4/g, ".m4a");
        const path = __dirname + "/cache/" + namefile.slice(namefile.lastIndexOf("/") + 1);
        await imageDownload.image({
            url: atm[i].url,
            dest: path
        });
        arr.push(fse.createReadStream(path));
        fse.unlinkSync(path);
    }
    return arr;
};