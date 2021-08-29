/**
* @author BuiChiThong
* @warn Vui lòng không sửa code hoặc sửa credits tôn trọng người viết cảm ơn !
*/

module.exports.config = {
name: "thathinh",
version: "1.0.0",
hasPermssion: 0,
credits: "BuiChiThong",
description: "Thính Việt Nam",
commandCategory: "News",
usages: "gai",
cooldowns: 5
};

module.exports.run = async ({ api, event }) => {
const axios = require('axios');
const res = await axios.get(`http://le31.glitch.me/poem`);
var thính = res.data.data
return api.sendMessage(` ${thính} `, event.threadID, event.messageID)
}