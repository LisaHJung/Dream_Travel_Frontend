console.log("destination filter.js connected")
// const dropdown_season = document.getElementById("dropdown_season")
// const dropdown_travel_party = document.getElementById("dropdown_travel_party")

// const searchParams = new URLSearchParams(window.location.search)
// const id = searchParams.get('id')


const searchParams_user = new URLSearchParams(window.location.search)
const user_id = searchParams_user.get("user_id")
const destinationFromUserId=document.querySelector("#user_id")
destinationFromUserId.value=user_id
// const tinkerUserId=[]
// tinkerUserId.push(user_id)
// console.log(tinkerUserId)


const search = document.querySelector('#search')
const params = new URLSearchParams(window.location.search)
const month = params.get('month')
const travel_party = params.get("travel_party")
const primary_reason = params.get("primary_reason")
const cost = params.get("cost")

if(month && travel_party && primary_reason && cost) {
    fetch(`http://localhost:3000/destinations?month=${month}&travel_party=${travel_party}&primary_reason=${primary_reason}&cost=${cost}&user_id=${user_id}`)
        .then(response => response.json())
        .then(destinations => destinations.destinations.forEach(destination => {
            const h1 = document.createElement("h1")
            h1.innerHTML = `<a href="destination.html?id=${destination.id}&user_id=${user_id}">${destination.name}</a>`
            document.body.appendChild(h1)                   
        })
    )
}



