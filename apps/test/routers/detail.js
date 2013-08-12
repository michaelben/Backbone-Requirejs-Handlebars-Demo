define([
    'views/main',
	'views/detail'], 
function(mainView, detailView){
	var Router = Backbone.Router.extend({
		initialize: function(){
			this.mainView = mainView;
			this.detailView = detailView;
		},
		routes: {
            '': 'home',
            'home': 'home',
			"detail": "detail"
		},
        'home': function(){
            this.mainView.render();
        },
		detail: function(){
			this.detailView.render();
		}
	});

	return Router;
});
