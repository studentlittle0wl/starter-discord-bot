module.exports = {
    name: 'help',
    description: 'help',
    execute(message, args) {
        const neuling = message.guild.roles.cache.get('734469958955696158'); //neuling
        const freund = message.guild.roles.cache.get('771738474645684225'); //freund
        const mitglied = message.guild.roles.cache.get('734451427539419227'); //mitglied
        const c = message.guild.channels.cache.get('734460275159203980') // support und fragen
        const m = message.guild.channels.cache.get('737292678751977635') // mitglied-anfrage
        if (!args.length) {
            if (message.member.roles.cache.has(neuling.id)) {
                const neulingEmbed = {
                    color: 0x0099ff,
                    title: 'Bot-Befehle --- **Neuling** 🐣',
                    description: '**G.U.S.T.A.V.Games Support Bot**\n **Präfix: `sup.`**',
                    fields: [
                        {
                            name: '\u200b',
                            value: '**Befehl**',
                            inline: true,
                        },
                        {
                            name: '\u200b',
                            value: '**Beschreibung**',
                            inline: true,
                        },
                        {
                            name: '\u200b',
                            value: '\u200b',
                            inline: true,
                        },
                        {
                            name: '❓-Hilfe',
                            value: '`help`',
                            inline: true,
                        },
                        {
                            name: '\u200b',
                            value: 'zeigt alle Befehle für deinen Rang',
                            inline: true,
                        },
                        {
                            name: '\u200b',
                            value: '\u200b',
                            inline: true,
                        },
                        {
                            name: '📝-Mitgliedsanfrage',
                            value: '`info mitglied`',
                            inline: true,
                        },
                        {
                            name: '\u200b',
                            value: 'Infos über die Mitgliedsanfrage',
                            inline: true,
                        },
                        {
                            name: '\u200b',
                            value: '\u200b',
                            inline: true,
                        },
                        {
                            name: '📱-Social Media',
                            value: '`info social`',
                            inline: true,
                        },
                        {
                            name: '\u200b',
                            value: 'unsere Social Media Links',
                            inline: true,
                        },
                        {
                            name: '\u200b',
                            value: '\u200b',
                            inline: true,
                        },
                        {
                            name: '🏆-Engines Stuttgart',
                            value: '`info engines`',
                            inline: true,
                        },
                        {
                            name: '\u200b',
                            value: 'Infos zu den Engines Stuttgart',
                            inline: true,
                        },
                        {
                            name: '\u200b',
                            value: '\u200b',
                            inline: true,
                        },
                        {
                            name: '\u200b',
                            value: '\u200b',
                            inline: false,
                        },
                        {
                            name: '🎵-Musik-Bots',
                            value: '`help music`',
                            inline: true,
                        },
                        {
                            name: '\u200b',
                            value: 'zeigt alle Befehle von den Musik Bots',
                            inline: true,
                        },
                        {
                            name: '\u200b',
                            value: '\u200b',
                            inline: true,
                        },
                        {
                            name: '\u200b',
                            value: `**Bei Fragen oder Problemen melde dich im **${c.toString()}**-Channel.**`,
                        },
                    ],
                };
                message.channel.send({ embed: neulingEmbed });
                const mention = "<@" + message.author.id + ">";
            message.guild.channels.cache.find(channel => channel.name === "bot-activity").send(`user: ${mention}, command: help`);
            } else if (message.member.roles.cache.has(freund.id)) {
                const freundEmbed = {
                    color: 0x0099ff,
                    title: 'Bot-Befehle --- **Freund** 🦜',
                    description: '**G.U.S.T.A.V.Games Support Bot**\n **Präfix: `sup.`**',
                    fields: [
                        {
                            name: '\u200b',
                            value: '**Befehl**',
                            inline: true,
                        },
                        {
                            name: '\u200b',
                            value: '**Beschreibung**',
                            inline: true,
                        },
                        {
                            name: '\u200b',
                            value: '\u200b',
                            inline: true,
                        },
                        {
                            name: '❓-Hilfe',
                            value: '`help`',
                            inline: true,
                        },
                        {
                            name: '\u200b',
                            value: 'zeigt alle Befehle für deinen Rang',
                            inline: true,
                        },
                        {
                            name: '\u200b',
                            value: '\u200b',
                            inline: true,
                        },
                        {
                            name: '📝-Mitgliedsanfrage',
                            value: '`info mitglied`',
                            inline: true,
                        },
                        {
                            name: '\u200b',
                            value: 'Infos über die Mitgliedsanfrage',
                            inline: true,
                        },
                        {
                            name: '\u200b',
                            value: '\u200b',
                            inline: true,
                        },
                        {
                            name: '📱-Social Media',
                            value: '`info social`',
                            inline: true,
                        },
                        {
                            name: '\u200b',
                            value: 'unsere Social Media Links',
                            inline: true,
                        },
                        {
                            name: '\u200b',
                            value: '\u200b',
                            inline: true,
                        },
                        {
                            name: '🏆-Engines Stuttgart',
                            value: '`info engines`',
                            inline: true,
                        },
                        {
                            name: '\u200b',
                            value: 'Infos zu den Engines Stuttgart',
                            inline: true,
                        },
                        {
                            name: '\u200b',
                            value: '\u200b',
                            inline: true,
                        },
                        {
                            name: '🔊-VoiceChannel',
                            value: '`help voice`',
                            inline: true,
                        },
                        {
                            name: '\u200b',
                            value: 'zeigt Befehle, um deinen Voice Channel zu verwalten',
                            inline: true,
                        },
                        {
                            name: '\u200b',
                            value: '\u200b',
                            inline: true,
                        },
                        {
                            name: '\u200b',
                            value: '\u200b',
                            inline: false,
                        },
                        {
                            name: '🎵-Musik-Bots',
                            value: '`help music`',
                            inline: true,
                        },
                        {
                            name: '\u200b',
                            value: 'zeigt alle Befehle von den Musik Bots',
                            inline: true,
                        },
                        {
                            name: '\u200b',
                            value: '\u200b',
                            inline: true,
                        },
                        {
                            name: '\u200b',
                            value: `**Bei Fragen oder Problemen melde dich im **${c.toString()}**-Channel.**`,
                        },
                    ],

                };
                message.channel.send({ embed: freundEmbed });
                const mention = "<@" + message.author.id + ">";
            message.guild.channels.cache.find(channel => channel.name === "bot-activity").send(`user: ${mention}, command: help`);
            } else if (message.member.roles.cache.has(mitglied.id)) {
                const mitgliedEmbed = {
                    color: 0x0099ff,
                    title: 'Bot-Befehle --- **Mitglied** 🦆',
                    description: '**G.U.S.T.A.V.Games Support Bot**\n **Präfix: `sup.`**',
                    fields: [
                        {
                            name: '\u200b',
                            value: '**Befehl**',
                            inline: true,
                        },
                        {
                            name: '\u200b',
                            value: '**Beschreibung**',
                            inline: true,
                        },
                        {
                            name: '\u200b',
                            value: '\u200b',
                            inline: true,
                        },
                        {
                            name: '❓-Hilfe',
                            value: '`help`',
                            inline: true,
                        },
                        {
                            name: '\u200b',
                            value: 'zeigt alle Befehle für deinen Rang',
                            inline: true,
                        },
                        {
                            name: '\u200b',
                            value: '\u200b',
                            inline: true,
                        },
                        {
                            name: '🦜-Freundsschaftsanfrage',
                            value: '`friend [mention]`',
                            inline: true,
                        },
                        {
                            name: '\u200b',
                            value: 'stelle eine Freundschaftsanfrage an deinen Freund',
                            inline: true,
                        },
                        {
                            name: '\u200b',
                            value: '\u200b',
                            inline: true,
                        },
                        {
                            name: '📱-Social Media',
                            value: '`info social`',
                            inline: true,
                        },
                        {
                            name: '\u200b',
                            value: 'unsere Social Media Links',
                            inline: true,
                        },
                        {
                            name: '\u200b',
                            value: '\u200b',
                            inline: true,
                        },
                        {
                            name: '🏆-Engines Stuttgart',
                            value: '`info engines`',
                            inline: true,
                        },
                        {
                            name: '\u200b',
                            value: 'Infos zu den Engines Stuttgart',
                            inline: true,
                        },
                        {
                            name: '\u200b',
                            value: '\u200b',
                            inline: true,
                        },
                        {
                            name: '🔊-Voice-Channel',
                            value: '`help voice`',
                            inline: true,
                        },
                        {
                            name: '\u200b',
                            value: 'zeigt Befehle, um deinen Voice Channel zu verwalten',
                            inline: true,
                        },
                        {
                            name: '\u200b',
                            value: '\u200b',
                            inline: true,
                        },
                        {
                            name: '\u200b',
                            value: '\u200b',
                            inline: false,
                        },
                        {
                            name: '🎵-Musik-Bots',
                            value: '`help music`',
                            inline: true,
                        },
                        {
                            name: '\u200b',
                            value: 'zeigt alle Befehle von den Musik Bots',
                            inline: true,
                        },
                        {
                            name: '\u200b',
                            value: '\u200b',
                            inline: true,
                        },
                        {
                            name: '\u200b',
                            value: `**Bei Fragen oder Problemen melde dich im **${c.toString()}**-Channel.**`,
                        },
                    ],
                };
                message.channel.send({ embed: mitgliedEmbed });
            }


            const mention = "<@" + message.author.id + ">";
            message.guild.channels.cache.find(channel => channel.name === "bot-activity").send(`user: ${mention}, command: help`);

        }
        else if (args == "music") {
            const musicEmbed = {
                color: 0x0099ff,
                title: '🎵-Musik-Bot Befehle',
                fields: [
                    {
                        name: '**FredBoat♪♪**',
                        value: '`;help`',
                        inline: true,
                    },
                    {
                        name: '\u200b',
                        value: 'Befehle vom FredBoat♪♪ Bot',
                        inline: true,
                    },
                    {
                        name: '\u200b',
                        value: '\u200b',
                        inline: true,
                    },
                    {
                        name: '**Groovy**',
                        value: '`-help`',
                        inline: true,
                    },
                    {
                        name: '\u200b',
                        value: 'Befehle vom Groovy Bot',
                        inline: true,
                    },
                    {
                        name: '\u200b',
                        value: '\u200b',
                        inline: true,
                    },
                    {
                        name: '**Hydra**',
                        value: '`.help`',
                        inline: true,
                    },
                    {
                        name: '\u200b',
                        value: 'Befehle vom Hydra Bot',
                        inline: true,
                    },
                    {
                        name: '\u200b',
                        value: '\u200b',
                        inline: true,
                    },
                    {
                        name: '**MEE6**',
                        value: '`!help music`',
                        inline: true,
                    },
                    {
                        name: '\u200b',
                        value: 'Befehle von dem Musik Bot',
                        inline: true,
                    },
                    {
                        name: '\u200b',
                        value: '\u200b',
                        inline: true,
                    },
                    {
                        name: '**Rythm**',
                        value: '`+help`',
                        inline: true,
                    },
                    {
                        name: '\u200b',
                        value: 'Befehle vom Rythm Bot',
                        inline: true,
                    },
                    {
                        name: '\u200b',
                        value: '\u200b',
                        inline: true,
                    },
                    {
                        name: '\u200b',
                        value: `**Bei Fragen oder Problemen melde dich im **${c.toString()}**-Channel.**`,
                    },
                ],
            };
            message.channel.send({ embed: musicEmbed });



            const mention = "<@" + message.author.id + ">";
            message.guild.channels.cache.find(channel => channel.name === "bot-activity").send(`user: ${mention}, command: help music`);
        } else if (args == "voice") {
            const voiceEmbed = {
                color: 0x0099ff,
                title: '🔊-Voice-Channel Befehle',
                description: '**Prefix: `sup.`**',
                fields: [
                    {
                        name: '\u200b',
                        value: '**Befehl**',
                        inline: true,
                    },
                    {
                        name: '\u200b',
                        value: '**Beispiel**',
                        inline: true,
                    },
                    {
                        name: '\u200b',
                        value: '\u200b',
                        inline: true,
                    },
                    {
                        name: '**Erstellen**',
                        value: '`create name, limit, temp`',
                        inline: true,
                    },
                    {
                        name: '\u200b',
                        value: '`sup.create Mein Channel, 10, false`',
                        inline: true,
                    },
                    {
                        name: '\u200b',
                        value: '\u200b',
                        inline: true,
                    },
                    {
                        name: '**Name**',
                        value: '`setname name`',
                        inline: true,
                    },
                    {
                        name: '\u200b',
                        value: '`sup.setname Mein Channel`',
                        inline: true,
                    },
                    {
                        name: '\u200b',
                        value: '\u200b',
                        inline: true,
                    },
                    {
                        name: '**User Limit**',
                        value: '`setlimit limit`',
                        inline: true,
                    },
                    {
                        name: '\u200b',
                        value: '`sup.setlimit 0`',
                        inline: true,
                    },
                    {
                        name: '\u200b',
                        value: '\u200b',
                        inline: true,
                    },
                    {
                        name: '**Temporär/Permanent**',
                        value: '`settemp temp`',
                        inline: true,
                    },
                    {
                        name: '\u200b',
                        value: '`sup.settemp false`',
                        inline: true,
                    },
                    {
                        name: '\u200b',
                        value: '\u200b',
                        inline: true,
                    },
                    {
                        name: '**Löschen**',
                        value: '`delete`',
                        inline: true,
                    },
                    {
                        name: '\u200b',
                        value: '`sup.delete`',
                        inline: true,
                    },
                    {
                        name: '\u200b',
                        value: '\u200b',
                        inline: true,
                    },
                    {
                        name: '\u200b',
                        value: `**Bei Fragen oder Problemen melde dich im **${c.toString()}**-Channel.**`,
                    },
                ],
            };
            message.channel.send({ embed: voiceEmbed });



            const mention = "<@" + message.author.id + ">";
            message.guild.channels.cache.find(channel => channel.name === "bot-activity").send(`user: ${mention}, command: help voice`);
        } else if (args == "info") {
            const infoEmbed = {
                color: 0x0099ff,
                title: '❗-Info Befehle',
                description: '**Prefix: `sup.`**',
                fields: [
                    {
                        name: '\u200b',
                        value: '**Befehl**',
                        inline: true,
                    },
                    {
                        name: '\u200b',
                        value: '**Bescheibung**',
                        inline: true,
                    },
                    {
                        name: '\u200b',
                        value: '\u200b',
                        inline: true,
                    },
                    {
                        name: '📝-Mitgliedsanfrage',
                        value: '`info mitglied`',
                        inline: true,
                    },
                    {
                        name: '\u200b',
                        value: 'Infos über die Mitgliedsanfrage',
                        inline: true,
                    },
                    {
                        name: '\u200b',
                        value: '\u200b',
                        inline: true,
                    },
                    {
                        name: '📱-Social Media',
                        value: '`info social`',
                        inline: true,
                    },
                    {
                        name: '\u200b',
                        value: 'unsere Social Media Links',
                        inline: true,
                    },
                    {
                        name: '\u200b',
                        value: '\u200b',
                        inline: true,
                    },
                    {
                        name: '🏆-Engines Stuttgart',
                        value: '`info engines`',
                        inline: true,
                    },
                    {
                        name: '\u200b',
                        value: 'Infos zu den Engines Stuttgart',
                        inline: true,
                    },
                    {
                        name: '\u200b',
                        value: '\u200b',
                        inline: true,
                    },
                    {
                        name: '\u200b',
                        value: `**Bei Fragen oder Problemen melde dich im **${c.toString()}**-Channel.**`,
                    },
                ],
            };
            message.channel.send({ embed: infoEmbed });



            const mention = "<@" + message.author.id + ">";
            message.guild.channels.cache.find(channel => channel.name === "bot-activity").send(`user: ${mention}, command: help info`);
        }

    },
};