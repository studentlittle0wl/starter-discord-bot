module.exports = {
    name: 'guildMemberAdd',
    description: 'detects erstis',
    eventHandler: (client, member) => {

        const ersti = member.guild.roles.cache.get('903223631092531272'); //Ersti
        
        //new member gets Neuling role
        member.guild.fetchInvites().then(invites => invites.find(invite => {
            if (invite.code === "tRuqDBPvxx") { 
                member.roles.add(ersti);
                const mention = "<@" + member.id + ">";
                member.guild.channels.cache.find(channel => channel.name === "temporärer-speicher").send(`Ersti - Member: ${mention} and Uses: ${invite.uses}`);
            }
        })
        )
    }
}
    ;