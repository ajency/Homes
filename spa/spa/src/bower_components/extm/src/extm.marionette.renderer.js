// Generated by CoffeeScript 1.7.1
Marionette.Renderer.render = function(template, data) {
  if (data == null) {
    data = {};
  }
  if (!template) {
    template = '';
  }
  return Mustache.to_html(template, data);
};
