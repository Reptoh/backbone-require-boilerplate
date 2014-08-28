/*global require*/
'use strict';

require.config({
	shim: {
		underscore: {
			exports: '_'
		},
		backbone: {
			deps: [
				'underscore',
				'jquery'
			],
			exports: 'Backbone'
		},
		bootstrap: {
			deps: ['jquery']
		}
	},
	paths: {
		jquery: '../../vendor/jquery/jquery',
		backbone: '../../vendor/backbone/backbone',
		underscore: '../../vendor/underscore/underscore',
		bootstrap: '../../vendor/bootstrap/dist/js/bootstrap',
		text: '../../vendor/requirejs-text/text'
	}
});

require([
	'backbone',
	'routes/router',
	'bootstrap'
], function (Backbone, AppRouter) {
	new AppRouter();
	Backbone.history.start({ pushState: true });
});


//=========================================
//     for ie8 indexOf fix
//=========================================

if (!Array.prototype.indexOf)
{
  Array.prototype.indexOf = function(elt /*, from*/)
  {
    var len = this.length >>> 0;

    var from = Number(arguments[1]) || 0;
    from = (from < 0)
         ? Math.ceil(from)
         : Math.floor(from);
    if (from < 0)
      from += len;

    for (; from < len; from++)
    {
      if (from in this &&
          this[from] === elt)
        return from;
    }
    return -1;
  };
};