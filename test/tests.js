/**
 * Created by Mohammed Suboor on 24-01-2017.
 */

var should = require('should');
var assert = require('assert');
var threeSeconds = require('seconds');

describe ('Test Framework', function () {
    it ('should have mocha installed and running',function () {
        assert.equal(true,true);
    })
    it ('should have the should library installed and running the test fluently',function () {
        true.should.eql (true);
    })
})