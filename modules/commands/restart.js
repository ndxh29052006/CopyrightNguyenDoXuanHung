module.exports.config = {
	name: "khoidong",
	version: "1.0.0",
	hasPermssion: 2,
	credits: "CThong",
	description: "Khởi Động Lại Bot.",
	commandCategory: "[ Source BCT ]",
	cooldowns: 0
        };
module.exports.run = ({event, api}) =>api.sendMessage("Tụi Mày Chờ Tao Chút Thằng Admin Nó Khởi Động Tao Lại Tao Sẽ Quay Lại Trong Ít Phút <3",event.threadID, () =>process.exit(1))
