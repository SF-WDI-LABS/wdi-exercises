const chai = require('chai'),
    assert = chai.assert,
    expect = chai.expect;

const fn = require('./exercises.js');

describe('double', function() {
    it('should double each number with an array and return a new array', function() {
        assert.deepEqual(fn.double([1,2,3]), [ 2, 4, 6]);
    })
});

describe('repeat', function() {
    it('should return an array of the phrase repeated N times', function() {
        assert.deepEqual(fn.repeat('hi', 3), ['hi', 'hi', 'hi']);
    })
});

describe('findPosition', function() {
    it('should return the index of a given string within a given array', function() {
        assert.deepEqual(fn.findPosition('car', ['bike', 'car', 'skate']), 1)
    })
});


describe('zip', function() {
    it('should return an object mapping elements from one array to values in the other', function() {
        let groceries = ['milk', 'bread', 'eggs', 'apples', 'garlic'];
        let prices = ['4.50', '1.25', '7.00', '2.39', '0.39'];
        let actual = fn.zip(groceries, prices);
        let expected = {
            milk: '4.50', bread: '1.25', eggs: '7.00', apples: '2.39', garlic: '0.39'
        };
        assert.deepEqual(actual, expected)
    })
});


