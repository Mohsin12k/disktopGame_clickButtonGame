const car = document.getElementById('car');
const datetime = document.getElementById('datetime');

const today = new Date();
let carInterval = null;
let countPx = -1500;
let speed = 10;

const provideDate = {
    day : "2-digit",
    weekday: "short",
    month: "short",
    year: "numeric"
};

datetime.innerText = today.toLocaleDateString("en-US", provideDate);

const start = () => {
    if(carInterval !== null) return;

    carInterval = setInterval(() => {
        if(countPx >= 1400){
            reset();
            return;
        }

        countPx += 5;
       car.style.marginLeft = countPx + "px";
    }, speed);
};

const stop = () => {
    clearInterval(carInterval);
    carInterval = null;
    countPx = -1500;
};

const reset = () => {
    stop();
    countPx = -1500;
    car.style.marginLeft = countPx + "px";
};

const end = () => {
    reset();
    countPx = -1500;
    window.location.href = "./index.html";
};