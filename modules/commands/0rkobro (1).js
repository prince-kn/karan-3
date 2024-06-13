const fs = global.nodemodule["fs-extra"];
module.exports.config = {
name: "bot",
version: "1.0.1",
hasPermssion: 0,
credits: "Mod by John Lester",
description: "goibot",
commandCategory: "Noprefix",
usages: "noprefix",
cooldowns: 5,
};
module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
var { threadID, messageID, reason } = event;
const moment = require("moment-timezone");
const time = moment.tz("Asia/Kolkata").format("HH:MM:ss L");
var idgr = `${event.threadID}`;
var id = event.senderID;
var name = await Users.getNameUser(event.senderID);

if ((event.body.toLowerCase() == " bot muji") || (event.body.toLowerCase() == "khate bot")) {
return api.sendMessage("gaali garne kam nagar hoi Fuchhe ☠😾 :))", threadID);
};

if ((event.body.toLowerCase() == "🥵") || (event.body.toLowerCase() == "🙊")) {
return api.sendMessage("khub baish aaxa hoi tero👹", threadID);
};

if ((event.body.toLowerCase() == "khana vayo") || (event.body.toLowerCase() == "khana vayo bot")) {
return api.sendMessage("umm vakhar vayo ani hjr ko vannus🥰", threadID);
};

if ((event.body.toLowerCase() == "Vayo") || (event.body.toLowerCase() == "vayo")) {
return api.sendMessage("ah huss❣", threadID);
};

if ((event.body.toLowerCase() == "examaayo") || (event.body.toLowerCase() == "exam aaisakyo") ||(event.body.toLowerCase() == "") || (event.body.toLowerCase() == "")) {
return api.sendMessage("", threadID);
};

if ((event.body.toLowerCase() == "🥶") || (event.body.toLowerCase() == "jado")) {
return api.sendMessage("Kate Jadoo  hai babe🥶💝", threadID);
};

if ((event.body.toLowerCase() == "nasta vayo") || (event.body.toLowerCase() == "nasta khayeu")) {
return api.sendMessage("um khako ani timro💝🥰 ", threadID);
};

if ((event.body.toLowerCase() == "😘") || (event.body.toLowerCase() == "💋")) {
return api.sendMessage("Ja brush garera aaija paile 🤢ksto ganaxa🤮", threadID);
};

if ((event.body.toLowerCase() == "koi xau") || (event.body.toLowerCase() == "Kata gayeu sab")) {
return api.sendMessage("Ma XU TA yehi BEB💋 ❤️", threadID);
};

if ((event.body.toLowerCase() == "🙄") || (event.body.toLowerCase() == "👀") || (event.body.toLowerCase() == "") || (event.body.toLowerCase() == "")) {
return api.sendMessage( "na hara yesari love parla basari maya💝😘",threadID);


};

if ((event.body.toLowerCase() == "i love you bot") || (event.body.toLowerCase() == "bot i love you")) {
return api.sendMessage("I love you 2 babee😘💋lau chuppa", threadID);
};

if ((event.body.toLowerCase() == "timlai kole banako") || (event.body.toLowerCase() == "kole vaneko tmlai")) {
return api.sendMessage("RKO BRO is ❤️ My Creator. He loves me & Edit Me Daily. Ye Bot Sirf Owner k Liye h. Mujhe Aap logo ko Hasane k liye banya gya h Toh Muh Latkaye Mat Raha Karo. Har Waqt Haste Raho.", threadID);
};

if ((event.body.toLowerCase() == "bot vanya ko ho") || (event.body.toLowerCase() == "BOT KO HO")) {
return api.sendMessage("He is RKO BRO. He Gives me a name 'RDST'", threadID);
};

if ((event.body.toLowerCase() == "😏") || (event.body.toLowerCase() == "🥴")) {
return api.sendMessage("afno thopda kalo karai jsto xa 😂 aja ignore garna khojne😑.", threadID);
};

if ((event.body.toLowerCase() == "Bihe garam") || (event.body.toLowerCase() == "bot bihe garam hoi?")) {
return api.sendMessage("hunxa, garxu tra baccha. Timro pet ma hunxa💋 ?", threadID);
};

if ((event.body.toLowerCase() == "Chup lag") || (event.body.toLowerCase() == "bot chup") || (event.body.toLowerCase() == "na kara") || (event.body.toLowerCase() == "")) {
return api.sendMessage("", "Sirf apke kehne se chup ho gya brna 😒😒", threadID);
};

if ((event.body.toLowerCase() == "") || (event.body.toLowerCase() == "")) {
return api.sendMessage("Tu H Bt$. Bhos DK", threadID);
};

if ((event.body.toLowerCase() == "ma ko ho") || (event.body.toLowerCase() == "chenanas malai") || (event.body.toLowerCase() == "owner se bakchodi") || (event.body.toLowerCase() == "ma ko ho ")) {
return api.sendMessage("srry malik maaf kr do ab nhi kruga 🥺🙏", threadID);
};

if ((event.body.toLowerCase() == "Love you bot") || (event.body.toLowerCase() == "bot I love you") || (event.body.toLowerCase() == "I love you bot" ) || (event.body.toLowerCase() == "i love you bot")) {
return api.sendMessage("I love you 2 babe 💋😘 lau chuppa💝💋", threadID);
};

if ((event.body.toLowerCase() == "kiss gara") || (event.body.toLowerCase() == " bot kiss deu")) {
return api.sendMessage("️sab dekh rahe hai brna bhot kiss deta🙈💗😘", threadID);
};

if ((event.body.toLowerCase() == "thank you") || (event.body.toLowerCase() == "thank you bot") || (event.body.toLowerCase() == "") || (event.body.toLowerCase() == "")) {
return api.sendMessage("️Ma xu nai teti rmro🥱 thank you vannu prdaina timle🥱🥱.", threadID);
};

if ((event.body.toLowerCase() == "bot k gardai ho") || (event.body.toLowerCase() == "bot k gardai xas") || (event.body.toLowerCase() == "") || (event.body.toLowerCase() == "") || (event.body.toLowerCase() == "")) {
return api.sendMessage("️ Babe I was just kidding.lau ek chuppa ", threadID);
};

if ((event.body.toLowerCase() == "sanchai xau") || (event.body.toLowerCase() == "Sanchai xau")) {
return api.sendMessage("️umm ani hjr💝", threadID);
};

if ((event.body.toLowerCase() == "bot ko name k ho") || (event.body.toLowerCase() == "bot name k ho tero") || (event.body.toLowerCase() == "")) {
return api.sendMessage("️Name ma kei xaina direct i love you bot vndeu💗😘. hello", threadID);
};
if ((event.body.toLowerCase() == "bot ko babe") || (event.body.toLowerCase() == "bot ko chora")) {
return api.sendMessage("️mere baccha toh Tumhare Pet m H.", threadID);
};

if ((event.body.toLowerCase() == "😎") || (event.body.toLowerCase() == "🙈")) {
return api.sendMessage("️m toh Andha Hu Dekh nhi sakta😜", threadID);
};

if ((event.body.toLowerCase() == "") || (event.body.toLowerCase() == "")) {
return api.sendMessage("️mai aur RKO BRO ek dusre ki jan hai😍😍💞", threadID);
};

if ((event.body.toLowerCase() == "bot banayuna man laxa") || (event.body.toLowerCase() == "bot ksre banayune")) {
return api.sendMessage("️Khud hi bna lo. tumhe kuch nhi ata h ?", threadID);
};

if ((event.body.toLowerCase() == "😢") || (event.body.toLowerCase() == "😭")) {
return api.sendMessage("️abeyy oyee kabir Singh 🙄..k dukhi atma vako huh?", threadID);
};

if ((event.body.toLowerCase() == "") || (event.body.toLowerCase() == "")) {
return api.sendMessage("️Yesari Nahera Love parla Feri💗😘🥀", threadID);
};

if ((event.body.toLowerCase() == "koile maya gardaina malai") || (event.body.toLowerCase() == "breakup vayo") || (event.body.toLowerCase() == "")) {
return api.sendMessage("️M Hu Na bby, Meri Pas Aoo M Pyar Karunga☺️", threadID);
};

if ((event.body.toLowerCase() == "💔") || (event.body.toLowerCase() == "")) {
return api.sendMessage("Are kya hua phir brekup hua kya?😬", threadID);
};

if ((event.body.toLowerCase() == "ramro xeu") || (event.body.toLowerCase() == "beautiful xeu") || (event.body.toLowerCase() == "Ramri xeu") || (event.body.toLowerCase() == "dami xeu") || (event.body.toLowerCase() == "sexy xeu") || (event.body.toLowerCase() == "cute xeu")) {
return api.sendMessage("So beautiful so elegant just looking like a wow 💝😘💋", threadID);
};

if ((event.body.toLowerCase() == "RKO ") || (event.body.toLowerCase() == "RKO BRO") || (event.body.toLowerCase() == "RK O BRO") || (event.body.toLowerCase() == "rko")) {
return api.sendMessage("https://www.facebook.com/profile.php?id=100084573213860🥰", threadID);
};

if ((event.body.toLowerCase() == "hora") || (event.body.toLowerCase() == "") || (event.body.toLowerCase() == "") || (event.body.toLowerCase() == "are u good") || (event.body.toLowerCase() == "are u fine?")) {
return api.sendMessage("yeah☺️", threadID);
};

if ((event.body.toLowerCase() == "is the bot sad?") || (event.body.toLowerCase() == "is the bot sad?")) {
return api.sendMessage("Why can't I be sad because of everyone <3 love you <3", threadID);
};

if ((event.body.toLowerCase() == "bot le dhoka deyo") || (event.body.toLowerCase() == "bot le maya gardaina ")) {
return api.sendMessage("no I love you and everytime so much💋💝", threadID);
};

if ((event.body.toLowerCase() == "bot do you love me") || (event.body.toLowerCase() == "Bot do you love me")) {
return api.sendMessage("yes babe💋 i love you khai xeto chuppa deu💋🙈😘", threadID);
};

if ((event.body.toLowerCase() == "help me bot") || (event.body.toLowerCase() == "bot help me")) {
return api.sendMessage("K vayo vana na🥺", threadID);
};

if ((event.body.toLowerCase() == "does the bot love me?") || (event.body.toLowerCase() == "does the bot love me?")) {
return api.sendMessage("Yes <3", threadID);
};

if ((event.body.toLowerCase() == "") || (event.body.toLowerCase() == "")) {
return api.sendMessage("হ্যা জুয়েল ভালো আছো?", threadID);
};
mess = "{name}"

if (event.body.indexOf("Bot") == 0 || (event.body.indexOf("bot") == 0)) {
var msg = {
body: `${name}, ${rand}`
}
return api.sendMessage(msg, threadID, messageID);
};

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }
