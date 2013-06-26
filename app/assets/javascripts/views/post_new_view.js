App.Views.PostNewView = Backbone.View.extend({
  initialize: function () {},

  events: { 'click button.submit_new_btn': "create" },

  render: function(failedPost) {
    var content = JST["templates/new_post"]({
      model: failedPost || { title: "", body: ""}
    });

    this.$el.html(content);
    return this;
  },

  create: function(event) {
    event.preventDefault();

    var that = this;

    var formData = $(event.target.form).serialize();

    $.ajax({
      url: "/posts",
      type: "post",
      data: formData,
      success: function (post) {
        that.collection.add(post);
        Backbone.history.navigate("#/")
      },
      error: function (failedPost) {
        that.render(failedPost);
      }
    });
  }
});