define([
    'Handlebars',
    'models/detail',
    'hbs!template/detail'],
function(Handlebars, model, template){
        var View = Backbone.View.extend({
            el: '.detail',
            initialize: function(){
                this.model = new model();
                this.template = template;
            },
            render: function(){
                $(this.el).html(this.template(this.model.data));
                /*
                $(this.el).html(this.template({
                    'name': 'asdfasf',
                    'treatments': {
                        't1': {
                        'description': 'afdgsdg',
                        'display_name': 'nsdf'
                        },
                        't2': {
                        'description': 'afdgsdg2',
                        'display_name': 'nsdf2'
                        }
                    }
                }));
                */
                $('.main').hide();
                $('.detail').show();
            }
        });

        return new View();
});
