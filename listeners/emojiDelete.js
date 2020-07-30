const { Listener } = require('discord-akairo');

module.exports = class RoleDeleteListener extends Listener {
    constructor() {
        super('emojiDelete', {
            emitter: 'client',
            event: 'emojiDelete'
        });
    }

    async exec(emoji) {
        if (!emoji.guild) return;

        // Fetch entry relating to action
        let entry = await emoji.guild.find_entry('EMOJI_DELETE', (e) => e.target.id === emoji.id && e.deletedTimestamp > Date.now() - 1000 * 60);
        if (!entry) return;

        // Fetch entries (w/ entry prepended)
        let entries =  emoji.guild.push_entry(entry, emoji.name);

        // Check limits
        emoji.guild.check_limits(entries, entry.executor.id, 'emoji_deletions');
    }
}