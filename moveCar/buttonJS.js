const circle = document.querySelector('.circle');
const percentage = document.querySelector('.percentage');

let intervalValue = null;
let startValue = 0;
let endValue = 100;
let speed = 20;
let isRunning = false;

const startGame = () => {

    if(isRunning) return;
    isRunning = true;
    
intervalValue = setInterval(() => {
    startValue += 1;

    percentage.innerText = `${startValue}%`;
    circle.style.background = `conic-gradient(chartreuse ${startValue * 3.6}deg, 
    lightgray ${startValue * 3.6}deg)`;
    if(startValue === endValue){
        clearInterval(intervalValue);
        gameStarted();
        return;
    }
}, speed);    
}

const gameStarted = () => {
    percentage.innerText = "Game Started";
    window.location.href = "./moveCar.html";
}