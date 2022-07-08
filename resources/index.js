//display dates
var todayDateEl = moment().format('ll');
var dayOneEl = moment(todayDateEl).add(1, 'days').format('ll');
var dayTwoEl = moment(todayDateEl).add(2, 'days').format('ll');
var dayThreeEl = moment(todayDateEl).add(3, 'days').format('ll');
var dayFourEl = moment(todayDateEl).add(4, 'days').format('ll');
var dayFiveEl = moment(todayDateEl).add(5, 'days').format('ll');

document.getElementById('dateInfo').innerHTML = todayDateEl;
document.getElementById('dateOne').innerHTML = dayOneEl;
document.getElementById('dateTwo').innerHTML = dayTwoEl;
document.getElementById('dateThree').innerHTML = dayThreeEl;
document.getElementById('dateFour').innerHTML = dayFourEl;
document.getElementById('dateFive').innerHTML = dayFiveEl;

//city input and internal storage
var cityArrayEl = [];

document.getElementById('basic-addon2').addEventListener('click', saveCity);

function saveCity () {
    var cityEl = document.createElement('li');
    document.getElementById('cityList').innerHTML = cityListEl;
    cityEl.append = cityArrayEl[i]; //place input into array
    cityArrayEl.append(cityEl);
    displayResultEl ();
}

function displayResultEl (todayDateEl, cityArrayEl) {
    //pull time from moment website and user city input to display data
    console.log(cityEl);
};