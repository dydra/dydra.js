Dydra.com Software Development Kit (SDK) for JavaScript
=======================================================

.. image:: https://travis-ci.org/dydra/dydra.js.png?branch=master
   :target: https://travis-ci.org/dydra/dydra.js
   :align: right
   :alt: Travis CI build status

This is the official JavaScript software development kit (SDK) for
Dydra.com_, the cloud-hosted RDF_ & SPARQL_ database service.

Examples
--------

::

   var mySession = new Dydra.Session({token: "MY_SECRET_TOKEN"});

   var myRepository = mySession.open("my_account/my_repository");

   myRepository.query("SELECT * WHERE {?s ?p ?o} LIMIT 10", {
     success: function(data) {
       console.log("SPARQL query succeeded and returned:");
       console.log(data);
     },
     failure: function(xhr) {
       console.log("SPARQL query failed.");
       console.log(xhr);
     }
   });

Dependencies
------------

To use this library from your own code, the only runtime dependency is
jQuery_ (>= 1.9).

To contribute to this library, the development dependencies are:

* NPM_ for package and dependency management
* Grunt_ (>= 0.4) for task execution (static analysis and the test harness)
* Jasmine_ (>= 2.0) for unit testing

Note: the instructions in this README implicitly assume a Unix system (Mac
OS X, Linux, or BSD) at present. Patches improving Windows support are most
welcome.

Authors
-------

* `Arto Bendiken <https://github.com/bendiken>`_ - <http://dydra.com/bendiken>

Contributing
------------

* Do your best to adhere to the existing coding conventions and idioms.
* Don't use hard tabs, and don't leave trailing whitespace on any line.
* Don't touch the ``VERSION`` or ``AUTHORS`` files. If you need to change
  them, do so on your private branch only.
* Do feel free to add yourself to the ``CREDITS`` file and the corresponding
  list in the ``README``. Alphabetical order applies.

License
-------

This is free and unencumbered public domain software. For more information,
see http://unlicense.org/ or the accompanying ``UNLICENSE`` file.

.. _Dydra.com:  http://dydra.com/
.. _Grunt:      http://gruntjs.com/
.. _jQuery:     http://jquery.com/
.. _Jasmine:    http://jasmine.github.io/2.0/introduction.html
.. _JavaScript: http://en.wikipedia.org/wiki/JavaScript
.. _NPM:        https://www.npmjs.org/
.. _RDF:        http://en.wikipedia.org/wiki/Resource_Description_Framework
.. _SPARQL:     http://en.wikipedia.org/wiki/SPARQL
