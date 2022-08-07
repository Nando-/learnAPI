function getRandomInt() {
    min = Math.ceil(1);
    max = Math.floor(151);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

idRand = getRandomInt();

let idtemp = idRand.toString();

const apiData = {
    url: 'https://pokeapi.co/api/v2/',
    type: 'pokemon',
    id: idtemp,
}

const {url, type, id} = apiData

const apiUrl = `${url}${type}/${id}`

fetch(apiUrl)
    .then( (data) => {
        if(data.ok){
            return data.json()
        }
        throw new Error('Not cool man'); 
    })
    .then( pokemon => generateHtml(pokemon))
    .catch( error => console.error('Error:', error))


const generateHtml = (data) => {
    console.log(data)
    const html = `
        <div class="name">${data.name}</div>
        <img src=${data.sprites.front_shiny}>
        <div class="details">
            <span>Height: ${data.height}</span>
            <span>Weight: ${data.weight}</span>
        </div>
    `
    const pokemonDiv = document.querySelector('.pokemon')
    pokemonDiv.innerHTML = html }
    