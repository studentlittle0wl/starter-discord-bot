module.exports = {
    name: 'guildMemberAdd',
    description: 'detects with which invite new user joins',
    eventHandler: (client, member) => {

        //new member gets Neuling role
        member.guild.fetchInvites().then(invites => invites.find(invite => {
            if (invite.code === "smKkmPS") {
                const mention = "<@" + member.id + ">";
                member.guild.channels.cache.find(channel => channel.name === "temporärer-speicher").send(`Member: ${mention} and Uses: ${invite.uses}`);
            }
        })
        )
    }
}
    ;