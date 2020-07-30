const { Command } = require('discord-akairo');
const { limits } = require('../../config.js');

class ResetCommand extends Command {
    constructor() {
        super('reset', {
            aliases: ['reset'],
            args: [
                {
                    id: 'type',
                },
            ],
            channel: 'guild'
        });
    }



    async exec(message, args) {


        if (!message.member.hasPermission('ADMINISTRATOR')) message.channel.send('***Sorry**, invalid permissions.*');

        switch ((args.type || '').toLowerCase()) {
            case 'anti':
                message.guild.delete('limits');
              const embed = this.client.util.embed().setColor("#a300ff");
              const prefix = message.guild.prefix;
              embed.addField('**Done**', `tno`)
              message.channel.send(embed);
        }

    }

}

module.exports = ResetCommand;