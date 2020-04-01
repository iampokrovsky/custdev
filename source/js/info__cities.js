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
