
export default class API {
	url = 'https://pokeapi.co/api/v2';

	async getPokemons() {
		try {
			const response = await fetch(this.url + '/pokemon?offset=300&limit=100')
			const pokemons = await response.json(); 
			const pokemonResults = [];
			
			for(const result of pokemons.results){
				const pokemonResponse = await fetch(result.url)
				const pokemon = await pokemonResponse.json();
				pokemonResults.push(pokemon);

			}
			return pokemonResults;
		}
		catch (error){
			console.log(error);
		}  
	}
}


