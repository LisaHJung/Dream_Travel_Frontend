// api.openweathermap.org/data/2.5/weather?q={city name}&appid={your api key}
fetch(`http://api.openweathermap.org/data/2.5/weather?q=london&appid=5fab46f6e737cfc57606fad72d949d8c`)
    .then(response => response.json())
    .then(console.log)
        
        
//         showWeather)

// function showWeather(location) {
//     const p = document.createElement("p")
//     p.innerText = location.current_temperature 
//     document.body.appendChild(p)
// }