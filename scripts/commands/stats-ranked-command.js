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
						let playlistStats = [];
						playlists.forEach(async (playlist) => {
							var type = playlist['type'] || null;
							if (type && type === 'ranked') {
								playlistStats.push({
									name: playlist.name,
									value: playlist.rank.value,
									inline: true
								});
							}
						});
						await message
							.reply({
								embed: {
									color: `#${process.env.COLOR_SUCCESS}`,
									title: command.args,
									url: encodeURI(`https://tracker.gg/halo-mcc/profile/${command.args}/overview`),
									thumbnail: {
										url: 'https://fantalitystudios.ca/resources/assets/images/logos/xbox/xbox-green.png',
									},
									fields: playlistStats
								}
							})
							.then((r) => r.delete({ timeout: 15000 }))
							.catch((e) => console.log('[ERROR REMOVING MESSAGE]', e));
					}
				});
		}
		catch (e) {
			console.error('[STATS-RANKED-EXECUTE]', 'There was an error during command execution');
		}
		finally {
			executed();
		}
	});
}

module.exports = {
	name: 'ranked',
	command: '!stats ranked',
	description: 'A command to fetch ranked player stats',
	execute: (message, command) => execute(message, command)
}