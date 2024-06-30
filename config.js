const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349158570920";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_19_17_06_30_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAxOTUsXG4gICAgICAgIDE4LFxuICAgICAgICAxMDgsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTM1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDEwMixcbiAgICAgICAgNTcsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTExLFxuICAgICAgICAxMTYsXG4gICAgICAgIDYwLFxuICAgICAgICAxMDAsXG4gICAgICAgIDIzNCxcbiAgICAgICAgOTEsXG4gICAgICAgIDE0NixcbiAgICAgICAgODIsXG4gICAgICAgIDYxLFxuICAgICAgICAxNTcsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMTQsXG4gICAgICAgIDg2LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNTgsXG4gICAgICAgIDExLFxuICAgICAgICAxMDMsXG4gICAgICAgIDc5LFxuICAgICAgICAxMTlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkxLFxuICAgICAgICAxMTYsXG4gICAgICAgIDQxLFxuICAgICAgICAxODcsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMTksXG4gICAgICAgIDExNSxcbiAgICAgICAgMTgsXG4gICAgICAgIDI5LFxuICAgICAgICAxMTAsXG4gICAgICAgIDkwLFxuICAgICAgICAzOCxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMTYsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjUzLFxuICAgICAgICA2NyxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMzksXG4gICAgICAgIDE5NyxcbiAgICAgICAgNzMsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTY0LFxuICAgICAgICA5OCxcbiAgICAgICAgMTkxLFxuICAgICAgICA2MCxcbiAgICAgICAgMjI3LFxuICAgICAgICA2LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE2MCxcbiAgICAgICAgODdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NixcbiAgICAgICAgNzgsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTMzLFxuICAgICAgICAxMjMsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjU1LFxuICAgICAgICAxOCxcbiAgICAgICAgMTQsXG4gICAgICAgIDQ4LFxuICAgICAgICA4NCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxOTcsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMSxcbiAgICAgICAgNjMsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNjIsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTg5LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE3MyxcbiAgICAgICAgOTksXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTQwLFxuICAgICAgICA5OCxcbiAgICAgICAgMjUsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTc0LFxuICAgICAgICA5NixcbiAgICAgICAgNjhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAyMjcsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTUsXG4gICAgICAgIDM4LFxuICAgICAgICAyNDEsXG4gICAgICAgIDkwLFxuICAgICAgICAxOTksXG4gICAgICAgIDQsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNDUsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMzcsXG4gICAgICAgIDY2LFxuICAgICAgICAyMzIsXG4gICAgICAgIDc4LFxuICAgICAgICAzOSxcbiAgICAgICAgMTcsXG4gICAgICAgIDY5LFxuICAgICAgICAxODUsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDI2LFxuICAgICAgICAxNSxcbiAgICAgICAgMjEzLFxuICAgICAgICAyLFxuICAgICAgICAyOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAxNTEsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjEyLFxuICAgICAgICAzNCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxOTUsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMTYsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjM0LFxuICAgICAgICAxMzMsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMTMsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNDYsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNDAsXG4gICAgICAgIDcwLFxuICAgICAgICAxMTUsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNDEsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNjMsXG4gICAgICAgIDYyLFxuICAgICAgICAxNyxcbiAgICAgICAgMjQzLFxuICAgICAgICA0OSxcbiAgICAgICAgMjU1LFxuICAgICAgICA5NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NSxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMzcsXG4gICAgICAgIDYwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTQ1LFxuICAgICAgICA3MSxcbiAgICAgICAgODUsXG4gICAgICAgIDEwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTMwLFxuICAgICAgICAxODMsXG4gICAgICAgIDI3LFxuICAgICAgICAyNDMsXG4gICAgICAgIDc2LFxuICAgICAgICAxMixcbiAgICAgICAgMjAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgOTksXG4gICAgICAgIDE5NyxcbiAgICAgICAgODUsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNTcsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNjEsXG4gICAgICAgIDcwLFxuICAgICAgICA1OCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMjZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDExMFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICA0NixcbiAgICAgICAgICA5MyxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMzNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTAsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxOCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNjcsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDE0OSxcbiAgICAgICAgODgsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNjMsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMzEsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMDksXG4gICAgICAgIDIyLFxuICAgICAgICAyOSxcbiAgICAgICAgNzcsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNzksXG4gICAgICAgIDkxLFxuICAgICAgICA0MixcbiAgICAgICAgNjEsXG4gICAgICAgIDY1LFxuICAgICAgICAyNDUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTE2LFxuICAgICAgICAyNDgsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjEsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTQ4LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNjIsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNzMsXG4gICAgICAgIDEyLFxuICAgICAgICAyNCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjQ3LFxuICAgICAgICA1NSxcbiAgICAgICAgMzAsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjUwLFxuICAgICAgICA0MixcbiAgICAgICAgMTEyLFxuICAgICAgICA0NSxcbiAgICAgICAgMTYyLFxuICAgICAgICAzLFxuICAgICAgICAxOTQsXG4gICAgICAgIDEzMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjIxLFxuICBcImFkdlNlY3JldEtleVwiOiBcImVMSE83azVsN1lZWmxUZnlvSVIxa2hHWHkwR2pDTmovdDFYem1mQThVNDQ9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkdDa1RfQ1dfVHpTZ1Z3Q3A1TVo2YndcIixcbiAgXCJwaG9uZUlkXCI6IFwiYWFmYTkzMGItOTJhOC00ZGViLWExMjQtZjRjYTA5OGZhMWJhXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIxMSxcbiAgICAgIDIsXG4gICAgICA2MSxcbiAgICAgIDYsXG4gICAgICAxOTQsXG4gICAgICAxOTQsXG4gICAgICA3MSxcbiAgICAgIDE0LFxuICAgICAgMTQ0LFxuICAgICAgMjA1LFxuICAgICAgMTkyLFxuICAgICAgMjUsXG4gICAgICAzOCxcbiAgICAgIDE1LFxuICAgICAgMjMzLFxuICAgICAgMjI0LFxuICAgICAgMjQyLFxuICAgICAgMjI3LFxuICAgICAgMTU5LFxuICAgICAgMzdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTgwLFxuICAgICAgMTkzLFxuICAgICAgMjMxLFxuICAgICAgMzgsXG4gICAgICAxMTYsXG4gICAgICAxNjAsXG4gICAgICAxNTYsXG4gICAgICAyNDAsXG4gICAgICAyOSxcbiAgICAgIDAsXG4gICAgICAyNTUsXG4gICAgICAxMzEsXG4gICAgICA3LFxuICAgICAgMzMsXG4gICAgICAxNjIsXG4gICAgICAyMDEsXG4gICAgICAxNjYsXG4gICAgICAxMDgsXG4gICAgICAyMzUsXG4gICAgICAyMjlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiNzhNTkcyMlpcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkxNTg1NzA5MjA6MjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJIZXNvbHZlc21hdGhzXCIsXG4gICAgXCJsaWRcIjogXCIyOTA4OTg4MDYyMTIwMDoyNEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNR0NnSGdReXQ2R3RBWVlBU0FBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkx6ck40ejNqTUl5ajNQNjgzMm1RZEVUNHZrTUVxWkwyN1VidUVUSnNZMm89XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwicjRwWFNGWWwwNXJ0eU42MnRHTzNta2J0TlE2cHNXOStNYXMzSkVBZHJoemZjUkVWSTNub1VRR2Zib0VNM0w1QmdzVWtsbCtTQld0a1FCVStwTWg1aWc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiQmFTanVscmRlQXY2OXJLdjVjYmtkWDNmWllrSVUwS2VNVUhBNGtrVjlLaVdiajlhM1pqQUVIWjNSek9aeXNibzBrenBSZFgxdXdWS3gwdWZrRlFPalE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTE1ODU3MDkyMDoyNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxMDZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmlcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxOTc3NTA1MyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUJBTVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQkFNLmpzb24iOiAie1wia2V5RGF0YVwiOlwiUWtBUnBvQzE3c1VRUmdlVzMvV2lod3E2YkwvaXljMUNqRlNscDJLVmdiUT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyNTE2NTg1NjEsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcxOTc3NTA1Mzk3NFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


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
