/* global SPARQL */

describe("SPARQL.Query", function() {
  it("default query form is SELECT", function() {
    expect((new SPARQL.Query()).form).toEqual("SELECT");
  });
});

describe("SPARQL.Query#ask()", function() {
  it("query form is ASK", function() {
    expect((new SPARQL.Query()).ask().form).toEqual("ASK");
  });
});

describe("SPARQL.Query#construct()", function() {
  it("query form is CONSTRUCT", function() {
    expect((new SPARQL.Query()).construct().form).toEqual("CONSTRUCT");
  });
});

describe("SPARQL.Query#describe()", function() {
  it("query form is DESCRIBE", function() {
    expect((new SPARQL.Query()).describe().form).toEqual("DESCRIBE");
  });
});

describe("SPARQL.Query#select()", function() {
  it("query form is SELECT", function() {
    expect((new SPARQL.Query()).select().form).toEqual("SELECT");
  });
});

describe("SPARQL.Query#from(uri)", function() {
  it("sets the #from property", function() {
    expect((new SPARQL.Query()).from("http://example.org/").from).toEqual("http://example.org/");
  });
});

describe("SPARQL.Query#distinct()", function() {
  it("sets the #modifier property", function() {
    expect((new SPARQL.Query()).modifier).toBe(undefined);
    expect((new SPARQL.Query()).distinct().modifier).toEqual("DISTINCT");
  });
});

describe("SPARQL.Query#reduced()", function() {
  it("sets the #modifier property", function() {
    expect((new SPARQL.Query()).modifier).toBe(undefined);
    expect((new SPARQL.Query()).reduced().modifier).toEqual("REDUCED");
  });
});
