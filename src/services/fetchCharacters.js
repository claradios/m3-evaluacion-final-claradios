const ENDPOINT = 'https://rickandmortyapi.com/api/character/';

const fetchCharacters = ()=> {
    return fetch(ENDPOINT)
    .then(response=>response.json());
};

export{fetchCharacters};

