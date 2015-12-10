App.Router.map(function(){
	this.route("inbox");

  this.resource("sent", function(){
		this.resource("sentmail", {path:"sentmail/:id"});
	});

  this.route("spam");
	this.route("compose");
	this.route('fourohfour',{path:"*path"});
});

App.Router.reopen({
  location: 'history'
});


/* 404 route handler */
App.FourohfourRoute = Ember.Route.extend({
	renderTemplate:function(){
		this.render("fourohfour",{
			outlet:"content",
			into:"application"
		});
	}
});
