/**
 * Created by Mohammed Suboor on 30-01-2017.
 */
var fs = require('fs');
var pug = require('pug');

var compiledFunction = pug.compileFile('template.pug');

console.log(compiledFunction({
    name: 'Pug'
}));
// Compile template.pug, and render a set of data
console.log(pug.renderFile('template.pug', {
    name: 'Timothy'
}));

// Compile the template to a function string
var jsFunctionString = pug.compileFileClient('../../views/pugFileTest.pug', {name: "fancyTemplateFun"});

// Maybe you want to compile all of your templates to a templates.js file and serve it to the client
fs.writeFileSync("templatesTest.js", jsFunctionString);