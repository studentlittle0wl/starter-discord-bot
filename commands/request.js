module.exports = {
    name: 'request',
    description: 'request',
    async execute(message, args) {
        if (message.channel.type !== 'dm')
            return message.reply("Please use this command in direct message!");

        const requestMessage = args.join(" ");
        const mention = "<@" + message.author.id + ">";
        message.client.channels.cache.find(channel => channel.name === "mitglied-anfrage-admin").send(`Daten: ${requestMessage} und User: ${mention}`).then(async msg => {
            await msg.react('✅');
        })
        message.reply('Du hast deine Mitgliedsanfrage erfolgreich gesendet');
        message.client.channels.cache.find(channel => channel.name === "bot-activity").send(`user: ${mention}, command: request`);
    },
};