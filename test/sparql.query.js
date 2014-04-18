test("SPARQL.Query construction", function() {
  equal((new SPARQL.Query).form, "SELECT", "expected default query form to be SELECT");
});

test("SPARQL.Query#ask", function() {
  equal((new SPARQL.Query).ask().form, "ASK", "expected query form to be ASK");
});

test("SPARQL.Query#construct", function() {
  equal((new SPARQL.Query).construct().form, "CONSTRUCT", "expected query form to be CONSTRUCT");
});

test("SPARQL.Query#describe", function() {
  equal((new SPARQL.Query).describe().form, "DESCRIBE", "expected query form to be DESCRIBE");
});

test("SPARQL.Query#select", function() {
  equal((new SPARQL.Query).select().form, "SELECT", "expected query form to be SELECT");
});

test("SPARQL.Query#from", function() {
  equal((new SPARQL.Query).from("http://example.org/").from, "http://example.org/");
});
