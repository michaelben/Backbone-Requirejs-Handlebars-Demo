define(['jquery', 'backbone', 'underscore'], function($, Backbone, _) {
  var Model = Backbone.Model.extend({
    'visits': '0'
  });

  return Model;
});
