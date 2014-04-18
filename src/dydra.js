/**
 * Dydra.com Software Development Kit (SDK) for JavaScript.
 *
 * This is free and unencumbered software released into the public domain.
 *
 * @see http://docs.dydra.com/sdk/javascript
 */

var Dydra = (function($) {
  var Session = function(settings) {
    if (settings === undefined) settings = {};
    var baseURL = settings.baseURL || "http://dydra.com/";

    this.query = function(repositoryName, queryText, settings) {
      var client = new SPARQL.Client(baseURL + repositoryName + "/sparql");
      client.query(queryText, settings);
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
