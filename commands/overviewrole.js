module.exports = {
    name: 'overview',
    description: 'overview role',
    async execute(message, args) {

        const admin = message.guild.roles.cache.get('734450993387012913'); //admin
        const mod = message.guild.roles.cache.get('734454307503472702'); //mod
        const mitglied = message.guild.roles.cache.get('734451427539419227'); //mitglied
        const neuling = message.guild.roles.cache.get('734469958955696158'); //neuling

        if (!message.member.roles.cache.has(admin.id))
            return message.reply("Sorry, you don't have permissions to use this!");


        const roleA = message.guild.roles.cache.find(role => role.id === admin.id);
        const roleMo = message.guild.roles.cache.find(role => role.id === mod.id);
        const roleMi = message.guild.roles.cache.find(role => role.id === mitglied.id);
        const roleN = message.guild.roles.cache.find(role => role.id === neuling.id);
        const all = message.client.users.cache.size;

        const roleEmbed = {
            color: 0x0099ff,
            title: 'Übersicht der Rollen',
            fields: [
                {
                    name: '\u200b',
                    value: `
                    Insgesamt:
              \n <@&734450993387012913>: 
              \n <@&734454307503472702>: 
              \n <@&734451427539419227>: 
              \n <@&734469958955696158>: 
                `,
                    inline: true,
                },
                {
                    name: '\u200b',
                    value: `
                   ${all} Personen
                \n ${roleA.members.size} Personen 
                \n ${roleMo.members.size} Personen
                \n ${roleMi.members.size} Personen
                \n ${roleN.members.size} Personen
                  `,
                    inline: true,
                },
            ],
        };

        const msgID = args.join(" ");
        message.channel.messages.fetch(msgID).then(msg => {
            msg.edit({ embed: roleEmbed });
        }).catch(console.error);

    },
};