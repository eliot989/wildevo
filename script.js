let progress = 0;

const fill = document.getElementById("fill");
const text = document.getElementById("text");

const loading = setInterval(() => {

    progress++;

    fill.style.width = progress + "%";

    if (progress < 100) {
        text.innerHTML = progress + "%";
    }

    if (progress === 100) {

        clearInterval(loading);

        text.innerHTML = "Connecting to server...";

        setTimeout(() => {

            text.innerHTML = "Connected!";

            setTimeout(() => {

                window.location.href = "lobby.html";

            }, 1200);

        }, 1500);
    }

}, 25);
