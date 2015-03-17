var test   = require('tape');
var server = require("../example/server.js");

test("GET / confirm header is present", function(t) {
  var options = { method : "GET", url : "/" };
  server.inject(options, function(res) {
    var header = 'GNU Terry Pratchet';
    t.equal(res.statusCode, 200, "New timer FAILS JTW Auth: ");
    t.equal(res.headers['x-clacks-overhead'], header, 'Header is correct: '+header)
    server.stop();
    t.end();
  });
});
