module.exports.config = {
  name: "uptime",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "karan jalvanshi",
  hide: true,
  description: "Random images by api - uptime",
  commandCategory: "administrators",
  cooldowns: 2,
  dependencies: {
    "pidusage": ""
  }
};
function byte2mb(bytes) {
  const units = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  let l = 0, n = parseInt(bytes, 10) || 0;
  while (n >= 1024 && ++l) n = n / 1024;
  return `${n.toFixed(n < 10 && l > 0 ? 1 : 0)} ${units[l]}`;
}
module.exports.run = async ({ api, event, args , Threads}) => {
  var username = process.env.REPL_OWNER
  if(username !== undefined) {
    var urlRepl = `https://${process.env.REPL_SLUG}.${username}.repl.co`
}
  var os = require("os");
  var cpus = os.cpus();
  var chips;
  for (var i of cpus) chips = i.model, speed = i.speed;
  if (cpus == undefined);
var time = process.uptime(),
        hours = Math.floor(time / (60 * 60)),
        minutes = Math.floor((time % (60 * 60)) / 60),
        seconds = Math.floor(time % 60);
  var z_1 = (hours < 10) ? '0' + hours : hours;
    var x_1 = (minutes < 10) ? '0' + minutes : minutes;
    var y_1 = (seconds < 10) ? '0' + seconds : seconds;
    const axios = require('axios')
    const threadSetting = (await Threads.getData(String(event.threadID))).data || 
    {};
    const prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX 
    : global.config.PREFIX;
    const { commands } = global.client;
  const pidusage = await global.nodemodule["pidusage"](process.pid);
  const timeStart = Date.now();
  const fs = require('fs-extra');
   if (!fs.existsSync(__dirname +
        `/cache/UTM-Avo.ttf`)) {
        let getfont = (await axios.get(`https://github.com/quyenkaneki/data/blob/main/UTM-Avo.ttf?raw=true`, { responseType: "arraybuffer" })).data;
        fs.writeFileSync(__dirname + `/cache/UTM-Avo.ttf`, Buffer.from(getfont, "utf-8"));