const pokeApi = {}

pokeApi.getPokemons = (offset = 0, limit = 10) => {

    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

    return fetch(url) // Retorna uma promisse (requisição assíncrona)
        .then((response) => response.json()) // Caso tenha sucesso, pega a resposta e converte para JSON
        .then((jsonBody) => jsonBody.results) // Este then pega o retorno (promisse) do primeiro then e pega os resultados
        .catch((error) => console.log(error))

}