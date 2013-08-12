define([
		'jquery', 
		'backbone',
		'underscore',
        'models/main'], 
function($, Backbone, _, model){
	var View = Backbone.View.extend({
		initialize: function(){
            this.model = new model();
		},
		render: function(){
            $("#count").html(this.model.get('visits'));
            $(".main").show();
            $(".detail").hide();
		},
	});
	
	return new View();
});
