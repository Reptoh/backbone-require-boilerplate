/*global define*/
define([
	'jquery',
	'backbone'
], function ($, Backbone) {
	'use strict';

	var AppRouter = Backbone.Router.extend({
		routes: {
			'': 'index',
			'*path': 'defaultRoute'
		},
		index: function () {
			require(['views/mainView'], function(MainView) {
				var view = new MainView();
				$(".container").append(view.render().el);
			});
		},
		defaultRoute: function(path) {
			this.index();
		}
	});

	return AppRouter;
});
