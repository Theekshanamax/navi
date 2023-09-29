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
 cmd({
  pattern: "sd",
  alias: ["music"],
  desc: "download audio from yt.",
  category: "downloader", 
  filename: __filename,
  use: '<text | url.>',},
     
async(Void, citel, text) => {
  text = text ? text : citel.quoted && citel.quoted.text ? citel.quoted.text : ""  
  if (!text) return citel.reply(`*${prefix}play back in black*`);
  try {
    let yts = require("secktor-pack")
    let search = await yts(text);
    let i = search.all[1] ;
    let cap = "\t *---Yt Song Searched Data---*   \n\n📌Title : " + i.title + "\nUrl : " + i.url +"\n🗺️Description : " + i.timestamp +"\n👥Views : "+i.views +"\n📥Uploaded : " +i.ago +"\n👤Author : "+i.author.name+"\n\n\nVideo To Take Mp4 \nsong To Take Mp3" ;
    Suhail.bot.sendMessage(citel.chat,{image :{url : i.thumbnail}, caption :  cap });
    let vid = ytIdRegex.exec(text) || [], urlYt = vid[0] || false;
    if (!urlYt) { let yts = require("secktor-pack"),search = await yts(text),anu = search.videos[0];urlYt = anu.url;  }
    vid = ytIdRegex.exec(urlYt) || [];
    let info =await yt.getInfo(vid[1]);  
    if( info  && info.duration  >= videotime) return await citel.reply(`*_Can't download, file duration too big_*`);
    await citel.send(`_Downloading ${info.title}?_`);
    let file = await yt.download(vid[1],{type : "audio",quality:"best"})	  
    console.log("file:",file)
    file ? await Suhail.bot.sendMessage(citel.chat, {audio: {url : file } ,mimetype: 'audio/mpeg', }) :  await citel.send("Video not Found"); 
    try{fs.unlinkSync(file)}catch{}
  }catch (e) { console.log(" Play error, "  , e); return citel.error(`${e} \n\ncmdName : play`) }
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
