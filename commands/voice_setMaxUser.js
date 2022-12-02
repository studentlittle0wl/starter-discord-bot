module.exports = {
    name: 'setlimit',
    description: 'sets max users!',
    async execute(message, args) {
        const maxUser = args[0];
        number = parseInt(maxUser);
        const mention = "<@" + message.author.id + ">";
        const ersti = message.guild.roles.cache.get('884201349384921179'); //ersti
        const neuling = message.guild.roles.cache.get('734469958955696158'); //neuling

        if (message.member.roles.cache.has(neuling.id) && !message.member.roles.cache.has(ersti.id))
            return message.reply("Du brauchst die Freund- oder Mitglied-Rolle, um Voice Channel zu verwalten!");

        if (!Number.isInteger(number) || number < 0 || number > 99) {
            message.reply("Bitte gebe eine Zahl zwischen 0 und 99 ein. 0 heißt unbegrenzt.");
            return;
        }
        var channelID;
        const userID = message.author.id;
        var obj;
        message.guild.channels.cache.find(channel => channel.name === "user-channel").messages.fetch("804833927817986090").then(msg => {
            //get a JS object from discord message(JSON file)
            obj = JSON.parse(msg.content);

            //check, if user has a voice channel
            if (userID in obj) {
                channelID = obj[userID];
                msg.guild.channels.cache.find(channel => channel.id === channelID).setUserLimit(number);
                message.reply(`Dein Voice Channel hat jetzt als Limit ${maxUser}!`);
            } else {
                message.reply("Du hast aktuell keinen eigenen Voice Channel, den du bearbeiten kannst!");
                return;
            }

        }).catch(console.error);
        message.guild.channels.cache.find(channel => channel.name === "bot-activity").send(`user: ${mention}, command: setMaxUser, args: ${maxUser}`);

    },
};