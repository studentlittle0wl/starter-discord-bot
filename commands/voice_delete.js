module.exports = {
    name: 'delete',
    description: 'delete voicechannel!',
    async execute(message, args) {
        var channelID;
        const userID = message.author.id;
        var obj;
        const mention = "<@" + message.author.id + ">";
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
            } else {
                message.reply("Du hast aktuell keinen eigenen Voice Channel, den du löschen kannst!");
                return;
            }
            if (message.guild.channels.cache.find(channel => channel.id === channelID).members.size !== 0) {
                message.reply("Es befinden sich gerade User in deinen Voice Channel, bitte versuche es nachher erneut!");
                return;
            }


            delete obj[userID];

            //update discord message
            msg.edit(JSON.stringify(obj));

            message.guild.channels.cache.find(channel => channel.name === "user-channel").messages.fetch("804833957769904199").then(msg => {
                //get a JS object from discord message(JSON file)
                var obj = JSON.parse(msg.content);

                delete obj[channelID];

                //update discord message
                msg.edit(JSON.stringify(obj));

            }).catch(console.error);

            //delete user channel
            msg.guild.channels.cache.find(channel => channel.id === channelID).delete();
            message.reply("Du hast deinen Voice Channel gelöscht!");

        }).catch(console.error);
        message.guild.channels.cache.find(channel => channel.name === "bot-activity").send(`user: ${mention}, command: delete`);
    },
};
