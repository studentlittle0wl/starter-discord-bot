module.exports = {
    name: 'messageReactionRemove',
    description: 'removes ersti',
    eventHandler: async (client, reaction, user) => {
        const config = require("../config.json");
        if (reaction.message.id === "885493713168637983" ) { //ersti info
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
            reaction.message.guild.members.fetch(user.id).then(member => {
                member.roles.remove(config.ersti[reaction.emoji.name]);
            });

            const mention = "<@" + user.id + ">";
            reaction.client.channels.cache.find(channel => channel.name === "bot-activity").send(`user: ${mention}, removed reaction: ${reaction.emoji}`);
        }
    }
};