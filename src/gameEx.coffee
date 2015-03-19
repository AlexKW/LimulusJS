game = {	
	init: ->
		console.log "Game Init"	
		@canvas = document.getElementById 'canvas'
		@context = canvas.getContext '2d'

		@walker = new Walker @, 320, 240

	update: ->
		@walker.step()

	render: ->
		console.log 'RENDER'
		#@context.clearRect 0, 0, @canvas.width, @canvas.height
		
		@walker.display()

	gameLoop: ->
		@update()
		@render()

		window.requestAnimationFrame ( =>
			@gameLoop()
		)

}

randomInt = (min, max) ->
	Math.floor(Math.random() * (max - min) + min)

class Walker
	constructor: (game_, x_, y_) ->
		@game = game_
		@x = x_
		@y = y_

	display: ->
		@game.context.fillStyle = "#ff0000"
		@game.context.fillRect @x, @y, 5, 5

	step: ->
		stepX = (randomInt(0, 3) - 1) * 5
		stepY = (randomInt(0, 3) - 1) * 5

		@x += stepX
		@y += stepY

window.addEventListener "load", ->
	game.init()
	game.gameLoop()
	
