//inbox data
App.EmailAdapter = DS.FixtureAdapter.extend({});

App.Email = DS.Model.extend({
  sub: DS.attr( 'string' ),
  from: DS.attr( 'string' ),
  email: DS.attr( 'string' )
});

App.Email.reopenClass({
  FIXTURES:[
    {id:1, sub:"Greetings", from:"Naresh nambi", email:"nnambi@gmail.com"},
    {id:2, sub:"Good Morning", from:"Rajinish myla", email:"rmyla@gmail.com"},
    {id:3, sub:"Happy new year", from:"Ram MVS", email:"RMVS@gmail.com"},
    {id:4, sub:"Happy x-mass", from:"Sreedhar S", email:"SS@gmail.com"},
    {id:5, sub:"Happy Pongal", from:"Naresh alla", email:"nalla@gmail.com"}
  ]
});

//sent data
App.SentEmailAdapter = DS.FixtureAdapter.extend({});

App.SentEmail = DS.Model.extend({
  sub: DS.attr( 'string' ),
  to: DS.attr( 'string' ),
  cc: DS.attr( 'string' ),
  body: DS.attr( 'string' )

});

App.SentEmail.reopenClass({
  FIXTURES:[
    {id:1, sub:"How are you", to:"nnambi@gmail.com", cc:"nnambi@yahoo.com", body:"BODY content"},
    {id:2, sub:"Lets meet", to:"mrajinish@gmail.com", cc:"mrajinish@yahoo.com", body:"BODY content2"},
  ]
});

//spam data
App.SpamEmailAdapter = DS.FixtureAdapter.extend({});

App.SpamEmail = DS.Model.extend({
  sub: DS.attr( 'string' ),
  from: DS.attr( 'string' ),
  email: DS.attr( 'string' )
});

App.SpamEmail.reopenClass({
  FIXTURES:[
    {id:1, sub:"75% offer in flipkart", from:"Flipkart", email:"offers@flipkart.com"},
    {id:2, sub:"10% cash back", from:"Amazon", email:"sales@amazon.com"},
  ]
});

//spam data
App.ComposeEmail = DS.FixtureAdapter.extend({});

App.ComposeEmail = DS.Model.extend({
  sub: DS.attr( 'string' ),
  to: DS.attr( 'string' ),
  cc: DS.attr( 'string' ),
  body: DS.attr('string')
});
