module.exports = {
  name: 'diploma',
  description: 'edit diploma',
  execute(message, args) {
    const admin = message.guild.roles.cache.get('734450993387012913'); //admin

    if (!message.member.roles.cache.has(admin.id))
      return message.reply("Sorry, you don't have permissions to use this!");

    const facultyEmbed = {
      color: 0x0099ff,
      title: 'Abschluss',
      description: 'Wähle hier deinen aktuell angestrebten Abschluss aus!',
      fields: [
        {
          name: '\u200b',
          value: `
                     🅱️ **Bachelor**
                  \n Ⓜ️ **Master** 
                  \n 🏫 **Lehramt**
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

      await msg.react('🅱️');
      await msg.react('Ⓜ️');
      await msg.react('🏫');
    });
  },
};