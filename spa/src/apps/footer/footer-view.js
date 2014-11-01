// Generated by CoffeeScript 1.7.1
var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

define(['marionette'], function(Mariontte) {
  var FooterView;
  return FooterView = (function(_super) {
    __extends(FooterView, _super);

    function FooterView() {
      return FooterView.__super__.constructor.apply(this, arguments);
    }

    FooterView.prototype.template = '<div class="text-center"> <div class="link small termsLink" >Terms &amp; Conditions</div> | <div class="salesLink text-center small">Sales Login</div> </div>';

    FooterView.prototype.events = {
      'click .link': function(e) {
        var win;
        return win = window.open('http://manaslake.com/terms-conditions/', '_blank');
      },
      'click .salesLink': function(e) {
        var win;
        return win = window.open('http://homes.skyi.com/wp-admin/', '_self');
      }
    };

    return FooterView;

  })(Marionette.ItemView);
});
