const hamburguerIcon = document.querySelector(".header__icono");

hamburguerIcon.addEventListener("click", () => {
    hamburguerIcon.classList.toggle("header__icono--open");
});