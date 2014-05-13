
//CONSTRUCTOR PATTER. Need this so you can use the decorators. 
function Laptop() {
    this.cost = function () {return 1000;};
    this.screenSize = function () {return 11;};
    this.memorySize = function () {return 8;};
    this.driveSize = function () {return 128;};
}

//Decorator pattern. used to change the configuration of the base laptop. 

function screenUp(laptop) {
    var c = laptop.cost();
    var s = laptop.screenSize();
    laptop.cost = function {
        return c + 200;
    };

    laptop.screenSize = function {
        return s + 4;
    };

}

function driveUp(laptop) {
    var c = laptop.cost();
    var d = laptop.driveSize();
    laptop.cost = function {
        return c + 200;
    };

    laptop.driveSize = function {
        return s + 128;
    };

}

function memoryUp(laptop) {
    var c = laptop.cost();
    var m = laptop.memorySize();
    laptop.cost = function {
        return c + 200;
    };

    laptop.screenSize = function {
        return m + 8;
    };

}