module.exports = {
    name: 'purge',
    description: 'purge',
    async execute(message, args) {
        const admin = message.guild.roles.cache.get('734450993387012913'); //admin
        const mod = message.guild.roles.cache.get('734454307503472702'); //mod

        if (!message.member.roles.cache.has(admin.id) && !message.member.roles.cache.has(mod.id))
            return message.reply("Sorry, you don't have permissions to use this!");

        const deleteCount = parseInt(args[0], 10);
        if (!deleteCount || deleteCount < 2 || deleteCount > 100)
            return message.reply("Please provide a number between 2 and 100 for the number of messages to delete");
        const fetched = await message.channel.messages.fetch({ limit: deleteCount });
        message.channel.bulkDelete(fetched)
            .catch(error => message.reply(`Couldn't delete messages because of: ${error}`));
    },
};