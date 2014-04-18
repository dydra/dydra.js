/**
 * Dydra.com Software Development Kit (SDK) for JavaScript.
 *
 * This is free and unencumbered software released into the public domain.
 *
 * @see http://docs.dydra.com/sdk/javascript
 */

var Dydra = (function($) {
  /**
   * Constructs a Dydra client session.
   *
   * @param {Object} config
   */
  var Session = function(config) {
    if (config === undefined) config = {};

    var baseURL = "http://" + (config.host || "dydra.com") + "/";

    var getEndpointURL = function(repositoryName, options) {
      var url = baseURL + repositoryName + "/sparql";
      var token = options.token || config.token;
      if (token) {
        url += '?auth_token=' + token;
      }
      return url;
    };

    /**
     * Returns a SPARQL client for a repository.
     */
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
