/**
 * Created by Mohammed Suboor on 26-01-2017.
 */
// TDD style
var assert = require('assert');
var chai = require('chai').assert;
//BDD Style
var expect = require('expect.js');

var expected, current;

before(function () {
    expected = ['a', 'b', 'c'];
});

describe('String#split', function () {
    beforeEach(function () {
        current = 'a,b,c'.split(',');
    });
    it('should return an array', function () {

        assert(Array.isArray(current));
    });

    it('should return the same array', function () {
        assert.equal(expected.length, current.length, 'arrays have equal length');
        for (var i = 0; i < expected.length; i++) {
            assert.equal(expected[i], current[i], i + 'element is equal');
        }
    });

    it('test should return an array using BDD style', function () {
        expect(Array.isArray(current)).to.be.true;
    });

    it('test should return the same array using BDD style', function () {
        expect(expected.length).to.equal(current.length);
        for (var i = 0; i < expected.length; i++) {
            expect(expected[i]).equal(current[i]);
        }
    });
});


