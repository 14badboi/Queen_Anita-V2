//David Cyril
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });

//=======[dependencies]====================//
global.SESSION_ID = process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUtFUy9NbEoySElOTWFEbE5ydVhQU3NzdVlMb0pMbzNBV29nS2tNRlJVUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia09wcGxLNXV0SE9CcnJIdzFudE9LenJvRG1TSnJqQktPZ2huM0ZMLzJnOD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhUEN4QmJLaFJYeWduT25iZWthWkJ5b3h4MnhWcHpPaVNBQTdSTnBQRG5NPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJUWkg0dUMzOU5sSjdzanlmcXZHUldYaVpoUE9GNjhIeTNWYlhZQlJQRTM4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1CTktnUGNRNHVMM2p1eW1DeXRIUWpxUEwzbFR5YWVtZWdSSG8zcEhxVmM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImF0em9iSmZUOGEraVBZdnlkTEZWb3BnYnowN1hncDVyUUR1SmQvRElCajA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVUw1UGdPQlRDR3lXUFQwVkMyT0UxS3Q3bDJzWEVsSVRUVFFnZTZSOVJIbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK2UyTU1JbWVOa2F0ZmdQUVNKK0RtM1ZSV0tKbm9IZk5ld2pqb3piL3hpST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlpzbEZRL1ErcHFqKzNFQUhFWXhwc0lxWTRBaW5GRThsczFnTHJwVk1CWGNnY0MzYU5Ja2dzbTFlbExmL3B5azR1bmdLaG9Hd3luTTFTWVUzY1o0bEFnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MywiYWR2U2VjcmV0S2V5IjoiRk5vVVFoVGtqaUVBZGJSTmxtNWg5OUtmSFBCeEdRVU5QSWdqUVFjY3lLQT0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOlt7ImtleSI6eyJyZW1vdGVKaWQiOiIyMzQ4MTAyNDI1OTY3QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjMyRjFGRkFFNDdGNjlCODM4NzNGNTQ0ODU4N0I5OTdCIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MTk5MjE1OTV9LHsia2V5Ijp7InJlbW90ZUppZCI6IjIzNDgxMDI0MjU5NjdAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiNDA1RDZDMTdEMEY5MEFDNDM3MDdDMzExQkY3QjJERUUifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcxOTkyMTU5Nn1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiaVRtVnpGWklTTGFrbGlrZHlaakh4USIsInBob25lSWQiOiI0OTQyZjUxOS05MzMyLTRlNjAtYWI2ZC1iYmQxYzY1N2RkNmIiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicGZQS2wrWmVJbS93WmdSMkx2SGNXN212dlBNPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjVTZGVVMU5pSDN2Z2NJSmc3VXFlcTFXZUFnZz0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiIzQUFCUzJEQSIsIm1lIjp7ImlkIjoiMjM0ODEwMjQyNTk2NzoyOEBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiIo4oGgKuKBoF/igaAq4oGgKUVtbXko4oGgKuKBoF/igaAq4oGgKfCfpoUifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ1BMMG51VUZFS3ZYajdRR0dBSWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IlM0TnRLeUVFTDZkRmYvTGpIM2pxOVFIWEs5SWhIMHEwR0k0Nk1uNDZoUzg9IiwiYWNjb3VudFNpZ25hdHVyZSI6ImpTeDgvZW4vTDdSYmpnNXFGQTRnRmszdTJ2RksvUnlTYmtkNDJXS2dVSHNjYkR3V0VMcHhXVWFUZ1VwQUJtWjVwcWdpbWt3WHliVE91RDl0cWFmTEF3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJBb2o4WU1EckNDVnRQWHhJbktZMlFNQmtrZjFMYkRwYjdxdFRIVEZVakp0SXoxcVFJMFBCMW5zTndPSytoeEs1QTRLSlVTMHFPNngvSGtIRGsvc25CQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDgxMDI0MjU5Njc6MjhAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVXVEYlNzaEJDK25SWC95NHg5NDZ2VUIxeXZTSVI5S3RCaU9PakorT29VdiJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcxOTkyMTU5MSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFMaFkifQ==";
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
global.api_smd = "https://api.maher-zubair.tech";
global.scan = "https://mainv2-f66485a0f702.herokuapp.com/";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
