// INTERAÇÃO COM O CABEÇALHO (edgecam, worknc e alphacam)
var cabecalho = document.getElementById("cabecalho");

window.addEventListener("scroll", function() {

    if (window.scrollY > 100) {
        cabecalho.classList.add("azul-forte");
    } else {
        cabecalho.classList.remove("azul-forte");
    }
});

// INTERAÇÃO COM AS TROCAS DE BASE (todas soluções)
document.addEventListener("DOMContentLoaded", function(){
    const magia = document.querySelectorAll('.informacoes');

    function checkPosition() {
        for (let informacoes of magia) {
            if (informacoes.getBoundingClientRect().top < window.innerHeight) {
                informacoes.classList.add('visible');
            }
        }
    }

    window.addEventListener('scroll', checkPosition);
    checkPosition();
});

//INTERAÇÃO DOS BOTÕES SELECIONADOS COM O CONTEÚDO
const button = document.querySelectorAll('.botoes');
const softwares = document.querySelectorAll('.contra');

button.forEach((botoes, indice) => {
    botoes.addEventListener("click", () =>{

        const botoesSelecionado = document.querySelector(".botoes.selecionado");
        botoesSelecionado.classList.remove("selecionado");

        botoes.classList.add("selecionado")

        const softwaresSelecionado = document.querySelector(".contra.selecionado");
        softwaresSelecionado.classList.remove("selecionado");

        softwares[indice].classList.add("selecionado");

        
    });
});