var navJoinButton = document.querySelector(".nav__join-button");

document.addEventListener("DOMContentLoaded", function () {
  if (window.matchMedia("(max-width: 1439px)").matches) {
    navJoinButton.setAttribute("tabindex", 4);
  }
});
