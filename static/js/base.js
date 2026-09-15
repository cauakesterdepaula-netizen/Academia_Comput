const botao = document.querySelector(".botao");
const lateral = document.querySelector(".lateral1");

botao.addEventListener("click", function() {
    lateral.classList.toggle("aberta");
    botao.classList.toggle("aberto");
});

function abrirMenu() {
    const menu = document.getElementById("menuConta");

    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}
