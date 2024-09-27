const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lagos,Nigeria."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""
global.audio= process.env.ALLOW_PLAY|| "null"
global.timezone= process.env.TZ || process.env.TIME_ZONE || "AFRICA/GHANA";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ ▄︻デD̷O̷N̷W̷I̷Z̷══━一" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349131021928";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '4'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text"  // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_09_53_09_27_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAxODAsXG4gICAgICAgIDE4LFxuICAgICAgICAzNSxcbiAgICAgICAgMTc1LFxuICAgICAgICA5MCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMzUsXG4gICAgICAgIDI0LFxuICAgICAgICA3OSxcbiAgICAgICAgNDUsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMDAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxOTksXG4gICAgICAgIDYyLFxuICAgICAgICAyNCxcbiAgICAgICAgMzIsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjMzLFxuICAgICAgICAyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMzQsXG4gICAgICAgIDYxLFxuICAgICAgICAxNzUsXG4gICAgICAgIDY1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDI5LFxuICAgICAgICA5OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNTQsXG4gICAgICAgIDcwLFxuICAgICAgICAzLFxuICAgICAgICAxNDUsXG4gICAgICAgIDQ1LFxuICAgICAgICAyNDYsXG4gICAgICAgIDQwLFxuICAgICAgICA3MCxcbiAgICAgICAgMTg1LFxuICAgICAgICA2MyxcbiAgICAgICAgNTksXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTQyLFxuICAgICAgICAyNDgsXG4gICAgICAgIDQyLFxuICAgICAgICAxMyxcbiAgICAgICAgMjA1LFxuICAgICAgICA3MCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNzAsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTc4LFxuICAgICAgICA2NCxcbiAgICAgICAgMzMsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTAxLFxuICAgICAgICA4MyxcbiAgICAgICAgMTM4LFxuICAgICAgICAxOTcsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTk1LFxuICAgICAgICA2M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjU0LFxuICAgICAgICA5OSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNDYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjQ4LFxuICAgICAgICA1NyxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNzksXG4gICAgICAgIDEzMyxcbiAgICAgICAgMzksXG4gICAgICAgIDE3MixcbiAgICAgICAgMjE0LFxuICAgICAgICAyMCxcbiAgICAgICAgMjIsXG4gICAgICAgIDkyLFxuICAgICAgICAxNDEsXG4gICAgICAgIDc3LFxuICAgICAgICA0MCxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMTIsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjE2LFxuICAgICAgICAzNixcbiAgICAgICAgMTE5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY4LFxuICAgICAgICAxOSxcbiAgICAgICAgNjQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMjYsXG4gICAgICAgIDg5LFxuICAgICAgICAxMixcbiAgICAgICAgMzMsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMzQsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNDYsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNzgsXG4gICAgICAgIDE5LFxuICAgICAgICA2NixcbiAgICAgICAgMTQyLFxuICAgICAgICAxMDcsXG4gICAgICAgIDE1NixcbiAgICAgICAgNjMsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMyxcbiAgICAgICAgMTY1LFxuICAgICAgICA1OCxcbiAgICAgICAgNTksXG4gICAgICAgIDU5LFxuICAgICAgICA3NyxcbiAgICAgICAgOTMsXG4gICAgICAgIDM3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NixcbiAgICAgICAgMjEyLFxuICAgICAgICAyMDksXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTgxLFxuICAgICAgICAzNixcbiAgICAgICAgMTY3LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMTYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTQ0LFxuICAgICAgICA1MixcbiAgICAgICAgNTQsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTcxLFxuICAgICAgICA5MSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMzksXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNzEsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxODUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDMsXG4gICAgICAgIDQwLFxuICAgICAgICAyNyxcbiAgICAgICAgMjU1LFxuICAgICAgICA2MixcbiAgICAgICAgOTYsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTQwLFxuICAgICAgICA0MixcbiAgICAgICAgMTI4LFxuICAgICAgICA5MyxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNDcsXG4gICAgICAgIDM3LFxuICAgICAgICAyMDUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTcwLFxuICAgICAgICA1NixcbiAgICAgICAgNzEsXG4gICAgICAgIDEwMSxcbiAgICAgICAgODgsXG4gICAgICAgIDIxOSxcbiAgICAgICAgOTksXG4gICAgICAgIDk1LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMzYsXG4gICAgICAgIDIxMixcbiAgICAgICAgNzYsXG4gICAgICAgIDExNCxcbiAgICAgICAgNzVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgNzksXG4gICAgICAgICAgNyxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxMyxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA3NlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDI0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjEyLFxuICAgICAgICAxODEsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTI5LFxuICAgICAgICAxOTYsXG4gICAgICAgIDI2LFxuICAgICAgICAxMTMsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjMwLFxuICAgICAgICA3OSxcbiAgICAgICAgMjIsXG4gICAgICAgIDc4LFxuICAgICAgICAyNDQsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjIsXG4gICAgICAgIDc3LFxuICAgICAgICAxNjgsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMTQsXG4gICAgICAgIDYyLFxuICAgICAgICA0MCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMTYsXG4gICAgICAgIDgsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNjMsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNDcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjAsXG4gICAgICAgIDY3LFxuICAgICAgICAxNTcsXG4gICAgICAgIDIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTI1LFxuICAgICAgICAxODIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNzMsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNTgsXG4gICAgICAgIDQwLFxuICAgICAgICAxMzksXG4gICAgICAgIDcyLFxuICAgICAgICAxMzAsXG4gICAgICAgIDEwLFxuICAgICAgICA1OCxcbiAgICAgICAgMTUsXG4gICAgICAgIDM3LFxuICAgICAgICAxNjAsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjQ3LFxuICAgICAgICA0MCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxODAsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTM2LFxuICAgICAgICA0NSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMjMsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogODUsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwibkdHb0YvUG81bStmSk52MnN5N1NUVWRBdjgra1FiaEYzU1dPb2VCS2JEdz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ5MTMxMDIxOTI4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIzQUJDMDc4QkZEM0M3QkE5NDY4RVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3Mjc0MzA3OTlcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiRjBqelNfaXlSb3FYaGFqcFE1eWNud1wiLFxuICBcInBob25lSWRcIjogXCIzZTZmOTMyNy00NWQ2LTQ3MTMtOGMyZC05OWRkM2ZlN2Q2MjlcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjM1LFxuICAgICAgMTA3LFxuICAgICAgMTI5LFxuICAgICAgMTA5LFxuICAgICAgMjcsXG4gICAgICAxNDMsXG4gICAgICA3OSxcbiAgICAgIDE0MSxcbiAgICAgIDE0MyxcbiAgICAgIDEyNyxcbiAgICAgIDI1MyxcbiAgICAgIDEyOCxcbiAgICAgIDE4OSxcbiAgICAgIDU3LFxuICAgICAgMzQsXG4gICAgICA3MyxcbiAgICAgIDQ0LFxuICAgICAgMTk0LFxuICAgICAgMTkxLFxuICAgICAgMjE5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDMxLFxuICAgICAgMTMzLFxuICAgICAgMTUwLFxuICAgICAgODksXG4gICAgICA4MCxcbiAgICAgIDExOCxcbiAgICAgIDE0NCxcbiAgICAgIDEyLFxuICAgICAgMTUsXG4gICAgICA0OCxcbiAgICAgIDk3LFxuICAgICAgMTk0LFxuICAgICAgOTAsXG4gICAgICAxMDYsXG4gICAgICA4NixcbiAgICAgIDU3LFxuICAgICAgOTIsXG4gICAgICAyMzAsXG4gICAgICA4MixcbiAgICAgIDQ1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIk1LNlpaSDlUXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MTMxMDIxOTI4OjIzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxOTQ4MDMwNzM1NTY0ODY6MjNAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiRM2iT82iTs2iV82iSc2iWs2iIO+jv1wiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0wrS3ROSUZFSWlCMnJjR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiQUhmV29Ma2hQQ1dvNlNwQ3dhK09QVTF2aS9NZmZPUDd3WjFoRlRpQ3FDaz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJCUlpQcGRpNE03YXFGWnExOHg4OHJJTDJ3dEJabzNlekZFMmdjYnNTeER6dTRNalRvWjJWTHp4MldwRi9MQ3owNDE1QlhHcmNETE1zTWJ3VUVTaVZDdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCIwQTk3N1V4WnpLOXhuZkNUbjNkSDRwV1h6ajhYSHVSQjRsRzUvdlI5OGpoNnpobFErZGp0WGQrOFNIVk9aQjFRdmhCeFUwRU5iNGozKy9WSWhza0NCdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MTMxMDIxOTI4OjIzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICA0MixcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICA2MSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgNDFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImlwaG9uZVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzI3NDMwNzk2LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSHRZXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFIdFkuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJKWHlpN3Zhc01BSUt6aGowMjNjSlNKUFFHUjBMUzF3SDVhZlQ2T0dLclZzPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE1MTQ5OTcwNTUsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlsxLDBdfSxcInRpbWVzdGFtcFwiOlwiMTcyNzM5NjAwMzcxMVwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ",",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.9",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "★彡[ᴅᴏɴᴡɪᴢ-ᴍᴅ]彡★",
  ownername:process.env.OWNER_NAME|| "꧁༒☬𝓓𝓞𝓝𝓦𝓘𝓩☬༒꧂",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
