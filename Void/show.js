const searchParams = new URLSearchParams(window.location.search)
const id = searchParams.get('id')

fetch(`http://localhost:3000/destinations/${id}`)
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
    
    pinToVisionBoard(destination)
    jumpToVisionBoard(destination)
    
}

// function createButton(destination){
//     const button = document.createElement("button")
//     button.innerHTML = document.addEventListener("click",pinToVisionBoard)
//     document.body.appendChild(p2)
// }

// function pinToVisionBoard
// //     fetch("http://localhost3000/vision_boards")

// function jumpToVisionBoard(destination){
//     const p2 = document.createElement("p")
//     p2.innerHTML = `<a href ="board.html">Take me to my travel vision board</a>`
//     document.body.appendChild(p2)
// }


