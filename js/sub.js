document.addEventListener("DOMContentLoaded", function () {
    let backToTop = document.getElementById("backToTop");

    window.addEventListener("scroll", function () {
        let scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;

        if (scrollPercent > 40) {
            backToTop.style.visibility = "visible";
            setTimeout(() => {
                backToTop.style.opacity = "1";
                backToTop.style.transform = "scale(1)";
                backToTop.style.boxShadow = "0 0px 5px black"
            }, 10);
        } else if(scrollPercent < 40) {
            backToTop.style.transform = "scale(0.8)";
            backToTop.style.opacity = "0";
            setTimeout(() => {
                backToTop.style.visibility = "hidden";
            }, 10);
        }
    });

    backToTop.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" }); // Faz a rolagem suave ao topo
    });
});

let arrow = document.getElementById('arrow');
let but = document.getElementById('backToTop');

but.addEventListener('mouseenter', () => {
    arrow.classList.add('arrow_up'); // Adiciona a animação ao passar o mouse
});

but.addEventListener('mouseleave', () => {
    arrow.classList.remove('arrow_up'); // Remove a animação ao tirar o mouse
});