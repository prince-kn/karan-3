module.exports.config = {
	name: "joinNoti",
	eventType: ["log:subscribe"],
	version: "1.0.1",
	credits: "AYAN CHOWDHURY",
	description: "Notify bots or people entering the group",
	dependencies: {
		"fs-extra": ""
	}
};
module.exports.run = async function({ api, event }) {

	const request = require("request");
	const { threadID } = event;
	if (event.logMessageData.addedParticipants.some(i => i.userFbId == api.getCurrentUserID())) {
		api.changeNickname(`【 ${global.config.PREFIX} 】 ${global.config.BOTNAME}`, threadID, api.getCurrentUserID());
		return api.sendMessage(`${global.config.BOTNAME}\n\n𝗛𝗲𝗹𝗹𝗼 𝗘𝘃𝗲𝗿𝘆𝗼𝗻𝗲🙋‍♂️ 𝗥𝗞𝗢 𝗕𝗥𝗢 𝗕𝗢𝗧👽 𝐢𝐬 𝐍𝐨𝐰 𝐂𝐨𝐧𝐧𝐞𝐜𝐭𝐞𝐝⛓️
		🌺🦋🌺 
𝗕𝗼𝘁 𝗠𝗮𝗱𝗲 𝗯𝘆 𝗥𝗞𝗢 𝗕𝗥𝗢 👑☘️
<------------------------------> 
𝗕𝗢𝗧 𝗖𝗢𝗡𝗡𝗘𝗖𝗧𝗘𝗗 𝗦𝗨𝗖𝗘𝗦𝗦𝗙𝗨𝗟♻️ !!! 

𝗔𝗣𝗣𝗥𝗢𝗩𝗔𝗟 𝗔𝗟𝗟𝗢𝗪 𝗜𝗡 𝗧𝗛𝗜𝗦 𝗚𝗥𝗢𝗨𝗣❌!!!
<------------------------------>
\n\n𝗕𝗢𝗧 𝗣𝗥𝗘𝗙𝗜𝗫: 【 ${global.config.PREFIX} 】\n\n𝗨𝗦𝗘 /𝗛𝗘𝗟𝗣 𝗧𝗢 𝗦𝗘𝗘 𝗔𝗟𝗟 Ç𝗢𝗠𝗠𝗔𝗡𝗗♻️
𝗙𝗼𝗿 𝗘𝘅𝗮𝗺𝗽𝗹𝗲: /𝗵𝗲𝗹𝗽 /𝗺𝘂𝘀𝗶𝗰 /𝗽𝗮𝗶𝗿 /𝗮𝗹𝗯𝘂𝗺 /𝘀𝗮𝗱 /𝗴𝗲𝗺𝗶𝗻
`, attachment: fs.createReadStream(__dirname + "/cache/joinmp4/intro.mp4")} ,threadID);
	}
	else {
		try {
    const request = require("request");
			const fs = global.nodemodule["fs-extra"];
			let { threadName, participantIDs } = await api.getThreadInfo(threadID);

			const threadData = global.data.threadData.get(parseInt(threadID)) || {};
			
			var mentions = [], nameArray = [], memLength = [], i = 0;
			
    let addedParticipants1 = event.logMessageData.addedParticipants;
        for (let newParticipant of addedParticipants1) {
   let userID = newParticipant.userFbId
api.getUserInfo(parseInt(userID), (err, data) => {
      if(err){ return console.log(err)}
     var obj = Object.keys(data);
    var userName = data[obj].name.replace("@", "");     	if (userID !== api.getCurrentUserID()) {  
    
				nameArray.push(userName);
				mentions.push({ tag: userName, id: userID, fromIndex: 0 });
      
				memLength.push(participantIDs.length - i++);
memLength.sort((a, b) => a - b);
			
			(typeof threadData.customJoin == "undefined") ? msg = "╔════•| ✿ |•════╗\n 🌿𝗛𝗲𝗹𝗹𝗼 🌿𝗙𝗿𝗶𝗲𝗻𝗱 🌿\n╚════•| ✿ |•════╝\n\n ✨🆆🅴🅻🅻 🅲🅾🅼🅴✨\n\n ❥𝐍𝐄𝐖~\n\n ~🇲‌🇪‌🇲‌🇧‌🇪‌🇷‌~\n\n [ {uName} ]\n\n༄ 𝗜𝗻 𝗢𝘂𝗿 𝗚𝗿𝗼𝘂𝗽✺࿐\n\n{threadName}\n\n 🥰🖤🌸𝗛𝗮𝗽𝗽𝘆🍀𝗘𝗻𝗷𝗼𝘆🍀—🌸🥀\n\n 🥀𝐌𝐞𝐥𝐞𝐫𝐚 𝐁𝐚𝐬𝐧𝐮🥀\n\n༄✺𝗔𝗻𝗶 𝘁𝗺𝗶 𝘆𝗼 𝗚𝗿𝗼𝘂𝗽 𝗞𝗼 {soThanhVien} 𝗠𝗲𝗺𝗯𝗲𝗿 𝗛𝗮𝘂 𝗘𝗻𝗷𝗼𝘆 🥳 # ]࿐\n\n ╔╦══• •✠•❀•✠ • •══╦╗\n ♥ ═╩╝" : msg = threadData.customJoin;
			msg = msg
			.replace(/\{uName}/g, nameArray.join(', '))
			.replace(/\{type}/g, (memLength.length > 1) ?  'you' : 'Friend')
			.replace(/\{soThanhVien}/g, memLength.join(', '))
			.replace(/\{threadName}/g, threadName);			

      var link = [
"",
"",
"",
"",
      ];
				var callback = () => api.sendMessage({ body: msg, attachment: fs.createReadStream(__dirname + "/cache/p4"), mentions }, event.threadID, () => fs.unlinkSync(__dirname + "/cache/p4"));
    return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname + "/cache/p4")).on("close", () => callback());       
      	    }
})
        }
    }catch (err) {
            return console.log("ERROR: "+err);
    }
	}
                                                  } 
