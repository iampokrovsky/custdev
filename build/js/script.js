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

var infoCitiesList = document.querySelector(".info__cities");
var infoCities = document.querySelectorAll(".info__city");

for (var i = 0; i < infoCities.length; i++) {
  infoCities[i].onclick = function (event) {
    event.preventDefault();

    if (!this.classList.contains("info__city--current")) {
      for (var n = 0; n < cities.length; n++) {
        if (infoCities[n].classList.contains("info__city--current")) {
          infoCities[n].classList.remove("info__city--current");
        }
      }

      this.classList.add("info__city--current");
    }
  }
}

var nav = document.querySelector(".nav");
var menu = document.querySelector(".menu");
var menuButton = document.querySelector(".menu__button");
var menuList = document.querySelector(".menu__list");

document.addEventListener("DOMContentLoaded", function () {
  if (nav.classList.contains("nav--no-js")) {
    nav.classList.remove("nav--no-js");
  }

  if (menu.classList.contains("menu--no-js")) {
    menu.classList.remove("menu--no-js");
  }

  if (menuButton.classList.contains("menu__button--no-js")) {
    menuButton.classList.remove("menu__button--no-js");
  }

  if (menuList.classList.contains("menu__list--no-js")) {
    menuList.classList.remove("menu__list--no-js");
  }
});

menuButton.onclick = function (event) {
  event.preventDefault();

  if (!menuButton.classList.contains("menu__button--close") && !menuList.classList.contains("menu__list--visible") && !menuList.classList.contains("menu__list--open")) {
    menuButton.classList.add("menu__button--close");
    menuList.classList.add("menu__list--visible");
    menuList.classList.add("menu__list--open");
    setTimeout(function () {
      menuList.classList.remove("menu__list--open");
    }, 300);
  }

  if (menuButton.classList.contains("menu__button--close") && menuList.classList.contains("menu__list--visible") && !menuList.classList.contains("menu__list--open")) {
    menuList.classList.add("menu__list--close");
    setTimeout(function () {
      menuButton.classList.remove("menu__button--close");
      menuList.classList.remove("menu__list--visible");
      menuList.classList.remove("menu__list--close");
    }, 300);
  }
}

var navJoinButton = document.querySelector(".nav__join-button");

document.addEventListener("DOMContentLoaded", function () {
  if (window.matchMedia("(max-width: 1439px)").matches) {
    navJoinButton.setAttribute("tabindex", 4);
  }
});
