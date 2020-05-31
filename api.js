fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5fab46f6e737cfc57606fad72d949d8c`)
    .then(response => response.json())
    .then(console.log)