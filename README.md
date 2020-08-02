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
![limits](https://user-images.githubusercontent.com/63293571/89131904-f1519680-d4d5-11ea-8731-00b34d3442b9.JPG)

*Image of a limit reached notification* <br>
![limit reached](https://user-images.githubusercontent.com/63293571/89131940-1c3bea80-d4d6-11ea-8f50-3d9c7e1cbad8.JPG)

*;;help command* <br>
![help cmd](https://user-images.githubusercontent.com/63293571/89131949-34ac0500-d4d6-11ea-8d53-9462677a240e.JPG)
