// Generated by CoffeeScript 1.7.1
var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

define(['marionette'], function(Marionette) {
  var ScreenTwoView;
  return ScreenTwoView = (function(_super) {
    __extends(ScreenTwoView, _super);

    function ScreenTwoView() {
      return ScreenTwoView.__super__.constructor.apply(this, arguments);
    }

    ScreenTwoView.prototype.template = '<div class="costshett"> <span>Flat name : </span><span class="flat_name"></span> <span>Building name : </span><span class="building_name"></span> <span>Amount recievable as on Date : </span><span class="rec"></span> <span>Final cost : </span><span class="final_cost"></span> <input type="hidden" name="currency" id="currency" class="demo" data-a-sign="Rs. " data-m-dec=""  data-d-group="2" ></div> <div class="row"> <div class="col-md-6 col-md-offset-3"> <button id="accept" class="next-one btn btn-primary btn-block"> Accept Terms and Conditions </button> </div> </div>';

    ScreenTwoView.prototype.events = {
      'click #accept': function(e) {
        msgbus.showApp('booking:screen:three').insideRegion(App.layout.screenThreeRegion).withOptions();
        $('.accordion-group.two').removeClass('open');
        return $('.accordion-group.three').addClass('open');
      }
    };

    ScreenTwoView.prototype.onShow = function() {
      $('.flat_name').text(unit_name);
      $('.building_name').text(building);
      $('#currency').autoNumeric('init');
      $('#currency').autoNumeric('set', recAmount);
      $('.rec').text($('#currency').val());
      $('#currency').autoNumeric('init');
      $('#currency').autoNumeric('set', finalcost);
      return $('.final_cost').text($('#currency').val());
    };

    return ScreenTwoView;

  })(Marionette.ItemView);
});
