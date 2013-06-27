App.Views.PostShowView = Backbone.View.extend({
  initialize: function() {},

  events: {
    "click button.back_btn": "back_btn",
    "dblclick h1.title": "edit_title",
    "dblclick p.body": "edit_body",
    "blur #edit-title": "update",
    "blur #edit-body": "update"
  },

  render: function() {
    var content = JST["templates/show_post"]({
      post: this.model
    });

    this.$el.html(content);

    return this
  },

  back_btn: function(event) {
    Backbone.history.navigate('#/')
  },

  edit_title: function(event) {
    $(event.target).html("<input type='text' id='edit-title' data-id='" +
      this.model.escape("id") + "' value='" + this.model.escape("title") + "'>")
  },

  edit_body: function(event) {
    $(event.currentTarget).html("<textarea id='edit-body' data-id='" +
      this.model.escape("id") + "' autofocus>" + this.model.escape("body") + "</textarea>")
  },

  // update_title: function(event) {
//     console.log("yup")
//   },
//
//   update_body: function(event) {
//     console.log("freeworld");
//   },

  update: function(event) {
    if ($("#edit-title").length > 0) {
      console.log(event.target.value);
      var title = event.target.value;
      this.model.set({title: title});

      this.render();
    } else if ($("#edit-body").length > 0) {
      var body = event.target.value;
      this.model.set({body: body});
      this.model.save({success: function(data) {
        this.render();
      } })
      this.render();
    }
  }


})