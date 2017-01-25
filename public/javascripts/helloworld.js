/**
 * Created by Mohammed Suboor on 24-01-2017.
 */
console.log("My hello world");

var http =  require('http');

setTimeout(function(){console.log('It is delay of 2 seconds');},2000)

console.log("execution before 2 seconds");

(function () {
    setTimeout(
        function(){
            console.log('It is delay of sheduled seconds');
        },4000)
})();

var a = {1: true, 2: false};
console.log(a);
console.log('This is a number: %d, and this is a string: %s, and this is an\
object outputted as JSON: %j', 42, 'Hello', a);
console.warn("Warning!");
//console.trace("it is trace");

var buf = new Buffer('Hello World!');
console.log(buf.toString());
var buf1 = new Buffer('8b76fde713ce', 'utf8');
console.log(buf1.toString());

var buffer = new Buffer('this is the string in my buffer');
var slice = buffer.slice(10, 20);
console.log(buffer.toString());
console.log(slice.toString());

var bufferc = new Buffer('this is the string in my buffer');
var slicec = new Buffer(10);
var targetStart = 0,
 sourceStart = 10,
sourceEnd = 20;
bufferc.copy(slicec, targetStart, sourceStart, sourceEnd);
console.log(slicec.toString());
console.log(bufferc.toString());