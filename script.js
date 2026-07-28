const cover = document.getElementById("cover");
const video = document.getElementById("video");

let started = false;

cover.addEventListener("click", () => {

    if(started) return;

    started = true;

    video.classList.add("show");

    video.play();

    setTimeout(()=>{
        cover.classList.add("hidden");
    },200);

});

video.addEventListener("ended", () => {
    video.pause();
});
