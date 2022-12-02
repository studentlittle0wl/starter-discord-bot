module.exports = {
    name: 'settemp',
    description: 'set temp true/false',
    async execute(message, args) {
        //const fs = require('fs');
        const input = args.join(' ');
        var channelID;
        const userID = message.author.id;
        var tempText;
        const mention = "<@" + message.author.id + ">";
        const ersti = message.guild.roles.cache.get('884201349384921179'); //ersti
        const neuling = message.guild.roles.cache.get('734469958955696158'); //neuling

        if (message.member.roles.cache.has(neuling.id) && !message.member.roles.cache.has(ersti.id))
            return message.reply("Du brauchst die Freund- oder Mitglied-Rolle, um Voice Channel zu verwalten!");

            const freund = message.guild.roles.cache.get('771738474645684225'); //freund

        if (message.member.roles.cache.has(freund.id) || message.member.roles.cache.has(ersti.id))
            return message.reply("Du kannst nur mit der Mitglied-Rolle permanente Voice Channel haben!");

        message.guild.channels.cache.find(channel => channel.name === "user-channel").messages.fetch("804833927817986090").then(msg => {

            //get a JS object from discord message(JSON file)
            var obj = JSON.parse(msg.content);

            //check, if user has already a voice channel
            if (userID in obj) {
                channelID = obj[userID];
            } else {
                message.reply("Du hast aktuell keinen eigenen Voice Channel, den du bearbeiten kannst!");
                return;
            }

            if (input.includes("false") || input.includes("False") || input.includes("FALSE")) {
                temp = false;
                tempText = "permanent";
            } else if (input.includes("true") || input.includes("True") || input.includes("TRUE")) {
                temp = true;
                tempText = "temporär";
            } else {
                message.reply("Bitte gebe an, ob dein Voice Channel temporär (true) oder permanent (false) sein soll.");
                return;
            };

            message.guild.channels.cache.find(channel => channel.name === "user-channel").messages.fetch("804833957769904199").then(async msg => {
                //get a JS object from discord message(JSON file)
                var obj = JSON.parse(msg.content);
                if (temp) {

                    //adds channel and time to tempList
                    var d = new Date();
                    d.setHours(d.getHours() + 1);
                    d.setMinutes(d.getMinutes() + 5);
                    obj[channelID] = d;

                } else {
                    delete obj[channelID];
                }
                //update discord message
                msg.edit(JSON.stringify(obj));

            }).catch(console.error);
            message.reply(`Dein Voice Channel ist jetzt ${tempText}.`);
        }).catch(console.error);
        message.guild.channels.cache.find(channel => channel.name === "bot-activity").send(`user: ${mention}, command: settemp, args: ${input}`);
    },
};