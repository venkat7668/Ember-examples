Ember.TEMPLATES["application"] = Ember.Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = '';
  data.buffer.push("<div id=\"mailApp\">\r\n  <!-- Header -->\r\n  ");
  data.buffer.push(escapeExpression(((helpers.outlet || (depth0 && depth0.outlet) || helperMissing).call(depth0, "header", {"name":"outlet","hash":{},"hashTypes":{},"hashContexts":{},"types":["STRING"],"contexts":[depth0],"data":data}))));
  data.buffer.push("\r\n  <!-- body -->\r\n  <div id=\"body\">\r\n    <!-- Side Menu-->\r\n    ");
  data.buffer.push(escapeExpression(((helpers.outlet || (depth0 && depth0.outlet) || helperMissing).call(depth0, "sideMenu", {"name":"outlet","hash":{},"hashTypes":{},"hashContexts":{},"types":["STRING"],"contexts":[depth0],"data":data}))));
  data.buffer.push("\r\n    <!-- content -->\r\n    ");
  data.buffer.push(escapeExpression(((helpers.outlet || (depth0 && depth0.outlet) || helperMissing).call(depth0, "content", {"name":"outlet","hash":{},"hashTypes":{},"hashContexts":{},"types":["STRING"],"contexts":[depth0],"data":data}))));
  data.buffer.push("\r\n    <div class=\"clr\"></div>\r\n  <div>\r\n  <!-- footer -->\r\n  ");
  data.buffer.push(escapeExpression(((helpers.outlet || (depth0 && depth0.outlet) || helperMissing).call(depth0, "footer", {"name":"outlet","hash":{},"hashTypes":{},"hashContexts":{},"types":["STRING"],"contexts":[depth0],"data":data}))));
  data.buffer.push("\r\n</div>\r\n");
  return buffer;
},"useData":true});

Ember.TEMPLATES["compose-content"] = Ember.Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = '';
  data.buffer.push("<div id=\"content\" class=\"compose\">\r\n  <div><label>Subject : </label> ");
  data.buffer.push(escapeExpression(((helpers.input || (depth0 && depth0.input) || helperMissing).call(depth0, {"name":"input","hash":{
    'value': ("email.sub"),
    'type': ("text")
  },"hashTypes":{'value': "ID",'type': "STRING"},"hashContexts":{'value': depth0,'type': depth0},"types":[],"contexts":[],"data":data}))));
  data.buffer.push("</div>\r\n  <div> <label>TO :</label> ");
  data.buffer.push(escapeExpression(((helpers.input || (depth0 && depth0.input) || helperMissing).call(depth0, {"name":"input","hash":{
    'value': ("email.to"),
    'type': ("text")
  },"hashTypes":{'value': "ID",'type': "STRING"},"hashContexts":{'value': depth0,'type': depth0},"types":[],"contexts":[],"data":data}))));
  data.buffer.push("</div>\r\n  <div><label>CC :</label> ");
  data.buffer.push(escapeExpression(((helpers.input || (depth0 && depth0.input) || helperMissing).call(depth0, {"name":"input","hash":{
    'value': ("email.cc"),
    'type': ("text")
  },"hashTypes":{'value': "ID",'type': "STRING"},"hashContexts":{'value': depth0,'type': depth0},"types":[],"contexts":[],"data":data}))));
  data.buffer.push("</div>\r\n  <div><label>Body :</label> ");
  data.buffer.push(escapeExpression(((helpers.textarea || (depth0 && depth0.textarea) || helperMissing).call(depth0, {"name":"textarea","hash":{
    'value': ("email.body")
  },"hashTypes":{'value': "ID"},"hashContexts":{'value': depth0},"types":[],"contexts":[],"data":data}))));
  data.buffer.push("</div>\r\n  <div><label> </label><button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "sendClickHandler", {"name":"action","hash":{},"hashTypes":{},"hashContexts":{},"types":["STRING"],"contexts":[depth0],"data":data})));
  data.buffer.push(" class=\"sendBtn\">Send</button> </div>\r\n</div>\r\n");
  return buffer;
},"useData":true});

Ember.TEMPLATES["fourohfour"] = Ember.Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  data.buffer.push("<div> Route not found :(</div>\r\n");
  },"useData":true});

Ember.TEMPLATES["inbox-content"] = Ember.Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, buffer = '';
  data.buffer.push("     <li>Sub: ");
  stack1 = helpers._triageMustache.call(depth0, "email.sub", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push(" | From: ");
  stack1 = helpers._triageMustache.call(depth0, "email.from", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push(" | Email: ");
  stack1 = helpers._triageMustache.call(depth0, "email.email", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("</li>\r\n");
  return buffer;
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = '';
  data.buffer.push("<div id=\"content\">\r\n  <ul>\r\n");
  stack1 = helpers.each.call(depth0, "email", "in", "model", {"name":"each","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(1, data),"inverse":this.noop,"types":["ID","ID","ID"],"contexts":[depth0,depth0,depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("  </ul>\r\n</div>\r\n");
  return buffer;
},"useData":true});

Ember.TEMPLATES["index-content"] = Ember.Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = '';
  data.buffer.push("<div id=\"content\">\r\n  ");
  stack1 = helpers._triageMustache.call(depth0, "message", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("\r\n</div>\r\n");
  return buffer;
},"useData":true});

Ember.TEMPLATES["index-footer"] = Ember.Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  data.buffer.push("  <div id=\"footer\">Footer Links</div>\r\n");
  },"useData":true});

Ember.TEMPLATES["index-header"] = Ember.Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  data.buffer.push("<div id=\"header\">\r\n  <img src=\"images/callidus.jpg\"/>\r\n</div>\r\n");
  },"useData":true});

Ember.TEMPLATES["index-sidemenu"] = Ember.Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = '';
  data.buffer.push("      <li>");
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "item.link", {"name":"link-to","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(2, data),"inverse":this.noop,"types":["ID"],"contexts":[depth0],"data":data}));
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("</li>\r\n");
  return buffer;
},"2":function(depth0,helpers,partials,data) {
  var stack1;
  stack1 = helpers._triageMustache.call(depth0, "item.title", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = '';
  data.buffer.push("<div id=\"sideMenu\">\r\n  <ul>\r\n");
  stack1 = helpers.each.call(depth0, "item", "in", "menuItems", {"name":"each","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(1, data),"inverse":this.noop,"types":["ID","ID","ID"],"contexts":[depth0,depth0,depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("  </ul>\r\n</div>\r\n");
  return buffer;
},"useData":true});

Ember.TEMPLATES["sent-content"] = Ember.Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = '';
  data.buffer.push("     ");
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "sentmail", "email.id", {"name":"link-to","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(2, data),"inverse":this.noop,"types":["STRING","ID"],"contexts":[depth0,depth0],"data":data}));
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("\r\n");
  return buffer;
},"2":function(depth0,helpers,partials,data) {
  var stack1, buffer = '';
  data.buffer.push("Sub: ");
  stack1 = helpers._triageMustache.call(depth0, "email.sub", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push(" | TO: ");
  stack1 = helpers._triageMustache.call(depth0, "email.to", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push(" | CC: ");
  stack1 = helpers._triageMustache.call(depth0, "email.cc", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push(" | BODY: ");
  stack1 = helpers._triageMustache.call(depth0, "email.body", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  return buffer;
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = '';
  data.buffer.push("<div id=\"content\">\r\n  <ul>\r\n");
  stack1 = helpers.each.call(depth0, "email", "in", "model", {"name":"each","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(1, data),"inverse":this.noop,"types":["ID","ID","ID"],"contexts":[depth0,depth0,depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("  </ul>\r\n</div>\r\n");
  return buffer;
},"useData":true});

Ember.TEMPLATES["sentmail/view"] = Ember.Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = '';
  data.buffer.push("<div> SUB : ");
  stack1 = helpers._triageMustache.call(depth0, "model.sub", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push(" </div>\r\n<div> TO : ");
  stack1 = helpers._triageMustache.call(depth0, "model.to", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push(" </div>\r\n<div> CC : ");
  stack1 = helpers._triageMustache.call(depth0, "model.cc", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push(" </div>\r\n<div> BODY : ");
  stack1 = helpers._triageMustache.call(depth0, "model.body", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push(" </div>\r\n");
  return buffer;
},"useData":true});