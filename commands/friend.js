module.exports = {
    name: 'friend',
    description: 'friend',
    async execute(message, args) {
        /*
        if (message.channel.id !== "773332301324746782")
            return message.reply('Please use this command in #bot-commands!');
        */

        const friend = message.mentions.users.first();
        const mentionUser = "<@" + message.author.id + ">";
        const mentionFriend = "<@" + friend.id + ">";
        const memberUser = message.guild.members.cache.get(message.author.id);
        const memberFriend = message.guild.members.cache.get(friend.id);

        if (memberUser.roles.cache.some(role => role.name === 'Mitglied') || memberUser.roles.cache.some(role => role.name === 'Moderator') || memberUser.roles.cache.some(role => role.name === 'Admin')) {
            if (memberFriend.roles.cache.some(role => role.name === 'Neuling')) {
                message.channel.send(`${mentionFriend}, du hast eine Freundschaftsanfrage von ${mentionUser} erhalten. \n\nBestätige die Anfrage, indem du auf das **grüne Häckchen** klickst.`).then(async msg => {
                    await msg.react('✅');
                })
                message.client.channels.cache.find(channel => channel.name === "bot-activity").send(`user: ${mentionUser}, command: friend, args: ${mentionFriend}`);
                message.client.channels.cache.find(channel => channel.name === "friend-request-admin").send(`Friend: ${friend} und User: ${mentionUser}`).then(async msg => {
                    await msg.react('✅');
                })
            } else {
                message.reply("Dein Freund ist kein Neuling.");
            }
        } else {
            message.reply("Du musst die Rolle Mitglied haben, um diesen Befehl zu verwenden.");
        }
    },
};