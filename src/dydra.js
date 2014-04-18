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

    this.baseURL = "http://" + (config.host || "dydra.com") + "/";

    /**
     * Returns a SPARQL client for a repository.
     */
    this.open = function(repositoryName, options) {
      return new Repository(this, repositoryName,
        $.extend({}, config, options));
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

  /**
   * Constructs a Dydra repository reference.
   *
   * @param [Session} session
   * @param {String} name
   * @param {Object} config
   */
  var Repository = function(session, name, config) {
    if (config === undefined) config = {};

    var getEndpointURL = function() {
      var url = session.baseURL + name + "/sparql";
      if (config.token) {
        url += '?auth_token=' + config.token;
      }
      return url;
    };

    this.session = session;
    this.name = name;
    this.sparql = new SPARQL.Client(getEndpointURL());

    this.query = function(queryText, options) {
      this.sparql.query(queryText, options);
    };

    this.update = function(queryText, options) {
      this.sparql.update(queryText, options);
    };
  };

  return {
    Session: Session,
    Repository: Repository
  };
})(jQuery);

if (typeof exports !== 'undefined') {
  module.exports = Dydra;
}
else {
  window.Dydra = Dydra;
}
