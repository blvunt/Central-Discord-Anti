const { Listener } = require('discord-akairo');

module.exports = class RoleCreateListener extends Listener {
    constructor() {
        super('emojiCreate', {
            emitter: 'client',
            event: 'emojiCreate'
        });
    }

    async exec(emoji) {
        if (!emoji.guild) return;

        // Fetch entry relating to action
        let entry = await emoji.guild.find_entry('EMOJI_CREATE', (e) => e.target.id === emoji.id && e.createdTimestamp > Date.now() - 1000 * 60);
        if (!entry) return;

        // Fetch entries (w/ entry prepended)
        let entries = emoji.guild.push_entry(entry, emoji.id);

        // Check limits
        emoji.guild.check_limits(entries, entry.executor.id, 'emoji_creations');
    }
}
