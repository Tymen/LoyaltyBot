// <=========> Define Variables, Modules <=========> //

// Module imports
require('dotenv').config();
const { customMessage } = require('./customMessage')
// Define Variable
const prefix = process.env.COMMAND_PREFIX;
const reply = (message, value) => {
    return message.channel.send(value)
}
// <=========> Message Handler <=========> //
const EventResponse = (message, client) => {
    if (!message.author.bot && message.content.startsWith(prefix)){
        const args = message.content.slice(prefix.length).trim().split(' ');
        const command = args.shift().toLowerCase();
        switch(command) {
            case 'welcome':
                reply(message, customMessage.welcomeMessage(message.author, client));
                break;
            case 'help':
                reply(message, customMessage.help())
                break;
            case 'pannenkoek':
                reply(message, customMessage.pannenkoek());
                break;
            case 'muntrix':
                reply(message, customMessage.muntrix())
                break;
            case 'dewa':
                reply(message, customMessage.dewa())
                break;
        }
    }
    console.log(message.author.username + ": " + message.content)
}

// <=========> Export Module <=========> //
module.exports = { EventResponse }