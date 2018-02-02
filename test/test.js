// jshint esversion:6

var assert = require('assert');
var expect = require("chai").expect;

var yw = require('./../yahoo-weather.js');

describe("yahoo weather", function(){
	describe("show temperature", function(){
		it("should return kuala lumpur", function(done){
			yw('kuala lumpur').then(data =>{
				var result = data.location.city;
				done();
				expect(result.toLowerCase()).to.equal("kuala lumpur");
			});
		});
	});
});