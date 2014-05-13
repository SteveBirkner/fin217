var expect = require("chai").expect;
var main = require("../public/scripts/main.js");

describe("main", function () {
	describe("#screenUp", function() {
		var lt = main.Laptop();
		main.screenUp(lt);
		expect(lt.screenSize()).to.equal(15);
	});
});
