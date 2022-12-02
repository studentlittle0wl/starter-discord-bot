module.exports = {
    name: 'ban',
    description: 'ban',
    async execute(message, args) {
        const admin = message.guild.roles.cache.get('734450993387012913'); //admin
        const mod = message.guild.roles.cache.get('734454307503472702'); //mod

        if (!message.member.roles.cache.has(admin.id) && !message.member.roles.cache.has(mod.id))
            return message.reply("Sorry, you don't have permissions to use this!");

        let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        if (!member)
            return message.reply("Please mention a valid member of this server");
        if (!member.bannable)
            return message.reply("I cannot ban this user! Do they have a higher role? Do I have ban permissions?");

        let reason = args.slice(1).join(' ');
        if (!reason) reason = "No reason provided";

        await member.ban({ days: 7, reason: reason})
            .catch(error => message.reply(`Sorry ${message.author} I couldn't ban because of : ${error}`));
        message.reply(`${member.user.tag} has been banned by ${message.author.tag} because: ${reason}`);
    },
};