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
var pkg = require('./package.json');

// Handle finding the right database to use.
// Builds a database based on the name in package.json.
// Warning: You shouldn't have any spaces or weird characters in the name.
var mongoUrl = process.env.MONGO_URI;
if(process.env.NODE_ENV === 'local') {
	if(process.env.USE_LIVE_DB === 'true') {
		mongoUrl = process.env.MONGO_URI;
	} else {
		mongoUrl = 'mongodb://localhost/' + pkg.name;
	}
}

keystone.init({

	'name': 'keystone-react-template',
	'brand': 'Keystone React Template',

	'less': 'client/public',
	'static': 'client/public',
	'favicon': 'client/public/favicon.ico',
	'views': 'client/templates/views',
	'view engine': 'pug',

	// Handy options
	// 'emails': 'templates/emails',
	// 'admin path': 'admin',
	// 'signin logo': ['/images/logo.svg', 120],

	'mongo': mongoUrl,

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
