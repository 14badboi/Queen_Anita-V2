//David Cyril
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });

//=======[dependencies]====================//
global.SESSION_ID = process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic040dGdlMyt6MWVEZDAyZlV0eUVVZlhNRERvenQxWWJKdVFyK0V0VXgxND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQWtubHhZZ0lsSndsdVpiT0xTdEFDamR5VUFLZERpeXdHMmtOaWhqWldnRT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrSVlYM1g5a0NZbkRSdUNCdWhVUFFqcXZzc1RiT3M4cFphVmpESW1CejBRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJQWnJyZ1FtVXFDQlhQdHlCSXJ2UFlWd2JFcWF4WFpNVVFUSWovVUlZMzBnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklPSUlPcHg1OExZZHd3Qks1bE5ScXJNNHdIZHBSaFJCMjFjRGFMNlpJbWM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNHWnRMQTl6d1I5MkZhMlluY1lEd1pXZ3EyM3FNNTJOdjZETXNEelhIM1k9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSU15bjh5Rm1GaysrRk1hSEtmZ0prWldhQi84MXR6NmVuSStxaHBKaE1sRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicmxSMXlUZVdNbkkzK1ZmRk9RTXpvL0REQU9ISzNoUG0xSUNia0ovUHFYQT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtzQmpDYWZyMUZqSnNJSW10SDA5MzJINHJpdGo5eFNPYXZrK0RSa1YrSXEyd2IvakxpM0xUUUtnQ05CLzRMTGg0cU53Si9QZXYwM2F6aTFoYUNmTGd3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTE1LCJhZHZTZWNyZXRLZXkiOiJhUk5WQUFZd3JCSmtBZElNYWJiMG1UNm9SUXpiM1NrL1p0QkZsaGkrMEU0PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJsakx3VHhLSFRBYTdfTWpRcHE5ajZRIiwicGhvbmVJZCI6IjYzODUwYzRmLTBiODktNDM4NS1iMjk5LTI3ZDgwZWU2OTA4NSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrWFpDc0wyODdhcDZpMkNHalAwdjgrN3hLMUU9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaDZMS0ZJQ3JZUTVwVE1hMWU3T0kwazNtaGd3PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6Ik1LVkVaWEVXIiwibWUiOnsiaWQiOiIyMzQ4MTAyNDI1OTY3OjI3QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IijigaAq4oGgX+KBoCrigaApRW1teSjigaAq4oGgX+KBoCrigaAp8J+mhSJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDUEwwbnVVRkVPRDBoYlFHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiUzROdEt5RUVMNmRGZi9MakgzanE5UUhYSzlJaEgwcTBHSTQ2TW40NmhTOD0iLCJhY2NvdW50U2lnbmF0dXJlIjoiUFI0aXlEeG9qT1JKTzBPaVo5Rys0MjFreXNJN1JLN29MOFpLQnpxSVQ3MlJpdHBpWjNtSVNsWnZQRnpheFR0SzgwYkdpdzBUNmJqTUlRVmFEc010QVE9PSIsImRldmljZVNpZ25hdHVyZSI6IjZvL3lCNVVCZ2pwcC81YXI1eFAyUVZka1p3TE9qR0ZoRWhpd2ZKcFFNTTdkT3NqQTF2REpsckNDbS9UcXZqQUJqSmN0NWNjTEJWRTFBY2hXSld5cmpnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM0ODEwMjQyNTk2NzoyN0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJVdURiU3NoQkMrblJYL3k0eDk0NnZVQjF5dlNJUjlLdEJpT09qSitPb1V2In19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzE5NzYxNTE3LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUxoWSJ9";
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
  HANDLERS: process.env.PREFIX || "all",
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
global.gurl = process.env.GURL || "";
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
global.waPresence = process.env.WAPRESENCE || "online";
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
