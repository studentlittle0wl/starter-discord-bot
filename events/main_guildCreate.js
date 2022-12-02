module.exports = {
    name: 'guildCreate',
    description: 'triggers when bot joins a guild',
    eventHandler: (client, guild) => {
        console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.members.cache.size} members!`);
        client.user.setActivity(`try sup.help`);
    }
};