module.exports = {
    name: 'info',
    description: 'info',
    execute(message, args) {
        if (message.channel.type == 'dm')
            return message.reply("Bitte benutze diesen Befehl auf G.U.S.T.A.V. Games!");
        var arg = args.join(" ").toLowerCase();
        const user = message.client.users.cache.get(message.author.id);
        const mention = "<@" + message.author.id + ">";
        var messageID;
        var messageText;
        switch (arg) {
            case "social":
                messageID = "767405163689672716";
                messageText = "zu unseren 📱**-Social-Media**";
                break;
            case "engines":
                messageID = "767405278014078996";
                messageText = "zu den 🏆**-Engines Stuttgart**";
                break;
            case "mitglied":
                messageID = "767405503499206657";
                messageText = "zu der 📝**-Mitgliedsanfrage**";
                break;
            default:
                messageText = "default";
        }
        message.guild.channels.cache.find(channel => channel.name === "copy-paste").messages.fetch(messageID).then(async msg => {
            if (messageText != "default") {
                const m = await user.send(msg.content);
                m.suppressEmbeds(true);
                message.reply(`Die Informationen ${messageText} wurden dir privat geschickt!`);
            } else { 
                message.reply("Bitte benutze den Befehl `sup.help info`, um eine Übersicht über die Info-Befehle zu bekommen!");
            }

            message.guild.channels.cache.find(channel => channel.name === "bot-activity").send(`user: ${mention}, command: info ${args}`);
        }).catch(console.error);
    },
};