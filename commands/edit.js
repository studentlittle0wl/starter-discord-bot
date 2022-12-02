module.exports = {
    name: 'edit',
    description: 'edit message',
    execute(message, args) {
        const admin = message.guild.roles.cache.get('734450993387012913'); //admin

        if (!message.member.roles.cache.has(admin.id))
            return message.reply("Sorry, you don't have permissions to use this!");

        const msgID = args[0];
        const editText = args.slice(1).join(" ");

        message.channel.messages.fetch(msgID).then(msg => {
            msg.edit(editText);
        }).catch(console.error);
    },
};