App.InboxRoute = Ember.Route.extend({
  model:function(){
    return this.store.find("email");
  },
  renderTemplate:function(){
    this.render("inbox-content",{
      outlet:"content",
      into:"application"
    });
  }
});
