const settings = require('dotenv');

//#region Private

function load() {
	return new Promise((resolve, reject) => {
		try {
			if (settings.config().parsed)
				resolve();
			else
				reject();
		}
		catch (e) {
			reject();
		}
	});
}

//#endregion
//#region Exports

module.exports = {
	load: load
};

//#endregion