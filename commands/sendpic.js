module.exports = {
    name: 'sendpic',
    description: 'sendpic',
    execute(message, args) {
        const admin = message.guild.roles.cache.get('734450993387012913'); //admin

        if (!message.member.roles.cache.has(admin.id))
            return message.reply("Sorry, you don't have permissions to use this!");

        const picture = args[0];

        message.delete().catch(O_o => { });
        message.channel.send((({ files: [picture] })
        ));

    },
};