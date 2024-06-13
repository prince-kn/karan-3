module.exports.config = {
  name: "all",
  version: "6.9",
  hasPermssion: 1,
  credits: "Dipto",
  description: "Tag all members",
  commandCategory: "system",
  usages: "[Text]",
  cooldowns: 5,
};

exports.run = async function({ api, event, args, Threads }) {
  try {
    var all = (await Threads.getInfo(event.threadID)).participantIDs;
all.splice(all.indexOf(api.getCurrentUserID()), 1);
    all.splice(all.indexOf(event.senderID), 1);
    var body = (args.length != 0) ? args.join(" ") : "Baby", mentions = [], index = 0;
    for (let i = 0; i < all.length; i++) {
        if (i == body.length) body += body.charAt(body.length - 1);
        mentions.push({
          tag: body[i],
          id: all[i],
          fromIndex: i - 1
        });
      }
    return api.sendMessage({ body: `‎${body}`, mentions }, event.threadID, event.messageID);
  }
  catch (er) { return console.log(er); }
}
