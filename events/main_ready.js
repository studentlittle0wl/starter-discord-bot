module.exports = {
    name: 'ready',
    description: 'executes on ready',
    eventHandler: (client) => {

        //fetch channel message for ersti roles
        client.channels.cache.find(channel => channel.name === "🎓-ersti-info").messages.fetch("885493713168637983");

        //fetch channel message for faculty roles
        client.channels.cache.find(channel => channel.name === "🎓-uni-rollen").messages.fetch("737316732317728849"); //faculty
        client.channels.cache.find(channel => channel.name === "🎓-uni-rollen").messages.fetch("903230106909175878"); //diploma
        client.channels.cache.find(channel => channel.name === "🎓-uni-rollen").messages.fetch("903230123006910514"); //semester

        //fetch channel message for games roles
        client.channels.cache.find(channel => channel.name === "🎮-games-rollen").messages.fetch("737316710318866442"); //multiplayer
        client.channels.cache.find(channel => channel.name === "🎮-games-rollen").messages.fetch("757048827906883619"); //singleplayer
        client.channels.cache.find(channel => channel.name === "🎮-games-rollen").messages.fetch("804676006542573598"); //random
        client.channels.cache.find(channel => channel.name === "🎮-games-rollen").messages.fetch("804676017511858176"); //console

        //fetch mitglied-anfragen
        client.channels.cache.find(channel =>  channel.name === "mitglied-anfrage-admin").messages.fetch();

        //fetch invites
        /** client.channels.cache.find(channel => channel.name === "invites").messages.fetch("891972982568804392").then(async msg => {

            //get a JS object from discord message(JSON file)

            
         var obj = JSON.parse(msg.content);
            console.log(obj);
            //fetch guildinvites
            msg.guild.fetchInvites().then(async invites => {
                for (const invite of Array.from(invites.values())) {
                //check, invites already there and update
                    console.log(invite.code + ": " + invite.uses);
                    obj[invite.code] = invite.uses;
                }
                console.log(obj);
                await msg.edit(JSON.stringify(obj, null, 0));
            });    
        });*/
       

        //test old messages
       // client.channels.cache.find(channel => channel.name === "user-channel").messages.fetch("801222525479682059");

        client.channels.cache.find(channel => channel.name === "bot-spam").send("online");

        console.log(`Bot has started, with ${client.users.cache.size} users, in ${client.channels.cache.size} channels of ${client.guilds.cache.size} guilds.`);
        client.user.setActivity(`Discord`);
    }
};