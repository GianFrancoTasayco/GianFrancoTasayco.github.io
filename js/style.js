const slides = document.querySelector(".container_mid");
const flechaDerecha = document.getElementById("flecha-derecha");
const flechaIzquierda = document.getElementById("flecha-izquierda");
const slideUl = document.querySelector(".scroll-ul");
const btnHtoja= document.querySelector(".icon-feather")
const menuSlide = document.querySelector(".container-top")
var alturaMenuSl = menuSlide.offsetTop;

flechaDerecha.addEventListener("click", () =>{
    slides.scrollLeft += slides.offsetWidth;
});
flechaIzquierda.addEventListener("click", () =>{
    slides.scrollLeft -= slides.offsetWidth;
});
btnHtoja.addEventListener("click", () =>{
    slideUl.classList.toggle("show");
});
window.addEventListener("scroll" , function(){
    "use strict";
    if(window.pageYOffset > alturaMenuSl){
        menuSlide.classList.add("fixed");
    }
    else{
        menuSlide.classList.remove("fixed");
    }
});
