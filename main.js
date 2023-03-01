var pokemonsCollection = [
    {
        thumbnail: './images/Pokemons/001.png',
        id: 1,
        name: 'Bulbasaur',
        type: ['Grass', 'Poison']
    },

    {
        thumbnail: './images/Pokemons/002.png',
        id: 2,
        name: 'Charmander',
        type: ['Fire']
    },

    {
        thumbnail: './images/Pokemons/003.png',
        id: 3,
        name: 'Caterpie',
        type: ['Bug']
    },

    {
        thumbnail: './images/Pokemons/004.png',
        id: 4,
        name: 'Kakuna',
        type: ['Bug', 'Poison']
    },

    {
        thumbnail: './images/Pokemons/005.png',
        id: 5,
        name: 'Ratata',
        type: ['Normal']
    },

    {
        thumbnail: './images/Pokemons/006.png',
        id: 6,
        name: 'Pikachu',
        type: ['Electric']
    },

    {
        thumbnail: './images/Pokemons/007.png',
        id: 7,
        name: 'Vulpix',
        type: ['Fire']
    },

    {
        thumbnail: './images/Pokemons/008.png',
        id: 8,
        name: 'Jigglypuff',
        type: ['Normal', 'Fairy']
    },

    {
        thumbnail: './images/Pokemons/009.png',
        id: 9,
        name: 'Diglett',
        type: ['Ground']
    },

    {
        thumbnail: './images/Pokemons/010.png',
        id: 10,
        name: 'Meowth',
        type: ['Normal']
    },

    {
        thumbnail: './images/Pokemons/011.png',
        id: 11,
        name: 'Tentacruel',
        type: ['Water', 'Poison']
    },

    {
        thumbnail: './images/Pokemons/012.png',
        id: 12,
        name: 'Ponita',
        type: ['Fire']
    },

    {
        thumbnail: './images/Pokemons/013.png',
        id: 13,
        name: 'Cloyster',
        type: ['Water', 'Ice']
    },

    {
        thumbnail: './images/Pokemons/014.png',
        id: 14,
        name: 'Cubone',
        type: ['Ground']
    },

    {
        thumbnail: './images/Pokemons/015.png',
        id: 15,
        name: 'Eevee',
        type: ['Normal']
    },

    {
        thumbnail: './images/Pokemons/016.png',
        id: 16,
        name: 'Porygon',
        type: ['Normal']
    }
];

// Selecting all card
let pokeCollection = document.querySelector(".main__cards");

    for (let i = 0; i < pokemonsCollection.length; i++) {
        const element = pokemonsCollection[i];
        
        // Adding new section and setting class
        let newPokemonSection = pokeCollection.appendChild(document.createElement("section"));
        newPokemonSection.classList.add('main__card');
    
        // New figure with image and classes
        let newFigure = newPokemonSection.appendChild(document.createElement("figure"));
        newFigure.classList.add('card__image');
    
        let newPokePic = newFigure.appendChild(document.createElement("img"));
        newPokePic.setAttribute("src", `${element.thumbnail}`);

            // Adding new section-description 
         let newPokemonInfoSection =  newPokemonSection.appendChild(document.createElement("section"));
         newPokemonInfoSection.classList.add("card__info");
    
        // Adding card-number poke-name poke-type with classes
        let newCardNumber = newPokemonInfoSection.appendChild(document.createElement("p"));
        let newPokeName = newPokemonInfoSection.appendChild(document.createElement("h1"));
        let newPokeType = newPokemonInfoSection.appendChild(document.createElement("h2"));
        newCardNumber.innerHTML = `№${element.id}`;
        newCardNumber.classList.add('card__number');
    
        newPokeName.innerHTML = element.name;
        newPokeName.classList.add('card__poke-name');
    
        newPokeType.innerHTML = `${element.type[0]}${element.type[1] ? element.type[1] : "" }`;
        newPokeType.classList.add('card__poke-type');
    }

    // Поменять секции на дивы и артикл на секцию 