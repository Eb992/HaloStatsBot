module.exports = {

    timestamp: new Date().toLocaleString(),
    getChannelName: async (client, channel) => {
        return await client.channels.fetch(channel).then((e) => `#${e.name || 'unknown'}`);
    }

};