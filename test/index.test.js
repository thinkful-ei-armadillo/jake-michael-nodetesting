'use strict';

const sort = require('../index');
const mocha = require('mocha');
const expect = require('chai').expect;


const arr1 = [ 4, 2, 6, 8, 9, 1 ];
const arr2 = [ 'A', 'D', 'C', 'B' ];
const arr3 = [ 'a', 'b', 'c', 'E', 'T' ];


describe('Sort function', () => {
  it('should be ordered lowest to highest', () => {
    expect(sort(arr1)).to.eql([1, 2, 4, 6, 8, 9 ]);
  });

  it('should order array from first to last letter', () => {
    expect(sort(arr2)).to.eql([ 'A', 'B', 'C', 'D' ]);
  });

  it('should sort letter values from lowest to highest', () => {
    expect(sort(arr3)).to.eql(['E', 'T', 'a', 'b', 'c']);
  });

});


