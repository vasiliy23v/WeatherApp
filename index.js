let inputValue = document.querySelector('.input_text')

let container = document.querySelector('.container')
let msg = document.querySelector('.input-msg')


const apiKey = "9f2e2c132d7f4056bf394247220909";

const weatherArray = [];
const elementToAppend = {

}
/*
class WeatherWidget {
    constructor(elementToAppend) {

    }

    getData() {}
    render() {}
}
*/
//

inputValue.addEventListener('change', function () {

    console.log("inputValue", inputValue.value)
    const url = `http://api.weatherapi.com/v1/current.json?key=9f2e2c132d7f4056bf394247220909&q=${inputValue.value}&aqi=no`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const div = document.createElement("div");
            const markup = `
<div class="card">
            <div class="card-header">
                <h1 class="card-header-city">${data.location.name}</h1>
                <p class="card-header-country">${data.location.country}</p>
            </div>
            <div class="card-circle">
            ${Math.ceil(data.current.temp_c) + "°C"}
            </div>
            <div class="card-descr">
                <div>
                    <div class="card-descr-p">
                        <p>Wind status</p>
                        <span>${data.current.wind_kph + "kmh"}</span>
                    </div>
                    <div class="card-descr-p">
                        <p>Humidity</p>
                        <span>${data.current.humidity + "%"}</span>
                    </div>
                </div>
                <div>
                    <div class="card-descr-p">
                        <p>Visibility</p>
                        <span>${data.current.vis_km + "km"}</span>
                    </div>
                    <div class="card-descr-p">
                        <p>Air pressure</p>
                        <span>${data.current.pressure_in + "in"}</span>
                    </div>
                </div>
            </div>
        </div>
`
            div.insertAdjacentHTML("beforeend", markup);
            container.appendChild(div);
            msg.textContent = "";

        })
        .catch(() => msg.textContent = "Please input a valid city 😩 ")
})



const weatherWidget = new WeatherWidget(container)