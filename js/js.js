const red = 'cc0000';
const yellow = 'ffdb58';
const blue = '082567';
const green = '2e8b57';
const orange = 'b7410e';
const lightBlue = 'afeeee';
const losos = 'ff8c69';
const colors = [red, yellow, blue, green, orange, lightBlue, losos];
let count = 0;
let textInHTML = 'Хватит тыкать!!';

const body = document.querySelector('body')
const btn = document.querySelector('#btn');
const countElem = document.querySelector('#count');
const textElem = document.querySelector('text');

changeCount()
btn.addEventListener('click', function () {

    body.style.background = `#${colors[randomNum(0, 6)]}`;
    count++;
    changeCount();
    if (count === 10) {
        text.innerText = textInHTML;
        text.style.background = 'rgb(78, 78, 78)';
    } else if (count === 30) {
        text.innerText = textInHTML = 'Я серьезно!!';
        text.style.background = 'rgb(143, 97, 97)';
    } else if (count === 50) {
        text.innerText = textInHTML = 'Меня уже бесит.';
        text.style.background = 'rgb(126, 46, 46)';
    } else if (count === 70) {
        text.innerText = textInHTML = 'Тебе не лень?';
        text.style.background = 'rgb(136, 22, 22)';
    } else if (count === 100) {
        text.innerText = textInHTML = 'Ладно....';
        text.style.background = 'rgb(133, 240, 112)';
    } else if (count === 110) {
        text.innerText = textInHTML = 'ПОШЕЛ НАХУЙ!!!!1!!1';
        text.style.background = 'rgb(255, 0, 0)';
    };
});

// Functions
function changeCount() {
    countElem.innerText = String(count)
};

function randomNum(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}

