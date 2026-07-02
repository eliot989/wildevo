let progress = 0;

const fill = document.getElementById("fill");
const text = document.getElementById("text");

const loading = setInterval(() => {

    progress++;

    fill.style.width = progress + "%";
    text.innerHTML = progress + "%";

    if(progress >= 100){

        clearInterval(loading);

        text.innerHTML = "PLAY";
    }

},30);
