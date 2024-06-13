const axios = require("axios");
const mimeDB = require("mime-db");

module.exports = {
  metadata: {
    name: "egif",
    author: "Cliff | AkhiroDEV",
    hasPrefix: false,
    description: "Emoji to gif converter",
    usage: "egif [emoji]"
  },
  async onRun({ api, event, args }) {
    const emoji = encodeURIComponent(args.join(" "));
    const apiUrl = `https://apis-samir.onrender.com/egif?emoji=${emoji}`;

    const gifUrl = await getStreamFromURL(apiUrl);

    if (gifUrl) {
      await api.sendMessage({
        attachment: gifUrl
      }, event.threadID);
    } else {
      throw new Error("Failed to fetch emoji gif.");
    }
  } catch (error) {
    console.error("Error retrieving emoji gif:", error.message);
    api.sendMessage({ body: "Failed to retrieve emoji gif." }, event.threadID);
  }
};

async function getStreamFromURL(url = "", pathName = "", options = {}) {
  try {
    if (!url || typeof url !== "string") {
      throw new Error(`The first argument (url) must be a string`);
    }
    const response = await axios({
      url,
      method: "GET",
      responseType: "stream",
      ...options
    });
    if (!pathName) {
      pathName = randomString(10) + (response.headers["content-type"] ? '.' + getExtFromMimeType(response.headers["content-type"]) : ".noext");
    }
    response.data.path = pathName;
    return response.data;
  } catch (err) {
    throw err;
  }
}

function randomString(max, onlyOnce = false, possible) {
  if (!max || isNaN(max)) {
    max = 10;
  }
  let text = "";
  possible = possible || "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 0; i < max; i++) {
    let random = Math.floor(Math.random() * possible.length);
    if (onlyOnce) {
      while (text.includes(possible[random])) {
        random = Math.floor(Math.random() * possible.length);
      }
    }
    text += possible[random];
  }
  return text;
}

function getExtFromMimeType(mimeType = "") {
  return mimeDB[mimeType] ? (mimeDB[mimeType].extensions || [])[0] || "unknown" : "unknown";
}
