console.log("destination.js working")

const searchParams = new URLSearchParams(window.location.search)
const destination_id = searchParams.get('id')
const user_id = searchParams.get("user_id")
const destinationFromUserId=document.querySelector("#user_id")
const destinationID=document.querySelector("#destination_id")
destinationFromUserId.value=user_id
destinationID.value=destination_id

fetch(`http://localhost:3000/destinations/${destination_id}`)
    .then(response => response.json())
    .then(displayInfo)

function displayInfo(destination) {
    const img = document.createElement("img")
    img.src = destination.image
    document.body.appendChild(img)

    const h1 = document.createElement("h1")
    h1.innerText = destination.name
    document.body.appendChild(h1)

    const p1 = document.createElement("p1")
    p1.innerText = destination.location
    document.body.appendChild(p1)

    const p = document.createElement("p")
    p.innerText = destination.description 
    document.body.appendChild(p)
    
}



