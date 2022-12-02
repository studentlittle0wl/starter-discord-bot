module.exports = {
    name: 'ready',
    description: 'checks temporary channel',
    eventHandler: (client) => {
        var interval = setInterval(function () {
            var d = new Date();
            d.setHours((d.getHours() + 1));
            client.channels.cache.find(channel => channel.name === "user-channel").messages.fetch("804833957769904199").then(msg => {

                //get a JS object from discord message(JSON file)
                var obj = JSON.parse(msg.content);
                var deleted = [];

                for (const [channelid, time] of Object.entries(obj)) {
                    var t = new Date(time);
                    if (time === null) { continue; }
                    if (t < d) {
                        msg.guild.channels.cache.find(channel => channel.id === channelid).delete();
                        delete obj[channelid];
                        deleted.push(channelid);
                    }
                }

                msg.edit(JSON.stringify(obj));

                client.channels.cache.find(channel => channel.name === "user-channel").messages.fetch("804833927817986090").then(msg => {
                    //get a JS object from discord message(JSON file)
                    var obj = JSON.parse(msg.content);

                    for (const [userid, channelid] of Object.entries(obj)) {
                        if (deleted.includes(channelid)) {
                            delete obj[userid];
                            var user = msg.guild.members.cache.get(userid);
                            const mention = "<@" + user.id + ">";
                            msg.guild.channels.cache.find(channel => channel.name === "bot-activity").send(`user: ${mention}, command: deleted by bot`);
                        }
                    }
                    msg.edit(JSON.stringify(obj));

                });
            });
        }, 1 * 900000);

    }

};