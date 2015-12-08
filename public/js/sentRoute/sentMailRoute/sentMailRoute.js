App.SentmailRoute = Ember.Route.extend({
  model:function(params){
     return this.store.find("sent-email", params.id);
  },
  renderTemplate:function(){
    this.render("sentmail/view",{
      outlet:"content",
      into:"application"
    });
  }
});
