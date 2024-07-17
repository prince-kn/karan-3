module.exports.config = {
  name: "musicYTAPI",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Sʌʜɩɭ Cʜoudʜʌʀƴ❤️",
  description: "Play music from YouTube using YouTube Data API",
  commandCategory: "media",
  usages: "[title]",
  cooldowns: 10,
  dependencies: {
    "axios": "",
    "fs-extra": "",
    "request": ""
  }
};

module.exports.run = async({ api, event }) => {
  const axios = require("axios");
  const fs = require("fs-extra");
  const request = require("request");
  const YOUTUBE_API_KEY = "YOUR_YOUTUBE_API_KEY";
  let input = event.body;

  var text = input.substring(7);
  let data = input.split(" ");

  if (data.length < 2) {
    return api.sendMessage("⚠️Please put a title or name of the music.", event.threadID);
  }

  data.shift();

  try {
    const searchResponse = await axios.get(`https://www.googleapis.com/youtube/v3/search`, {
      params: {
        part: 'snippet',
        q: text,
        key: YOUTUBE_API_KEY,
        maxResults: 1,
        type: 'video'
      }
    });

    if (!searchResponse.data.items.length) {
      return api.sendMessage("Error: No results found.", event.threadID, event.messageID);
    }

    const videoId = searchResponse.data.items[0].id.videoId;
    const videoTitle = searchResponse.data.items[0].snippet.title;

    api.sendMessage(`🔎Searching for "${text}"...`, event.threadID, event.messageID);
    api.setMessageReaction("✅", event.messageID, (err) => {}, true);

    var timeleft = 3;
    var downloadTimer = setInterval(function () {
      if (timeleft <= 0) {
        clearInterval(downloadTimer);
      }
      timeleft -= 1;
    }, 1000);

    const stream = request(`https://www.youtubeinmp3.com/fetch/?video=https://www.youtube.com/watch?v=${videoId}`).pipe(fs.createWriteStream(__dirname + `/cache/${videoTitle}.mp3`));

    stream.on('finish', () => {
      console.info(`[DOWNLOADER] Downloaded`);

      var message = {
        body: videoTitle,
        attachment: [fs.createReadStream(__dirname + `/cache/${videoTitle}.mp3`)]
      };
      api.sendMessage(message, event.threadID, event.messageID);

      if (fs.existsSync(__dirname + `/cache/${videoTitle}.mp3`)) {
        fs.unlink(__dirname + `/cache/${videoTitle}.mp3`, function (err) {
          if (err) console.log(err);
          console.log(__dirname + `/cache/${videoTitle}.mp3 is deleted!`);
        });
      }
    });

    stream.on('error', (err) => console.error('[ERROR]', err));
  } catch (error) {
    console.error('[ERROR]', error);
    api.sendMessage("Error: Unable to fetch music.", event.threadID, event.messageID);
  }
};