let progress = 0;

const fill = document.getElementById("fill");
const percent = document.getElementById("percent");
const playBtn = document.getElementById("playBtn");

let loading = setInterval(() => {

progress++;

fill.style.width = progress + "%";
percent.innerText = progress + "%";

if (progress >= 100) {
clearInterval(loading);
percent.innerText = "READY";
playBtn.style.display = "block";
}

}, 30);

/* PLAY → LOBBY */
function goLobby() {
document.getElementById("loading").style.display = "none";
document.getElementById("lobby").classList.remove("hidden");
}
