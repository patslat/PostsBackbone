App.Router.PostsRouter = Backbone.Router.extend({
  initialize: function ($rootEl, posts) {
    this.$rootEl = $rootEl;
    this.posts = posts;
  },

  routes: {
    '': 'index',
    'posts/new': 'newPost',
    'posts/:id': 'show',
  },

  index: function() {
    var view = new App.Views.PostListView({ collection: this.posts });
    this.$rootEl.html(view.render().$el);
  },

  show: function (id) {
    var post = this.posts.get(parseInt(id));
    var view = new App.Views.PostShowView({ model: post });

    this.$rootEl.html(view.render().$el);
  },

  newPost: function () {
    var view = new App.Views.PostNewView({ collection: this.posts });

    this.$rootEl.html(view.render().$el);
  }
})