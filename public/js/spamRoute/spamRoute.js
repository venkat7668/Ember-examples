App.SpamRoute = Ember.Route.extend({
  model:function(){
    return this.store.find("spam-email");
  },
  renderTemplate:function(){
      this.render("inbox-content",{
        outlet:"content",
        into:"application"
      });
  }
});
