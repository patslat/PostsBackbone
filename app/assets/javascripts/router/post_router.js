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
    this.$rootEl.empty();
  },

  show: function (id) {
    var post = this.posts.get(parseInt(id));
    var view = new App.Views.PostShowView({ model: post });

    this.$rootEl.html(view.render().$el);
  },

  newPost: function () {
    var view = new App.Views.PostNewView({
      model: new App.Models.Post(),
      collection: this.posts
    });

    this.$rootEl.html(view.render().$el);
  }
})