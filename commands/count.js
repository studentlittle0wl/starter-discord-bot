module.exports = {
    name: 'count',
    description: 'count!',
    async execute(message, args) {
        const roleName = args.join(" ");
        const role = message.guild.roles.cache.find(role => role.name === roleName);
        const memberCount = role.members.size;
        message.channel.send(memberCount + " members have the role " + role.name);
        const mention = "<@" + message.author.id + ">";
        message.guild.channels.cache.find(channel => channel.name === "bot-activity").send(`user: ${mention}, command: count, args: ${roleName}`);
    },
};