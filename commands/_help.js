/**  Copyright (C) 2023. 
  Licensed under the  GPL-3.0 License; 
  You may not use this file except in compliance with the License. 
  It is supplied in the hope that it may be useful. 
  * @project_name : RED_Lion_Bot 
  * @author : Theekshanamax
  * @description : Red-Lion,A Multi-functional whatsapp bot. 
  * @version 0.0.2 **/
const os = require('os')
const moment = require("moment-timezone")
const fs = require("fs")
const Config = require('../config')
let { fancytext, tlang, tiny, runtime, formatp, botpic, prefix, sck1, cmd } = require("../lib");
const long = String.fromCharCode(8206)
const readmore = long.repeat(4001)
const Secktor = require('../lib/commands')
    //---------------------------------------------------------------------------
Secktor.cmd({
            pattern: "help",
            alias: ["help","මෙනු"],
            desc: "Help list",
            category: "general",
            react: "💝",
            filename: __filename
        },
        async(Void, citel, text) => {
            await Void.sendPresenceUpdate('recording', citel.chat);
            const { commands } = require('../lib');
            if (text.split(" ")[0]) {
                let arr = [];
                const cmd = commands.find((cmd) => cmd.pattern === (text.split(" ")[0].toLowerCase()))
                if (!cmd) return await citel.reply("*❌No Such commands.*");
                else arr.push(`*🍁Command:* ${cmd.pattern}`);
                if (cmd.category) arr.push(`*🧩Category:* ${cmd.category}`);
                if (cmd.alias) arr.push(`*🧩Alias:* ${cmd.alias}`);
                if (cmd.desc) arr.push(`*🧩Description:* ${cmd.desc}`);
                if (cmd.use) arr.push(`*〽️Usage:*\n \`\`\`${prefix}${cmd.pattern} ${cmd.use}\`\`\``);
                return await citel.reply(arr.join('\n'));
            } else {
                const cmds = {}
                commands.map(async(command, index) => {
                    if (command.dontAddCommandList === false && command.pattern !== undefined) {
                        if (!cmds[command.category]) cmds[command.category] = []
                        cmds[command.category].push(command.pattern)
                    }
                })
                const time = moment(moment())
                    .format('HH:mm:ss')
                moment.tz.setDefault('Asia/KOLKATA')
                    .locale('id')
                const date = moment.tz('Asia/Kolkata').format('DD/MM/YYYY')
                const vdf = Config.ownername
                let total = await sck1.countDocuments()
                                 let str = `*𝙬𝙚𝙡𝙘𝙤𝙢𝙚 ${citel.pushName},*`
                str +=
                    '```' + `
                    

🧑‍💻 𝙾𝚆𝚗𝚎𝚛:- ${vdf}
✨ commands :- ${commands.length}
⏳ 𝚄𝚙𝚝𝚒𝚖𝚎:- ${runtime(process.uptime())}
⏰ Time:- ${time}
📅 Date:- ${date}


🫅𝗛𝗘𝗟𝗟𝗢 𝗜'𝗠 𝗞𝗜𝗡𝗚-𝗫🫅
 🫴how can I help you

 🧑‍💻  𝗧𝗵𝗲 𝗰𝗿𝗲𝗮𝘁𝗼𝗿 *${vdf}*

` + '```'
                str += `╭───『 ` + fancytext('Commands', 57) + `』──◆`
                for (const category in cmds) {
                    str += `
│  ╭──────◑🫅◑──────«
│  │        ❤️ ${tiny(category)} ❤️
│  ╰┬─────◈🇱🇰◈──────»
│  ┌┤\n`
                    for (const plugins of cmds[category]) {
                        str += `│  │ 💃 ${plugins}\n`
                    }
                    str += `│  ╰────────────◆`
                }

                str += `\n╰───────────⊷\n`
                let buttonMessaged = {
                    image: { url: THUMB_IMAGE },
                    caption: str,
                    footer: tlang().title,
                    headerType: 4
                 };
                return await Void.sendMessage(citel.chat, buttonMessaged);
            }
        }
    )
    //---------------------------------------------------------------------------
cmd({
            alias: ['මෙනූ', 'විධාන','නියොග','menu'],
            desc: "විධාන ලයිස්තුව",
            react: "🇱🇰"
        },
        async(Void, citel, text) => {
            await Void.sendPresenceUpdate('recording', citel.chat);
            const { commands } = require('../lib');
        
                const time = moment(moment())
                    .format('HH:mm:ss')
                moment.tz.setDefault('Asia/KOLKATA')
                    .locale('id')
                const date = moment.tz('Asia/Kolkata').format('DD/MM/YYYY')
                const vdf = Config.ownername
                let total = await sck1.countDocuments()
                let str = `

🧑‍💻 *Owner*: ${vdf}
✨ *Commands* : ${commands.length}
⏳ *Uptime*: ${runtime(process.uptime())}
⏰ *Time*: ${time}
📅 *Date*: ${date}


🫅𝗛𝗘𝗟𝗟𝗢 𝗜'𝗠 𝗞𝗜𝗡𝗚-𝗫🫅
 🫴how can I help you

 🧑‍💻  𝗧𝗵𝗲 𝗰𝗿𝗲𝗮𝘁𝗼𝗿 *${vdf}*


┌─────────────────────
│                👨‍💻 *KING-X* 👨‍💻  
└─────────────────────


┌─(📥 ᴅᴏᴡɴʟᴏᴀᴅᴇʀ ᴄᴏᴍᴍᴀɴᴅꜱ)
│.song
│.video
│.apk
│.heroku 
│.ytdoc
│.fb
│.tiktok
│.insta
│.mdiafire
│.fb
│.xvideos
└─────────◉
┌─(🔍 ꜱᴇᴀʀᴄʜ ᴄᴏᴍᴍᴀɴᴅꜱ)
│.googlr
│.image
│.yts
│.weather
│.npm
│.ss
│.horo
│.movie
│.whatsapp
└─────────◉
┌─(🔐ᴇʜɪ ᴅᴏᴡɴʟᴏᴀᴅᴇʀ )
│.ehi1
│.ehi2
│.ehi3
│.ehi4
│.ehi5
│.ehi6
└─────────◉
┌─(👥 ɢʀᴏᴜᴘ ᴄᴏᴍᴍᴀɴᴅꜱ)
│.kick
│.setwelcome
│.setgoodbye
│.group
│.ban
│.unban
│.tagall
│.del
│.getjids
│.rank
│.support
└─────────◉
┌─(🧑‍💻 ᴀᴅᴍɪɴ ᴄᴏᴍᴍᴀɴᴅꜱ)
│.restart
│.block
│.unblock
│.updatenow
│.antilink
│.getvar
│.update
│.dallnote
│.delnote
│.sticker
└─────────◉
┌─( 💻 ᴄʀᴇᴀᴛᴇʀ)
│. photo
│. retrive
│. quotely
│. fancy
│. tiny
│. circle
│. crop
│. round
│. toaudio
│. readmore
│. steal
│. uptime
│. pick
│. fliptext
│. mp4fromurl
│. emix
│. ebinary
│. dbinary
│. url
│. trt
│
└─────────◉
┌─(💬 ᴏᴛʜᴇʀ ᴄᴏᴍᴍᴀɴᴅꜱ)
│.alive
│.menu
│.status
│.system
│.ping
│.owner
│.repo
└─────────◉
  
` 
              
                let buttonMessaged = {
                    image: { url: THUMB_IMAGE },
                    caption: str,
                    footer: tlang().title,
                    headerType: 4
                 };
                return await Void.sendMessage(citel.chat, buttonMessaged);
            })

    
    //------------------------------------------------
Secktor.cmd({
        pattern: "owner",
        desc: "To find owner number",
        category: "general",
        react: "🧑‍💻",
        filename: __filename
    },
    async(Void, citel) => {
        const Config = require('../config')
        const vcard = 'BEGIN:VCARD\n' +
            'VERSION:3.0\n' +
            'FN:' + Config.ownername + '\n' +
            'ORG:;\n' +
            'TEL;type=CELL;type=VOICE;waid=' + owner[0] + ':+' + owner[0] + '\n' +
            'END:VCARD'
        let buttonMessaged = {
            contacts: { displayName: Config.ownername, contacts: [{ vcard }] },
            contextInfo: {
                externalAdReply: {
                    title: Config.ownername,
                    body: 'Touch here.',
                    renderLargerThumbnail: true,
                    thumbnailUrl: ``,
                    thumbnail: log0,
                    mediaType: 2,
                    mediaUrl: '',
                    sourceUrl: `https://wa.me/+` + owner[0] + '?text=Hii bro,I am ' + citel.pushName,
                },
            },
        };
        return await Void.sendMessage(citel.chat, buttonMessaged, {
            quoted: citel,
        });

    }
)

Secktor.cmd({
    pattern: "file",
    desc: "to get extact name where that command is in repo.\nSo user can edit that.",
    category: "general",
    react: "💝",
    filename: __filename
},
async(Void, citel, text) => {
 const { commands } = require('../lib');
 let arr = [];
        const cmd = commands.find((cmd) => cmd.pattern === (text.split(" ")[0].toLowerCase()))
        if (!cmd) return await citel.reply("*❌No Such commands.*");
        else arr.push(`*🍁Command:* ${cmd.pattern}`);
        if (cmd.category) arr.push(`*🧩Type:* ${cmd.category}`);
        if(cmd.filename) arr.push(`✨FileName: ${cmd.filename}`)
        return citel.reply(arr.join('\n'));


})
