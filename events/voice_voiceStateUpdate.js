module.exports = {
    name: 'voiceStateUpdate',
    description: 'controlls voice channel activity',
    eventHandler: async (client, oldState, newState) => {
        var channelid;
        if (oldState.channelID === null && newState.channelID !== null) {
            channelid = newState.channelID;
        }
        if (newState.channelID === null && oldState.channelID !== null) {
            channelid = oldState.channelID;
        }
        var channel = newState.guild.channels.cache.find(channel => channel.id === channelid);
        
        newState.guild.channels.cache.find(channel => channel.name === "user-channel").messages.fetch("804833957769904199").then(msg => {

            //get a JS object from discord message(JSON file)
            var obj = JSON.parse(msg.content);

            //check, if user has already a voice channel
            if (!(channelid in obj)) return;

            if (channel.members.size === 0) {
                var d = new Date();
                d.setHours(d.getHours() + 1);
                d.setMinutes(d.getMinutes() + 5);

                obj[channelid] = d;
                msg.edit(JSON.stringify(obj));

            } else if (channel.members.size === 1) {
                obj[channelid] = null;
                msg.edit(JSON.stringify(obj));
            }

        }).catch(console.error);
    }
};