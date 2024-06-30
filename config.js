//David Cyril
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });

//=======[dependencies]====================//
global.SESSION_ID = process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQU9WNHRYNDhqNURRNVB1TFdiUVVueTc3Vko5WWliOUFEVDNLc1RId2cyZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTjduNzBKLzlVMm0za0g5WE1DUXF4MXQzSThaWWREVXdPWXhGM0dxOHFDND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPQWJpN2dzRXB4WlZodndJUXlsTGxpbFAzUDFlUnJ2WjdSdm5qSmRCUVhBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ2MVRQY0dHMXUwV3RQN2EwNGE3Ny8za1hqa0pqYUlPWUVSTWNkTG5YdEVnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitQVFIrakttNEhGc0JHT0NERmNZVkw0SjFXM3N5aGpscnlERElvUlpnSEE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InpCVTkrNmNUalRtMlZhSGNSM0h2a1hmZEQwZWppakpBS2RmRXd2U09DVGM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK0VwNFVBU3BETWhVdzRPb0RtNFpxZ1hUUE1TWXlFMVBRMnNZZDZVQWEwaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZUhUVlVmT2RiY2w0b0FvdjV3SFRTMUt6dmdxaFl6eDU0RUpONzZwV256QT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Iklid2t6Mmg4QUhYMnVvT2U4ZEhGam5ocGR4QW8wcnkvTEV2cENEZWJZUGc1N1M0SnhFTGdXZWd6QVkrSmJZYnRMM3lsdUtZQU0raXgzTVBCKzZXZWlnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTE4LCJhZHZTZWNyZXRLZXkiOiI4WFIwOWNNSjQ4aTdlZlVqaXBHTWMzVTdoQ04wMVh0TGZqNnpaTkdDakpNPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIzNDcwMzI5MjgxNzBAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiMDM3N0FCMDAzODYwOUE0M0RFOENFNkY4NzUwRDhGM0MifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcxOTc1MTA1NX1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiOXJHOWoyRUFRVWloVERmVlJUSHZGUSIsInBob25lSWQiOiJjMzZlOTQ0OC0xNmE0LTRlZjQtOTQ0Zi04NDY0OTM1Mjg4OTEiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib3ZqRHJpSUZuUk1ZV2ZDSFpLRXcrWHkyR2dzPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFsUXNBS2xveGppTUY1NHV5Qm1DTkp5bFI3TT0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiI1NkxITExUWiIsIm1lIjp7ImlkIjoiMjM0NzAzMjkyODE3MDo4QHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNKM2NzL01CRVB5aWhiUUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJuRExvenFWejBEaWhjZlNzZVVpYTlxS0tVaHlVRUJhOU1qalplM3JjQTFrPSIsImFjY291bnRTaWduYXR1cmUiOiJFSnFacUZjOVlNSGlMRWRMZnFrS1JQaTNjU1NLUTJwNkRpc2tFaXd6cldKc29JRmhtSjgxeEpMNnl2c28vSFVXZ0FVZzVxaXhsWUpFTW95NldGQTdEZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiUk0wT2U4S2wwRXVLaUp1Q0lqWjY5RGdqMGFzOFVuMi9ndzdydm80NXNkRWRUdjZSMUp6SDFmdVVJN1FwVGNQbGZxcTg1ZDNzU0I1N3RUdlM4S016Z0E9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ3MDMyOTI4MTcwOjhAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWnd5Nk02bGM5QTRvWEgwckhsSW12YWlpbEljbEJBV3ZUSTQyWHQ2M0FOWiJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcxOTc1MTA0OSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFIVDgifQ==";
global.MONGODB = process.env.MONGODB_URI || "";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.sudo = process.env.SUDO
  ? process.env.SUDO.replace(/[\s+]/g, "")
  : "null";
global.owner = process.env.OWNER_NUMBER
  ? process.env.OWNER_NUMBER.replace(/[\s+]/g, "")
  : "2349066528353";
global.THUMB_IMAGE =
  process.env.THUMB_IMAGE ||
  process.env.IMAGE ||
  "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg,https://telegra.ph/file/7275967ae7b5283fada69.jpg";
global.userImages =
  process.env.USER_IMAGES ||
  "https://telegra.ph/file/7275967ae7b5283fada69.jpg,https://telegra.ph/file/c3049cd3ac77f371e119e.jpg,https://telegra.ph/file/a22200a780671e0e32383.jpg,https://telegra.ph/file/85fe388fdd14930cf86a0.jpg,https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4";
///===========[global iMPORTS]====================//

module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`©QUEEN_ANITA-V2`",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "QUEEN_ANITA-V2",
  ownername: process.env.OWNER_NAME || "David Cyril",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "WhatsApp").toUpperCase(),
};
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "";
global.location = "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/QUEEN_ANITA-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaZsyQ21XqudOTjyG30Z";
global.website = process.env.GURL || "";
global.devs = "2349066528353";
global.msg_style = process.env.STYLE || "4";
global.session_reset = process.env.SS_RESET || "false";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
(global.disablegroup = process.env.DISABLE_GROUPS || "false"),
  (global.MsgsInLog = process.env.MSGS_IN_LOG || "true");
global.waPresence = process.env.WAPRESENCE || "typing";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "null";
global.read_status_from = process.env.READ_STATUS_FROM || "null";
global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://mainv2-f66485a0f702.herokuapp.com/";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
