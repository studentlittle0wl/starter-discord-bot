module.exports = {
    name: 'say',
    description: 'SAY!',
    execute(message, args) {
        const admin = message.guild.roles.cache.get('734450993387012913'); //admin
        const mod = message.guild.roles.cache.get('734454307503472702'); //mod

        if (!message.member.roles.cache.has(admin.id) && !message.member.roles.cache.has(mod.id))
            return message.reply("Sorry, you don't have permissions to use this!");

        const sayMessage = args.join(" ");
        message.delete().catch(O_o => { });
        message.channel.send(sayMessage);
    },
};