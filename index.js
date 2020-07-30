require("dotenv").config();

const GuardianClient = require("./core/client.js");
const client = new GuardianClient();
var approx = require('approximate-number');

client.login(process.env.BOT_TOKEN);


client.on('ready', function() {
   
  
      
  
         client.user.setActivity(`${client.users.cache.size} users | ;;help`, {type: "STREAMING", url: "https://www.twitch.tv/flight23white"})
       
       //   client.user.setActivity("Ck is on top", {type: "STREAMING", url: "https://www.twitch.tv/flight23white"})
  
    //   client.user.setActivity("Prefix (;;)", {type: "STREAMING", url: "https://www.twitch.tv/flight23white"})
      
  
   //    client.user.setActivity(`${approx(client.guilds.size)} Guilds | ;;help`, {type: "STREAMING", url: "https://www.twitch.tv/flight23white"})
  

  
  
  console.log('ANTIWIZZ ready');
console.log('ANTIWIZZ ON');

});





const Discord = require('discord.js')
    const { RichEmbed  } = require('discord.js')
   
    
    




client.on('guildMemberAdd', async member => {
    if (member.user.bot) {
      
      
      
          










      
      
      
      
      
      
      
     // (member.ban("Suspicous Bot Detected, Not Acceptable."));
        (console.log(`Blacklisted bot has been banned, ${member.user.tag}!`));
    } 
});

    






