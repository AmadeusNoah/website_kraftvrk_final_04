"use strict";

// Når HTML og CSS er loaded startes sidenVises
window.addEventListener("load", sidenVises);

// Når #burger_knap er "clicked" startes toggleMenu
function sidenVises() {
    const burgerKnap = document.querySelector("#burger_knap");
    burgerKnap.addEventListener("click", toggleMenu);

} 

// Hvis #burger_knap og #menu ikke hasr classen .open, addes den.
// Hvis de omvendt har .open, fjernes den
function toggleMenu() {
    const burgerKnap = this;
    const menu = document.querySelector("#menu");

    burgerKnap.classList.toggle("open");
    menu.classList.toggle("open");
}
