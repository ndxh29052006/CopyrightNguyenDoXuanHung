module.exports.config = {
	name: "gotin",
	version: "1.0.0", 
	hasPermssion: 0,
	credits: "CThong",
	description: "Gỡ tin nhón của Bot",
	commandCategory: "Dành Cho Nhóm Chat [ Source BCT ]", 
	usages: "gỡ", 
	cooldowns: 0,
	dependencies: [] 
};

module.exports.run = async function({ api, event, args, Users }) {
	if (event.messageReply.senderID != api.getCurrentUserID()) return api.sendMessage(getText('unsendErr1'), event.threadID, event.messageID);
			if (event.type != "message_reply") return api.sendMessage(getText('unsendErr2'), event.threadID, event.messageID);
			return api.unsendMessage(event.messageReply.messageID, err => (err) ? api.sendMessage(getText('error'), event.threadID, event.messageID) : '');
		}
