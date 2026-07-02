let progress = 0;

const fill = document.getElementById("fill");
const percent = document.getElementById("percent");

const loading = setInterval(function(){

    progress++;

    fill.style.width = progress + "%";
    percent.innerHTML = progress + "%";

    if(progress >= 100){

        clearInterval(loading);

        percent.innerHTML = "PLAY";

        document.getElementById("loadingBar").style.cursor = "pointer";

        document.getElementById("loadingBar").onclick = function(){

            alert("Lobby-ul va fi adăugat în pasul următor!");

        };

    }

},30);
