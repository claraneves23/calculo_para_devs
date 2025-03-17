document.addEventListener("DOMContentLoaded", function () {
    let BtnSum = document.getElementById("BtnSum");
    let SumList = document.getElementById("SumList");
    let SumIcon = document.querySelector(".ri-list-unordered");

    // Seleciona todos os <h2> da página
    let headings = document.querySelectorAll("h2");

    // Preenche o sumário
    headings.forEach((heading, index) => {
        let id = "heading-" + index;
        heading.id = id; // Adiciona um ID único a cada <h2>

        let listItem = document.createElement("li");
        let link = document.createElement("a");
        link.href = "#" + id;
        listItem.innerText = heading.innerText; // Usa o texto do <h2>

        link.appendChild(listItem);
        SumList.appendChild(link);
    });

    let links = document.querySelectorAll("#SumList a");

    links.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault(); // Evita o comportamento padrão do link

            let targetId = this.getAttribute("href").substring(1); // Pega o ID do destino
            let targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: "smooth", // Faz a rolagem suave
                    block: "start" // Garante que o título fique no topo
                });
            }
        });
    });

    // Alternar a classe 'show' ao clicar no botão
    BtnSum.addEventListener("click", function () {
        SumList.classList.toggle("show");
        if (SumIcon.className === "ri-list-unordered")
            SumIcon.className = "ri-close-line";
        else
            SumIcon.className = "ri-list-unordered";
    });

    // Fechar o menu se clicar fora dele
    document.addEventListener("click", function (event) {
        if (!BtnSum.contains(event.target)) {
            SumList.classList.remove("show");
            SumIcon.className = "ri-list-unordered";
        }
    });
});