window.App = {
  Models: {},
  Collections: {},
  Views: {},
  Router: {},

  initialize: function($sidebar, $rootEl, posts) {
    var posts = new App.Collections.Posts(posts);

    this.createSidebar($sidebar, posts);

    new App.Router.PostsRouter($rootEl, posts);
    Backbone.history.start();
  },

  createSidebar: function($sidebar, posts) {
    var view = new App.Views.PostListView({
      collection: posts
    });

    $sidebar.html(view.render().$el);
  }
}
