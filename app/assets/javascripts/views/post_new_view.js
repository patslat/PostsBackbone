App.Views.PostNewView = Backbone.View.extend({
  initialize: function () {},

  events: { 'click button.submit_new_btn': "create" },

  render: function() {
    var content = JST["templates/new_post"]({
      model: this.model
    });

    this.$el.html(content);
    return this;
  },

  create: function(event) {
    var that = this;
    event.preventDefault();
    this.model.collection = this.collection;
    var attrs = $(event.target.form).serializeJSON().post;

    this.model.save(attrs, {
      success: function (post) {
        that.collection.add(post);
        Backbone.history.navigate("#/");
      },
      error: function (post) {
        that.model = post;
        that.render();
      }
    });
  }
});