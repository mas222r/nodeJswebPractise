/**
 * Created by Mohammed Suboor on 30-01-2017.
 */
var fs = require('fs');
var pug = require('jade');

var compiledFunction = pug.compileFile('../includes/indexTest.jade');
console.log(compiledFunction());