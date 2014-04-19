Dydra.com Software Development Kit (SDK) for JavaScript
=======================================================

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
jQuery_.

To contribute to this library, the development dependencies are:

* NPM_ for package and dependency management
* Grunt_ for task execution (static analysis and the test harness)
* QUnit_ for unit testing

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
.. _JavaScript: http://en.wikipedia.org/wiki/JavaScript
.. _jQuery:     http://jquery.com/
.. _NPM:        https://www.npmjs.org/
.. _QUnit:      http://qunitjs.com/
.. _RDF:        http://en.wikipedia.org/wiki/Resource_Description_Framework
.. _SPARQL:     http://en.wikipedia.org/wiki/SPARQL
