const { Command } = require('discord-akairo');
const now = new Date();

class HelpCommand extends Command {
    constructor() {
        super('commands', {
            aliases: ['commands', 'help'],
            channel: 'guild'
        });
    }

    async exec(message) {

        const embed = this.client.util.embed()
        const prefix = message.guild.prefix;
         
        embed.setColor("609131")
        embed.setThumbnail("https://cdn.discordapp.com/attachments/726297142989160480/742892987910062151/discord_loading.gif")
        embed.setAuthor(" CENTRAL ANTINUKE | informaton | ;;help", "https://cdn.discordapp.com/attachments/726297142989160480/742894211359309844/coollogo_com-15745744.png")
        embed.addField("__> *Anti Nuke Commands*__","*Limits, recent, reset, MORE OTW*")
        embed.addField("__> *BETA VERSION*__", "Still in development so text me if theres bugs")
        embed.addField("__> *Bot Info :*__", "`The Anti-Nuke is already on once it joins the server. Nothing else needs to be done. Also dont be a idiot and give out admin to abunch of people. Dm 01tro#4444 for more info.`")
        embed.addField("**MADE BY**", "*01tro#4444*") 
        embed.addField("**Invite**", "[invite link](https://discord.com/api/oauth2/authorize?client_id=719804055605477498&permissions=8&scope=bot)")
      const info = [`**[Direct Invite Link](https://discord.com/api/oau.png")
       embed.addField("https://cdn.discordapp.com/attachments/717616425040347166/717625089683881994/0e0a86th2/authorize?client_id=713590806501392474&permissions=8&scope=bot)**`];
        message.channel.send(embed);

    }
}

module.exports = HelpCommand

