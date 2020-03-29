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
