#!/usr/bin/env node

var portunhol = require('./portunhol.js').portunholate;
var lazy = require("lazy");

new lazy(process.stdin).lines.forEach(function(line) {
  console.log(portunhol(line.toString()));
});

process.stdin.resume();
