module.exports = {
    name: 'senddm',
    description: 'senddm',
    execute(message, args) {
        const admin = message.guild.roles.cache.get('734450993387012913'); //admin

        if (!message.member.roles.cache.has(admin.id))
            return message.reply("Sorry, you don't have permissions to use this!");
        const mention = args[0];
        const userID = mention.slice(3, -1);
        const user = message.client.users.cache.get(userID);
        //mention.slice(2, -1);
        //const user = message.client.cache.get(args[0]);
        const dmText = args.slice(1).join(" ");
        user.send(dmText);
        // message.client.channels.cache.find(channel => channel.name === "mitglied-anfrage-admin").send(`Daten: ${requestMessage} und User: ${mention}`);
        // message.reply('Du hast deine Mitgliedsanfrage erfolgreich gesendet')
    },
};