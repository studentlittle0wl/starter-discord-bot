module.exports = {
    name: 'server',
    description: 'server',
    execute(message, args) {
        message.channel.send(`This server's name is: ${message.guild.name}`);
        const mention = "<@" + message.author.id + ">";
        message.guild.channels.cache.find(channel => channel.name === "bot-activity").send(`user: ${mention}, command: server`);
    },
};