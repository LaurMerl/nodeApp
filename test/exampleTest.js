var assert = require('assert');
var chai = require("chai");
var expect = chai.expect;
var should = chai.should();

describe('describe test function', function () {

  beforeEach(function () {

  });

  /*
  describe('chai', function () {
    it('it chai', function () {
        expect(1 + 1).to.equal(2);
    });
  });
  */

  describe('function 1', function () {
    it('it 1', function () {
      assert(false, 'message 1');
    });
  });

  describe('function 2', function () {
    it('it 2', function () {
      assert.ok(true, 'message 2');
    });
  });

  describe('function 3', function () {
    it('it 3', function () {
      var actual = 1;
      var expected = 1;

      const obj1 = {
        a: {
          b: 1
        }
      };
      const obj2 = {
        a: {
          b: 2
        }
      };
      const obj3 = {
        a: {
          b: 1
        }
      };

      assert.deepEqual(actual, expected, 'message 3');
      //assert.notDeepEqual(obj1, obj2, 'message 3');
    });
  });

  describe('function 4', function () {
    it('it 4', function () {
      var actual = '1';
      var expected = 1;

      const obj1 = {
        a: 1
      };
      const obj2 = {
        a: 1
      };

      assert.deepStrictEqual(obj1, obj2, 'message 4');
      //assert.notDeepStrictEqual(obj1, obj2, 'message 4');
    });
  });

  describe('function 5', function () {
    it('it 5', function () {
      var actual = '1';
      var expected = 1;
      assert.equal(actual, expected, 'message 5');
      //assert.notEqual(actual, expected, 'message 5');
    });
  });

  describe('function 6', function () {
    it('it 6', function () {
      var actual = 1;
      var expected = 2;
      var operator = '<';
      assert.fail(actual, expected, undefined, operator);
    });
  });

  describe('function 7', function () {
    it('it 7', function () {
      var value = 'error value';
      assert.ifError(value);
    });
  });

  describe('function 8', function () {
    it('it 8', function () {
      var actual = 1;
      var expected = 1;
      assert.strictEqual(actual, expected, 'message 8');
      //assert.notStrictEqual(actual, expected, 'message 8');
    });
  });

  describe('function 9', function () {
    it('it 9', function () {
      var block = function () {
        throw new Error('Wrong value');
      };
      assert.throws(block, Error, 'message 9');
    });
  });

  describe('function 10', function () {
    it('it 10', function () {
      var block = function () {

      };
      assert.doesNotThrow(block, Error, 'message 10');
    });
  });

});