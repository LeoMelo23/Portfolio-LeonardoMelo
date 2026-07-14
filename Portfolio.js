

const botao = document.querySelector("#botao-tema");
const body = document.body;

/* Persistencia do tema */
const temaSalvo = localStorage.getItem("tema");
temaClaro(temaSalvo === "claro");

/* Função para alternar o tema */
function temaClaro(tipo) {
   if(tipo==true){
    body.classList.add("claro");
    botao.classList.remove("fa-sun");
    botao.classList.add("fa-moon");
   }else{
    body.classList.remove("claro");
    botao.classList.remove("fa-moon");
    botao.classList.add("fa-sun");
   }
}

botao.addEventListener("click", function() {
  const isclaro = body.classList.toggle("claro");
  temaClaro(isclaro);
  localStorage.setItem("tema", isclaro ? 'claro' : 'escuro');
});


/* Scroll suave para links do menu */
const navLinks = document.querySelectorAll('#menu a.link[href^="#"]:not([href="##"])'); // Seleciona todos os links de navegação
navLinks.forEach(link => {
    link.addEventListener("click", function(e) {
      e.preventDefault(); // Impede o comportamento padrão do link
      const target = document.querySelector(this.getAttribute("href")); // Obtém o elemento de destino
      if(target){
        const headerHeight = document.querySelector("header").offsetHeight; // Obtém a altura do header
        const targetPosition = target.offsetTop - headerHeight; // Calcula a posição de destino ajustada pela altura do header
        window.scrollTo({
          top: targetPosition,
          behavior: "smooth" // Rola suavemente para a posição de destino
        });
      }
    });
});

const projetos = {
  '.imagem_ModaOra': 'ModaOra',
  '.imagem_aprenser': 'Aprenser',
  '.imagem_Ciox': 'ciox',
  '.imagem_serDigital': 'serDigital',
  '.imagem_Android': 'Android',
  '.imagem_IMC' : 'IMC',
  '.imagem_CloneUber':'CloneUber'
}

Object.entries(projetos).forEach(([classe, id]) => {
  document.querySelector(classe).addEventListener('click', () => {
    document.getElementById(id).showPopover()
  })
})

const btnMenu = document.getElementById("buttonHamburguer");
const btnClose = document.getElementById("btn-close");
const menu = document.getElementById("menu-mobile");
const overlay = document.querySelector("#overlay")


btnMenu.onclick = () => {
    menu.classList.add("active");
    overlay.classList.add("active");
};

function fecharMenu(){
    menu.classList.remove("active");
    overlay.classList.remove("active");
}

btnClose.onclick = fecharMenu;
overlay.onclick = fecharMenu;

const media = window.matchMedia("(min-width: 768px)");

media.addEventListener("change", (e) => {
    if (e.matches) {
        menu.classList.toggle("active");
        overlay.classList.toggle("active");
    }
});