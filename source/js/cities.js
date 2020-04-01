var citiesList = document.querySelector(".cities");
var cities = document.querySelectorAll(".cities__item");
var currentCity = document.querySelector(".cities__item--current");

document.addEventListener("DOMContentLoaded", function () {
  if (citiesList.classList.contains("cities--no-js")) {
    citiesList.classList.remove("cities--no-js");
  }
});


currentCity.onmouseover = function (event) {
  if (!citiesList.classList.contains("cities--visible")) {
    citiesList.classList.add("cities--visible");
  }
}

citiesList.onmouseover = function (event) {
  if (!citiesList.classList.contains("cities--visible")) {
    citiesList.classList.add("cities--visible");
  }
}

currentCity.onmouseout = function (event) {
  if (citiesList.classList.contains("cities--visible")) {
    citiesList.classList.remove("cities--visible");
  }
}

citiesList.onmouseout = function (event) {
  if (citiesList.classList.contains("cities--visible")) {
    citiesList.classList.remove("cities--visible");
  }
}

for (var i = 0; i < cities.length; i++) {
  cities[i].onclick = function (event) {
    event.preventDefault();

    if (!this.classList.contains("cities__item--current")) {
      for (var n = 0; n < cities.length; n++) {
        if (cities[n].classList.contains("cities__item--current")) {
          cities[n].classList.remove("cities__item--current");
        }
      }

      this.classList.add("cities__item--current");
    }
  }
}
