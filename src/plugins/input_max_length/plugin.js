Selectize.define('inputMaxlength', function(options) {
  var self = this;
  this.setup = (function() {
    var original = self.setup;
    return function() {
      original.apply(this, arguments);
      this.$control_input.attr('maxlength', this.settings.inputMaxlength);
    };
  })();
});
