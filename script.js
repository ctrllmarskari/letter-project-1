const text = "leclerc jelek,leclerc brewokan";
let index = 0;

function ketik() {
    if (index < text.length) {
        document.getElementById("text").innerHTML += text.charAt(index);
        index++;
        setTimeout(ketik, 100);
    }
}

function munculCinta() {
    document.querySelector(".heart").classList.add("show");
}

window.onload = ketik;
