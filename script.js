let progress = 0;

const fill = document.getElementById("fill");
const percent = document.getElementById("percent");
const loadingBar = document.getElementById("loadingBar");
const loadingBg = document.getElementById("loadingBg");
const lobby = document.getElementById("lobby");

window.onload = function () {

let timer = setInterval(() => {

progress++;

fill.style.width = progress + "%";
percent.innerText = progress + "%";

if (progress >= 100) {

clearInterval(timer);

percent.innerText = "PLAY";

loadingBar.style.cursor = "pointer";

loadingBar.onclick = function () {

// hide loading
loadingBar.style.display = "none";
loadingBg.style.display = "none";

// show lobby
lobby.style.display = "block";

};

}

}, 25);

};
