# CENTRAL ANTI NUKE
Central Anti Nuke, a purpose built anti-nuke Discord bot.

---

#### How Central Works

Central allows server owners to set strict limits on administration actions. These actions include: bans, kicks, channel creations/deletions, and role creations/deletions. Once these limits are met, their Discord permissions are automatically revoked via removing all of their roles.

---

#### Setup

*Requires Node v12 for discord.js*

**1.** Add `BOT_TOKEN` property to a .env file

**2.** Configure `config.js` to your personal preferences

**3.** Run `npm start` to start the bot

**4.** Ensure the highest role the bot has is higher than others so it can remove their roles

---

#### Commands

*You can mention the bot instead of using a prefix*

**`;;prefix [prefix]`** Displays the current prefix, changes the prefix if specified

**`;;limits [index] [value]`** Displays the limits, changes an index's value if specified

**`;;reset [type]`** Resets the specified data or collection

**`;;recent [ID]`** Displays recent moderation actions that can trigger the bot's limits

---

#### Example Images

*;;limits command* <br>
![](https://gyazo.com/26c948bf31bef2749865a6d2dc96d47a)

*Image of a limit reached notification* <br>
![](https://gyazo.com/2f8cc7b5408d7c291d69ee55ebce0ef3)

*;;help command* <br>
![](https://gyazo.com/a25cdd3dffde6d1be12595f2f0071e4e)
