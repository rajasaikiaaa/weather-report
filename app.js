// const input = document.querySelector("#inputCity")
// const btn = document.querySelector("#srcbtn");
// const cityName = document.querySelector("#cityName");
// const cityTime = document.querySelector("#cityTime");
// const cityTemp = document.querySelector("#cityTemp");
const input = document.querySelector("#inputCityName");
const srcBtn = document.querySelector("#btn");
const cityName = document.querySelector("#cityName");
const region = document.querySelector("#region");
const country = document.querySelector("#country");
const latitude = document.querySelector("#lat");
const longitude = document.querySelector("#long");
const localTime = document.querySelector("#time");
const localTemp = document.querySelector("#temp");
const localCondition = document.querySelector("#condition");
const DataDiv = document.querySelector("#data");


async function getData (cityname) {
    const promise = await fetch(`https://api.weatherapi.com/v1/current.json?key=2c443e427f174b17a1e131739253005&q=${cityname}&aqi=yes`);
    return await promise.json();
}

srcBtn.addEventListener("click", async () => {
    const value = input.value;
    const data = await getData(value);
    console.log(data);
    DataDiv.classList.remove("hide");
    cityName.innerText = `City Name : ${data.location.name}`;
    region.innerText= `Region : ${data.location.region}`;
    country.innerText = `Country : ${data.location.country}`;
    latitude.innerText = `Latitude : ${data.location.lat}`;
    longitude.innerText = `Longitude : ${data.location.lon}`;
    localTime.innerText =  `Date and Time in ${data.location.name}  : ${data.location.localtime}`;
    localTemp.innerText= `Temperature in ${data.location.name}  : ${data.current.temp_c} \u2103 `;
    localCondition.innerText = `Condition in ${data.location.name} : ${data.current.condition.text}`;

})
// btn.addEventListener("click", async () => {
//     const value = input.value;
//     const result = await getData(value);
//     console.log(result);
//     cityName.innerText = `${result.location.name}, ${result.location.region} - ${result.location.country}`;
//     cityTime.innerText = result.location.localtime;
//     cityTemp.innerText = result.current.temp_c;
// });