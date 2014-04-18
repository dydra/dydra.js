test("default query form", function() {
  equal((new SPARQL.Query).form, "SELECT", "expected default query form to be SELECT");
});

test("ASK construction", function() {
  equal((new SPARQL.Query).ask().form, "ASK", "expected query form to be ASK");
});

test("CONSTRUCT construction", function() {
  equal((new SPARQL.Query).construct().form, "CONSTRUCT", "expected query form to be CONSTRUCT");
});

test("DESCRIBE construction", function() {
  equal((new SPARQL.Query).describe().form, "DESCRIBE", "expected query form to be DESCRIBE");
});

test("SELECT construction", function() {
  equal((new SPARQL.Query).select().form, "SELECT", "expected query form to be SELECT");
});
