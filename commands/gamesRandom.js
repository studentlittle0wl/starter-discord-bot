module.exports = {
    name: 'gamesr',
    description: 'update Games R',
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
                    <:skribblio:803417758955601970> **skribbl.io** 
                    \n <:osu:803415467867897876> **Osu!**
                    \n <:pokemon_go:886237679623221290> **Pokemon Go**
                    \n <:dontstarvetogether:903209009757159424> **Dont Starve Together**
                    \n <:satisfactory:898899955538862110> **Satisfactory**
                    \n <:civilization:903210111969927208> **Civilization**
                    \n <:new_world:903211156175474729> **New World**
                    \n <:factorio:903211957912494130> **Factorio**
                    \n <:genshin_impact:903214665146970122> **Genshin Impact**
                    \n <:Phasmophobia:903215360050855966> **Phasmophobia**
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

            await msg.react('803417758955601970');
            await msg.react('803415467867897876');
            await msg.react('886237679623221290');
            await msg.react('903209009757159424');
            await msg.react('898899955538862110');
            await msg.react('903210111969927208');
            await msg.react('903211156175474729');
            await msg.react('903211957912494130');
            await msg.react('903214665146970122');
            await msg.react('903215360050855966');

        });


    },
};