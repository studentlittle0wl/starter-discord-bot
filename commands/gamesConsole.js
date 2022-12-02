module.exports = {
    name: 'gamesc',
    description: 'update Games C',
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
                    <:animalcrossing:768582788374069299> **Animal Crossing** 
                     \n <:mariokart:803416947425148958> **Mario Kart** 
                    \n <:smash:803415465187737600> **Super Smash Bros.**
                    \n <:pokemon:886237697776160808> **Pokemon**
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

            await msg.react('768582788374069299');
            await msg.react('803416947425148958');
            await msg.react('803415465187737600');
            await msg.react('886237697776160808');

        });


    },
};