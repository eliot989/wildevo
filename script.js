let progress = 0;

const fill = document.getElementById("fill");
const percent = document.getElementById("percent");

const loadingScreen = document.getElementById("loadingScreen");
const lobby = document.getElementById("lobby");

let timer = setInterval(() => {

progress++;

fill.style.width = progress + "%";
percent.innerText = progress + "%";

if(progress >= 100){

clearInterval(timer);

percent.innerText = "PLAY";

// click PLAY -> lobby
setTimeout(() => {

loadingScreen.style.display = "none";
lobby.style.display = "block";

}, 500);

}

}, 30);
