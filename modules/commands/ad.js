const request = require('request');
const fs = global.nodemodule["fs-extra"]
module.exports.config = {
  name: "ad",
  version: "1.0.5",
  hasPermssion: 0,
  credits: "BuiChiThong",
  description: "Thông Tin Về Admin Bot",
  commandCategory: "Info",
  usages: "testad",
  cooldowns: 1,
  dependencies: {
"request": ""
}
};

module.exports.run = async({api,event,args,Users,global,Currencies}) => {
var callback = () => api.sendMessage(
{body:`🤩ADMIN BOT🤩
\n🔰 Tên: Bùi Chí Thông✅
\n⚛️ UID: 100000317124060
\n🔗 Link FB: https://www.facebook.com/BuiChiThongg2004
\n🚻 Giới tính: Nam
\n💠 Username: BuiChiThongg2004
\n🥺 Zalo: Đéo Có =))
\n✡️ Sở thích: Chơi game - nghe nhạc
\n👩‍❤️‍👨 Đã Có Bồ 
\n👉 Profile: https://github.com/chithong2004`,
    attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID, () => 
    fs.unlinkSync(__dirname + "/cache/1.png"));  
      return request(
        encodeURI(`https://graph.facebook.com/${626463485}/picture?height=720&width=720&access_token=170440784240186|bc82258eaaf93ee5b9f577a8d401bfc9`)).pipe(
fs.createWriteStream(__dirname+'/cache/1.png')).on('close',() => callback());
       };