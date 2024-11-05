// 16
function openNav() {
    document.getElementById("sidebar").style.width = "250px";
    document.getElementById("bod").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("sidebar").style.width = "0";
    document.getElementById("bod").style.marginLeft = "0";
}


// 17
let month = document.querySelector(".month");
let day = document.querySelector(".day");
let date = document.querySelector(".date");
let year = document.querySelector(".year");

let currentDate = new Date();


let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October",
    "November", "December"];

month.innerHTML = months[currentDate.getMonth()];
day.innerHTML = days[currentDate.getDay()];
date.innerHTML = currentDate.getDate();
year.innerHTML = currentDate.getFullYear();


// 18

let lists = document.getElementsByClassName("list");
let right = document.getElementById("right-box");
let left = document.getElementById("left-box");

for (let x of lists) {
    x.addEventListener("dragstart", function(e) {
        let sel = e.target;
        right.addEventListener("dragover", function(e) {
            e.preventDefault();
        });
        right.addEventListener("drop", function(e) {
            e.preventDefault();
            this.appendChild(sel);
            sel = null;
        });

        left.addEventListener("dragover", function(e) {
            e.preventDefault();
        });
        left.addEventListener("drop", function(e) {
            e.preventDefault();
            this.appendChild(sel);
            sel = null;
        });
    });
}


// 19
function playGame(playerChoice){
    const playerText = document.querySelector("#playerText");
    const computerText = document.querySelector("#computerText");
    const resultText = document.querySelector("#resultText");

    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    let result = '';

    if (playerChoice === computerChoice) {
        result = 'Draw!';
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        result = 'You win!';
    } else {
        result = 'You lose!';
    }

    playerText.textContent = `Player: ${playerChoice}`
    computerText.textContent = `Computer: ${computerChoice}`
    resultText.textContent = `Result: ${result}`
}


// 20
let dateClock = new Date();
let hours = dateClock.getHours();
let minutes = dateClock.getMinutes();
let seconds = dateClock.getSeconds();
document.getElementById("hours").innerHTML = hours;
document.getElementById("mins").innerHTML = minutes;
document.getElementById("seconds").innerHTML = seconds;