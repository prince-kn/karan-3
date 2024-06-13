const axios = require("axios");
module.exports.config = {
  'name': 'ai',
  'version': '1.0.0',
  'hasPermission': 0x0,
  'credits': "api by jerome",
  'description': "Gpt architecture",
  'usePrefix': false,
  'commandCategory': 'GPT4',
  'cooldowns': 0x5
};
module.exports.run = async function ({
  api: _0x1a65dd,
  event: _0x129feb,
  args: _0x3447aa
}) {
  try {
    const {
      messageID: _0x3982a1,
      messageReply: _0x452cb0
    } = _0x129feb;
    let _0xa7eccd = _0x3447aa.join(" ");
    if (_0x452cb0 && !_0xa7eccd) {
      const _0x50a417 = _0x452cb0.body;
      _0xa7eccd = _0x50a417;
    } else {
      if (!_0xa7eccd) {
        return _0x1a65dd.sendMessage("Please provide a prompt to generate a text response.\nExample: ai What is the meaning of life?", _0x129feb.threadID, _0x3982a1);
      }
    }
    _0x1a65dd.sendMessage("🤖 Processing your request...", _0x129feb.threadID);
    await new Promise(_0x2adb56 => setTimeout(_0x2adb56, 0x7d0));
    const _0x1b4bc6 = "http://fi1.bot-hosting.net:6518/gpt?query=" + encodeURIComponent(_0xa7eccd) + "&model=gpt-4-32k-0314";
    const _0x49d4e9 = await axios.get(_0x1b4bc6);
    if (_0x49d4e9.data && _0x49d4e9.data.response) {
      const _0x2e9f35 = _0x49d4e9.data.response;
      const _0x271e54 = "\n                🤖 AI Response:\n                ━━━━━━━━━━━━━━━━━━━\n                \n                📌 Your Prompt:\n                \"" + _0xa7eccd + "\"\n                \n                📝 Generated Text:\n                \"" + _0x2e9f35 + "\"\n                \n                ━━━━━━━━━━━━━━━━━━━\n            ";
      _0x1a65dd.sendMessage(_0x271e54, _0x129feb.threadID, _0x3982a1);
    } else {
      console.error("API response did not contain expected data:", _0x49d4e9.data);
      _0x1a65dd.sendMessage("❌ An error occurred while generating the text response. Please try again later. Response data: " + JSON.stringify(_0x49d4e9.data), _0x129feb.threadID, _0x3982a1);
    }
  } catch (_0x52baf4) {
    console.error("Error:", _0x52baf4);
    _0x1a65dd.sendMessage("❌ An error occurred while generating the text response. Please try again later. Error details: " + _0x52baf4.message, _0x129feb.threadID, _0x129feb.messageID);
  }
};
