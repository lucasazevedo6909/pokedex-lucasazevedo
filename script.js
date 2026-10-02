const resultado = document.getElementById('resultado')
const campoBusca = document.getElementById('campoBusca')
const btnBuscar = document.getElementById('btnBuscar')
const btnProximo = document.getElementById('btnProximo')
const btnAnterior = document.getElementById('btnAnterior')
const btnAleatorio= document.getElementById('btnAleatorio')

var pokemonAtual = 1;
buscarPokemon(1)


// function buscarPokemon(termo) {
//     const url = "https://pokeapi.co/api/v2/pokemon/" + termo
//     // Forma Compacta, usando arrow function
//     fetch(url)
//         .then(resposta => resposta.json())
//         .then(resposta => resultado.innerHTML = `
//             <img src="${resposta.sprites.front_default}"/>
//             <p>#${resposta.id}</p>
//             <h2>${resposta.name}</h2>
//         `)
// }

async function buscarPokemon(termo) {
    const url = "https://pokeapi.co/api/v2/pokemon/" + termo
    const resposta = await fetch(url)
    if (resposta.ok) {
    const pokemon = await resposta.json()
    pokemonAtual = pokemon.id
    resultado.innerHTML = `
        <img src="${pokemon.sprites.front_default}"/>
        <p>#${pokemon.id}</p>
        <h2>${pokemon.name}</h2>
    `
    } else {
        resultado.innerHTML = '<h2> num existe <h2>'
    }
}

btnBuscar.addEventListener('click', () => {
    console.log("Fui clicado buscando pokemon " + campoBusca.value)
    pokemonAtual = campoBusca.value
    buscarPokemon(pokemonAtual)
});

campoBusca.addEventListener('keyup', evento => {
    if (evento.key == "Enter") {
        btnBuscar.click()
    }
})

btnProximo.addEventListener('click', () => {
    console.log(' buscando proximo pokemon ')
    if (pokemonAtual > 1025) {
        pokemonAtual++
        buscarPokemon(pokemonAtual)
}
})

btnAnterior.addEventListener('click', () => {
    console.log(' buscando pokemon anterior ')
    if (pokemonAtual > 1) {
        pokemonAtual--
        buscarPokemon(pokemonAtual)
    }
})

btnAleatorio.addEventListener('click', () => {
    console.log(' buscando pokemon aleatorio ')
        pokemonAtual = Math.floor(Math.random() * 1025) + 1
        console.log(pokemonAtual)
        buscarPokemon(pokemonAtual)
})
