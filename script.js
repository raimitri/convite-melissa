const loading = document.getElementById("loading");
const cover = document.getElementById("cover");
const video = document.getElementById("video");

let started = false;

// Quando o vídeo terminar de carregar
video.addEventListener("canplaythrough", () => {
    loading.classList.add("hide");
});

// Caso demore muito, remove o loading após 4 segundos
setTimeout(() => {
    loading.classList.add("hide");
}, 4000);

// Inicia o vídeo ao tocar na capa
cover.addEventListener("click", async () => {

    if (started) return;
    started = true;

    video.classList.add("show");
    cover.classList.add("hide");

    try {
        await video.play();
    } catch (err) {
        console.log(err);
    }

});

// Mantém o último frame
video.addEventListener("ended", () => {
    video.pause();

    try {
        video.currentTime = video.duration - 0.05;
    } catch (e) {}
});

// Impede menu de contexto
document.addEventListener("contextmenu", e => {
    e.preventDefault();
});

// Impede seleção
document.addEventListener("selectstart", e => {
    e.preventDefault();
});

// Evita arrastar imagem
document.addEventListener("dragstart", e => {
    e.preventDefault();
});

// Impede zoom duplo no iPhone
let lastTouchEnd = 0;

document.addEventListener("touchend", function (event) {

    const now = new Date().getTime();

    if (now - lastTouchEnd <= 300) {
        event.preventDefault();
    }

    lastTouchEnd = now;

}, false);
