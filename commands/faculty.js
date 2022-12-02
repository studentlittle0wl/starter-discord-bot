module.exports = {
  name: 'faculty',
  description: 'edit faculty',
  execute(message, args) {
    const admin = message.guild.roles.cache.get('734450993387012913'); //admin

    if (!message.member.roles.cache.has(admin.id))
      return message.reply("Sorry, you don't have permissions to use this!");

    const facultyEmbed = {
      color: 0x0099ff,
      title: 'Fakultäten und Institute',
      description: 'Wähle hier deine Fakultät deines Studiengangs aus!',
      fields: [
        {
          name: '\u200b',
          value: `
                     1️⃣ **Architektur und Stadtplanung**
                  \n 2️⃣ **Bau- und Umweltingenieurwissenschaften** 
                  \n 3️⃣ **Chemie** 
                  \n 4️⃣ **Energie-, Verfahrens- und Biotechnik**
                  \n 5️⃣ **Informatik, Elektrotechnik und Informationstechnik**
                  \n 6️⃣ **Luft- und Raumfahrttechnik und Geodäsie**
                  \n 7️⃣ **Konstruktions-, Produktions- und Fahrzeugtechnik**
                  \n 8️⃣ **Mathematik und Physik**
                  \n 9️⃣ **Philosophisch-Historische Fakultät** 
                  \n 🔟 **Wirtschafts- und Sozialwissenschaften**
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
      await msg.react('7️⃣');
      await msg.react('8️⃣');
      await msg.react('9️⃣');
      await msg.react('🔟');
    });
  },
};