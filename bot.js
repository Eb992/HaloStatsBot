
require('dotenv').config();

const discord = require('discord.js');
const client = new discord.Client({
	disableEveryone: false
});
const commands = require('./private/scripts/commands');
const settings = require('./private/scripts/settings');
const utilities = require('./private/scripts/utilities');

process.on('uncaughtException', (e, o) => {
	console.log('[UNHANDLED ERROR]', e, o);
});

client.on('ready', async () => {
	try {
		
	}
	catch (e) {
		console.error('', e);
	}
});
client.on('message', async (message) => {
	try {
        
	}
	catch (e) {
		console.error('', e);
	}
});

client.login(process.env.CLIENT_TOKEN);