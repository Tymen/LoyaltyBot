// <=========> Define Variables, Modules <=========> //

// Discord imports
const Discord = require('discord.js');
const client = new Discord.Client();

// Module imports
require('dotenv').config();
const { EventResponse } = require('./modules/onMessage')

// Define Variable

// <=========> Status Message <=========> //

client.once('ready', () => {
    console.log("Bot is online!")
})

// <=========> Listen for messages <=========> //

client.on('message', message => {
    EventResponse(message, client);
})

client.on('guildMemberAdd', member => {

})
// <=========> Login to the discord bot client <=========> //

client.login(process.env.BOT_TOKEN)