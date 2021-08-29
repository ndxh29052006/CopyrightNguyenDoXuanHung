/**
* @author BuiChiThong
* @warn Vui lòng không sửa credits tôn trọng người viết cảm ơn !
*/
module.exports.config = {
  name: "tagadmin",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "BuiChiThong",
  description: "Mày Thích Tag Admin Tao Khum",
  commandCategory: "Other",
  usages: "",
  cooldowns: 1
};
module.exports.handleEvent = function({ api, event }) {
  if (event.senderID !== "100000317124060") {
    var aid = ["100000317124060","100061193193853"];
    for (const id of aid) {
    if ( Object.keys(event.mentions) == "100000317124060") {
      var msg = ["Tag cái gì admin tao đi nhà nghỉ với người yêu nó rồi =))"," lần nữa tao đấm cho đấy tao dạo này không còn vui tính như trước nha !","Đừng Tag Admin Tao Tag Tao Đấm Cho Đừng Có Mách Mẹ Đấy 😠","Mày Thích Tag Admin Tao Không Sức Chịu Đựng Của Con Người Có Giới Thiệu Nha😏"];
      return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
    }
    }}
};
module.exports.run = async function({}) {
  }