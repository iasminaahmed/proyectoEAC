

const btnMenu = document.querySelector(".btnMenu"); 

const menuNav = document.querySelector("nav");

const btnCerrar = document.querySelector(".btnCerrar");

btnMenu.addEventListener("click", function(){

    //Esto es lo que ocurre cuando haga click 
    // sobre  el boton menu burger.

    menuNav.classList.toggle("show");


});

btnCerrar.addEventListener("click", function(){

    //Esto es lo que ocurre cuando haga click 
    // sobre  el boton menu burger.

    menuNav.classList.toggle("show");


});