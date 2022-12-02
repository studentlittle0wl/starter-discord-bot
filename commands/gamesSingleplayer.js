module.exports = {
    name: 'gamess',
    description: 'single games',
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
                   <:among_us:755888099413983282> **Among Us** 
                  \n <:fall_guys:755888099523035256> **Fall Guys** 
                  \n <:gmod:755888100692983808> **Garry's Mod** 
                  \n <:hearthstone:756505327662530623> **Hearthstone**
                  \n <:destiny:755888099397206146> **Destiny**
                  \n <:minecraft:755888099405594714> **Minecraft** 
                  \n <:terraria:755888099199811624> **Terraria** 
                  \n <:gtaV:756505571993190550> **GTA** 
                  \n <:borderlands:755888099157999758> **Borderlands** 
                  \n <:ark:755888021538340964> **Ark: Survival Evolved** 
                  `,
                    inline: true,
                },
                {
                    name: '\u200b',
                    value: `
                  <:seaofthieves:768203899403763722> **Sea of Thieves**
                  \n <:l4d2:768203008030015509> **Left 4 Dead 2**
                  \n <:shell_shock_live:803417719167778826> **Shell Shock Live**
                  \n <:guildwars2:800124603954364457> **Guild Wars 2**
                  \n <:worms_revolution:803422541758201876> **Worms Revolution**
                  \n <:crusader_kings3:803427120201596958> **Crusader Kings 3**
                  \n <:totalwar:803420818096521226> **Total War: Warhammer**
                  \n <:avorion:803420117479849994> **Avorion**
                  \n <:neverwinter:803417654223699999> **Neverwinter**
                  \n <:depth:803419607729307679> **Depth**
                  `,
                    inline: true,
                }
            ],
        };

        const msgID = args.join(" ");
        message.channel.messages.fetch(msgID).then(msg => {
            msg.edit({ embed: gamesEmbed });
        }).catch(console.error);

        message.channel.messages.fetch(msgID).then(async msg => {

            await msg.react('755888099413983282');
            await msg.react('755888099523035256');
            await msg.react('755888100692983808');
            await msg.react('756505327662530623');
            await msg.react('755888099397206146');
            await msg.react('755888099405594714');
            await msg.react('755888099199811624');
            await msg.react('756505571993190550');
            await msg.react('755888099157999758');
            await msg.react('755888021538340964');
            await msg.react('768203899403763722');
            await msg.react('768203008030015509');
            await msg.react('803417719167778826');
            await msg.react('800124603954364457');
            await msg.react('803422541758201876');
            await msg.react('803427120201596958');
            await msg.react('803420818096521226');
            await msg.react('803420117479849994');
            await msg.react('803417654223699999');
            await msg.react('803419607729307679');
        });
    },
};