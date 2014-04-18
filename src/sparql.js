/**
 * Dydra.com Software Development Kit (SDK) for JavaScript.
 *
 * This is free and unencumbered software released into the public domain.
 *
 * @see http://docs.dydra.com/sdk/javascript
 */

var SPARQL = (function($) {
  var Client = function(endpointURL) {
    this.query = function(queryText, settings) {
      $.ajax(endpointURL, {
        type: 'POST',
        contentType: 'application/sparql-query',
        data: queryText,
        dataType: 'json',
        accepts: {json: 'application/sparql-results+json'},
        beforeSend: function(xhr) {
          xhr.setRequestHeader('Accept', 'application/sparql-results+json');
        },
        username: settings.username,
        password: settings.password,
        success: settings.success,
        error: settings.failure
      });
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
