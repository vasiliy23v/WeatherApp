let inputValue = document.querySelector('.input_text')

let container = document.querySelector('.container')


const apiKey = "9f2e2c132d7f4056bf394247220909";

const weatherArray = [];
inputValue.addEventListener('change', function () {
    console.log("inputValue", inputValue.value)
    const url = `http://api.weatherapi.com/v1/current.json?key=9f2e2c132d7f4056bf394247220909&q=${inputValue.value}&aqi=no`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const markup = `
<div class="card">
            <div class="card-header">
                <h1 class="card-header-city">${data.location.name}</h1>
                <p class="card-header-country">${data.location.country}</p>
            </div>
            <div class="card-circle">
            ${data.current.temp_c + "°C"}
            </div>
            <div class="card-descr">
                <div>
                    <div>
                        <p>Wind status</p>
                        <span>${data.current.wind_kph + "kmh"}</span>
                    </div>
                    <div>
                        <p>Humidity</p>
                        <span>${data.current.humidity + "%"}</span>
                    </div>
                </div>
                <div>
                    <div>
                        <p>Visibility</p>
                        <span>${data.current.vis_km + "km"}</span>
                    </div>
                    <div>
                        <p>Air pressure</p>
                        <span>${data.current.pressure_in + "in"}</span>
                    </div>
                </div>
            </div>
        </div>
`

            console.log(markup)

            container.innerHTML = markup;

            main.innerHTML = data.current.feelslike_c + "C";
            main.innerHTML = data.current.gust_kph;


            main.innerHTML = data.current.wind_dir;


            input.value = "";
        })
        .catch(err => console.error(err))

})

