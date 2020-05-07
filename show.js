const searchParams = new URLSearchParams(window.location.search)
const id = searchParams.get('id')

fetch(`http://localhost:3000/destinations/${id}`)
    .then(response => response.json())
    .then(displayInfo)

function displayInfo(destination) {
    // console.log(destination.image)
    // const img = document.createElement("img")
    // img.src = destination.image
    // document.getElementById('body').appendChild(img)

    const h1 = document.createElement("h1")
    h1.innerText = destination.name
    document.body.appendChild(h1)

    const p = document.createElement("p")
    p.innerText = destination.description 
    document.body.appendChild(p)

}

