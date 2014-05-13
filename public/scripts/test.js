test("Screen Upgrade", function() {
	equal(true,sUp());
	function sUp() {
		var lt = new Laptop();
		screenUp(lt);
		console.log(lt.screenSize());
		if(lt.cost() == 1200 && lt.screenSize() == 15) {
			return true;
		}
		return false;
	}
});

test("Memory Upgrade", function() {
	equal(true,mUp());
	function mUp() {
		var lp = new Laptop();
		memoryUp(lp);
		console.log(lp.memorySize());
		if(lp.memorySize() == 16) {
			return true;
		}
		return false;
	}
});

test("Drive Upgrade", function() {
	equal(true,dUp());
	function dUp() {
		var lt = new Laptop();
		driveUp(lt);
		if(lt.driveSize() == 256) {
			return true;
		}
		return false;
	}
});