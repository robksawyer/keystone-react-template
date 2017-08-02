// Simulate config options from your production environment by
// customising the .env file in your project's root folder.
require('dotenv').config();

// Initialise New Relic if an app name and license key exists
if (process.env.NODE_ENV === 'production'){
	if(process.env.NEW_RELIC_APP_NAME && process.env.NEW_RELIC_LICENSE_KEY) {
		require('newrelic');
	}
}

var keystone = require('keystone');

keystone.init({

	'name': 'keystone-react-template',
	'brand': 'Keystone React Template',

	'less': 'public',
	'static': 'public',
	'favicon': 'public/favicon.ico',
	'views': 'templates/views',
	'view engine': 'jade',

	'auto update': true,
	'session': true,
	'auth': true,
	'user model': 'User',
	'cookie secret': process.env.COOKIE_SECRET,

});

keystone.import('models');

keystone.set('locals', {
	_: require('underscore'),
	env: keystone.get('env'),
	utils: keystone.utils,
	editable: keystone.content.editable
});

keystone.set('routes', require('./routes'));
keystone.set('nav', {
	'users': 'users'
});

keystone.start();
