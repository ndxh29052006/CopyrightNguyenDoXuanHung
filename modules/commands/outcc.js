/**
* @author BuiChiThong
* @warn Vui lòng không sửa code hoặc sửa credits tôn trọng người viết cảm ơn !
*/

module.exports.config = {
    name: "outcc",
    version: "1.1.2",
    hasPermssion: 1,
    credits: "BuiChiThong",
    description: "Tự động add lại thành viên out chùa | Không chắc chắn là add lại được tất cả.",
    commandCategory: "group",
    usages: "outcc",
    cooldowns: 5,
    dependencies: {
        "path": "",
        "fs-extra": ""
    }
};

module.exports.onLoad = function() {
    const { writeFileSync, existsSync } = global.nodemodule["fs-extra"];
    const { resolve } = global.nodemodule["path"];
    const log = require(process.cwd() + '/utils/log');
    const path = resolve(__dirname, 'cache', 'meewmeew.json');
    if (!existsSync(path)) {
        const obj = {
            antiout: {}
        };
        writeFileSync(path, JSON.stringify(obj, null, 4));
    } else {
        const data = require(path);
        if (!data.hasOwnProperty('antiout')) data.antiout = {};
        writeFileSync(path, JSON.stringify(data, null, 4));
    }

    log("[!] Lưu Ý [!]", '[ ANTIOUT ]');
    log("- Không sử dụng module vào mục đích quấy rối.", '[ OUTCC ]');
    log("- Vi phạm điều trên sẽ được góp mặt trong gban.", '[ OUTCC ]');
    log("[!] Vì 1 môi trường trong sạch hơn [!] ", '[ OUTCC ]');
    log("- Hãy report những người có hành động như vậy cho Admin Bùi Chí Thông.", '[ OUTCC ]');
}

module.exports.run = async function({ api, event }) {
    const { writeFileSync } = global.nodemodule["fs-extra"];
    const { resolve } = global.nodemodule["path"];
    const path = resolve(__dirname, 'cache', 'meewmeew.json');
    const { threadID, messageID } = event;
    const database = require(path);
    const { antiout } = database;
    if (antiout[threadID] == true) {
        antiout[threadID] = false;
        api.sendMessage("Đã tắt chế độ chống out chùa.", threadID, messageID);
    } else {
        antiout[threadID] = true;
        api.sendMessage("Đã bật chế độ chống out chùa.\nNghiêm cấm hành vi quấy rối.", threadID, messageID);
    }
    writeFileSync(path, JSON.stringify(database, null, 4));
}