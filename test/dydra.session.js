/* global Dydra */

asyncTest("README example", function() {
  var mySession = new Dydra.Session(/*{token: "MY_SECRET_TOKEN"}*/);

  var myRepository = mySession.open("jhacker/foaf");

  myRepository.query("SELECT * WHERE {?s ?p ?o} LIMIT 10", {
    context: this,
    success: function(data) {
      console.log("SPARQL query succeeded and returned:");
      console.log(data);
      ok(true);
      start();
    },
    failure: function(xhr) {
      console.log("SPARQL query failed.");
      console.log(xhr);
      ok(false);
      start();
    }
  });
});
