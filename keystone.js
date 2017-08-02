var keystone = require('keystone');

keystone.init({

	'name': 'Tempo.watch',
	'brand': 'Tempo.watch',

	'less': 'public',
	'static': 'public',
	'favicon': 'public/favicon.ico',
	'views': 'templates/views',
	'view engine': 'jade',

	'auto update': true,
	'session': true,
	'auth': true,
	'user model': 'User',
	'cookie secret': '41228007547702c8e28f220847dd4f704b810fffd8cc4cafed18b1f730d0e32ffbc043fe259c70c1596ed408b2f127a809718e1f7340f00a74d087b9891346ef',

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
