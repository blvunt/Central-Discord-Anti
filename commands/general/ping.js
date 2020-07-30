const { Command } = require('discord-akairo');

class PingCommand extends Command {
    constructor() {
        super('pong', {
            aliases: ['pong']
        });
    }

    async exec(message) {
        const sent = await message.channel.send('Calculating...');
        return sent.edit(`Latency: **\`${sent.createdTimestamp - message.createdTimestamp}ms\`**`);
    }
}

module.exports = PingCommand;

