const params = new URLSearchParams(window.location.search)
const user_id = params.get("user_id")









// ///move

// const dropdown_season = document.getElementById("dropdown_season")
// const dropdown_travel_party = document.getElementById("dropdown_travel_party")

// let search = document.querySelector('#search')
// let params = new URLSearchParams(window.location.search)
// let month = params.get('month')
// let travel_party = params.get("travel_party")
// let primary_reason = params.get("primary_reason")
// let cost = params.get("cost")

// const searchParams = new URLSearchParams(window.location.search)
// const id = searchParams.get('id')

// if(month && travel_party && primary_reason && cost) {
//     fetch(`http://localhost:3000/destinations?month=${month}&travel_party=${travel_party}&primary_reason=${primary_reason}&cost=${cost}`)
//         .then(response => response.json())
//         .then(destinations => destinations.forEach(destination => {
//             const h1 = document.createElement("h1")
//             h1.innerHTML = `<a href="show.html?id=${destination.id}&user_id=1">${destination.name}</a>`
//             document.body.appendChild(h1)                   
// }))}