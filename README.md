# Pokemon_API-with-Canvas-and-JS




1) Fetch 20 pokemons from https://pokeapi.co/api/v2/pokemon/

2) In the response find the pokemons sprites and information, display the front view (sprites.front_default) and the following info
 - Name
 - First ability that isn't hidden (is_hidden: false)
 - First four moves
 - All 6 stat names and their base_stat
 For example:
	Name: Pikachu
	Ability: lightning-rod
	Move 1: Mega Punch
	Move 2: Pay Day
	Move 3: Thunder Punch
	Move 4: Slam
	Speed: 90
	Special Defense: 50
	Special Attack: 50
	Defense: 40
	Attack: 55
	HP: 35
 
3) If you click on a pokemon, initiate a battle, which should display the following things:
 - The pokemon you selected, using the back view sprite (sprites.back_default), it's name and HP. The HP should be a green bar.
 - A random pokemon from the other 19 (with the front view sprite), it's name and HP bar
 
4) Once displayed, the pokemon need to battle. To do that use the following rules:
 - Pokemon attack in turns
 - The pokemon with the higher speed stat goes first
 - A pokemon deals damage equal to - (Attack / Opponent Defense) * A random number between 0 and 200
 - If a pokemon deals more than 0 damage, it should have the following animation:
     - The pokemon moves to the oponent.
     - The opponent should blink 3 times
     - The opponent HP bar should decrease
     - The pokemon that attacked, should return to it's initial position
 - At the end of every turn, the damage is taken away from the opponent HP
 - If a pokemon's HP goes below 0, the battle is over

5) If you loose or win, show a text 'You Lose' or 'You Win' respectively, and a Play Again button which should repeat the steps from step 1. This button shouldn't refresh the page, but redraw the stage.

Code Rules: 
- Use ES6 Syntax
- Use Canvas and OOP to render the task. If you are not able to, you can use a framework like Vue, but it will deduct from your overall points
- Don't use Jquery!

Bonus Points:
- There is a button to filter the pokemon when you list them in step 2
- Add a background to the battle
- The HP bar is green if above 50% of the initial HP, yellow if bellow 50% and red if bellow 10%
- Display more than the 20 pokemon required
- Use the sounds provided in the assets folder during the battle
