// Поменять секции на дивы и артикл на секцию 
const pokemonsList = document.querySelector('#pokemons-list');
let URL = 'https://pokeapi.co/api/v2/pokemon/';

function createPokemon(data) {
    let types = data.types.map((type) => type.type.name);
    let pokeId = data.id.toString();
    if (pokeId.length === 1) {
        pokeId = "00" + pokeId
    } else if (pokeId.length === 2) {
        pokeId = "0" + pokeId;
    } else if (pokeId.length === 3) {
        pokeId = pokeId
    }
    
    let newPokemonSection = pokemonsList.appendChild(document.createElement("div"));
    newPokemonSection.classList.add('main__card');

    let newFigure = newPokemonSection.appendChild(document.createElement("figure"));
    newFigure.classList.add('card__image');

    let newPokePic = newFigure.appendChild(document.createElement("img"));
    newPokePic.setAttribute("src", `${data.sprites.other['official-artwork'].front_default}`);

    let newPokemonInfoSection =  newPokemonSection.appendChild(document.createElement("div"));
    newPokemonInfoSection.classList.add("card__info");

    let newCardNumber = newPokemonInfoSection.appendChild(document.createElement("p"));
    let newPokeName = newPokemonInfoSection.appendChild(document.createElement("h1"));
    let newPokeType = newPokemonInfoSection.appendChild(document.createElement("h2")); 
    newCardNumber.innerHTML = `№${pokeId}`;
    newCardNumber.classList.add('card__number');
    
    newPokeName.innerHTML = data.name;
    newPokeName.classList.add('card__poke-name');
    
    newPokeType.innerHTML = `${types[0]} ${types[1] ? types[1] : "" }`;
    newPokeType.classList.add('card__poke-type');
};

    fetch(URL)
    .then(response => response.json())
    .then(data => {
        for (let i = 0; i < data.results.length; i++) {
        const element = data.results[i];
        // console.log(element)
        fetch(element.url)
        .then(response => response.json())
        .then(pokeInfo => {
            createPokemon(pokeInfo);
            // console.log(pokeInfo)
        });
     };
    });