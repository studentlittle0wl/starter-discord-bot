module.exports = {
    name: 'gamesm',
    description: 'update Games M',
    async execute(message, args) {

        const admin = message.guild.roles.cache.get('734450993387012913'); //admin

        if (!message.member.roles.cache.has(admin.id))
            return message.reply("Sorry, you don't have permissions to use this!");

        const gamesEmbed = {
            color: 0x0099ff,
            title: 'Verfügbare Games',
            description: 'Wähle hier deine Games aus, die du spielst!',
            fields: [
                {
                    name: '\u200b',
                    value: `
             <:cs_go:736264329539616828> **Counter-Strike: Global Offensive** 
          \n <:league_of_legends:734570538172940311> **League of Legends** 
          \n <:overwatch:736977671874936832> **Overwatch**
          \n <:rocket_league:734570538646896681> **Rocket League**
          \n <:rainbow_six_siege:736978354300911626> **Rainbow Six Siege**
          \n <:valorant:734570537606578268> **Valorant**
          \n <:pubg:755891294269735053> **PUBG** 
          \n <:tf2:768195953316331570> **Team Fortress**
          \n <:roguecompany:768195857858035712> **Rouge Company**
          \n <:apex:803415465065054219> **Apex**
            `,
                    inline: true,
                },
                {
                    name: '\u200b',
                    value: `
          \n <:smite:803415466730061835> **Smite**
          \n <:escape_from_tarkov:803425593063899156> **Escape from Tarkov**
          \n <:starcraft2:803415465790537728> **Star Craft 2**
            `,
                    inline: true,
                },
            ],
        };

        const msgID = args.join(" ");
        message.channel.messages.fetch(msgID).then(msg => {
            msg.edit({ embed: gamesEmbed });
        }).catch(console.error);

        message.channel.messages.fetch(msgID).then(async msg => {

            await msg.react('736264329539616828');
            await msg.react('734570538172940311');
            await msg.react('736977671874936832');
            await msg.react('734570538646896681');
            await msg.react('736978354300911626');
            await msg.react('734570537606578268');
            await msg.react('755891294269735053');
            await msg.react('768195953316331570');
            await msg.react('768195857858035712');
            await msg.react('803415465065054219');
            await msg.react('803415466730061835');
            await msg.react('803425593063899156');
            await msg.react('803415465790537728');

        });


    },
};