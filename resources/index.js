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


function displayResultEl(cityInput) {
  //pull time from moment website and user city input to display data
  var currentUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${cityInput}&appid=${apiKey}&units=imperial&cnt=6`;


  fetch(currentUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      document.getElementById('cityName').innerHTML = data.city.name;

      document.getElementById('dateInfo').innerHTML = moment(data.list[0].dt, 'X').format('MM/DD/YYYY');
      document.getElementById('cityTemp').innerHTML = data.list[0].main.temp;
      document.getElementById('cityHumid').innerHTML = data.list[0].main.humidity;
      document.getElementById('cityWind').innerHTML = data.list[0].wind.speed;
      document.getElementById('cityIcon').innerHTML = data.list[0].weather[0].icon; //make function to pull icon id to creat pic
      //uv index

      document.getElementById('dateOne').innerHTML = moment(data.list[1].dt, 'X').format('MM/DD/YYYY');
      document.getElementById('tempOne').innerHTML = data.list[1].main.temp;
      document.getElementById('humidOne').innerHTML = data.list[1].main.humidity;
      document.getElementById('windOne').innerHTML = data.list[1].wind.speed;

      document.getElementById('dateTwo').innerHTML = moment(data.list[2].dt, 'X').format('MM/DD/YYYY');
      document.getElementById('tempTwo').innerHTML = data.list[2].main.temp;
      document.getElementById('humidTwo').innerHTML = data.list[2].main.humidity;
      document.getElementById('windTwo').innerHTML = data.list[2].wind.speed;

      document.getElementById('dateThree').innerHTML = moment(data.list[3].dt, 'X').format('MM/DD/YYYY');
      document.getElementById('tempThree').innerHTML = data.list[3].main.temp;
      document.getElementById('humidThree').innerHTML = data.list[3].main.humidity;
      document.getElementById('windThree').innerHTML = data.list[3].wind.speed;

      document.getElementById('dateFour').innerHTML = moment(data.list[4].dt, 'X').format('MM/DD/YYYY');
      document.getElementById('tempFour').innerHTML = data.list[4].main.temp;
      document.getElementById('humidFour').innerHTML = data.list[4].main.humidity;
      document.getElementById('windFour').innerHTML = data.list[4].wind.speed;

      document.getElementById('dateFive').innerHTML = moment(data.list[5].dt, 'X').format('MM/DD/YYYY');
      document.getElementById('tempFive').innerHTML = data.list[5].main.temp;
      document.getElementById('humidFive').innerHTML = data.list[5].main.humidity;
      document.getElementById('windFive').innerHTML = data.list[5].wind.speed;
    });
}

document.getElementById('basic-addon2').addEventListener('click', saveCity)