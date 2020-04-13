var citiesList = document.querySelector(".cities");
var cities = document.querySelectorAll(".cities__item");

var spb = document.querySelector(".cities__item--spb");
var msk = document.querySelector(".cities__item--msk");
var minsk = document.querySelector(".cities__item--minsk");

document.addEventListener("DOMContentLoaded", function () {
  if (citiesList.classList.contains("cities--no-js")) {
    citiesList.classList.remove("cities--no-js");
  }

  spb.firstChild.setAttribute("tabindex", 1);

  msk.firstChild.setAttribute("tabindex", 2);

  minsk.firstChild.setAttribute("tabindex", 3);
});

for (var m = 0; m < cities.length; m++) {
  cities[m].firstChild.onfocus = function () {
    citiesList.classList.add("cities--visible");
  };

  cities[m].firstChild.onblur = function () {
    citiesList.classList.remove("cities--visible");
  };
}

citiesList.onmouseover = function (event) {
  if (!citiesList.classList.contains("cities--visible")) {
    citiesList.classList.add("cities--visible");
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

    if (this === spb) {
      spb.firstChild.setAttribute("tabindex", 1);

      msk.firstChild.setAttribute("tabindex", 2);

      minsk.firstChild.setAttribute("tabindex", 3);
    }

    if (this === msk) {
      msk.firstChild.setAttribute("tabindex", 1);

      spb.firstChild.setAttribute("tabindex", 2);

      minsk.firstChild.setAttribute("tabindex", 3);
    }

    if (this === minsk) {
      minsk.firstChild.setAttribute("tabindex", 1);

      spb.firstChild.setAttribute("tabindex", 2);

      msk.firstChild.setAttribute("tabindex", 3);
    }
  };
}
