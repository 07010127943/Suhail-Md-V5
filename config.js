const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio=process.env.GITHUB||"" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="nigeria,lagos."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Nigeria";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ 𝙳𝙾𝙽𝚆𝙸𝚉 " 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349131021928";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_19_53_12_11_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjE5LFxuICAgICAgICA0OCxcbiAgICAgICAgNDYsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTcsXG4gICAgICAgIDE1LFxuICAgICAgICA3NyxcbiAgICAgICAgOSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNDIsXG4gICAgICAgIDk5LFxuICAgICAgICAxOTEsXG4gICAgICAgIDMxLFxuICAgICAgICA1OSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNDAsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjUxLFxuICAgICAgICA1LFxuICAgICAgICAyMDQsXG4gICAgICAgIDQwLFxuICAgICAgICAyMjcsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjMxLFxuICAgICAgICAzNCxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMDEsXG4gICAgICAgIDkwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDc1LFxuICAgICAgICAxNyxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMzksXG4gICAgICAgIDk0LFxuICAgICAgICAyMjUsXG4gICAgICAgIDIzLFxuICAgICAgICAxNTgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgOTUsXG4gICAgICAgIDY4LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE5LFxuICAgICAgICAyMTEsXG4gICAgICAgIDYsXG4gICAgICAgIDIyLFxuICAgICAgICAyNSxcbiAgICAgICAgMjcsXG4gICAgICAgIDUyLFxuICAgICAgICAxNjYsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDU5LFxuICAgICAgICAxNTMsXG4gICAgICAgIDExMyxcbiAgICAgICAgNzQsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTkzLFxuICAgICAgICAzLFxuICAgICAgICAxNzQsXG4gICAgICAgIDYxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTYsXG4gICAgICAgIDc4LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxODIsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTA2LFxuICAgICAgICA5MixcbiAgICAgICAgNzIsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMCxcbiAgICAgICAgNzYsXG4gICAgICAgIDcyLFxuICAgICAgICAyMjUsXG4gICAgICAgIDU3LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE2MyxcbiAgICAgICAgODgsXG4gICAgICAgIDg2LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMTIsXG4gICAgICAgIDIwLFxuICAgICAgICA0NCxcbiAgICAgICAgMzcsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTc4LFxuICAgICAgICA3NSxcbiAgICAgICAgOTlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg4LFxuICAgICAgICAyNTUsXG4gICAgICAgIDM5LFxuICAgICAgICAyNTUsXG4gICAgICAgIDkxLFxuICAgICAgICAxNzcsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTY4LFxuICAgICAgICA4MixcbiAgICAgICAgMjcsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTQzLFxuICAgICAgICAxMDUsXG4gICAgICAgIDgzLFxuICAgICAgICAxMzUsXG4gICAgICAgIDg1LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTk1LFxuICAgICAgICAxNzksXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjM2LFxuICAgICAgICA1MixcbiAgICAgICAgMyxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMDAsXG4gICAgICAgIDExMixcbiAgICAgICAgODcsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNTIsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MCxcbiAgICAgICAgMzgsXG4gICAgICAgIDg0LFxuICAgICAgICA2OSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMTcsXG4gICAgICAgIDUsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTg3LFxuICAgICAgICAyNDYsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMjAsXG4gICAgICAgIDE5LFxuICAgICAgICA3LFxuICAgICAgICAxMzEsXG4gICAgICAgIDY2LFxuICAgICAgICA0LFxuICAgICAgICAxMCxcbiAgICAgICAgMjksXG4gICAgICAgIDY5LFxuICAgICAgICAyNDgsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTI0LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE0MyxcbiAgICAgICAgODAsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNjVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY5LFxuICAgICAgICA4OCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMyxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMjQsXG4gICAgICAgIDM1LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMCxcbiAgICAgICAgMjUwLFxuICAgICAgICA2OSxcbiAgICAgICAgMjQ1LFxuICAgICAgICA1OCxcbiAgICAgICAgMixcbiAgICAgICAgMjIzLFxuICAgICAgICAyMDgsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTEzLFxuICAgICAgICAyNDYsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTM4LFxuICAgICAgICA5NCxcbiAgICAgICAgNDAsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTEyLFxuICAgICAgICAxNTQsXG4gICAgICAgIDMyLFxuICAgICAgICAyMDIsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjUsXG4gICAgICAgIDEwOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAwLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICA0NCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDEyMlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA5LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAzNCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMjBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNTIsXG4gICAgICAgIDE5NixcbiAgICAgICAgNDksXG4gICAgICAgIDE1MixcbiAgICAgICAgMTExLFxuICAgICAgICAxOTksXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMzgsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNjMsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTk0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNixcbiAgICAgICAgNjMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNzcsXG4gICAgICAgIDYsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMDUsXG4gICAgICAgIDYyLFxuICAgICAgICAxNjQsXG4gICAgICAgIDExNSxcbiAgICAgICAgMyxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNTUsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMTMsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTE4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDc0LFxuICAgICAgICAzOSxcbiAgICAgICAgMTk1LFxuICAgICAgICA1NSxcbiAgICAgICAgMzAsXG4gICAgICAgIDQ4LFxuICAgICAgICAxLFxuICAgICAgICAxOTEsXG4gICAgICAgIDc3LFxuICAgICAgICAyMDksXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTIyLFxuICAgICAgICAxODIsXG4gICAgICAgIDIyLFxuICAgICAgICAyMixcbiAgICAgICAgMTA3LFxuICAgICAgICA5MSxcbiAgICAgICAgMjMsXG4gICAgICAgIDgyLFxuICAgICAgICAyNTMsXG4gICAgICAgIDI3LFxuICAgICAgICAxMzUsXG4gICAgICAgIDEyMSxcbiAgICAgICAgOCxcbiAgICAgICAgNjMsXG4gICAgICAgIDc1LFxuICAgICAgICAxMzlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE3NyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJNVkxnVEJVV3VMKzZ1Y3lwSUZxck5mN0JCLzFJUFgrczBoT21yT2hNdDNvPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJFRnFjcXFSelFfRzU3SVdIeVRvYXVnXCIsXG4gIFwicGhvbmVJZFwiOiBcImIyMTA3ZTIwLWQ4NzQtNGQxNi1iMmJhLWE5ZDY2MjFkYmVhNlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA0NixcbiAgICAgIDE1OSxcbiAgICAgIDI3LFxuICAgICAgMTU4LFxuICAgICAgMTQzLFxuICAgICAgMjE2LFxuICAgICAgMzgsXG4gICAgICAyMDYsXG4gICAgICAxNzgsXG4gICAgICA3MixcbiAgICAgIDEwNCxcbiAgICAgIDExOCxcbiAgICAgIDE5NCxcbiAgICAgIDEyNyxcbiAgICAgIDE2LFxuICAgICAgMTA2LFxuICAgICAgMTg4LFxuICAgICAgMjEwLFxuICAgICAgMjU1LFxuICAgICAgMTg0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIyMSxcbiAgICAgIDE2NCxcbiAgICAgIDE1MyxcbiAgICAgIDQ3LFxuICAgICAgNTEsXG4gICAgICAxOTksXG4gICAgICA3MCxcbiAgICAgIDQ1LFxuICAgICAgMjUwLFxuICAgICAgMTM4LFxuICAgICAgMTc0LFxuICAgICAgMTA5LFxuICAgICAgMTcwLFxuICAgICAgMTUsXG4gICAgICAxMSxcbiAgICAgIDE4NSxcbiAgICAgIDAsXG4gICAgICAxNjAsXG4gICAgICAxNDMsXG4gICAgICAyNDNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiUUhBNVoxQjRcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgxNTA5OTg3MDY6NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTA0NzMzMTYzNDA5NTU4OjZAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSlNMaEs4Q0VNdmI1N29HR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJsMlFYQzRtR2xmNDFoRzNueDNzZm5hb1E2QXprYllXQi9vakl6Yy81NlVNPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImc5MEwxSnVnNUlEOGJocGhEaXkwUjZibVQ4TmpnY054ZzV3ZnNmQklZN29SaFo5OEJ4UDBVMUF4TnZIcXpsUDY3Zkx3SitBUVdDZ0hVZHE2QzMzZERRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIk1CK2orUG1SWWZVUFFaYytJZFgxQUhpTU02TnFIOTlhV1BOeGZZWDN1MWQ0TVljYUVKQWVnL0t5cXF3TFFuTmdCaGprU0p3K3BBcnhYRXczM2V3emd3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgxNTA5OTg3MDY6NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICA2N1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMzOTQ2ODMxLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRU9IXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFFT0guanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCIyOXF4d29PZHBYcGhiMVpzbkViNFk1M3FndThHVnRoWjNVQ3dnNXFPRHNrPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjYzNTUwNDAxOCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTczMTg1NTI3ODc1NlwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ",",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.9",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "𝙳𝙾𝙽𝚆𝙸𝚉 ",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "𝙳𝙾𝙽𝚆𝙸𝚉 "  ).toUpperCase(),



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
