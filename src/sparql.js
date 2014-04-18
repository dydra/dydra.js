/**
 * Dydra.com Software Development Kit (SDK) for JavaScript.
 *
 * This is free and unencumbered software released into the public domain.
 *
 * @see http://docs.dydra.com/sdk/javascript
 */

var SPARQL = (function($) {
  var Client = function(endpointURL) {
    this.query = function(queryText, options) {
      $.ajax(endpointURL, {
        type: 'POST',
        contentType: 'application/sparql-query',
        data: queryText,
        dataType: 'json',
        accepts: {json: 'application/sparql-results+json'},
        beforeSend: function(xhr) {
          xhr.setRequestHeader('Accept', 'application/sparql-results+json');
        },
        username: options.username,
        password: options.password,
        success: options.success,
        error: options.failure
      });
    };

    this.update = function(queryText, options) {
      // TODO
    };
  };

  var Query = function(options) {
    if (options === undefined) options = {};
    this.form = options.form || "SELECT";
    this.variables = [];

    this.ask = function(options) {
      this.form = "ASK";
      return this;
    };

    this.select = function(variables, options) {
      this.form = "SELECT";
      this.variables = variables;
      return this;
    };

    this.describe = function(variables, options) {
      this.form = "DESCRIBE";
      this.variables = variables;
      return this;
    };

    this.construct = function(patterns, options) {
      this.form = "CONSTRUCT";
      this.patterns = patterns;
      return this;
    };
  };

  return {
    Client: Client,
    Query: Query
  };
})(jQuery);

if (typeof exports !== 'undefined') {
  module.exports = SPARQL;
}
else {
  window.SPARQL = SPARQL;
}
