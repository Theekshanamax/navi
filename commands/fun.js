/**
 Copyright (C) 2022.
 Licensed under the  GPL-3.0 License;
 You may not use this file except in compliance with the License.
 It is supplied in the hope that it may be useful.
 * @project_name : Secktor-Md
 * @author : SamPandey001 <https://github.com/SamPandey001>
 * @description : Secktor,A Multi-functional whatsapp bot.
 * @version 0.0.6
 **/

const { dare, truth, random_question } = require('../lib/truth-dare.js')
const axios = require('axios')
const { cmd } = require('../lib')
 //-------------------------------------
   cmd({
        pattern: "news/esana",
        category: "news",
        desc: "Searches news",
        use: '<text>',
        filename: __filename,
    },
    async(Void, citel) => {
       let res = await api.latest_id();
       const nid = res.results.news_id;
       let news = await api.news(nid);
       const tt = news.results.TITLE;
       const dss = news.results.DESCRIPTION;
       const ttime = news.results.PUBLISHED;
       const img = news.results.COVER;
       const cap = `✦ 𝚃𝚒𝚝𝚕𝚎 :- ${tt} \n \n ◇ ᴅᴇꜱᴄʀᴇᴘᴛɪᴏɴ :- ${dss} \n \n ◈ ᴛɪᴍᴇ :- ${ttime}`;
                await Void.sendMessage(citel.chat,{image:{url: img}, caption: cap}) 
})
    //---------------------------------------------------------------------------
    cmd({
     
    
        category: "fun",
        filename: __filename,
    },
    async(Void, citel, text) => {
        try{
            let { data } = await axios.get(`http://api.urbandictionary.com/v0/define?term=${text}`)
            var textt = `
            Word: ${text}
            Definition: ${data.list[0].definition.replace(/\[/g, "").replace(/\]/g, "")}
            Example: ${data.list[0].example.replace(/\[/g, "").replace(/\]/g, "")}`
            return citel.reply(textt)
                    } catch {
                        return citel.reply(`No result for ${text}`)
                    }
    }
)
