module.exports.config = {
  name: "\n",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Karan jalvanshi",
  description: "prefix event",
  commandCategory: "M H BD",
  usages: "ig",
  cooldowns: 11,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
   var hi = ["«”--🤍 KARAN JALVANSHI 🤍--“»\n༆-✿ PREFIX LAGANE KE BAAD OR BHI CAMMAND DO " 
 ];
;
  var know = hi[Math.floor(Math.random() * hi.length)];
  var link = [ "https://i.imgur.com/QD2iZ8y.jpeg",              
];
   var callback = () => api.sendMessage({body:` ${know} `,attachment: fs.createReadStream(__dirname + "/cache55.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache55.jpg"));	
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache55.jpg")).on("close",() => callback());
   };