export default class CanvasController {
  constructor(api) {
    this.api = api;
  }
  
  async Draw() {
	const pokemons = await this.api.getPokemons();
	
			const pokeName = pokemons.map(pokemon => `Name : ${pokemon.name}`);
			const pokeAbility = pokemons.map(pokemon => `ABILITY : ${pokemon.abilities[0].ability.name}`);
			const pokeMoveOne = pokemons.map(pokemon =>`MOVE 1 : ${pokemon.moves[0].move.name}`); 
			const pokeMoveTwo = pokemons.map(pokemon =>`MOVE 2 : ${pokemon.moves[1].move.name}`); 
			const pokeMoveTree =pokemons.map(pokemon => `MOVE 3 : ${pokemon.moves[2].move.name}`);
			const pokeMoveFour = pokemons.map(pokemon =>`MOVE 4 : ${pokemon.moves[3].move.name}`); 
			const pokeHp = pokemons.map(pokemon =>`HP : ${pokemon.stats[0].base_stat}`);
			const pokeAttack = pokemons.map(pokemon => `ATTACK : ${pokemon.stats[1].base_stat}`);
			const pokeDefense = pokemons.map(pokemon =>`DEFENSE : ${pokemon.stats[2].base_stat}`);
			const pokeSpecialAtttack =pokemons.map(pokemon => `SPECIAL-ATTACK : ${pokemon.stats[3].base_stat}`);
			const pokeSpecialDefense = pokemons.map(pokemon =>`SPECIAL-DEFENSE : ${pokemon.stats[4].base_stat}`);
			const pokeSpeed = pokemons.map(pokemon =>`SPEED : ${pokemon.stats[5].base_stat}`);
			const pokeFrontImage = pokemons.map(pokemon => `${pokemon.sprites.front_default}`);
		  

		    const canvas = document.getElementById('canvas')
		    const ctx = canvas.getContext('2d');
		  
			ctx.fillStyle = "#FFD700";
			ctx.font='bolder 15px Arial';

			let x  = 150;
			let y  = 120;
		
			for(let url in pokeFrontImage){
			
				const poke =new Image();
				poke.src = pokeFrontImage[url];
				poke.onload = ((x,y) => {
				ctx.drawImage(poke, x,y ,200,200);})(x,y);
				ctx.lineWidth = 6;
				ctx.strokeStyle = "#ffffff";
				ctx.strokeRect(x, y, 415, 350);

				
				if (x===900) {
					x = 150;
					y += 480;
				}else{x +=750;}
			}
		
		
				(() => {
				x  = 170;
				y  = 320;
				for(let info in pokeName){	
					ctx.fillText(pokeName[info],x,y);
					ctx.fillText(pokeAbility[info],x+210,y);
					ctx.fillText(pokeAttack[info],x+20,y+30);
					ctx.fillText(pokeDefense[info],x+20,y+50);
					ctx.fillText(pokeSpeed[info],x+20,y+70);
					ctx.fillText(pokeMoveOne[info],x+20,y+100);
					ctx.fillText(pokeMoveTwo[info],x+20,y+120);
					ctx.fillText(pokeSpecialAtttack[info],x+150,y+30);
					ctx.fillText(pokeSpecialDefense[info],x+150,y+50);
					ctx.fillText(pokeHp[info],x+150,y+70);
					ctx.fillText(pokeMoveTree[info],x+210,y+100);
					ctx.fillText(pokeMoveFour[info],x+210,y+120);
					if (x===920) {
						x = 170;
						y += 480;
					}else{x +=750;}	
				}
			})()
      }
}

