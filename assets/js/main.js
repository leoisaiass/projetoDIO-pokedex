const pokemonList = document.getElementById('pokemonList');
const loadNextButton = document.getElementById('loadNextButton');
const loadPreviousButton = document.getElementById('loadPreviousButton');

const maxRecords = 151;
const limit = 12;
let offset = 0;

function loadPokemonItens(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemon = []) => {
        const newHtml = pokemon.map((pokemon) => `
                <li class="pokemon ${pokemon.type}">
                    <span class="number">#${pokemon.number}</span>
                    <span class="name">${pokemon.name}</span>
        
                    <div class="detail">
                        <ol class="types">
                            ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                        </ol>
        
                        <img src="${pokemon.photo}"
                            alt=${pokemon.name}>
                    </div>
                </li>
                `).join('')

        pokemonList.innerHTML = newHtml
    })

    nextButtonShown(offset)
    previousButtonShown(offset)
}

loadPokemonItens(offset, limit)

loadNextButton.addEventListener('click', () => {
    offset += limit
    const qtdRecordsWithNextPage = offset + limit

    if (qtdRecordsWithNextPage >= maxRecords) {
        const newLimit = maxRecords - offset
        loadPokemonItens(offset, newLimit)

        loadNextButton.style.display = 'none'
    } else {
        loadPokemonItens(offset, limit)
    }
})

loadPreviousButton.addEventListener('click', () => {
    offset -= limit
    loadPokemonItens(offset, limit)
})


function nextButtonShown(offset) {
    if (offset + limit >= maxRecords) {
        loadNextButton.style.display = 'none'
    } else {
        loadNextButton.style.display = 'block'
    }
}

function previousButtonShown(offset) {
    if (offset <= 0) {
        loadPreviousButton.style.display = 'none'
    } else {
        loadPreviousButton.style.display = 'block'
    }
}