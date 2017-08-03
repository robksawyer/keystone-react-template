var babelify = require('babelify');
var browserify = require('browserify-middleware');
var keystone = require('keystone');

var middleware = require('./middleware');
var importRoutes = keystone.importer(__dirname);

var cors = require('./helpers/cors');

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

	// Set the CORS so that same domain requests are allowed.
	app.use(cors);

	// This is where the magic happens.
	// Browserify basically takes and compiles the content inside of the client folder.
	app.use('/js', browserify('./client', {
		extensions: ['.js','.jsx'],
		transform: [
			babelify.configure({
				presets: ['es2015', 'react', 'stage-1']
			})
		]
	}));

	// @see https://stackoverflow.com/questions/27117337/exclude-route-from-express-middleware
	var unless = function(path, middleware) {
    return function(req, res, next) {
        if (path === req.path) {
            return next();
        } else {
					if(middleware){
						return middleware(req, res, next);
					}
          return next();
        }
    };
	};

	// Start the Restful API
	restful.start();

	// Check to make sure an API call didn't happen
	app.use(unless('/api'));

	// Render templates/views/index.pug (React app)
	app.use(function(req, res, next) {
		return res.render('index');
	});
};
