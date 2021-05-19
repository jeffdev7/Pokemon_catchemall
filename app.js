const pokemonDisplay = document.querySelector('.nome')
const button = document.querySelector('.button')


function catchPokemon() {
  fetch("https://pokeapi.co/api/v2/pokemon?offset=100&limit=100").then((
    response) => response.json()
    ).then ((data) => {
      console.log(data)

    //   const randomNumber = Math.random() * data.length
    //   const randomInteger = Math.floor(randomNumber)

      const randomPokemon = Math.floor((Math.random() *100) + 0)

      const name = data.results[randomPokemon].name

      //const name = data.results[21].name
      console.log(name)
      pokemonDisplay.innerHTML = name
    })


}

button.addEventListener('click', catchPokemon)

