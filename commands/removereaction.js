module.exports = {
    name: 'removereaction',
    description: 'removereaction',
    execute(message, args) {
        const admin = message.guild.roles.cache.get('734450993387012913'); //admin

        if (!message.member.roles.cache.has(admin.id))
            return message.reply("Sorry, you don't have permissions to use this!");

        const msgID = args[0];
        const reaction = args.slice(1).join(" ").split(":")[2].slice(0,-1);
        console.log(reaction);

        message.channel.messages.fetch(msgID).then(msg => {
            msg.reactions.cache.get(reaction).remove().catch(error => console.error('Failed to remove reactions: ', error));

        }).catch(console.error);
    
    },

};