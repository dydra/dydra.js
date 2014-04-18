/**
 * Dydra.com Software Development Kit (SDK) for JavaScript.
 *
 * This is free and unencumbered software released into the public domain.
 *
 * @see http://docs.dydra.com/sdk/javascript
 */

var SPARQL = (function($) {
  var Client = function(endpointURL) {
    this.query = function() {
      // TODO
    };
    this.update = function() {
      // TODO
    };
  };

  return {
    Client: Client
  };
})(jQuery);

if (typeof exports !== 'undefined') {
  module.exports = SPARQL;
}
else {
  window.SPARQL = SPARQL;
}
