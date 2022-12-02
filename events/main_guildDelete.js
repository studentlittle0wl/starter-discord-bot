module.exports = {
    name: 'guildDelete',
    description: 'triggers when bot is removed from a guild',
    eventHandler: (client, guild) => {
        console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
        client.user.setActivity(`try sup.help`);
    }
};