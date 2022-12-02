module.exports = {
    name: 'setname',
    description: 'sets name!',
    async execute(message, args) {
        const name = args.join(' ');
        const mention = "<@" + message.author.id + ">";
        var channelID;
        const userID = message.author.id;
        var obj;

        const ersti = message.guild.roles.cache.get('884201349384921179'); //ersti
        const neuling = message.guild.roles.cache.get('734469958955696158'); //neuling

        if (message.member.roles.cache.has(neuling.id) && !message.member.roles.cache.has(ersti.id))
            return message.reply("Du brauchst die Freund- oder Mitglied-Rolle, um Voice Channel zu verwalten!");

        message.guild.channels.cache.find(channel => channel.name === "user-channel").messages.fetch("804833927817986090").then(msg => {
            //get a JS object from discord message(JSON file)
            obj = JSON.parse(msg.content);

            //check, if user has a voice channel
            if (userID in obj) {
                channelID = obj[userID];
                msg.guild.channels.cache.find(channel => channel.id === channelID).setName(name);
                message.reply(`Dein Voice Channel heißt jetzt ${name}!`);
            } else {
                message.reply("Du hast aktuell keinen eigenen Voice Channel, den du bearbeiten kannst!");
                return;
            }

        }).catch(console.error);
        message.guild.channels.cache.find(channel => channel.name === "bot-activity").send(`user: ${mention}, command: setname, args: ${name}`);  
    },
};
