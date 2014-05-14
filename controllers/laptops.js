var mongoose = require('mongoose')
  , Laptop = mongoose.model('Laptop');


exports.buy = function(req,res) {
	var ss = req.body.ss;
	var ms = req.body.ms;
	var ds = req.body.ds;
	//CONSTRUCTOR PATTER. Need this so you can use the decorators. 
	function computer() {
	    this.cost = function () {return 1000;};
	    this.screenSize = function () {return 11;};
	    this.memorySize = function () {return 8;};
	    this.driveSize = function () {return 128;};
	}

	//Decorator pattern. used to change the configuration of the base laptop. 

	function screenUp(laptop) {
	    var c = laptop.cost();
	    var s = laptop.screenSize();
	    laptop.cost = function() {
	        return c + 200;
	    };

	    laptop.screenSize = function() {
	        return s + 4;
	    };

	}

	function driveUp(laptop) {
	    var c = laptop.cost();
	    var d = laptop.driveSize();
	    laptop.cost = function() {
	        return c + 200;
	    };

	    laptop.driveSize = function() {
	        return d + 128;
	    };

	}

	function memoryUp(laptop) {
	    var c = laptop.cost();
	    var m = laptop.memorySize();
	    laptop.cost = function() {
	        return c + 200;
	    };

	    laptop.memorySize = function() {
	        return m + 8;
	    };

	}

	var lt = new computer();

	if (ss == 1){
		screenUp(lt);
	}
	if(ms == 1) {
		memoryUp(lt);
	}
	if(ds == 1){
		driveUp(lt);
	}
	 var laptop = new Laptop();
	 laptop.cost = lt.cost();
	 laptop.memory = lt.memorySize();
	 laptop.screen = lt.screenSize();
	 laptop.drive = lt.driveSize();
  
  laptop.save(function (err) {
    if(err) {
      console.log(err)
    } else {
      console.log(laptop);
    }

  });
	res.render('index',{});
};

exports.prev = function(req,res) {
	Laptop.find({}, function(err, laptops) {
    res.render('laptops', { 
      laptops: laptops
    });
 });
};