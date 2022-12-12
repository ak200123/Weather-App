const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '9779d7fc3bmshe55404e8bc9a9dfp1a19c6jsn0fb331440d3c',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};


const getWeather = (city) => {
    document.getElementById("cityName").innerHTML = city;




    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then((response) => {
            console.log(response)


            document.getElementById("temp").innerHTML = response.temp
            document.getElementById("humidity").innerHTML = response.humidity
            document.getElementById("wind_speed").innerHTML = response.wind_speed
            document.getElementById("wind_degrees").innerHTML = response.wind_degrees



        })
        .catch(err => console.error(err));
}

document.getElementById("submit").addEventListener("click", (e) => {
    e.preventDefault();
    getWeather(city.value)
})

getWeather("Delhi");