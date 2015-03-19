game = {	
	init: ->
		console.log "Game Init"	
		@canvas = document.getElementById 'canvas'
		@context = canvas.getContext '2d'

		@walker = new Walker @, 100, 100

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

randomInt = (max) ->
	Math.floor(Math.random() * max)

class Walker
	constructor: (game_, x_, y_) ->
		@game = game_
		@x = x_
		@y = y_

	display: ->
		@game.context.fillStyle = "#ff0000"
		@game.context.fillRect @x, @y, 5, 5

	step: ->
		choice = randomInt 4

		switch choice
			when 0 then @x += 5
			when 1 then @x -= 5
			when 2 then @y += 5
			when 3 then @y -= 5

window.addEventListener "load", ->
	game.init()
	game.gameLoop()
	
