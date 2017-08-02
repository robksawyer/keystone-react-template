var babelify = require('babelify');
var browserify = require('browserify-middleware');
var keystone = require('keystone');

var middleware = require('./middleware');
var importRoutes = keystone.importer(__dirname);

// Pass your keystone instance to the module
var restful = require('restful-keystone')(keystone, {
	root: '/api/' + process.env.API_VERSION
});

keystone.pre('routes', function(req, res, next) {
	res.locals.siteName = keystone.get('name');

	// next is fired in this method
	middleware.initLocals(req, res, next);
});

// Import Route Controllers
// var routes = {
// 	views: importRoutes('./views'),
// };

// Setup Route Bindings
exports = module.exports = function(app) {

	// Set up Restful routes
	restful.expose({
			User: {
				methods: ['retrieve', 'list', 'create', 'update', 'remove'],
				show : ['_id', 'name', 'isAdmin']
			}
		});

	restful.before({
		User: {
			update: [],
			remove: [ middleware.requireAdmin ],
			create: [],
			list: [],
			retrieve: []
		}
	});

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

	// Start the Restful API
	restful.start();

	// @see https://stackoverflow.com/questions/27117337/exclude-route-from-express-middleware
	var unless = function(path, middleware) {
    return function(req, res, next) {
        if (path === req.path) {
            return next();
        } else {
            return res.render('index');
        }
    };
	};

	// Views
	app.use(unless('/api'));
};
