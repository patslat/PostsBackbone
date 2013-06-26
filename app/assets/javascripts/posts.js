window.App = {
  Models: {},
  Collections: {},
  Views: {},
  Router: {},

  initialize: function($rootEl, posts) {
    var posts = new App.Collections.Posts(posts);

    new App.Router.PostsRouter($rootEl, posts);
    Backbone.history.start();
  }
}
