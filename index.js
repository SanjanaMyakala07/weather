var inputValue = "";
document.getElementById("cityinput").addEventListener("change", function (e) {
  inputValue = e.target.value;
});
var btn = document.querySelector("#add");
var city = document.querySelector("#cityoutput");
var descrip = document.querySelector("#description");
var temp = document.querySelector("#temp");
var wind = document.querySelector("#wind");

var apik = "7d101e069ee94bc0bb7113755243101";

btn.addEventListener("click", function () {
  console.log(inputValue + " sravan");
  fetch(
    "http://api.weatherapi.com/v1/current.json?key=" +
      apik +
      "&q=" +
      inputValue +
      "&aqi=no"
  )
    .then((res) => res.json())

    .then((data) => {
      var nameval = data["location"]["name"];
      var descrip = data["current"]["condition"]["text"];
      var temperature = data["current"]["temp_c"];
      var wndspeed = data["current"]["wind_kph"];

      city.innerHTML = ` Weather of <span>${nameval}<span>'`;
      temp.innerHTML = Temperature: <span>${temperature} C</span>;
      description.innerHTML = Sky Conditions: <span>${descrip}<span>;
      wind.innerHTML = wind speed: <span>${wndspeed} km/h<span>;
    })
    .catch((err) => alert("You entered Wrong city name" + err));
});