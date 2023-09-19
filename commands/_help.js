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
            alias: ["menu"],
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
                    
🫅 Theme: ${tlang().title} 
🧑‍💻 𝙾𝚆𝚗𝚎𝚛:- ${vdf}
✨ commands :- ${commands.length}
⏳ 𝚄𝚙𝚝𝚒𝚖𝚎:- ${runtime(process.uptime())}
⏰ Time:- ${time}
📅 Date:- ${date}


🫅𝗛𝗘𝗟𝗟𝗢 𝗜'𝗠 𝗞𝗜𝗡𝗚-𝗫🫅
 🫴how can I help you

 🧑‍💻  𝗧𝗵𝗲 𝗰𝗿𝗲𝗮𝘁𝗼𝗿 𝗧𝗵𝗲𝗲𝗸𝘀𝗵𝗮𝗻𝗮

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
            pattern: "මෙනු",
            alias: ["මෙනු, විධාන,නියොග"],
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
                let str = `*ආයුබෝවන් ${citel.pushName}*
               
🧑‍💻 නිර්මාණ ශීල්පිය: ${vdf}
✨ නිධාන: ${commands.length}
⏳ 𝚄𝚙𝚝𝚒𝚖𝚎: ${runtime(process.uptime())}
⏰ වෙලාව: ${time}
📅 දිනය: ${date}

*🫅හලො මනුෂ්‍යා මං KING-X🫅*

 🫴ඔබට කුමක් ද අවශ්‍ය අත වැලිය 

🧑‍💻 *නිර්මාණය තීක්ෂණ*

╭───『 𝘾𝞗𝞛𝞛𝞓𝞜𝘿𝙎』──◆
│  ╭──────◑🫅◑──────«
│  │        ❤️ ᴅᴏᴡɴʟᴏᴀᴅᴇʀ ❤️
│  ╰┬─────◈🇱🇰◈──────»
│  ┌┤
│  │ 💃 insta
│  │ 💃 tts
│  │ 💃 yts
│  │ 💃 video
│  │ 💃 play
│  │ 💃 ringtone
│  │ 💃 pint
│  │ 💃 mediafire
│  │ 💃 audio
│  │ 💃 ytmp4
│  │ 💃 ytmp3
│  │ 💃 ytdoc
│  │ 💃 xvideos
│  │ 💃 apk
│  │ 💃 playlist
│  ╰────────────◆
│  ╭──────◑🫅◑──────«
│  │        ❤️ ᴇxᴛʀᴀ ❤️
│  ╰┬─────◈🇱🇰◈──────»
│  ┌┤
│  │ 💃 paste
│  │ 💃 pastebin
│  ╰────────────◆
│  ╭──────◑🫅◑──────«
│  │        ❤️ ɢᴀᴍᴇ ❤️
│  ╰┬─────◈🇱🇰◈──────»
│  ┌┤
│  │ 💃 delttt
│  │ 💃 ttt
│  ╰────────────◆
│  ╭──────◑🫅◑──────«
│  │        ❤️ ꜰᴜɴ ❤️
│  ╰┬─────◈🇱🇰◈──────»
│  ┌┤
│  │ 💃 ship
│  │ 💃 question
│  │ 💃 truth
│  │ 💃 dare
│  │ 💃 fact
│  │ 💃 quotes
│  │ 💃 define
│  ╰────────────◆
│  ╭──────◑🫅◑──────«
│  │        ❤️ ɢᴇɴᴇʀᴀʟ ❤️
│  ╰┬─────◈🇱🇰◈──────»
│  ┌┤
│  │ 💃 help
│  │ 💃 list
│  │ 💃 owner
│  │ 💃 file
│  │ 💃 repo
│  │ 💃 status
│  │ 💃 theme
│  │ 💃 leaderboard
│  │ 💃 ping
│  │ 💃 alive
│  ╰────────────◆
│  ╭──────◑🫅◑──────«
│  │        ❤️ ᴍɪꜱᴄ ❤️
│  ╰┬─────◈🇱🇰◈──────»
│  ┌┤
│  │ 💃 update
│  │ 💃 vv
│  │ 💃 updatenow
│  │ 💃 getvar
│  │ 💃 getallvar
│  │ 💃 setvar
│  │ 💃 delvar
│  │ 💃 setwelcome
│  │ 💃 setgoodbye
│  │ 💃 exec
│  │ 💃 readmore
│  │ 💃 uptime
│  │ 💃 wm
│  │ 💃 pick
│  │ 💃 fliptext
│  │ 💃 mp4fromurl
│  │ 💃 emix
│  │ 💃 chatbot
│  │ 💃 ebinary
│  │ 💃 dbinary
│  │ 💃 bot
│  │ 💃 unban
│  │ 💃 url
│  │ 💃 trt
│  ╰────────────◆
│  ╭──────◑🫅◑──────«
│  │        ❤️ ᴏᴡɴᴇʀ ❤️
│  ╰┬─────◈🇱🇰◈──────»
│  ┌┤
│  │ 💃 plugins
│  │ 💃 remove
│  │ 💃 install
│  │ 💃 join
│  │ 💃 unblock
│  │ 💃 ujid
│  │ 💃 block
│  │ 💃 addnote
│  │ 💃 qr
│  │ 💃 shell
│  │ 💃 eval
│  │ 💃 delnote
│  │ 💃 delallnotes
│  │ 💃 ban
│  │ 💃 allnotes
│  ╰────────────◆
│  ╭──────◑🫅◑──────«
│  │        ❤️ ᴛᴏᴏʟꜱ ❤️
│  ╰┬─────◈🇱🇰◈──────»
│  ┌┤
│  │ 💃 restart
│  ╰────────────◆
│  ╭──────◑🫅◑──────«
│  │        ❤️ ᴄᴏɴᴠᴇʀᴛᴇʀ ❤️
│  ╰┬─────◈🇱🇰◈──────»
│  ┌┤
│  │ 💃 photo
│  │ 💃 quotely
│  │ 💃 fancy
│  │ 💃 tiny
│  │ 💃 toaudio
│  ╰────────────◆
│  ╭──────◑🫅◑──────«
│  │        ❤️ ꜱᴛɪᴄᴋᴇʀ ❤️
│  ╰┬─────◈🇱🇰◈──────»
│  ┌┤
│  │ 💃 circle
│  │ 💃 crop
│  │ 💃 round
│  │ 💃 attp
│  │ 💃 ttp
│  │ 💃 steal
│  ╰────────────◆
│  ╭──────◑🫅◑──────«
│  │        ❤️ ᴇᴄᴏɴᴏᴍʏ ❤️
│  ╰┬─────◈🇱🇰◈──────»
│  ┌┤
│  │ 💃 daily
│  │ 💃 resetwallet
│  │ 💃 capacity
│  │ 💃 deposit
│  │ 💃 lb
│  │ 💃 transfer
│  │ 💃 wallet
│  │ 💃 give
│  │ 💃 bank
│  │ 💃 rob
│  │ 💃 withdraw
│  │ 💃 gamble
│  │ 💃 slot2
│  │ 💃 slot
│  ╰────────────◆
│  ╭──────◑🫅◑──────«
│  │        ❤️ ᴜꜱᴇʀ ❤️
│  ╰┬─────◈🇱🇰◈──────»
│  ┌┤
│  │ 💃 fullpp
│  ╰────────────◆
│  ╭──────◑🫅◑──────«
│  │        ❤️ AI ❤️
│  ╰┬─────◈🇱🇰◈──────»
│  ┌┤
│  │ 💃 chat
│  │ 💃 dalle
│  ╰────────────◆
│  ╭──────◑🫅◑──────«
│  │        ❤️ ɢʀᴏᴜᴘ ❤️
│  ╰┬─────◈🇱🇰◈──────»
│  ┌┤
│  │ 💃 sticker
│  │ 💃 support
│  │ 💃 warn
│  │ 💃 tagall
│  │ 💃 request
│  │ 💃 retrive
│  │ 💃 rwarn
│  │ 💃 poll
│  │ 💃 profile
│  │ 💃 rank
│  │ 💃 promote
│  │ 💃 kick
│  │ 💃 memegen
│  │ 💃 group
│  │ 💃 grouppic
│  │ 💃 hidetag
│  │ 💃 add
│  │ 💃 getjids
│  │ 💃 demote
│  │ 💃 del
│  │ 💃 checkwarn
│  │ 💃 broadcast
│  │ 💃 antilink
│  │ 💃 act
│  │ 💃 deact
│  ╰────────────◆
│  ╭──────◑🫅◑──────«
│  │        ❤️ ꜱᴇᴀʀᴄʜ ❤️
│  ╰┬─────◈🇱🇰◈──────»
│  ┌┤
│  │ 💃 npm
│  │ 💃 ss
│  │ 💃 imdb
│  │ 💃 weather
│  │ 💃 horo
│  │ 💃 google
│  │ 💃 image
│  │ 💃 couplepp
│  │ 💃 iswa
│  ╰────────────◆
│  ╭──────◑🫅◑──────«
│  │        ❤️ ᴍᴏᴅᴇʀᴀᴛɪᴏɴ ❤️
│  ╰┬─────◈🇱🇰◈──────»
│  ┌┤
│  │ 💃 amute
│  │ 💃 aunmute
│  │ 💃 dunmute
│  │ 💃 dmute
│  ╰────────────◆
╰───────────⊷` 
              
                let buttonMessaged = {
                    image: { url: THUMB_IMAGE },
                    caption: str,
                    footer: tlang().title,
                    headerType: 4
                 };
                return await Void.sendMessage(citel.chat, buttonMessaged);
            })
//---------------------------------------------------------------------------
Secktor.cmd({
            pattern: "list",
            desc: "list menu",
            category: "general",
            react: "📜"
        },
        async(Void, citel) => {
            const { commands } = require('../lib');
            const vdf = Config.ownername
            let str = `
╭━━〘 ` + fancytext(Config.ownername.split(' ')[0], 58) + ` 〙━━──⊷`
            str += '```' + `
┃ ☀╭──────────────      
┃ ☀│ 👤User: ${citel.pushName}
┃ ☀│ ❤️Theme: ${tlang().title}
┃ ☀│ 🎵Prefix: ${prefix}
┃ ☀│ 🎧Owner: ${vdf}
┃ ☀│ 🍧Commands: ${commands.length}
┃ ☀│ 💝Uptime: ${runtime(process.uptime())}
┃ ☀│ 🆙Mem: ${formatp(os.totalmem() - os.freemem())}
┃   ╰───────────
╰━━━━━━━━━━━──⊷\n` + '```'
for (let i = 0; i < commands.length; i++) 
{
     if(commands[i].pattern==undefined) continue
     str += `📗 ◉ ${fancytext(commands[i].pattern,1)}\n` 
     str += `🍁 ${fancytext(commands[i].desc,1)}\n\n`
}
            return Void.sendMessage(citel.chat, { image: { url: THUMB_IMAGE }, caption: str })
        }
    )
    //---------------------------------------------------------------------------
cmd({
        pattern: "ලොක්කා",
        desc: "To find owner number",
        react: "😘"
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
    //---------------------------------------------------------------------------
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
