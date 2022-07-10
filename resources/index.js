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
displayCity();  //uncomment before submission!!!

function displayResultEl(cityInput) {
  //pull time from moment website and user city input to display data
  var currentUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${cityInput}&appid=${apiKey}&units=imperial&cnt=6&dt=current`;

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
      // document.getElementById('cityUv').innerHTML = data.list[0].current.uvi;  //uv index

      document.getElementById('dateOne').innerHTML = moment.unix(data.list[1].dt).format('MM/DD');
      document.getElementById('tempOne').innerHTML = data.list[1].main.temp;
      document.getElementById('humidOne').innerHTML = data.list[1].main.humidity;
      document.getElementById('windOne').innerHTML = data.list[1].wind.speed;

      document.getElementById('dateTwo').innerHTML = moment.unix(data.list[2].dt).format('MM/DD');
      document.getElementById('tempTwo').innerHTML = data.list[2].main.temp;
      document.getElementById('humidTwo').innerHTML = data.list[2].main.humidity;
      document.getElementById('windTwo').innerHTML = data.list[2].wind.speed;

      document.getElementById('dateThree').innerHTML = moment.unix(data.list[3].dt).format('MM/DD');
      document.getElementById('tempThree').innerHTML = data.list[3].main.temp;
      document.getElementById('humidThree').innerHTML = data.list[3].main.humidity;
      document.getElementById('windThree').innerHTML = data.list[3].wind.speed;

      document.getElementById('dateFour').innerHTML = moment.unix(data.list[4].dt).format('MM/DD');
      document.getElementById('tempFour').innerHTML = data.list[4].main.temp;
      document.getElementById('humidFour').innerHTML = data.list[4].main.humidity;
      document.getElementById('windFour').innerHTML = data.list[4].wind.speed;

      document.getElementById('dateFive').innerHTML = moment.unix(data.list[5].dt).format('MM/DD');
      document.getElementById('tempFive').innerHTML = data.list[5].main.temp;
      document.getElementById('humidFive').innerHTML = data.list[5].main.humidity;
      document.getElementById('windFive').innerHTML = data.list[5].wind.speed;
    });
}

document.getElementById('basic-addon2').addEventListener('click', saveCity)