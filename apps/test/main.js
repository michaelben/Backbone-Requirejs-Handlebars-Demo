// This set's up the module paths for underscore and backbone
require.config({ 
    'paths': { 
		"jquery": "../../lib/jquery", 
		"underscore": "../../lib/underscore", 
		"backbone": "../../lib/backbone",
		"Handlebars": "../../lib/Handlebars",
		"hbs": "../../lib/hbs"
	},
	'shim': 
	{
		backbone: {
			'deps': ['jquery', 'underscore'],
			'exports': 'Backbone'
		},
		underscore: {
			'exports': '_'
		},
        Handlebars: {
            'exports': 'Handlebars'
        }
	},
    'hbs': {
        disableI18n: true,
    }
}); 

require([
	'underscore',
	'backbone',
	'application'
	], 
	function(_, Backbone, app){
		app.init();
});
