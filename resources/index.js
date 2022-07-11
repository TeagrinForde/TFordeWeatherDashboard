const apiKey = '53365e58d7d5982b4bd03b8ffaccde6d';
var cityArrayEl = []; //where the data is collected

function saveCity() {
  var cityInputEl = document.getElementById('cityInput');
  cityArrayEl.push(cityInputEl.value);
  localStorage.setItem('cityList', JSON.stringify(cityArrayEl)); //city input  storage location
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
      var iconID = data.list[0].weather[0].icon;  //icon current day
      var iconURl = 'http://openweathermap.org/img/wn/' + iconID + '@2x.png';  
      document.getElementById('cityIcon').setAttribute('src', iconURl);


      //5 days
      document.getElementById('dateOne').innerHTML = moment.unix(data.list[8].dt).format('MM/DD');
      document.getElementById('tempOne').innerHTML = data.list[8].main.temp;
      document.getElementById('humidOne').innerHTML = data.list[8].main.humidity;
      document.getElementById('windOne').innerHTML = data.list[8].wind.speed;
      var iconOne = data.list[8].weather[0].icon;   //icon Day 1
      var iconOneURl = 'http://openweathermap.org/img/wn/' + iconOne + '@2x.png';
      document.getElementById('iconOne').setAttribute('src', iconOneURl);

      document.getElementById('dateTwo').innerHTML = moment.unix(data.list[16].dt).format('MM/DD');
      document.getElementById('tempTwo').innerHTML = data.list[16].main.temp;
      document.getElementById('humidTwo').innerHTML = data.list[16].main.humidity;
      document.getElementById('windTwo').innerHTML = data.list[16].wind.speed;
      var iconTwo = data.list[16].weather[0].icon;   //icon Day 2
      var iconTwoURl = 'http://openweathermap.org/img/wn/' + iconTwo + '@2x.png';
      document.getElementById('iconTwo').setAttribute('src', iconTwoURl);

      document.getElementById('dateThree').innerHTML = moment.unix(data.list[24].dt).format('MM/DD');
      document.getElementById('tempThree').innerHTML = data.list[24].main.temp;
      document.getElementById('humidThree').innerHTML = data.list[24].main.humidity;
      document.getElementById('windThree').innerHTML = data.list[24].wind.speed;
      var iconThree = data.list[24].weather[0].icon;   //icon Day 3
      var iconThreeURl = 'http://openweathermap.org/img/wn/' + iconThree + '@2x.png';
      document.getElementById('iconThree').setAttribute('src', iconThreeURl);

      document.getElementById('dateFour').innerHTML = moment.unix(data.list[32].dt).format('MM/DD');
      document.getElementById('tempFour').innerHTML = data.list[32].main.temp;
      document.getElementById('humidFour').innerHTML = data.list[32].main.humidity;
      document.getElementById('windFour').innerHTML = data.list[32].wind.speed;
      var iconFour = data.list[32].weather[0].icon;   //icon Day 4
      var iconFourURl = 'http://openweathermap.org/img/wn/' + iconFour + '@2x.png';
      document.getElementById('iconFour').setAttribute('src', iconFourURl);

      document.getElementById('dateFive').innerHTML = moment.unix(data.list[39].dt).format('MM/DD');
      document.getElementById('tempFive').innerHTML = data.list[39].main.temp;
      document.getElementById('humidFive').innerHTML = data.list[39].main.humidity;
      document.getElementById('windFive').innerHTML = data.list[39].wind.speed;
      var iconFive = data.list[39].weather[0].icon;   //icon Day 5
      var iconFiveURl = 'http://openweathermap.org/img/wn/' + iconFive + '@2x.png';
      document.getElementById('iconFive').setAttribute('src', iconFiveURl);

      //UV index
      var latEl = data.city.coord.lat;
      var lonEl = data.city.coord.lon;
      var dateEl = data.list[0].dt;
      var uvUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latEl}&lon=${lonEl}&appid=${apiKey}&exclude=hourly,minutely,alerts&units=imperial`;

      fetch(uvUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        document.getElementById('cityUv').innerHTML = data.current.uvi;   //uv index
        let uvi = data.current.uvi;
        if(uvi<=2) {
          document.getElementById('cityUv').style.backgroundColor = 'green';
        } else if(uvi<=5 && uvi>2) {
          document.getElementById('cityUv').style.backgroundColor = 'yellow';
        } else {
          document.getElementById('cityUv').style.backgroundColor = 'red';
        }
      });
    })
    
}

document.getElementById('basic-addon2').addEventListener('click', saveCity)