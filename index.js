console.log("index.js is connected")

const dropdown_season = document.getElementById("dropdown_season")
const dropdown_travel_party = document.getElementById("dropdown_travel_party")

let search = document.querySelector('#search')
let params = new URLSearchParams(window.location.search)
let season = params.get('season')
let travel_party = params.get("travel_party")
console.log(season)
if(season && travel_party) {
    fetch(`http://localhost:3000/destinations?season=${season}&travel_party=${travel_party}`)
        .then(response => response.json())
        .then(console.log)
}

// .then(response => response.json())
// .then(
//     destinations => destinations.map(destination => {
//     const h1 = document.createElement("h1")
//     h1.innerText = destination.name
//     document.body.appendChild(h1)
    
// }))

// Person.find_by(name: 'Spartacus', rating: 4)

// fetch("http://localhost:3000/destinations")
// .then(response => response.json())
// .then(destinations => destinations.map(destination => {
//     const option_season = document.createElement('option')
//     option_season.innerText = destination.season 
//     option_season.value = destination.id 
//     dropdown_season.appendChild(option_season)

//     const option_travel_party = document.createElement('option')
//     option_travel_party.innerText = destination.travel_party
//     option_travel_party.value = destination.id 
//     dropdown_travel_party.appendChild(option_travel_party)

// }))