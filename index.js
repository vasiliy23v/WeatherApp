let inputValue = document.querySelector('.input_text')

let country = document.querySelector('.card-header-country')
let city = document.querySelector('.card-header-city')

let temp = document.querySelector('.card-circle')

let wind = document.querySelector('.card-descr-wind')
let humidity = document.querySelector('.card-descr-humidity')
let vis = document.querySelector('.card-descr-vis')
let press = document.querySelector('.card-descr-press')


let clouds = document.querySelector('.clouds');
let main = document.querySelector('#name');




const apiKey = "9f2e2c132d7f4056bf394247220909";


inputValue.addEventListener('change', function () {
    console.log("inputValue", inputValue.value)
    const url = `http://api.weatherapi.com/v1/current.json?key=9f2e2c132d7f4056bf394247220909&q=${inputValue.value}&aqi=no`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data)

            city.innerHTML = data.location.name;
            country.innerHTML = data.location.country;

            temp.innerHTML = data.current.temp_c + "°C";

            wind.innerHTML = data.current.wind_kph + "kmh";
            humidity.innerHTML = data.current.humidity + "%";
            vis.innerHTML = data.current.vis_km + "km"
            press.innerHTML = data.current.pressure_in + "in";

            main.innerHTML = data.current.feelslike_c + "C";
            main.innerHTML = data.current.gust_kph;


            main.innerHTML = data.current.wind_dir;


            input.value = "";
        })
        .catch(err => console.error(err))

})