App.ComposeRoute = Ember.Route.extend({
  model:function(){
    //return this.store.find("ComposeEmail");
  },
  renderTemplate:function(){
    this.render("compose-content",{
      outlet:"content",
      into:"application"
    });
  }
});
