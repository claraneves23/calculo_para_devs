document.addEventListener("DOMContentLoaded", function() {
    let textElement = document.querySelector(".text");
    let text = textElement.innerText;
    textElement.innerText = "";

    let i = 0;
    function type() {
        if (i < text.length) {
            textElement.innerHTML += text[i];
            i++;
            setTimeout(type, 200);
        }
    }

    type();
});
