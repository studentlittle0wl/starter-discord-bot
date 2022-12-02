module.exports = {
    name: 'messageReactionAdd',
    description: 'if friend reacts get friend role',
    eventHandler: async (client, reaction, user) => {
        if (reaction.message.author.bot && reaction.message.author.id == "734477918524407889" && reaction.emoji.name === '✅') { //bot id
            const msgID = reaction.message.id;
            const neuling = reaction.message.guild.roles.cache.get('734469958955696158'); //neuling
            const friend = reaction.message.guild.roles.cache.get('771738474645684225'); //friend

            reaction.message.channel.messages.fetch(msgID).then(msg => {
                const mention = msg.mentions.users.first();
                const memberFriend = reaction.message.guild.members.cache.get(mention.id);
                if (!memberFriend.roles.cache.some(role => role.name === 'Freund') && user.id == mention.id) {
                    msg.guild.members.fetch(mention.id).then(member => {
                        member.roles.add(friend.id);
                        member.roles.remove(neuling.id);
                    }).catch(console.error);
                }
            })
        }
    }
};