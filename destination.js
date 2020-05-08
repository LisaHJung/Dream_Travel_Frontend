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

fetch(`http://api.openweathermap.org/data/2.5/weather?q=krabi&units=imperial&appid
=5fab46f6e737cfc57606fad72d949d8c`)
    .then(response => response.json())
    .then(weather => displayWeather(weather))


function displayWeather(response) {
    const temp = document.createElement("p")
    temp.innerText = "Current Temperature(in °F) : " +response["main"]["temp"]
    document.body.appendChild(temp)

    const feels_like = document.createElement("p")
    feels_like.innerText = "Feels like(in °F) : "+response["main"]["feels_like"]
    document.body.appendChild(feels_like)

    const humidity = document.createElement("p")
    humidity.innerText = "Humidity(in %) : "+response["main"]["humidity"]
    document.body.appendChild(humidity)

    const temp_max = document.createElement("p")
    temp_max.innerText = "Maximum Temperature (in °F) : "+response["main"]["temp_max"]
    document.body.appendChild(temp_max)

    const temp_min = document.createElement("p")
    temp_min.innerText = "Minimum Temperature (in °F) : "+response["main"]["temp_min"]
    document.body.appendChild(temp_min)
}




