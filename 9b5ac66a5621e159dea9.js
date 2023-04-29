document.addEventListener('DOMContentLoaded', main);
var contador = 1;
function main() {
  var menuBar = document.querySelector('.header__menu-bar');
  var nav = document.querySelector(".header__nav");
  menuBar.addEventListener('click', function () {
    if (contador === 1) {
      nav.style.left = '0';
      contador = 0;
    } else {
      contador = 1;
      nav.style.left = '100%';
    }
    menuBar.classList.toggle("header__menu-bar--open");
  });
}
;
var menuInternoOne = document.querySelector(".list__sub-items");
var menuInternoTwo = document.querySelector(".list__sub-itemsTwo");
function navbar() {
  var btnFeature = document.getElementById("btn__feature");
  btnFeature.addEventListener("click", function () {
    menuInternoOne.classList.toggle("showItems");
  });
  var btnCompany = document.getElementById("btn__company");
  btnCompany.addEventListener("click", function () {
    menuInternoTwo.classList.toggle("showItems");
  });
}
navbar();