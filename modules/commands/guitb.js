/**
* @author BuiChiThong
* @warn Vui lòng không sửa code hoặc sửa credits tôn trọng người viết cảm ơn !
*/
module.exports.config = {
	name: "guitb",
	version: "1.0.0",
	hasPermssion: 2,
	credits: "BuiChiThong",
	description: "Gửi Thông Báo Đến Các Nhóm Bot Đang Hoạt Động",
	commandCategory: "modulethong",
	usages: "[Text]",
	cooldowns: 5
};

module.exports.run = async ({ api, event, args }) => {
	var allThread = global.data.allThreadID || [];
	var count = 1,
		cantSend = [];
	for (const idThread of allThread) {
		if (isNaN(parseInt(idThread)) || idThread == event.threadID) ""
		else {
			api.sendMessage("» Thông Báo Từ Admin Bot «\n\n" + args.join(" ") , idThread, (error, info) => {
				if (error) cantSend.push(idThread);
			});
			count++;
			await new Promise(resolve => setTimeout(resolve, 500));
		}
	}
	return api.sendMessage(`Đã gửi tin nhắn đến ${count} nhóm!`, event.threadID, () => (cantSend.length > 0 ) ? api.sendMessage(`[!] Không thể gửi thông báo tới ${cantSend.length} nhóm`, event.threadID, event.messageID) : "", event.messageID);
}
