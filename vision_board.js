console.log("vision_board.js is connected")

const params = new URLSearchParams(window.location.search)
const vb_id = params.get("vision_board_id")

const commentUpdateForm=document.querySelector(".comment-update > form")
commentUpdateForm.action=`http://localhost:3000/vision_boards/${vb_id}`

const deleteDestination=document.querySelector(".delete-destination > form")
deleteDestination.action=`http://localhost:3000/vision_boards/${vb_id}`

const isUpdated = params.get("is_updated")
    if (isUpdated){
        alert("Your comment has been successfully updated!")
    }

const isDeleted = params.get("is_deleted")
    if (isDeleted){
        alert("The destination has been deleted!")
    }

const destination_id = params.get('destination_id')

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

    const p1 = document.createElement("p")
    p1.innerText = destination.location
    document.body.appendChild(p1)    
}

fetch(`http://localhost:3000/vision_boards/${vb_id}`)
.then(response => response.json())
.then(displayComment)

function displayComment(vision_board){
    const comment = document.createElement("p")
    comment.innerText= "My comment: "+vision_board.comment
    document.body.appendChild(comment)
}
