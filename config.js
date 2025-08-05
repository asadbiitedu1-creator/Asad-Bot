const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ARSLAN-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0Q3RXNGM0xKbzNIQXQ4TUltNG5SNS8yTGhkNU90WW5aL25wYjc2eFZFUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZTRhTW1xZVhBYURBVDY4M1FMQnVlMG11RnNPVitZN3ZzSCtmV1o5Zm53MD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjSUF4aG5MSjNjUDdsckx1TC9EMm9VRmxIaGxFeCtKRzZhK3c0cHVPaEc4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVNEYyRTlJd3p1KzlrbnptZEgxSnRwQXNoaURNZVN0MWIvVSt6eU80QUNBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktGbmR4dDM4OE1NNkE0aGZIQ1BLTVdPelErRWJMOE1EZHhxV1lDTmo1MXc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjU0cVgzYXVqbVhTUHJSdkJNa2phK3Ezc1FPMFZQZnJVY1REalRucFdPSDg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQUR5RnJ5dUR6WXRyOXdYemRDalBpZjFpcm9RNTllMmQ3KzVzTHVLR0IxWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK3JwNS9NU0NLN1lSV2ZMc3A4SmNlZHdCbDA0YVprUkNCV05CZHNNOFl6UT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9tMzN5YjRJVUU5WGhhMWhERDVZZERSY1FobWk5M25nQ1NkY2JGbnIzRmNuWHBmQnlBZWpqbzIwQmV4Y21rK3JUYi9GVk1xcDU1SFQ1bUZnazRRT0NRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NzQsImFkdlNlY3JldEtleSI6InJQRFZzWS80V0VhaU5hNnh2NVFEaGdYbmdML3pTWTdqalVadW9Ra0R1K1E9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTIzMjg1ODA5NzM5QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjJCNjhGNzUxNDBFMThGMkJGN0Q2MDk2NDE0OEM5REY1In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTQzODQwMjB9LHsia2V5Ijp7InJlbW90ZUppZCI6IjkyMzI4NTgwOTczOUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJFMzEwRUVDQTM2MDg5N0FGMERFMkQ3Q0Q0MjQ5RDQwMCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzU0Mzg0MDIwfV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiJWOEYzWTVGQSIsIm1lIjp7ImlkIjoiOTIzMjg1ODA5NzM5OjdAcy53aGF0c2FwcC5uZXQiLCJsaWQiOiI5MzEzNzA1MzcyODg5MTo3QGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSWZDbHNVR0VJMk54OFFHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiYVREbGlMM2FaL25HNGNmY0dtaDc0S0s5cEQ1SUs1cDhHL0xKaWdVRFZWbz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiSXR2R2JFTGRjWTArQSs2cmxYbERicytQUTM0SlpUSmI3TUZGdlJCRjdTVE9zQmhWcVdsY0UrZ1Z3SHBvYi93bFYzOWJhNldiQ0FzNlQyMkhBVTlGRFE9PSIsImRldmljZVNpZ25hdHVyZSI6IlpiaUV2d1NFNnBmalZqOExqL0w0VDZTRGd1djRPd3VWcUdTUmF2SGZHNEdmZUJrL1dJSGlLL284aXZzQVlvOURsaUdWS1lsbDhYWTFabmw4dW5HbENRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTIzMjg1ODA5NzM5OjdAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCV2t3NVlpOTJtZjV4dUhIM0Jwb2UrQ2l2YVErU0N1YWZCdnl5WW9GQTFWYSJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FVSUVnPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzU0Mzg0MDE2LCJsYXN0UHJvcEhhc2giOiJQV2s1QiIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBTVRoIn0=",
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
