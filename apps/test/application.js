define([
'jquery',
'underscore',
'backbone',
//'handlebars',
'models/detail',
//'hbs!templates/detail',
'views/main',
'views/detail',
'routers/detail'
],
//function($, _, Backbone, Handlebars, model, template, mainView, view, router){
function($, _, Backbone, model, mainView, view, router){
    var init = function() {
    this.router = new router();
    this.router.on('route:detail', function() {
        var curvisits = mainView.model.get('visits');
        if (curvisits === undefined) curvisits = 0;

        mainView.model.set({'visits': curvisits + 1});
    });

    //Backbone.history.start({ pushState: true });
    //here We use hash for demo purpose. uncomment the above for HTML5 pushState, but has to implement server side url, also remove # in <a href=""> in inhex.html.
    Backbone.history.start();
    $(document).on('click', 'a:not([data-bypass])', function (evt) {

        var href = $(this).attr('href');
        var protocol = this.protocol + '//';

        if (href.slice(protocol.length) !== protocol) {
            evt.preventDefault();
            Backbone.history.navigate(href, true);
        }
    });

    }

    return {init:init};
});
