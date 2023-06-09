function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}


const body = document.body;
const buttonStart = document.querySelector('button[data-start]');
const buttonStop = document.querySelector('button[data-stop]');
let timerId = 0;

buttonStart.addEventListener('click', () => {
    toggleDisableBtn(true);
    timerId = setInterval(() => {
        body.style.backgroundColor = getRandomHexColor();
    }, 1000);
    
})

buttonStop.addEventListener("click", () => {
  toggleDisableBtn(false);
  clearInterval(timerId);
});

function toggleDisableBtn(state) {
    buttonStart.disabled = state;
}