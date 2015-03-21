function Random() {
	this.nextNextGaussian = null;
	this.haveNextNextGaussian = false;
};
Random.prototype.nextRand = function() {
	return (Math.random() + Math.random() + Math.random() + Math.random() + Math.random() + Math.random()) / 6;
};
Random.prototype.nextGaussian = function() {
	if(this.haveNextNextGaussian) {
		this.haveNextNextGaussian = false;
		return this.nextNextGaussian;
	}
	else {
		var v1, v2, s;

		do {
			v1 = 2 * this.nextRand() - 1; // value between -1 and 1
			v2 = 2 * this.nextRand() - 1 ;
			s = v1 * v1 + v2 * v2;
		} while(s >= 1 || s == 0)

		multiplier = Math.sqrt(-2 * Math.log(s)/s);
		this.nextNextGaussian = v2 * multiplier;
		this.haveNextNextGaussian = true;
		return v1 * multiplier;
	}
};
Random.prototype.monteCarlo = function() {
	while(true) {
		r1 = Math.random();
		probability = r1;
		r2 = Math.random();

		if(r2 > probability)
			return r1;
	}
};