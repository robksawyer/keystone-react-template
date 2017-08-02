var keystone = require('keystone');
var Promise = require('bluebird');

exports = module.exports = {

	validateKeys: function (id, secret) {
		var User = keystone.list('User').model;

		return new Promise(function(resolve, reject){
			User.findOne({
				clientId: id,
				clientSecret: secret
			})
			.where('state', 'active')
			.exec(function(err, exists){
				if(err) reject(false);
				var valid = (exists) ? exists : false;
				resolve(valid);
			});
		});
	}

};
