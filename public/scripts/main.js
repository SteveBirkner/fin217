
//
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

//jquery for updating the price  
$(document).ready(function() {
   $('input[name="ss"]').on('change', function(){
        if ($(this).val()=='0') {
            var cPrice = parseInt(document.getElementById("price").innerHTML);
            cPrice = cPrice - 200;
            $("#price").text(cPrice);        
        } else  {
           var cPrice = parseInt(document.getElementById("price").innerHTML);
            cPrice = cPrice + 200;
            $("#price").text(cPrice);
        }
    });
   $('input[name="ms"]').on('change', function(){
        if ($(this).val()=='0') {
            var cPrice = parseInt(document.getElementById("price").innerHTML);
            cPrice = cPrice - 200;
            $("#price").text(cPrice);        
        } else  {
           var cPrice = parseInt(document.getElementById("price").innerHTML);
            cPrice = cPrice + 200;
            $("#price").text(cPrice);
        }
    });
   $('input[name="ds"]').on('change', function(){
        if ($(this).val()=='0') {
            var cPrice = parseInt(document.getElementById("price").innerHTML);
            cPrice = cPrice - 200;
            $("#price").text(cPrice);        
        } else  {
           var cPrice = parseInt(document.getElementById("price").innerHTML);
            cPrice = cPrice + 200;
            $("#price").text(cPrice);
        }
    });
});