module.exports = {
    name: 'create',
    description: 'create voicechannel!',
    async execute(message, args) {
        var arguments = args.join(' ');
        const mention = "<@" + message.author.id + ">";
        var arg = args.join(' ').split(',');
        var maxUser;
        var temp;
        var name;
        var maxUserText = "";
        var tempText = "temporären";

        const ersti = message.guild.roles.cache.get('884201349384921179'); //ersti

        const neuling = message.guild.roles.cache.get('734469958955696158'); //neuling

        const freund = message.guild.roles.cache.get('771738474645684225'); //freund

        if (message.member.roles.cache.has(neuling.id) && !message.member.roles.cache.has(ersti.id))
            return message.reply("Du brauchst die Freund- oder Mitglied-Rolle, um Voice Channel zu verwalten!");

        if (!isNaN(parseInt(arg[1]))) {
            maxUser = parseInt(arg[1]);
            // console.log("first number");
        } else if (!isNaN(parseInt(arg[2]))) {
            maxUser = parseInt(arg[2]);
            //console.log("second number");
        } else {
            maxUser = 0;
            //console.log("none number");
        };

        if (arg[1] == undefined) {
            arg[1] = "";
        }
        if (arg[2] == undefined) {
            arg[2] = "";
        }

        if (arg[1].includes("false") || arg[1].includes("False") || arg[1].includes("FALSE")) {
            temp = false;
            tempText = "permanenten";
            //console.log("first temp");
        } else if (arg[2].includes("false") || arg[2].includes("False") || arg[2].includes("FALSE")) {
            temp = false;
            tempText = "permanenten";
            //console.log("second temp");
        } else {
            temp = true;
            //console.log("none temp");
        };

        //prüfe maxUser
        if (maxUser < 0 || maxUser > 99) {
            message.reply("Bitte gebe eine Zahl zwischen 0 und 99 ein. 0 heißt unbegrenzt.");
            return;
        }

        //setze Namen, falls leer
        if (!args.length) {
            var userName = message.author.username;
            name = userName + "'s Voice Channel";
        } else {
            name = arg[0];
        }

        if (message.member.roles.cache.has(freund.id) || message.member.roles.cache.has(ersti.id)) {
            temp = "true";
            tempText = "temporären";
        }

        var channelID;
        const userID = message.author.id;
        message.guild.channels.cache.find(channel => channel.name === "user-channel").messages.fetch("804833927817986090").then(msg => {

            //get a JS object from discord message(JSON file)
            var obj = JSON.parse(msg.content);

            if (obj.length >= 45) {
                message.reply("Der Limit der Custom Channel ist erreicht. Bitte melde dich im Support-Channel.");
                return;
            }

            //check, if user has already a voice channel
            if (userID in obj) {
                message.reply("Du hast bereits einen eigenen Voice Channel!");
                return;
            }

            //clone parentChannel and set custom arguments 
            message.client.channels.cache.find(channel => channel.id === '805091274080124950').clone({ "name": name, "parent": '804833635907796992', "userLimit": maxUser }).then(async c => {
                c.lockPermissions(true);
                //await c.setName(arg[0]);
                //await c.setUserLimit(maxUser);

                channelID = c.id;
                obj[userID] = channelID;

                await msg.edit(JSON.stringify(obj, null, 0));

                if (temp) {
                    message.guild.channels.cache.find(channel => channel.name === "user-channel").messages.fetch("804833957769904199").then(async msg => {
                        //get a JS object from discord message(JSON file)
                        var obj = JSON.parse(msg.content);

                        //adds channel and time to tempList
                        var d = new Date();
                        d.setHours(d.getHours() + 1);
                        d.setMinutes(d.getMinutes() + 5);
                        obj[channelID] = d;

                        await msg.edit(JSON.stringify(obj));
                    }).catch(console.error);
                }
                if (maxUser === 0) {
                    maxUserText = "keinen User Limit"
                } else {
                    maxUserText = "einen User Limit von " + maxUser;
                }
                message.reply(`Du hast einen ${tempText} Voice Channel mit dem Namen ${name} und ${maxUserText} erstellt!`);
            }).catch(console.error);

        }).catch(console.error);
        message.guild.channels.cache.find(channel => channel.name === "bot-activity").send(`user: ${mention}, command: create, args: ${arguments}`);
    },
};