App.Views.PostListView = Backbone.View.extend({
  initialize: function () {
    var that = this;
    this.collection.on("change", function() {
      that.render()
    })
  },

  events: {
    "click button.delete_btn": "delete_btn",
    "click button.new_btn": "new_btn"
  },

  render: function() {
    var content = JST["templates/list_posts"]({
      collection: this.collection
    })

    this.$el.html(content);

    return this;
  },

  delete_btn: function(event) {
    var id = $(event.target).attr("data-id");

    var post = this.collection.get({ id: id })

    post.destroy();

    this.collection.trigger("change")
  },

  new_btn: function (event) {
    Backbone.history.navigate("#/posts/new")
  }
});