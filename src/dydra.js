/**
 * Dydra.com Software Development Kit (SDK) for JavaScript.
 *
 * This is free and unencumbered software released into the public domain.
 *
 * @see http://docs.dydra.com/sdk/javascript
 */

var Dydra = (function($) {
  /**
   * A Dydra client session.
   */
  var Session = function(options) {
    if (options === undefined) options = {};
    var baseURL = options.baseURL || "http://dydra.com/";

    var getEndpointURL = function(repositoryName, options) {
      var url = baseURL + repositoryName + "/sparql";
      if (options.token) {
        url += '?auth_token=' + options.token;
      }
      return url;
    };

    this.open = function(repositoryName, options) {
      return new SPARQL.Client(getEndpointURL(repositoryName, options));
    };

    /**
     * Executes a SPARQL query on a repository.
     *
     * @param {String} repositoryName
     * @param {String} queryText
     * @param {Object} options
     */
    this.query = function(repositoryName, queryText, options) {
      this.open(repositoryName, options).query(queryText, options);
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
