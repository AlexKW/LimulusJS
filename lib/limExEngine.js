function LimEX() {}
LimEX.prototype.init = function() {
	console.log("Game Init");	
	this.canvas = document.getElementById('canvas');
	this.context = canvas.getContext('2d');

	this.mousePos = {}

	this.fps = 10;
	this.interval = 1000 / this.fps;
	this.lastTime = (new Date().getTime());
	this.currentTime = 0;

	this.gameEntities = []
};
LimEX.prototype.addEntity = function(ent) {
	this.gameEntities.push(ent)
};
LimEX.prototype.gameLoop = function() {
	that = this;
	window.requestAnimationFrame(function(){
		that.gameLoop();
	});

	this.currentTime = (new Date().getTime());
	delta = this.currentTime - this.lastTime;
	
	if(delta > this.interval) {
		this.getInput()
		this.update();
		this.render();

		this.lastTime = this.currentTime - (delta & this.interval);
	};
};

LimEX.prototype.getInput = function() {

};

LimEX.prototype.getMousePos = function(e) {
	var rect = this.canvas.getBoundingClientRect();

	this.mousePos = {
		x: e.clientX - rect.left,
		y: e.clientY - rect.top
	};

	return this.mousePos;
};

LimEX.prototype.update = function() {
	for(var i = 0; i < this.gameEntities.length; ++i)
		if('update' in this.gameEntities[i])
			this.gameEntities[i].update();
};

LimEX.prototype.render = function() {
	//this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
	
	for(var i = 0; i < this.gameEntities.length; ++i)
		this.gameEntities[i].render();
};
	
