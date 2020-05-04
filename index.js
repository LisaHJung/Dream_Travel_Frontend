console.log("index.js is connected")

const dropdown_season = document.getElementById("dropdown_season")
const dropdown_travel_party = document.getElementById("dropdown_travel_party")

fetch("http://localhost:3000/destinations")
.then(response => response.json())
.then(destinations => destinations.map(destination => {
    const h1 = document.createElement("h1")
    h1.innerText = destination.name
    document.body.appendChild(h1)
    
}))

fetch("http://localhost:3000/destinations")
.then(response => response.json())
.then(destinations => destinations.map(destination => {
    const option_season = document.createElement('option')
    option_season.innerText = destination.season 
    option_season.value = destination.id 
    dropdown_season.appendChild(option_season)

    const option_travel_party = document.createElement('option')
    option_travel_party.innerText = destination.travel_party
    option_travel_party.value = destination.id 
    dropdown_travel_party.appendChild(option_travel_party)

}))