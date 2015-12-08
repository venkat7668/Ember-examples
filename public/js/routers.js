App.Router.map(function(){
	this.route("inbox");

  this.resource("sent", function(){
		this.resource("sentmail", {path:"sentmail/:id"});
	});

  this.route("spam");
	this.route("compose");
});

App.Router.reopen({
  location: 'history'
});
