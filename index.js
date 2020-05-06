console.log("index.js is connected")

const dropdown_season = document.getElementById("dropdown_season")
const dropdown_travel_party = document.getElementById("dropdown_travel_party")

let search = document.querySelector('#search')
let params = new URLSearchParams(window.location.search)
let month = params.get('month')
let travel_party = params.get("travel_party")
let primary_reason = params.get("primary_reason")
let cost = params.get("cost")

const searchParams = new URLSearchParams(window.location.search)
const id = searchParams.get('id')

if(month && travel_party && primary_reason && cost) {
    fetch(`http://localhost:3000/destinations?month=${month}&travel_party=${travel_party}&primary_reason=${primary_reason}&cost=${cost}`)
        .then(response => response.json())
        .then(destinations => destinations.forEach(destination => {
            const h1 = document.createElement("h1")
            h1.innerHTML = `<a href="show.html?id=${destination.id}">${destination.name}</a>`
            document.body.appendChild(h1)                   
}))

// .then(response => response.json())
// .then(
//     destinations => destinations.map(destination => {
//     const h1 = document.createElement("h1")
//     h1.innerText = destination.name
//     document.body.appendChild(h1)
    
// }))



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
}