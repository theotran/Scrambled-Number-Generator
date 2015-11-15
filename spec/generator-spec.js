
var chai = require('chai');

var should = chai.should();
var expect = chai.expect;

var generator = require('../js/generator.js');


describe('Generator', function (){
	
	it('should be a function', function (){
	expect(generator).to.exist;
	expect(generator).to.be.a('function');	
	});

	it('must accept a number', function () {
		expect(generator()).to.deep.equal([]);
		expect(generator(3)).to.not.deep.equal([]);
	});

	describe('the result', function (){

		it('should be an array', function () {
			expect(generator()).to.be.an.instanceof(Array);
		});
		
		it('length should equal the number passed in', function (){
			expect(generator(3)).to.have.length(3);
		});
			
		it('the number values should not exceed the length value', function  () {
			var arr = generator(3);
			for(var i =0; i < arr.length; i++) {
			expect(arr[i]).to.be.below(3);
			}
		});
		
		it('should be in a random order', function  () {
		var arr1 = generator(3);
		var arr2 = generator(3);
		expect(arr1).to.not.deep.equal(arr2);
		});
		
		it('should be unique numbers', function  () {
			 var arr = generator(20);

			 for(var i =0; i < arr.length; i++) {
			 expect(i).to.equal(arr.indexOf(arr[i]));
			 }
			 expect(arr).to.have.length(20);
		});

	});
});


