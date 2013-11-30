var portunhol = require('./portunhol.js').portunholate;
var lazy = require("lazy");
var fs  = require("fs");

new lazy(process.stdin).lines.forEach(function(line) {
  console.log(portunhol(line.toString()));
});

process.stdin.resume();
