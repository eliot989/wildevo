let progress = 0;

const fill = document.getElementById("fill");
const text = document.getElementById("text");

let interval = setInterval(() => {

    progress++;

    fill.style.width = progress + "%";

    if(progress < 60){
        text.innerHTML = "Connecting to server...";
    }

    if(progress >= 60 && progress < 100){
        text.innerHTML = "Connected...";
    }

    if(progress >= 100){
        clearInterval(interval);
        window.location.href = "lobby.html";
    }

}, 30);
