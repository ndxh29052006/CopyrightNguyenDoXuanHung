/**
* @author BuiChiThong
* @warn Vui lòng không sửa code hoặc sửa credits tôn trọng người viết cảm ơn !
*/

const fs = require("fs");
const request = require("request");
module.exports.config = {
	name: "tt",
	version: "1.0.0", 
	hasPermssion: 0,
	credits: "BuiChiThong",
	description: "Xem thông tin nhóm",
	commandCategory: "Info", 
	usages: "tt", 
	cooldowns: 0,
	dependencies: [] 
};

module.exports.run = async function({ api, event, args }) {
	let threadInfo = await api.getThreadInfo(event.threadID);
	var memLength = threadInfo.participantIDs.length;
	let threadMem = threadInfo.participantIDs.length;
	var nameMen = [];
    var gendernam = [];
    var gendernu = [];
    var nope = [];
     for (let z in threadInfo.userInfo) {
     	var gioitinhone = threadInfo.userInfo[z].gender;
     	var nName = threadInfo.userInfo[z].name;
        if(gioitinhone == "MALE"){gendernam.push(z+gioitinhone)}
        else if(gioitinhone == "FEMALE"){gendernu.push(gioitinhone)}
            else{nope.push(nName)}
    };
	var nam = gendernam.length;
    var nu = gendernu.length;
	let qtv = threadInfo.adminIDs.length;
	let sl = threadInfo.messageCount;
	let u = threadInfo.nicknames;
	let icon = threadInfo.emoji;
	let threadName = threadInfo.threadName;
	let id = threadInfo.threadID;
	let sex = threadInfo.approvalMode;
			var pd = sex == false ? 'tắt' : sex == true ? 'bật' : 'Kh';
			var callback = () =>
				api.sendMessage(
					{
						body: `⭐️Tên: ${threadName}\n👨‍💻 ID Box: ${id}\n👀 Phê duyệt: ${pd}\n🧠 Emoji: ${icon}\n👉 Thông tin: gồm ${threadMem} thành viên\nSố thành viên 🧑‍: ${nam} thành viên\nSố thành viên 👩‍🦰: ${nu} thành viên\nVới ${qtv} quản trị viên\n🕵️‍♀️ Tổng số tin nhắn: ${sl} tin.`,
						attachment: fs.createReadStream(__dirname + '/cache/1.png')
					},
					event.threadID,
					() => fs.unlinkSync(__dirname + '/cache/1.png'),
					event.messageID
				);
			return request(encodeURI(`${threadInfo.imageSrc}`))
				.pipe(fs.createWriteStream(__dirname + '/cache/1.png'))
				.on('close', () => callback());
	    }