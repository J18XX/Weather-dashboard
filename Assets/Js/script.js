var city = '';

// set up variable
var searchCity = $('search-city');
var searchButton = $('search-button');
var currentCity = $('current-city');
var currentTemperature = $('temperature');
var currentHumidty = $('humidty');
var currentWindSpeed = $('wind-speed');
var sCity = [];

//function for search citys
function find(city) {
    for (let i = 0; i<sCity.length; i++) {
        if (city.toUpperCase() === sCity[i]) {
            return -1;
        }
    }
    return 1;
}

// set up API key
var APIKey = 'wxhqyfpyslgsdmxlgcwmzadg98745632'

function displayWeather(event) {
    event.preventDefaultt();
    if(searchCity.val().trim() !== ''){
        city = searchCity.val().trim();
        curretnWeather(city);
    }
}

function currentWeather(city){
    var queryURL = 'https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}' + city + APIKey;
    $.ajax({
        url:queryURL,
        method:'Get',
    }).then(function(response){
        console.log(response);

        var weatherIcon = response.weather[0].icon;
        
        var data = new Date(response.dt*1000).toLocaleDateString();
        $(currentCity).html(response.name + "("+date+")");

        var temFH = (response.main.temp - 273.15) * 1.8 + 32;
        $(currentTemperature).html((temFH).toFixed(2));

        $(currentHumidty).html(response.main.humidity + '%');

        var weedspeed = response.wind.speed;
        var windsmph = (weedspeed * 2.237).toFixed(1);

        UVIndex(response.coord.lon,response.coord.lat);
        forecast(response.id);
        if(response.cod === 200){
            searchCity = JSON.parse(localStorage.getItem('cityname'));
            console.log(searchCity);
            if (searchCity === null){
                searchCity = [];
                searchCity.push(city.toUpperCase());
                localStorage.setItem("cityname", JSON.stringify(searchCity));
                addToList(city);
            } else {
                if (find(city) > 0){
                    searchCity.push(city.toUpperCase());
                    localStorage.setItem('cityname', JSON.stringify(searchCity));
                    addToList(city);
                }
            }
        }

    })
}
// for the futrue 5 days
function forecast (cityid) {
    var dayover = false;
    var queryForcastUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}' + cityID + APIKey;
    $
}