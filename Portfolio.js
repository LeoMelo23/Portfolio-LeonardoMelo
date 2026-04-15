let menuButton = document.querySelector("#buttonHamburguer");
let menu = document.querySelector(".menu")

menuButton.addEventListener("click",function(){
    menu.classList.toggle("menu-ativo");
})
