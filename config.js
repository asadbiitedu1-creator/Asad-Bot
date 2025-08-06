const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ARSLAN-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY012UVBwZEFOMXhTczZYdTFUZkJ1ZGZxQllveUFiSEk0WFVsVVU4ODZFZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaEdVZllUMURNRmIydUJnbitLa1EwanhObFZMWEVkbjNob3dqWHk2M1oybz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBQkV3ZlNPZENDRDhYN3puT1A0bDZVMWVjaUJZUVdJZnZDUUxaWVJxTjBjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJYd1QwVHplQ3hrVGZtamk4TDNSdjB2YnBYZHdBNnovMjBxZzlsdEJjakU0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlVETU05UGVRWjk2UzQ4M3JXZDdpbER4MWpHL0d1T0YzY2VheHJHQzBuMzQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IksxVllhR2tSL0tqNnE4cENIM0JaaDJUOVNYUnFJWGpZTVZ1NmhFb0hQaTg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWUhjTTljSGljNkNGYnR2Y3ovLzlXVzlFdk5iTzN5SWRjNDBZQTFGWU0yVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaFhYWFFBUU9RZlQzOE1ybDU4M21oL3o5QmFYejc4MEhhcDBtbnppTFRTOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkQ0OExObmxhUzVOOEZwWkQ2eFdLT3lmdXBvR2NnY0dmc2t5QytiTEQvNXlaYmxCZHRwalZRcmdYL1IzajRiellRMHBlYi85aitGczdIbjRVTkJ5T2hBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6ODksImFkdlNlY3JldEtleSI6ImdUZ3VBRGt5eC8wSktrUG5VUk00d0VxeDBQbXd1VzRjNzFiS1ZrNjlOVW89IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6IkE4NldMRllNIiwibWUiOnsiaWQiOiI5MjM0MzU2NzI2NTI6MzBAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiVW5rbm93biIsImxpZCI6IjEwMjkxNjU2MDAwMzE1MzozMEBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0p5RTVib0NFSS82eThRR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IlRjbEFFMFVibEd3SWFkM0VqVmV5TFBwems2SXJqQTFNeFI0QVFqVHVpbjA9IiwiYWNjb3VudFNpZ25hdHVyZSI6IjVJNCtNL2pLNUl4ejJid0lUV08yQThFUGVXcmk4Z3FFN2tzS0ZObmdkeUxZb25wTmd6dDVvV1E3MndJanNiclpxdDB2cEFUa1NQSjAxSTk4Q1l2UERBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJVU1VUeC9xU1dHcDBic2RDYVhsWEpZSTEzUHRqY2ZOS3FPa2lVV0RkalFnSlp3TXFtUWU4K3RTcGZyVUx0RWlockc1RUhEUTg1S3BoQ1ZmNk1COTVndz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkyMzQzNTY3MjY1MjozMEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJVM0pRQk5GRzVSc0NHbmR4STFYc2l6NmM1T2lLNHdOVE1VZUFFSTA3b3A5In19XSwicGxhdGZvcm0iOiJzbWJhIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQTBJQlE9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTQ0NjM1MDYsImxhc3RQcm9wSGFzaCI6IjJWNzdxVSJ9",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY Your-Own-Bot 🤍*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "true",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "true",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/3dog4s.jpeg",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "Your-Own-Bot",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "Your-Own-Bot",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "923285809739",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "*AsadMD Official*",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ AsadMD Official ❣️*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/qpnazl.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> Zinda Hun Yar ⚡",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923285809739",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
