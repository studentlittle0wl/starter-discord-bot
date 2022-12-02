module.exports = {
  name: 'semester',
  description: 'edit semester',
  execute(message, args) {
    const admin = message.guild.roles.cache.get('734450993387012913'); //admin

    if (!message.member.roles.cache.has(admin.id))
      return message.reply("Sorry, you don't have permissions to use this!");

    const facultyEmbed = {
      color: 0x0099ff,
      title: 'Semester',
      description: 'Wähle hier dein aktuelles Semester aus!',
      fields: [
        {
          name: '\u200b',
          value: `
                     1️⃣ **Erstes Semester**
                  \n 2️⃣ **Zweites Semester** 
                  \n 3️⃣ **Drittes Semester** 
                  \n 4️⃣ **Viertes Semester**
                  \n 5️⃣ **Fünftes Semester**
                  \n 6️⃣ **Sechstes Semester**
                  \n 🆙 **Langzeitstundent**
                     `,
          inline: true,
        },
      ],
    };
    const msgID = args.join(" ");
    message.channel.messages.fetch(msgID).then(msg => {
      msg.edit({ embed: facultyEmbed });
    }).catch(console.error);

    message.channel.messages.fetch(msgID).then(async msg => {

      await msg.react('1️⃣');
      await msg.react('2️⃣');
      await msg.react('3️⃣');
      await msg.react('4️⃣');
      await msg.react('5️⃣');
      await msg.react('6️⃣');
      await msg.react('🆙');
    });
  },
};