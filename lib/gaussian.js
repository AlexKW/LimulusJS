function GaussianDistribution(game_) {
	this.game = game_;

	this.generator = new Random();

	for(var i = 0; i < 100; ++i) {
		num = 2 * this.generator.nextRand() - 1;
		//num = this.generator.nextRand();
		sd = 60;
		mean = 320;

		x = sd * num + mean;
		console.log(x);
	}
};
GaussianDistribution.prototype.render = function() {
	this.game.context.fillStyle = "rgba(0, 255, 0, 0.1)";
	
	num = this.generator.nextGaussian();
	//num = this.generator.nextRand();
	sd = 60;
	mean = 320;

	x = sd * num + mean;
	this.game.context.fillRect(x, 230, 2, 20);
};

window.addEventListener("load", function() {
	lim = new LimEX();
	lim.init();

	lim.addEntity(new GaussianDistribution(lim));

	lim.gameLoop();
});
	
