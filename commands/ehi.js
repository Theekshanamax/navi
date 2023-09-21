
//---------------------------------------------------------------------------

cmd({

            pattern: 'ehi',

            desc: 'Sends ehi',

            category: "downloader",

            react: "🗂️",

            filename: __filename,

            use:'<does this>',

        },
          async(Void,citel,text) => {
              return Void.sendMessage(citel.chat,{  
      document: {  
       
       url: 'https://github.com/Theekshanamax/Ehi-fils',
       },
       fileName: 'file එකෙ නම්.ehi',  
      mimetype: "මේක මම හොයලා කියන්නම්🙂",
      },
         {
             quoted: citel,  
  })
  
});
       
        