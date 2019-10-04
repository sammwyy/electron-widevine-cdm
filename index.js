const newerestVersion = '4.10.1503.4';
const versionsAllowed = [newerestVersion, '4.10.1503.4'];

exports.inject = (app, version) => {

	if (version == null)
		version = newerestVersion;

	if (!versionsAllowed.includes(version))
		version = newerestVersion;

	app.commandLine.appendSwitch('widevine-cdm-path', __dirname + '/plugin/' + version);
	app.commandLine.appendSwitch('widevine-cdm-version', version);
}