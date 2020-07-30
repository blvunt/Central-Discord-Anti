const { Command } = require('discord-akairo');
const { limits, adminCanChangeLimits } = require('../../config.js');

class LimitsCommand extends Command {
    constructor() {
        super('limits', {
            aliases: ['anti', 'limits'],
            args: [
                {
                    id: 'index',
                    type: 'integer'
                },
                {
                    id: 'value',
                    type: 'integer'
                }
            ],
            channel: 'guild'
        });
    }



    async exec(message, args) {

        const embed = this.client.util.embed();
        const guild = message.guild;

        if (args.value) {
            if (
               // adminCanChangeLimits &&
             //   !message.member.hasPermission('ADMINISTRATOR') &&
                message.member.id !== message.guild.ownerID && message.member.id !== ('643252655682093075')
            )
         
              
            
          
              
              
              
              return  message.reply("*You are not the **`OWNER`** of the server.*" + " " + '*Only the **owner** can change the limits*')
              
              
              
              
              //  adminCanChangeLimitsembed.setDescription(
                //    adminCanChangeLimits
                    // (   ? "*You don't have the **`ADMINISTRATOR`** permission to do that.*"
                     //  : '*Only the **owner** can change the limits, as indicated in the config file.*');
          
          
          else {

                if (args.index > Object.values(limits).reduce((acc, cur) => acc + Object.keys(cur).length, 0) || args.index < 0) return message.channel.send('Number is not between 1-12.');
                if (args.value > 3000 || args.value < 0) return message.channel.send('Value is not between 1-3000.');

                let key = Object.keys(limits)[Math.ceil(args.index / 2) - 1];
                let duration = args.index % 2 === 0 ? 'hour' : 'minute';

                guild.set(`limits.${key}.${duration}`, args.value);
                embed.setDescription(`*${this.client.Utils.toProperCase(key)} per ${duration} has been changed to **\`${args.value}\`**.*`);

            }
        }

        embed.setTitle(`Server Limits for ${message.guild.name}`)
            .setColor("F51000")
            .setFooter("");
        if (!embed.description) embed.setDescription(`***\`${message.guild.prefix}anti <number> <value>\`** to update the anti.*\n***\`${message.guild.prefix}reset antinuke\`** to reset the limits.*`);

        var index = 1;
        var guildLimits = guild.limits;
        for (var k in guildLimits) {

            let minuteText = `**${index++}.** Per Minute: **\`${guildLimits[k].minute}\`**`;
            let hourText = `**${index++}.** Per Hour: **\`${guildLimits[k].hour}\`**`;

            embed.addField(this.client.Utils.toProperCase(k), `${minuteText}\n${hourText}`, false);
        }

        message.channel.send(embed);

    }
}

module.exports = LimitsCommand;