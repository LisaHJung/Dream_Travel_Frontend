console.log("vision_board.js is connected")

const searchParams = new URLSearchParams(window.location.search)
const id = searchParams.get('id')

fetch(`http://localhost:3000/vision_board/${id}`)
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
    
    // pinToVisionBoard(destination)
    jumpToVisionBoard(destination)
    
}
