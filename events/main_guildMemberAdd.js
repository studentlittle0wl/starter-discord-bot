module.exports = {
    name: 'guildMemberAdd',
    description: 'new member gets Neuling role',
    eventHandler: (client, member) => {
        const neuling = member.guild.roles.cache.get('734469958955696158'); //Neuling
        member.roles.add(neuling);
    }
};