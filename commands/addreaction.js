module.exports = {
    name: 'addreaction',
    description: 'addreaction',
    execute(message, args) {
        const admin = message.guild.roles.cache.get('734450993387012913'); //admin

        if (!message.member.roles.cache.has(admin.id))
            return message.reply("Sorry, you don't have permissions to use this!");

        const msgID = args[0];
        const react = args.slice(1).join(" ");
        const reactnum = react.match(/\d+/)[0]
        message.channel.messages.fetch(msgID).then(async msg => {

            await msg.react(reactnum);
        }).catch(console.error);

    },

};