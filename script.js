const cover = document.getElementById("cover");
const video = document.getElementById("video");

cover.addEventListener("click", async () => {
    // Esconde a imagem
    cover.classList.add("hidden");

    // Mostra o vídeo
    video.classList.add("show");

    // Inicia o vídeo
    try {
        await video.play();
    } catch (e) {
        console.log(e);
    }
});

// Quando o vídeo terminar, ele permanece no último frame
video.addEventListener("ended", () => {
    video.pause();
});
