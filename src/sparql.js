/**
 * Dydra.com Software Development Kit (SDK) for JavaScript.
 *
 * This is free and unencumbered software released into the public domain.
 *
 * @see http://docs.dydra.com/sdk/javascript
 */

var SPARQL = (function($) {
  /**
   * Constructs a SPARQL 1.1 Query/Update client for jQuery.
   *
   * @param {Object} config
   *
   * @see http://www.w3.org/TR/sparql11-protocol/
   * @see http://www.w3.org/TR/sparql11-results-json/
   */
  var Client = function(endpointURL, config) {
    if (config === undefined) {
      config = {};
    }

    /**
     * @param {Object} options
     */
    this.ajax = function(options) {
      $.ajax(endpointURL, $.extend({}, {
        type: 'POST',
        dataType: 'json',
        accepts: {json: 'application/sparql-results+json'},
        beforeSend: function(xhr) {
          xhr.setRequestHeader('Accept', 'application/sparql-results+json');
        }
      }, config, options));
    };

    /**
     * Executes a SPARQL Query request.
     *
     * @param {String} queryText
     * @param {Object} options
     */
    this.query = function(queryText, options) {
      this.ajax($.extend({}, options, {
        contentType: 'application/sparql-query',
        data: queryText,
        error: options.failure || options.error
      }));
    };

    /**
     * Executes a SPARQL Update request.
     *
     * @param {String} queryText
     * @param {Object} options
     */
    this.update = function(queryText, options) {
      this.ajax($.extend({}, options, {
        contentType: 'application/sparql-update',
        data: queryText,
        error: options.failure || options.error
      }));
    };
  };

  /**
   * Constructs a SPARQL Graph Store Protocol client for jQuery.
   *
   * @param {Object} config
   *
   * @see http://www.w3.org/TR/sparql11-http-rdf-update/
   */
  var Store = function(endpointURL, config) {
    if (config === undefined) {
      config = {};
    }

    /**
     * @param {String} graphURI
     */
    this.url = function(graphURI) {
      var url = endpointURL;
      graphURI = graphURI || null;
      url += (url.indexOf('?') == -1) ? '?' : '&';
      url += (graphURI === null) ? 'default' : 'graph=' + encodeURIComponent(graphURI);
      return url;
    };

    /**
     * @param {Object} options
     */
    this.ajax = function(url, options) {
      $.ajax(url, $.extend({}, {
        dataType: 'json',
        accepts: {json: 'application/json'},
        beforeSend: function(xhr) {
          xhr.setRequestHeader('Accept', 'application/json');
        },
        error: function(jqXHR) {
          var handler = options.failure || options.error;
          if (jqXHR.status === 201) {
            handler = options.success ? options.success.bind(this, {}) : function() {};
          }
          return handler.apply(this, arguments);
        }
      }, config, options));
    };

    /**
     * @param {String} graphURI
     * @param {Object} options
     */
    this.fetch = function(graphURI, options) {
      this.ajax(this.url(graphURI), $.extend({}, options, {
        type: 'GET'
      }));
    };

    /**
     * @param {String} graphURI
     * @param {Object} data in RDF/JSON format
     * @param {Object} options
     */
    this.insert = function(graphURI, data, options) {
      this.ajax(this.url(graphURI), $.extend({}, options, {
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(data)
      }));
    };
  };

  /**
   * Constructs a SPARQL query builder.
   *
   * @param {Object} config
   *
   * @see http://www.w3.org/TR/sparql11-query/
   */
  var Query = function(config) {
    if (config === undefined) {
      config = {};
    }

    this.form = config.form || "SELECT";
    this.variables = [];

    /**
     * Creates a boolean `ASK` query.
     *
     * @param {Object} options
     * @return `this`
     * @see http://www.w3.org/TR/sparql11-query/#ask
     */
    this.ask = function(options) {
      this.form = "ASK";
      return this;
    };

    /**
     * Creates a tuple `SELECT` query.
     *
     * @param {Array} variables
     * @param {Object} options
     * @return `this`
     * @see http://www.w3.org/TR/sparql11-query/#select
     */
    this.select = function(variables, options) {
      this.form = "SELECT";
      this.variables = variables;
      return this;
    };

    /**
     * Creates a graph `DESCRIBE` query.
     *
     * @param {Array} variables
     * @param {Object} options
     * @return `this`
     * @see http://www.w3.org/TR/sparql11-query/#describe
     */
    this.describe = function(variables, options) {
      this.form = "DESCRIBE";
      this.variables = variables;
      return this;
    };

    /**
     * Creates a graph `CONSTRUCT` query.
     *
     * @param {Array} patterns
     * @param {Object} options
     * @return `this`
     * @see http://www.w3.org/TR/sparql11-query/#construct
     */
    this.construct = function(patterns, options) {
      this.form = "CONSTRUCT";
      this.patterns = patterns;
      return this;
    };

    /**
     * @param {String} uri
     * @return `this`
     * @see http://www.w3.org/TR/sparql11-query/#specifyingDataset
     */
    this.from = function(uri) {
      this.from = uri;
      return this;
    };

    /**
     * @return `this`
     * @see http://www.w3.org/TR/sparql11-query/#modDuplicates
     */
    this.distinct = function() {
      this.modifier = "DISTINCT";
      return this;
    };

    /**
     * @return `this`
     * @see http://www.w3.org/TR/sparql11-query/#modDuplicates
     */
    this.reduced = function() {
      this.modifier = "REDUCED";
      return this;
    };
  };

  return {
    Client: Client,
    Store: Store,
    Query: Query
  };
})(jQuery);

if (typeof exports !== 'undefined') {
  module.exports = SPARQL;
}
else {
  window.SPARQL = SPARQL;
}
