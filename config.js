const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lagos,niferia."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/nigeria";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "234913102928";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_41_10_30_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAxNzgsXG4gICAgICAgIDIzLFxuICAgICAgICA2OCxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMjcsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTgsXG4gICAgICAgIDU3LFxuICAgICAgICAyMDYsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTM3LFxuICAgICAgICA0OSxcbiAgICAgICAgMTIsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMDIsXG4gICAgICAgIDExOCxcbiAgICAgICAgODYsXG4gICAgICAgIDEyLFxuICAgICAgICA4OSxcbiAgICAgICAgMTExLFxuICAgICAgICAxNTQsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMzAsXG4gICAgICAgIDExMixcbiAgICAgICAgMTg3LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE4NixcbiAgICAgICAgNTQsXG4gICAgICAgIDQsXG4gICAgICAgIDY2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTYsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTk1LFxuICAgICAgICAxODIsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNDksXG4gICAgICAgIDI4LFxuICAgICAgICA2OCxcbiAgICAgICAgNTMsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMzcsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNDYsXG4gICAgICAgIDQwLFxuICAgICAgICA0NCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMyxcbiAgICAgICAgNSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMDYsXG4gICAgICAgIDIwLFxuICAgICAgICAyMTYsXG4gICAgICAgIDUzLFxuICAgICAgICA5MSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMDQsXG4gICAgICAgIDM1LFxuICAgICAgICAzMixcbiAgICAgICAgMjAwLFxuICAgICAgICAxOTUsXG4gICAgICAgIDUyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDAsXG4gICAgICAgIDUwLFxuICAgICAgICA0OSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxOTEsXG4gICAgICAgIDksXG4gICAgICAgIDIyNyxcbiAgICAgICAgNTAsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTMzLFxuICAgICAgICAzMyxcbiAgICAgICAgMTkxLFxuICAgICAgICAxOSxcbiAgICAgICAgMjA1LFxuICAgICAgICA2NSxcbiAgICAgICAgMTA5LFxuICAgICAgICA3MCxcbiAgICAgICAgMTYyLFxuICAgICAgICA0OSxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMjEsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjYsXG4gICAgICAgIDI2LFxuICAgICAgICAyMixcbiAgICAgICAgNjYsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTg2LFxuICAgICAgICAyNDgsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTMzLFxuICAgICAgICA5NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDksXG4gICAgICAgIDY2LFxuICAgICAgICA5MixcbiAgICAgICAgOTYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgOTcsXG4gICAgICAgIDQzLFxuICAgICAgICAxNDAsXG4gICAgICAgIDI4LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTM5LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjE4LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMjAsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTM4LFxuICAgICAgICA3NixcbiAgICAgICAgMjcsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNzksXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjQ4LFxuICAgICAgICA5MSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQwLFxuICAgICAgICAyNTMsXG4gICAgICAgIDMsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjUsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNjUsXG4gICAgICAgIDU1LFxuICAgICAgICA1NCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNzEsXG4gICAgICAgIDc5LFxuICAgICAgICA0NCxcbiAgICAgICAgNjYsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjEsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTIwLFxuICAgICAgICA2NixcbiAgICAgICAgMjUyLFxuICAgICAgICAyNixcbiAgICAgICAgMjI3LFxuICAgICAgICAyMyxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMTUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTI3LFxuICAgICAgICA2OSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNTcsXG4gICAgICAgIDY2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg0LFxuICAgICAgICAyMixcbiAgICAgICAgNzcsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE4MixcbiAgICAgICAgNzQsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTY4LFxuICAgICAgICAzNyxcbiAgICAgICAgMjMxLFxuICAgICAgICA1NCxcbiAgICAgICAgODgsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNzYsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNjksXG4gICAgICAgIDE3MCxcbiAgICAgICAgMzksXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMzAsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMzEsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTcyLFxuICAgICAgICAxOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICA4NSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDkwXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA2NixcbiAgICAgICAgICA4N1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjE2LFxuICAgICAgICAyNixcbiAgICAgICAgMTg1LFxuICAgICAgICAyMCxcbiAgICAgICAgMjIwLFxuICAgICAgICAyNTMsXG4gICAgICAgIDQ4LFxuICAgICAgICAyLFxuICAgICAgICAxNDgsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNDQsXG4gICAgICAgIDk1LFxuICAgICAgICAyMjIsXG4gICAgICAgIDgxLFxuICAgICAgICAxMjAsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNixcbiAgICAgICAgNDQsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMDIsXG4gICAgICAgIDI0NixcbiAgICAgICAgNzQsXG4gICAgICAgIDk3LFxuICAgICAgICAxMTIsXG4gICAgICAgIDkzLFxuICAgICAgICAyMSxcbiAgICAgICAgMCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMTIsXG4gICAgICAgIDEzLFxuICAgICAgICA4MixcbiAgICAgICAgMjMsXG4gICAgICAgIDY2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE4MixcbiAgICAgICAgMzksXG4gICAgICAgIDI1LFxuICAgICAgICAxMzAsXG4gICAgICAgIDc1LFxuICAgICAgICAyMDEsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNCxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMjksXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTkxLFxuICAgICAgICA2OSxcbiAgICAgICAgMjM5LFxuICAgICAgICAyNyxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNDksXG4gICAgICAgIDE3LFxuICAgICAgICAyOCxcbiAgICAgICAgNTAsXG4gICAgICAgIDg0LFxuICAgICAgICAyMTksXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjIzLFxuICAgICAgICA4MixcbiAgICAgICAgMTkyLFxuICAgICAgICAxMzZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE0NixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJNcGRiYzA3UFV6RU1EMCszYW1yYVVNYXdrK3NLL05SRUEvT0N6eWIrQytrPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJpdktKTElVTVRwVzJES0taNU42cXh3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjViYTc5N2JlLTkxMWYtNGQ1Zi05OWY0LTZmNzYxYjU1N2Y4OFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA1NyxcbiAgICAgIDczLFxuICAgICAgMTI0LFxuICAgICAgMTUyLFxuICAgICAgMTQ3LFxuICAgICAgNTEsXG4gICAgICAyMDMsXG4gICAgICA5MixcbiAgICAgIDEzOSxcbiAgICAgIDg4LFxuICAgICAgMjQ0LFxuICAgICAgMzYsXG4gICAgICAxNjMsXG4gICAgICA2NyxcbiAgICAgIDQ1LFxuICAgICAgMTQ3LFxuICAgICAgMTA0LFxuICAgICAgMTc3LFxuICAgICAgMjQ2LFxuICAgICAgMTcwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDY5LFxuICAgICAgMjE2LFxuICAgICAgMjQ5LFxuICAgICAgODQsXG4gICAgICA1MCxcbiAgICAgIDE3NSxcbiAgICAgIDEyMyxcbiAgICAgIDE2LFxuICAgICAgODQsXG4gICAgICAyMjgsXG4gICAgICAxNjYsXG4gICAgICAxMDIsXG4gICAgICAxNTEsXG4gICAgICAxOCxcbiAgICAgIDgxLFxuICAgICAgMTA1LFxuICAgICAgMjU1LFxuICAgICAgMTg4LFxuICAgICAgMjYsXG4gICAgICAxMzBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiRERMWFRDQkxcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkxMzEwMjE5Mjg6MzFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE5NDgwMzA3MzU1NjQ4NjozMUBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJEzaJPzaJOzaJXzaJJzaJazaIg76O/XCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTUdLdE5JRkVKWERpYmtHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJBSGZXb0xraFBDV282U3BDd2ErT1BVMXZpL01mZk9QN3daMWhGVGlDcUNrPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImJkeVd3TTM1bSt1bndsOHlyMWtxV2ljVWNxazlodXhyeWM3bCt4TXN6eElQbU9CY0VrVUU4SDBWbUxscHdQNElKYTZlY08zcTZOMEdrcW1DSzNFTkJRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImk3OWthQnRLV2hoTnBpaWlxUDZ0Z0JKSm9HKzZKMWVCdVR3dWVjQjZOcC9GT3p3MUdhZnNlcFp1UUt5d3NzZUFqOFRseXYzTmFBNEUybnVtbGFjV2lRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkxMzEwMjE5Mjg6MzFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA0MVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiaXBob25lXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzAzMDY0NTcsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFHWk5cIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUdaTi5qc29uIjogIntcImtleURhdGFcIjpcImxkUnJBM2Z5M3UvaGhEUnFsOTFSVFRPVFFsU3JPWmdiZFZtVHE4UkJ0Y0U9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTUxNDk5NzA1NyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzEsMF19LFwidGltZXN0YW1wXCI6XCIxNzMwMzA2NDA1MzM1XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.9",
  caption : global.caption || "D͢O͢N͢W͢I͢Z͢ " , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ D͢O͢N͢W͢I͢Z͢  』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "D͢O͢N͢W͢I͢Z͢ ",


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
