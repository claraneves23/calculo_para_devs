let arrow = document.getElementById('arrow');
let but = document.getElementById('backToTop');

but.addEventListener('mouseenter', () => {
    arrow.classList.add('arrow_up'); // Adiciona a animação ao passar o mouse
});

but.addEventListener('mouseleave', () => {
    arrow.classList.remove('arrow_up'); // Remove a animação ao tirar o mouse
});

document.addEventListener("DOMContentLoaded", function () {
    let backToTop = document.getElementById("backToTop");

    window.addEventListener("scroll", function () {
        let scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;

        if (scrollPercent > 45) {
            backToTop.style.display = "flex"; // Mostra o botão
            backToTop.style.opacity = "1";
        } else {
            backToTop.style.opacity = "0";
            setTimeout(() => {
                backToTop.style.display = "none"; // Esconde após a transição
            }, 500);
        }
    });

    backToTop.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" }); // Faz a rolagem suave ao topo
    });
});