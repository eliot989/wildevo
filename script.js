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

// PLAY text
percent.innerText = "PLAY";

// 🔥 IMPORTANT: AUTO SWITCH (fără click)
setTimeout(() => {

// ascunde loading complet
loadingBar.style.display = "none";
loadingBg.style.display = "none";

// arată lobby
lobby.style.display = "block";

}, 300);

}

}, 25);

};
