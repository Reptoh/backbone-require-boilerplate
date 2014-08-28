/*global define*/
define([
	'jquery',
	'underscore',
	'backbone',
	'text!templates/main_view.html'
], function ($, _, Backbone, Template) {
	'use strict';

	var MainView = Backbone.View.extend({
		events: {
		},

		initialize: function () {
			this.template = _.template(Template);
		},

		render: function () {
			this.$el.html(this.template());
			return this;
		}
	});
	return MainView;
});