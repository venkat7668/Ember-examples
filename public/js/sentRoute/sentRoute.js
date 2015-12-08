App.SentRoute = Ember.Route.extend({
  model:function(){
    return this.store.find("sent-email");
  },
  renderTemplate:function(){
    this.render("sent-content",{
      outlet:"content",
      into:"application"
    });
  }
});
