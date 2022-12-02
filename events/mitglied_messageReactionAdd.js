module.exports = {
    name: 'messageReactionAdd',
    description: 'gives Mitglied role and sends info message',
    eventHandler: async (client, reaction, user) => {
        if (reaction.partial) {
            // If the message this reaction belongs to was removed the fetching might result in an API error, which we need to handle
            try {
                await reaction.fetch();
            } catch (error) {
                console.error('Something went wrong when fetching the message: ', error);
                // Return as `reaction.message.author` may be undefined/null
                return;
            }
        }
        if (reaction.message.channel.id === "737293451296768022" && user.id === "398971681668071425" && reaction.emoji.name === '✅') { //mitglied-anfrage-admin, little_0wl, emoji

            const msgID = reaction.message.id; //message id for user
            //const editText = args.slice(1).join(" ");
            // let mention = 'undefined';
            reaction.message.channel.messages.fetch(msgID).then(msg => {
                const mention = msg.mentions.users.first();
                //reaction.message.guild.members.fetch(user.id)
                // msg.guild.member.roles.add();

                newUser = msg.client.users.cache.get(mention.id);
                client.channels.cache.find(channel => channel.name === "copy-paste").messages.fetch('767424215829577749').then(msg => {
                    newUser.send(msg.content);
                }).catch(console.error);

                msg.guild.members.fetch(mention.id).then(member => {
                    member.roles.add('734451427539419227');
                    member.roles.remove('734469958955696158'); //Neuling
                    member.roles.remove('771738474645684225'); //Freund
                }).catch(console.error);


            })
        }

    }
};