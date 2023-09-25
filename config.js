const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = "94762327630"
global.mongodb = process.env.MONGODB_URI || "mongodb://uafrsboguxtlxtprt3gp:bNwCHEBLOrh0DiQT6Fmi@n1-c2-mongodb-clevercloud-customers.services.clever-cloud.com:27017,n2-c2-mongodb-clevercloud-customers.services.clever-cloud.com:27017/bm6wfn92by95j9x?replicaSet=rs0"
global.port= process.env.PORT || 5000
global.email = 'sam@secktor.live'
global.github = 'https://github.com/SamPandey001/Secktor-Md'
global.location = 'Colombo SL'
global.gurl = 'https://instagram.com/' // add your username
global.sudo = process.env.SUDO || '94762327630'
global.devs = '94762327630';
global.website = 'https://github.com/Theekshanamax/navi' //wa.me/+94000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/58bc1e17a88033038cb80.jpg'
module.exports = {
  botname:   process.env.BOT_NAME === undefined ? 'king-x' : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'king-x' : process.env.OWNER_NAME,
  sessionName:  process.env.SESSION_ID === undefined ? "Secktor;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0M2b2d3bG45Wm9EQkxrMFdYNWEwN0hqVlZxN1NSVzFhd0NxU2EyTlpVTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYy9zTFFJTWhpdFlvb3p3QmtESGc0RmF0dWI4dmlBbkI0T29DNHRVWTFpbz0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNSXE3a2ZiZ2s3cEdYNjZWQTRlSUkyYWlWK093NTBLMFU0VHN4UEk5dUVnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJqbnVDRHdPTzBibDJnaDNGV0MzZ0pjaHdHNWllY0xxS0ZFK1grUFNwbURvPSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdCV1FDVkhWbnF4Sk84SjR3WUw0K3VPbkcwNWlyTWNPNlJ5OC9uRTZ6WFE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InEzek42QUpkS1NDazh5NXMyOEZ6ZkxieHlQRldXWldvenlkRFZCMS91UjA9In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVanFBY0hKb09BQkF4VWJOdHg3UFhmcmU4SGo0YTJBNjJQNGxLZkRGSmhQaG1sR3h4aUc2SG9SZEpmMHRHeEFxdXZlMW1oOW0yeUhpNnhnczJCNXVoUT09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjE4NywiYWR2U2VjcmV0S2V5IjoiTUk3YjdjSmZiSTRmRFpIRFByUVpPL2RWby8yVkkxR1NRR09IRC9KZVdZTT0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiaVZWY0lVVGdTeTZSNlhTNFRxNjktUSIsInBob25lSWQiOiI5OGJiMzFiZi02ZjM1LTQ5ODItOWE2My03Y2VmMGM2MjAyMjkiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUTUvVmFoL3RCRW1zankrUGZLcGszWmVvZU1zPSJ9LCJyZWdpc3RlcmVkIjpmYWxzZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJOSkl1bHorNTZkTXkyTGdEb3d4K0o5WUVPYVk9In0sInJlZ2lzdHJhdGlvbiI6e30sImFjY291bnQiOnsiZGV0YWlscyI6IkNJemJvNWNERUxXOGthZ0dHQUU9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Ik9GcllIdUlFUSszUkdzMHh6Y3YxY1VEaUhOdjlYQXB5bk94MWE5QWJpRFU9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkM1SktwZm5zbC8rb1ZHUFRjRk1US2cvcEFlcnpuVGwwZEgxK1dSdzZFTmlKLzA1VHArd0dUSjF3VjR4TCt0MU45cTJvbW5aUlI2TlFmQzRveXRzK0J3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiI0WDhnNVJRRm5YNno0bGZsK2VTbUt3MHlmMTZGTUdENHdPSTBHSERmc2MySUlqMEtBaE44NUhTekZlcEZXaEgwdkR5VDJTK0lVRFUxak5GUlFuejlpdz09In0sIm1lIjp7ImlkIjoiOTQ3NjIzMjc2MzA6MkBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLwn5GJIFRoZWVrc2hhbmEgVjAyIPCfkYgifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3NjIzMjc2MzA6MkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJUaGEyQjdpQkVQdDBSck5NYzNMOVhGQTRoemIvVndLY3B6c2RXdlFHNGcxIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNjk0Nzg1MDgyLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUk4TiJ9" : process.env.SESSION_ID,
  author:  'SamPandey001',
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? false : process.env.AUTO_READ_STATUS,
  packname:  'king-x',
  autoreaction:  process.env.AUTO_REACTION  === undefined ? false : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '971' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? ['king-x'] : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? 'e410da68-a7bf-4c04-8a4c-98310a3834e1' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? 'zeropgg' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.1' : process.env.VERSION,
  LANG: process.env.THEME|| 'king-x',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
