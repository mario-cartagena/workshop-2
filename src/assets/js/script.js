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

};



let menuInternoOne = document.querySelector(".list__sub-items");
let menuInternoTwo = document.querySelector(".list__sub-itemsTwo");

function navbar() {
    let btnFeature = document.getElementById("btn__feature");
    btnFeature.addEventListener("click", () => {
        menuInternoOne.classList.toggle("showItems")
    })
     let btnCompany = document.getElementById("btn__company");
    btnCompany.addEventListener("click", () => {
       menuInternoTwo.classList.toggle("showItems")
    })
}
navbar()