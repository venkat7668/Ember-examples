App.ApplicationController = Ember.Controller.extend({
  menuItems: [
    {title:"Compose", link:"compose"},
    {title:"Inbox", link:"inbox"},
    {title:"Sent", link:"sent"},
    {title:"Spam", link:"spam"}
  ],
  message :"Click on Inbox"


});
