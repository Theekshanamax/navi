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


//---------------------------------------------------------------------------
 cmd({
            pattern: "news",
            alias :['News'],
            desc: "Sei Lankan News.",
            category: "downloader",
            react: "🎶",
            filename: __filename,
            use: '<text>',
        },
        async(Void, citel, text) => {
        const news = await axios.get("https://news-api.queen-md.repl.co/esana-news");
          const image = news.data.result.image
          const title = news.data.result.title
          const decs = news.data.result.description
          const date = news.data.result.date_time
          
          const caption = `Title : ${title}
          
          Description : ${decs}
          
          Date : ${date}`;
        let NewsMessage = {
                   image: { url: thumbnaill, },
                   caption: caption,
                   headerType: 4,
        };
        Void.sendMessage(citel.chat, NewsMessage, { quoted: citel, });
})
//---------------------------------------------------------------------------
smd({
        pattern: "wallpaper",
        desc: "To get Random Pics",
       category: "Anime Pics",
        filename: __filename
    },

    async(Suhail, msg, text) => {


const response = await fetch('https://api.unsplash.com/photos/random?client_id=72utkjatCBC-PDcx7-Kcvgod7-QOFAm2fXwEeW8b8cc');
const data = await response.json();
  const url =data.urls.regular
                let buttonMessaged = {
                    image: { url: url },
                    caption: '*---Random Wallpapers Here---*',
                    footer: tlang().footer,
                    headerType: 4,
                   
                };
                return await Suhail.bot.sendMessage(msg.chat, buttonMessaged , {quoted : msg});


}
   )
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
