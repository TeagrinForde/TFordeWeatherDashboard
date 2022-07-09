var apiKey = '53365e58d7d5982b4bd03b8ffaccde6d';
var cityArrayEl = []; //where the data is collected

function saveCity () {
    var cityInputEl = document.getElementById('cityInput');
    cityArrayEl.push(cityInputEl.value);
    localStorage.setItem('cityList', JSON.stringify(cityArrayEl)); //where the city input is stored
    displayCity();
    displayResultEl (cityInputEl.value); //display list
}

function displayCity () {
    var cityListEl = document.getElementById('cityList');
    if (localStorage.getItem('cityList')) {
        cityArrayEl = JSON.parse(localStorage.getItem('cityList'))
        for (var i = 0; i < cityArrayEl.length; i++) {
            var cityEl = document.createElement('li');
            cityEl.textContent = cityArrayEl[i];
            cityListEl.appendChild(cityEl);
        }
    }
}
displayCity();

function displayResultEl (cityInput) {
    //pull time from moment website and user city input to display data
    var currentUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiKey}&units=imperial`;

    fetch(currentUrl)
      .then(function(response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        document.getElementById('dateInfo').innerHTML = moment(data.dt, 'X').format('MM/DD/YYYY');
        document.getElementById('cityName').innerHTML = data.name;
        document.getElementById('cityTemp').innerHTML = data.main.temp;
        document.getElementById('cityWind').innerHTML = data.wind.speed;

        document.getElementById('cityHumid').innerHTML = data.main.humidty; //not working
        document.getElementById('cityIcon').innerHTML = data.weather[0].icon;//not working -- stopped here
        
        var requestUrl = 'https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}';
      })
      for (var i=0; i< data.length; i++) {
        var temperature = document.createElement('li');
        var wind = document.createElement('li');
        var humidty = document.createElement('li');
        var icon = document.createElement('li');

        link.textContent = data[i].html_url;
        link.href = data[i].html_url;

        ol.appendChild(li);
    }
}
document.getElementById('basic-addon2').addEventListener('click', saveCity)