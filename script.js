let progress = 0;

const fill = document.getElementById("fill");
const text = document.getElementById("text");

let load = setInterval(() => {
    progress++;
    fill.style.width = progress + "%";
    text.innerHTML = progress + "%";

    if(progress >= 100){
        clearInterval(load);
        text.innerHTML = "PLAY";

        document.getElementById("loadingBar").onclick = () => {
            window.location.href = "lobby.html";
        };
    }
}, 30);
