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

var nav = document.querySelector(".nav");
var navList = document.querySelector(".nav__list");
var menuButton = document.querySelector(".nav__menu-button");

document.addEventListener("DOMContentLoaded", function () {
  if (nav.classList.contains("nav--no-js")) {
    nav.classList.remove("nav--no-js");
  }

  if (navList.classList.contains("nav__list--no-js")) {
    navList.classList.remove("nav__list--no-js");
  }

  
  if (menuButton.classList.contains("nav__menu-button--no-js")) {
    menuButton.classList.remove("nav__menu-button--no-js");
  }
});


// menuButton.onclick = function (evt) {
//   evt.preventDefault();

//   if (!navButton.classList.contains("main-nav__button--close") && !navContent.classList.contains("main-nav__content--open")) {
//     navButton.classList.add("main-nav__button--close");
//     navContent.classList.add("main-nav__content--open");
//   } else {
//     navButton.classList.remove("main-nav__button--close");
//     navContent.classList.remove("main-nav__content--open");
//   }
// };

menuButton.onclick = function (event) {
  event.preventDefault();

  // if (!menuButton.classList.contains("main-nav__button--close") && !navContent.classList.contains("main-nav__content--open")) {
  //   navButton.classList.add("main-nav__button--close");
  // } else {
  //   navButton.classList.remove("main-nav__button--close");
  // }


  if (!menuButton.classList.contains("nav__menu-button--close") && !navList.classList.contains("nav__list--visible") && !navList.classList.contains("nav__list--open")) {
    menuButton.classList.add("nav__menu-button--close");
    navList.classList.add("nav__list--visible");
    navList.classList.add("nav__list--open");
    setTimeout(function () {
      navList.classList.remove("nav__list--open");
    }, 300);
  }

  if (menuButton.classList.contains("nav__menu-button--close") && navList.classList.contains("nav__list--visible") && !navList.classList.contains("nav__list--open")) {
    navList.classList.add("nav__list--close");
    setTimeout(function () {
      menuButton.classList.remove("nav__menu-button--close");
      navList.classList.remove("nav__list--visible");
      navList.classList.remove("nav__list--close");
    }, 300);
  }
}
