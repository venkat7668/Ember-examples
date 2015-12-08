App.ApplicationRoute = Ember.Route.extend({
  renderTemplate: function(){
    this.render();
    //header
    this.render('index-header',{
      outlet: "header",
      into:"application"
    });
    //sideMenu
    this.render('index-sidemenu',{
      outlet: "sideMenu",
      into:"application"
    });
    //content
    this.render('index-content',{
      outlet: "content",
      into:"application"
    });
    //footer
    this.render('index-footer',{
      outlet: "footer",
      into:"application"
    });
  }
});
