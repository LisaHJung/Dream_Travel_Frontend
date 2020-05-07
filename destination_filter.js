console.log("destination filter.js connected")
// const dropdown_season = document.getElementById("dropdown_season")
// const dropdown_travel_party = document.getElementById("dropdown_travel_party")

// const searchParams = new URLSearchParams(window.location.search)
// const id = searchParams.get('id')

const url = new URL("localhost:")
const searchParams_user = new URLSearchParams(window.location.search)
const user_id = searchParams_user.get("user_id")
console.log(user_id)

const search = document.querySelector('#search')
const params = new URLSearchParams(window.location.search)
const month = params.get('month')
const travel_party = params.get("travel_party")
const primary_reason = params.get("primary_reason")
const cost = params.get("cost")

if(month && travel_party && primary_reason && cost) {
    fetch(`http://localhost:3000/destinations?month=${month}&travel_party=${travel_party}&primary_reason=${primary_reason}&cost=${cost}`)
        .then(response => response.json())
        .then(destinations => destinations.forEach(destination => {
            const h1 = document.createElement("h1")
            h1.innerHTML = `<a href="destination.html?id=${destination.id}&user_id=${user_id}">${destination.name}</a>`
            document.body.appendChild(h1)                   
}))}



