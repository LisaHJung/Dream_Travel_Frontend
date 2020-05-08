// // fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5fab46f6e737cfc57606fad72d949d8c`)

fetch(`http://api.openweathermap.org/data/2.5/weather?q=krabi&appid=5fab46f6e737cfc57606fad72d949d8c`)
    .then(response => response.json())
    .then(console.log)
    // .then(displayWeather)


// function displayWeather(weather) {
//     const weather = document.createElement("p")
//     weather.innerText = weather.main
//     //do calculations here
//     document.body.appendChild(p)
// }
