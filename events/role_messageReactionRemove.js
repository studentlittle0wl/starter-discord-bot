module.exports = {
    name: 'messageReactionRemove',
    description: 'removes faculty and games roles',
    eventHandler: async (client, reaction, user) => {
        const config = require("../config.json");
        if (reaction.message.id === "737316732317728849" || reaction.message.id === "903230106909175878" || reaction.message.id === "903230123006910514" || reaction.message.id === "737316710318866442" || reaction.message.id === "757048827906883619" || reaction.message.id === "804676006542573598" || reaction.message.id === "804676017511858176") { //faculty, diploma, semester, gamesMultiplayer, gamesSingleplayer, gamesRandom, gamesConsole
            // When we receive a reaction we check if the reaction is partial or not
            if (reaction.partial) {
                // If the message this reaction belongs to was removed the fetching might result in an API error, which we need to handle
                try {
                    await reaction.fetch();
                } catch (error) {
                    reaction.message.channel.send('Something went wrong when fetching the message: ', error);
                    // Return as `reaction.message.author` may be undefined/null
                    return;
                }
            }
            switch (reaction.message.id) {
                case "737316732317728849": //faculty roles
                    reaction.message.guild.members.fetch(user.id).then(member => {
                    member.roles.remove(config.faculty[reaction.emoji.name]);
                    });
                break;
                case "903230106909175878": //diploma roles
                reaction.message.guild.members.fetch(user.id).then(member => {
                    member.roles.remove(config.diploma[reaction.emoji.name]);
                    });
                break;
                case "903230123006910514": //semester roles
                    reaction.message.guild.members.fetch(user.id).then(member => {
                        member.roles.remove(config.semester[reaction.emoji.name]);
                        });
                break;
                default: //games roles
                    reaction.message.guild.members.fetch(user.id).then(member => {
                        member.roles.remove(config.games[reaction.emoji.name]);
                    });
                break;
            }

            const mention = "<@" + user.id + ">";
            reaction.client.channels.cache.find(channel => channel.name === "bot-activity").send(`user: ${mention}, removed reaction: ${reaction.emoji}`);
        }
    }
};