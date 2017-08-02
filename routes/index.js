var babelify = require('babelify');
var browserify = require('browserify-middleware');
var keystone = require('keystone');

var importRoutes = keystone.importer(__dirname);

// Setup Route Bindings
exports = module.exports = function(app) {

	// This is where the magic happens.
	// Browserify basically takes and compiles the content inside of the client folder.
	app.use('/js', browserify('./client', {
		transform: [
			babelify.configure({
				presets: ['es2015', 'react', 'stage-1'],
				extensions: ['.js','.jsx']
			})
		]
	}));

	// Views
	app.use(function(req, res) {
		res.render('index');
	});

};
