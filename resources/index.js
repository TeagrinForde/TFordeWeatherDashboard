var apiKey = '53365e58d7d5982b4bd03b8ffaccde6d';
var cityArrayEl = []; //where the data is collected

function saveCity() {
  var cityInputEl = document.getElementById('cityInput');
  cityArrayEl.push(cityInputEl.value);
  localStorage.setItem('cityList', JSON.stringify(cityArrayEl)); //where the city input is stored
  displayCity();
  displayResultEl(cityInputEl.value); //display list
}

function displayCity() {
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
// displayCity();  //uncomment before submission!!!

function displayResultEl(cityInput) {
  //pull time from moment website and user city input to display data
  var currentUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${cityInput}&appid=${apiKey}&exclude=hourly,minutely,alerts&units=imperial`;

  fetch(currentUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      document.getElementById('cityName').innerHTML = data.city.name;

      document.getElementById('dateInfo').innerHTML = moment.unix(data.list[0].dt).format('MM/DD/YYYY');
      document.getElementById('cityTemp').innerHTML = data.list[0].main.temp;
      document.getElementById('cityHumid').innerHTML = data.list[0].main.humidity;
      document.getElementById('cityWind').innerHTML = data.list[0].wind.speed;
      document.getElementById('cityIcon').innerHTML = data.list[0].weather[0].description;
      //make function to pull icon id to creat pic

      document.getElementById('dateOne').innerHTML = moment.unix(data.list[8].dt).format('MM/DD');
      document.getElementById('tempOne').innerHTML = data.list[8].main.temp;
      document.getElementById('humidOne').innerHTML = data.list[8].main.humidity;
      document.getElementById('windOne').innerHTML = data.list[8].wind.speed;

      document.getElementById('dateTwo').innerHTML = moment.unix(data.list[16].dt).format('MM/DD');
      document.getElementById('tempTwo').innerHTML = data.list[16].main.temp;
      document.getElementById('humidTwo').innerHTML = data.list[16].main.humidity;
      document.getElementById('windTwo').innerHTML = data.list[16].wind.speed;

      document.getElementById('dateThree').innerHTML = moment.unix(data.list[24].dt).format('MM/DD');
      document.getElementById('tempThree').innerHTML = data.list[24].main.temp;
      document.getElementById('humidThree').innerHTML = data.list[24].main.humidity;
      document.getElementById('windThree').innerHTML = data.list[24].wind.speed;

      document.getElementById('dateFour').innerHTML = moment.unix(data.list[32].dt).format('MM/DD');
      document.getElementById('tempFour').innerHTML = data.list[32].main.temp;
      document.getElementById('humidFour').innerHTML = data.list[32].main.humidity;
      document.getElementById('windFour').innerHTML = data.list[32].wind.speed;

      document.getElementById('dateFive').innerHTML = moment.unix(data.list[40].dt).format('MM/DD');
      document.getElementById('tempFive').innerHTML = data.list[40].main.temp;
      document.getElementById('humidFive').innerHTML = data.list[40].main.humidity;
      document.getElementById('windFive').innerHTML = data.list[40].wind.speed;

      //UV index
    //   var latEl = data.city.coord.lat;
    //   var lonEl = data.city.coord.lon;
    //   var dateEl = data.list[0].dt;
    //   var uvUrl = `http://api.openweathermap.org/v3/uvi/${latEl},${lonEl}/${dateEl}.json?appid=53365e58d7d5982b4bd03b8ffaccde6d`;

    //   return fetch(uvUrl);
    })
    // .then(function (response) {
    //   return response.json();
    // })
    // .then(function (data) {
    //   document.getElementById('cityUv').innerHTML = data.current.uvi;   //uv index
    // });
    }
  

document.getElementById('basic-addon2').addEventListener('click', saveCity)