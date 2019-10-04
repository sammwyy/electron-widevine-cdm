exports.inject = (app) => {
	app.commandLine.appendSwitch('widevine-cdm-path', __dirname + '/plugin/');
	app.commandLine.appendSwitch('widevine-cdm-version', '4.10.1503.4');
}