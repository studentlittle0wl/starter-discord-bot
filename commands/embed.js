module.exports = {
    name: 'embed',
    description: 'empty embed',
    execute(message, args) {
        const admin = message.guild.roles.cache.get('734450993387012913'); //admin

        if (!message.member.roles.cache.has(admin.id))
            return message.reply("Sorry, you don't have permissions to use this!");

        const embedText = {
            color: 0x0099ff,
            title: 'Some Title',
            description: 'Some Description',
            fields: [
                {
                    name: '\u200b',
                    value: `Sample Text`,
                    inline: true,
                },
            ],
        };
        message.channel.send({ embed: embedText });
    },
};