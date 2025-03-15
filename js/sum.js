document.addEventListener("DOMContentLoaded", function () {
    let BtnSum = document.getElementById("BtnSum");
    let SumList = document.getElementById("SumList");
    let SumIcon = document.querySelector(".ri-list-unordered")

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
        if (!BtnSum.contains(event.target) && !SumList.contains(event.target)) {
            SumList.classList.remove("show");
        }
    });
});