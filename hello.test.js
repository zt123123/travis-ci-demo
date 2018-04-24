'use strict';

var expect = require('chai').expect;
var hello = require('./hello');

describe('run hello.js', function() {
	before(function(){
		console.log('start');
	});
  it('should return "Hello World"', function() {
    expect(hello()).to.equal('Hello Node');
  });
});
