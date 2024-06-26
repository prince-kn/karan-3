const axios = require("axios");
const fs = require("fs");
const FormData = require("form-data");
const path = require("path");

module.exports = {
config: {
name: "art",
credits: "ST | Sheikh Tamim",
description: "Art Image Generator",
commandCategory: "Art Generator",
hasPermission: "0",
hasPrefix: "true"
usages: {
en: `Reply to an image with: art <prompt> | <model> | <control>\nthere are 3 model available and 5 control`
}
},

run: async function ({ api, event }) {
try {
if (!event.messageReply) {
await api.sendMessage("⚠️ | Please reply to an image to use this command.", event.threadID, event.messageID);
return;
}

const repliedMessage = event.messageReply;
if (!repliedMessage.attachments.length) {
await api.sendMessage("⚠️ | The replied message does not contain an image.", event.threadID, event.messageID);
return;
}

const imageUrl = repliedMessage.attachments[0].url;

const commandText = event.body.trim();
const commandParts = commandText.split("|").map(part => part.trim());

let prompt, model = 1, control = 1;

if (commandParts.length >= 1) {
prompt = commandParts[0].trim();
}

if (commandParts.length >= 2) {
model = parseInt(commandParts[1].trim());
if (isNaN(model) || model < 1 || model > 3) {
await api.sendMessage("⚠️ | Model number should be between 1 and 3. Using default (1).", event.threadID, event.messageID);
model = 1; // Default to model 1 if invalid
}
}

if (commandParts.length >= 3) {
control = parseInt(commandParts[2].trim());
if (isNaN(control) || control < 1 || control > 5) {
await api.sendMessage("⚠️ | Control number should be between 1 and 5. Using default (1).", event.threadID, event.messageID);
control = 1; // Default to control 1 if invalid
}
}

const response = await axios.get(imageUrl, { responseType: 'arraybuffer' });

const formData = new FormData();
formData.append('model', model);
formData.append('control', control);
formData.append('prompt', prompt);
formData.append('image', Buffer.from(response.data, 'binary'), 'image.jpg');

const apiResponse = await axios.post('https://beb-anime-convert.onrender.com/generate-image', formData, {
headers: {
...formData.getHeaders(),
},
responseType: 'arraybuffer'
});

const imageBuffer = Buffer.from(apiResponse.data, 'binary');


const imagePath = path.join(__dirname, 'generated-image.jpg');
fs.writeFileSync(imagePath, imageBuffer);


await api.sendMessage({
attachment: fs.createReadStream(imagePath),
body: `Generated image based on: ${prompt}`
}, event.threadID);


fs.unlinkSync(imagePath);

} catch (error) {
console.error('Error processing art command:', error);
await api.sendMessage("⚠️ | Error processing art command. Please try again later.", event.threadID, event.messageID);
}
}
};
