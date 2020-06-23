const utilities = require('../utilities');

async function execute(message, command) {
	return new Promise(async (executed) => {
		try {
			await utilities.getPlaylistStats(command.args)
				.then(async (playlists, error) => {
					if (error) {
						await message
							.reply({
								embed: {
									color: `#${process.env.COLOR_ERROR}`,
									description: error
								}
							})
							.then((r) => r.delete({ timeout: 10000 }))
							.catch((e) => console.log('[ERROR REMOVING MESSAGE]', e));
					}
					else {
						playlists.forEach(async (playlist) => {
							var type = playlist['type'] || null;
							if (type && type === 'hardcore') {
								await message
									.reply({
										embed: {
											color: `#${process.env.COLOR_SUCCESS}`,
											title: playlist.name,
											thumbnail: {
												url: playlist.rank.image,
											},
											fields: [
												{
													name: 'Total Games',
													value: playlist.started,
													inline: true
												},
												{
													name: 'Total Completed',
													value: playlist.completed,
													inline: true
												},
												{
													name: 'Total Penalties',
													value: playlist.penalties,
													inline: true
												}
											]
										}
									})
									.then((r) => r.delete({ timeout: 15000 }))
									.catch((e) => console.log('[ERROR REMOVING MESSAGE]', e));
							}
						});
					}
				});
		}
		catch (e) {
			console.error('[STATS-HARDCORE-EXECUTE]', 'There was an error during command execution');
		}
		finally {
			executed();
		}
	});
}

module.exports = {
	name: 'hardcore',
	command: '!hc',
	description: 'A command to fetch hardcore player stats',
	execute: (message, command) => execute(message, command)
}