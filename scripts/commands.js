const fs = require('fs');
const ph = require('path');
const ds = require('discord.js');

//#region Private

function load(client) {
	return new Promise((loaded) => {
		try {

			const path = ph.join(__dirname, '/commands');
			const modules = fs
				.readdirSync(path)
				.filter(file => file.endsWith('command.js'));

			client.commands = new ds.Collection();
			for (const file of modules) {
				const cmd = require(ph.join(path, file));
				client.commands.set(cmd.name, cmd);
			}

			loaded();

		}
		catch (e) {
			console.error('[HC-LOAD-COMMANDS]', 'There was an error during command execution');
		}
	});
}

function build(message) {
	let data = message.content.split(/ +/);
	if (data.length <= 0) {
		return null;
	}
	else {

		let commandType = (data.length >= 1) 
			? data[0].toLowerCase() 
			: null;

		let commandName = (data.length >= 2) 
			? data[1].toLowerCase() 
			: null;

		let commandArgs = (data.length >= 3) 
			? (data.length === 3)
				? data[2]
				: message.content.substr((commandType.length + 1) + (commandName.length + 1)) || null
			: null;

		return {
			type: commandType,
			name: commandName,
			args: commandArgs
		};
	}
}

//#endregion

module.exports = {
	load: (client) => load(client),
	build: (message) => build(message)
};