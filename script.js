let progress = 0;
let xp = 0;
let level = 0;

/* LOADING START */
const fill = document.getElementById("fill");
const percent = document.getElementById("percent");

let loading = setInterval(() => {
progress++;

fill.style.width = progress + "%";
percent.innerText = progress + "%";

if (progress >= 100) {
clearInterval(loading);
showLobby();
}

}, 25);

/* SHOW LOBBY */
function showLobby() {
document.getElementById("loading").style.display = "none";
document.getElementById("lobby").classList.remove("hidden");
}

/* PLAY BUTTON (RESET → LOADING AGAIN) */
function enterGame() {
document.getElementById("lobby").classList.add("hidden");
document.getElementById("loading").style.display = "flex";

progress = 0;

loading = setInterval(() => {
progress++;

fill.style.width = progress + "%";
percent.innerText = progress + "%";

if (progress >= 100) {
clearInterval(loading);
showLobby();
}

}, 25);
}

/* XP SYSTEM */
function addXP(amount) {
xp += amount;

if (xp >= 100) {
level++;
xp = 0;
document.getElementById("level").innerText = level;
}

document.getElementById("xpFill").style.width = xp + "%";
document.getElementById("xpText").innerText = xp + "/100";
}

/* TASKS */
function openTasks() {
document.getElementById("tasks").classList.remove("hidden");
}

function closeTasks() {
document.getElementById("tasks").classList.add("hidden");
}
