function Walker(game_, x_, y_) {
	this.game = game_;
	this.x = x_;
	this.y = y_;

	this.generator = new Random();
};
Walker.prototype.render = function() {
	//this.game.context.fillStyle = "#ff0000";
	//this.game.context.fillStyle = "rgba(225,0,0,0.1)";
	this.game.context.fillRect(this.x, this.y, 5, 5);
};
Walker.prototype.update = function() {
	this.step();
};
Walker.prototype.step = function() {
	stepSize = randomInt(0, 10);

	stepX = randomInt(-stepSize, stepSize);
	stepY = randomInt(-stepSize, stepSize);

	if(stepX + stepY > 0)
		this.game.context.fillStyle = "rgba(225,0,0,0.1)";
	else
		this.game.context.fillStyle = "rgba(0,0,255,0.1)";

	this.x += stepX;
	this.y += stepY;
	//console.log(stepY);
	
	// wrap around screen
	if(this.x < 0)
		this.x = this.game.canvas.width;
	if(this.x > this.game.canvas.width)
		this.x = 0

	if(this.y < 0)
		this.y = this.game.canvas.height;
	if(this.y > this.game.canvas.height)
		this.y = 0
};

window.addEventListener("load", function() {
	lim = new LimEX();
	lim.init();
	lim.addEntity(new Walker(lim, 320, 240));
	//lim.addEntity(new GaussianDistribution(lim));

	lim.gameLoop();

	lim.canvas.addEventListener("mousemove", function(e) {
		pos = lim.getMousePos(e);
	}, false);
});
	
