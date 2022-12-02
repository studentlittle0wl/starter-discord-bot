module.exports = {
    name: 'message',
    description: 'logs all dm messages',
    eventHandler: (client, message) => {
        if (message.channel.type == 'dm' && !message.content.startsWith("sup.") && !message.author.bot) {
            const messageDM = message.content;
            const mention = "<@" + message.author.id + ">";
            message.client.channels.cache.find(channel => channel.name === "bot-dm").send(`User: ${mention} and Message: ${messageDM}`);
            message.reply('Deine Nachricht wird bearbeitet.');
        }
    }
};