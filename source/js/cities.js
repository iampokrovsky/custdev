var citiesList = document.querySelector(".nav__cities");
var cities = document.querySelectorAll(".nav__city");
var currentCity = document.querySelector(".nav__city--current");

document.addEventListener("DOMContentLoaded", function () {
  if (citiesList.classList.contains("nav__cities--no-js")) {
    citiesList.classList.remove("nav__cities--no-js");
  }
});


currentCity.onmouseover = function (event) {
  if (!citiesList.classList.contains("nav__cities--visible")) {
    citiesList.classList.add("nav__cities--visible");
  }
}

citiesList.onmouseover = function (event) {
  if (!citiesList.classList.contains("nav__cities--visible")) {
    citiesList.classList.add("nav__cities--visible");
  }
}

currentCity.onmouseout = function (event) {
  if (citiesList.classList.contains("nav__cities--visible")) {
    citiesList.classList.remove("nav__cities--visible");
  }
}

citiesList.onmouseout = function (event) {
  if (citiesList.classList.contains("nav__cities--visible")) {
    citiesList.classList.remove("nav__cities--visible");
  }
}

for (var i = 0; i < cities.length; i++) {
  cities[i].onclick = function (event) {
    event.preventDefault();

    if (!this.classList.contains("nav__city--current")) {
      console.log("Hello World!");

      for (var n = 0; n < cities.length; n++) {
        if (cities[n].classList.contains("nav__city--current")) {
          cities[n].classList.remove("nav__city--current");
        }
      }

      this.classList.add("nav__city--current");
    }
  }
}
