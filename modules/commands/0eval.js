module.exports.config = {
  name: "eval",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Liane Cagara",
  description: "Execute codes quickly.",
  usePrefix: true,
  commandCategory: "Admin",
  usages: "[reply or text]",
  cooldowns: 0,
  dependencies: {}
};

module.exports.run = async function({ api, args, event, Users, Threads, getText }) {
  let code = args.join(" ");
  if (event.messageReply) {
    code = event.messageReply.body;
  }

  try {
    const result = await eval(code);
    await api.sendMessage(`✅ Result: ${result}`, event.threadID, event.messageID);
  } catch (error) {
    await api.sendMessage(`❌ Error: ${error.message}`, event.threadID, event.messageID);
    console.error(error);
  }
};
