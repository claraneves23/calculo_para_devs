let BtnSim = document.getElementById("BtnSim");
let BtnExc = document.getElementById("BtnExc");
let SimList = document.getElementById("SimList");
let ExcList = document.getElementById("ExcList");

BtnSim.addEventListener("mouseenter", function() {
    SimList.classList.add("here");
});

BtnSim.addEventListener("mouseleave", function() {
    SimList.classList.remove("here");
});

BtnExc.addEventListener("mouseenter", function() {
    ExcList.classList.add("here");
});

BtnExc.addEventListener("mouseleave", function() {
    ExcList.classList.remove("here");
});