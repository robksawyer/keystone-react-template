var keystone = require('keystone');
var transform = require('model-transform');
var Types = keystone.Field.Types;

var User = new keystone.List('User', {
	track: {
		createdBy: true,
		updatedBy: true,
		createdAt: true,
		updatedAt: true
	},
	map: { name: 'name' },
	autokey: { path: 'slug', from: 'key', unique: true }
});

User.add({
	name: { type: Types.Name, required: true, index: true },
	email: { type: Types.Email, initial: true, required: true, index: true },
	password: { type: Types.Password, initial: true, required: true }
}, 'Permissions', {
	isAdmin: { type: Boolean, label: 'Can access Keystone', index: true }
});

User.schema.virtual('name.full').get(function () {
	return this.name.first + ' ' +  this.name.last;
});


// Provide access to Keystone
User.schema.virtual('canAccessKeystone').get(function() {
	return this.isAdmin;
});

transform.toJSON(User);

User.defaultColumns = 'name, email, isAdmin';
User.register();
