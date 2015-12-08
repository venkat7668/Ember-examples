App.ComposeController = Ember.Controller.extend({
  needs:["sent"],
  init:function(){
    this.set("email", Ember.Object.create());
  },
  startingID: 3,
  increaseId:function(){
    return this.startingID++;
  },
  actions :{
    sendClickHandler : function(){
      var email = this.get('email').set("id", this.increaseId());
      this.store.push("sent-email",email);
      this.transitionToRoute("sent");

    }
  }
});
