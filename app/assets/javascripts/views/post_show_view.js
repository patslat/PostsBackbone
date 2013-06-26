App.Views.PostShowView = Backbone.View.extend({
  initialize: function () {},

  events: {"click button.back_btn": "back_btn" },

  render: function () {
    var content = JST["templates/show_post"]({
      post: this.model
    });

    this.$el.html(content);

    return this
  },

  back_btn: function (event) {
    Backbone.history.navigate('#/')
  }

})