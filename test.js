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
