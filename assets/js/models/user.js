/*global define*/
define([
	'underscore',
	'backbone',
], function (_, Backbone) {
	'use strict';
	var User = Backbone.Model.extend({

		defaults: {
			'username': '',
			'department': 'none'
		}
	});
	return new User;
});