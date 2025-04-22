const pokeApi = {}

function convertPokeApiDetailToPokemon(pokeDetail) {

    const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name)
    const [type] = types
    const photo = pokeDetail.sprites.other.dream_world.front_default

    const pokemon = new Pokemon(pokeDetail.id, pokeDetail.name, types, type, photo)

    return pokemon
}

pokeApi.getPokemonDetail = (pokemon) => {
    return fetch(pokemon.url)
        .then((response) => response.json())
        .then(convertPokeApiDetailToPokemon)
}

pokeApi.getPokemons = (offset = 0, limit = 10) => {

    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

    return fetch(url) // Retorna uma promisse (requisição assíncrona)
        .then((response) => response.json()) // Caso tenha sucesso, pega a resposta e converte para JSON
        .then((jsonBody) => jsonBody.results) // Este then pega o retorno (promisse) do primeiro then e pega os resultados
        .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail))
        .then((detailRequests) => Promise.all(detailRequests))
        .then((pokemonDetails) => pokemonDetails)
        .catch((error) => console.log(error))

}
