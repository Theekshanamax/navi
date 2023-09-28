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
      pattern: "sirasa",  
      alias: ["news"],  
      react: "🀄",  
      desc: "",  
      category: "news",  
      use: '.hirunews',  
      filename: __filename  
  },  
  async(Void, citel) => {  
  try{  
  const nasa = await fetchJson(`https://kaveesha-sithum.onrender.com/sirasa-news`);  
  
            const images = `${nasa.result.image}`  
             const title = `${nasa.result.title}` 
             const news = `${nasa.result.desc}`  
  
  await Void.sendMessage(citel.chat,  { image: { url: images }, caption: `\n*${ title }*\n\n _${news}._\n\n*`}, { quoted: citel })  
  }  
  catch(e){  
  console.log(e)  
  }})
//---------------------------------------------------------------------------
 
cmd({

  pattern: "antibot", 
      react: "🤐",  
      desc: "",  
      category: "antibot",  
      use: '.antibot',  
      filename: __filename  
  },  
    async(Void, citel) => {  

  if (!match || (match !== 'on' && match !== 'off')) return await message.reply('_Please provide a valid match option._ *Use either "on" or "off".*');

  if (match === 'on') {

    await antibot.set(message.chat, true);

    await message.send('_Antibot Activated_');

  } else if (match === 'off') {

    await antibot.delete(message.chat)

    await message.send('_Antibot Deactivated_');

  }

});
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
