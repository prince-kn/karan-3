module.exports.config = {
    name: "anti",
    version: "1.0.2",
    hasPermssion: 0,
    credits: "BraSL",
    description: "ANTI BOX",
    commandCategory: "BOX",
    usages: "anti is used to toggle",
    cooldowns: 2,
    dependencies: {
        "fs-extra": ""
    }
};

module.exports.run = async function ({ api, event, args, Users, permssion, getText }) {
    const content = args.slice(1, args.length);
    const { threadID, messageID, mentions } = event;
    const { configPath } = global.client;
    const { ADMINBOT, SUPERADMIN } = global.config;
    const { userName } = global.data;
    const { writeFileSync } = global.nodemodule["fs-extra"];
    const mention = Object.keys(mentions);

    delete require.cache[require.resolve(configPath)];
    var config = require(configPath);

    switch (args[0]) {
              case 'check':
        case '-c':{
          const dataNameBox = require('./../../modules/events/cache/nameBox.json');
  const dataNameUser = require('./../../modules/events/cache/nickname.json');
  const dataAvt = require('./../../modules/events/cache/avtBox.json');
          
         return api.sendMessage(`---- CHECK ANTI ----\n↪ ANTI AVT BOX: ${dataAvt.AvtBox[threadID]}\n↪ ANTI NAME BOX: ${dataNameBox.NameBox[threadID]}\n↪ ANTI NAME USER: ${dataNameUser.NickName[threadID]}`, threadID, messageID);
          break;
        }
        case 'namebox':
        case 'nameBox':
        case '-nb': {
            //---> CODE ADMIN ONLY<---//
            if (permssion < 2) return api.sendMessage("YOU ARE NOT OLD ENOUGH TO USE THIS COMMAND!", threadID, messageID);
            const { resolve } = require("path");
            const pathData = resolve(__dirname, '..', 'events', 'cache', 'nameBox.json');
            const database = require(pathData);
            const { NameBox } = database;   
            if (NameBox[threadID] == true) {
                  NameBox[threadID] = false;
                  api.sendMessage("✅ Successfully disable ANTI mode to rename the box ", threadID, messageID);
              } else {
                  NameBox[threadID] = true;
                  api.sendMessage("✅ Successfully enable ANTI mode to rename the box", threadID, messageID);
              }
              writeFileSync(pathData, JSON.stringify(database, null, 4));
                break;
              }
               case 'nickname':
        case 'nickName':
        case '-nu': {
            if (permssion < 2) return api.sendMessage(" YOU ARE NOT OLD ENOUGH TO USE THIS COMMAND!", threadID, messageID);
            const { resolve } = require("path");
            const pathData = resolve(__dirname, '..', 'events', 'cache', 'nickname.json');
            const database = require(pathData);
            const { NickName } = database;   
            if (NickName[threadID] == true) {
                  NickName[threadID] = false;
                  api.sendMessage("✅ Successfully disable the ANTI mode to change the nickname ", threadID, messageID);
              } else {
                  NickName[threadID] = true;
                  api.sendMessage("✅ Successfully enable the nickname change ANTI mode", threadID, messageID);
              }
              writeFileSync(pathData, JSON.stringify(database, null, 4));
                break;
              }
        case 'avtbox':
        case 'avtBox':
        case '-a': {
          if (permssion < 2) return api.sendMessage("YOU ARE NOT OLD ENOUGH TO USE THIS COMMAND!", threadID, messageID);
            const { resolve } = require("path");
            const pathData = resolve(__dirname, '..', 'events', 'cache', 'avtBox.json');
            const database = require(pathData);
            const { AvtBox } = database;   
            if (AvtBox[threadID] == true) {
                  AvtBox[threadID] = false;
                  api.sendMessage("✅ Successfully disable the ANTI mode to change the photo box", threadID, messageID);
              } else {
                  AvtBox[threadID] = true;
                  api.sendMessage("✅ Successfully enable ANTI mode to change the photo box", threadID, messageID);
              }
              writeFileSync(pathData, JSON.stringify(database, null, 4));
              break;
        }
       
        default: {
            return api.sendMessage(`==== GUIDE ====\n\n/→ ${this.config.name} 𝗻𝗮𝗺𝗲𝗕𝗼𝘅: Turn on/off prohibit box renaming\n/→ ${this.config.name} 𝗻𝗶𝗰𝗸𝗻𝗮𝗺𝗲: Turn on/off the prohibition of changing user nicknames\n/→ ${this.config.name} 𝗮𝘃𝘁𝗯𝗼𝘅: Turn on/off the prohibition of changing the photo box`, threadID, messageID)
        }
    };
      }