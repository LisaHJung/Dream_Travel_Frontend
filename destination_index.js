console.log("destination index")

const params = new URLSearchParams(window.location.search)
const month = params.get('month')
const travel_party = params.get("travel_party")
const primary_reason = params.get("primary_reason")
const cost = params.get("cost")
console.log(month, travel_party, primary_reason, cost)

// if(month && travel_party && primary_reason && cost) {
    fetch(`http://localhost:3000/destinations?month=${month}&travel_party=${travel_party}&primary_reason=${primary_reason}&cost=${cost}`)
        .then(response => response.json())
//         .then(destinations => destinations.forEach(destination => {
//            console.log("id=2",id)
//             const h1 = document.createElement("h1")
//             h1.innerHTML = `<a href="destination.html?id=${destination.id}&user_id=${user_id}">${destination.name}</a>`
//             document.body.appendChild(h1)                   
// }))}
