let menuButton = document.querySelector("#buttonHamburguer");
let menu = document.querySelector(".menu")

menuButton.addEventListener("click",function(){
    menu.classList.toggle("menu-ativo");
})
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visivel')
            observer.unobserve(entry.target) // anima só uma vez
        }
    })
}, {
    threshold: 0.15 // aparece quando 15% do elemento está visível
})

document.querySelectorAll('.reveal').forEach(el => observer.observe(el))