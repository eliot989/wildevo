body {
margin: 0;
background: #0b0f14;
font-family: Arial;
color: white;
overflow: hidden;
}

/* LOADING */
#loading {
position: absolute;
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background: black;
}

.logo {
font-size: 40px;
margin-bottom: 20px;
}

.bar {
width: 300px;
height: 20px;
background: #333;
border-radius: 10px;
overflow: hidden;
}

#fill {
height: 100%;
width: 0%;
background: lime;
}

#percent {
margin-top: 10px;
}

/* LOBBY */
.hidden {
display: none;
}

/* TOP */
.top {
position: absolute;
top: 10px;
left: 10px;
background: rgba(0,0,0,0.5);
padding: 10px;
border-radius: 10px;
}

/* XP BAR */
.xp-bar {
width: 200px;
height: 20px;
background: #222;
margin-top: 5px;
position: relative;
}

#xpFill {
height: 100%;
width: 0%;
background: lime;
}

#xpText {
position: absolute;
width: 100%;
text-align: center;
font-size: 12px;
}

/* USERNAME */
.username {
position: absolute;
bottom: 20px;
left: 20px;
}

.username input {
padding: 5px;
background: black;
color: white;
border: 1px solid white;
}

/* PLAY */
.center {
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%,-50%);
}

.center button {
padding: 20px 60px;
font-size: 30px;
background: lime;
border: none;
cursor: pointer;
}

/* MENU */
.menu {
position: absolute;
right: 10px;
top: 150px;
display: flex;
flex-direction: column;
gap: 10px;
}

/* TASKS */
.tasks {
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%,-50%);
background: rgba(0,0,0,0.9);
padding: 20px;
}
