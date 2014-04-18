/**
 * Dydra.com Software Development Kit (SDK) for JavaScript.
 *
 * This is free and unencumbered software released into the public domain.
 *
 * @see http://docs.dydra.com/sdk/javascript
 */

var Dydra = (function($) {
  var Session = function(credentials) {
    this.query = function() {
      // TODO
    };
  };

  return {
    Session: Session
  };
})(jQuery);

if (typeof exports !== 'undefined') {
  module.exports = Dydra;
}
else {
  window.Dydra = Dydra;
}
