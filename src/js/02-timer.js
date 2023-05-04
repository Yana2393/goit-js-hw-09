import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';


const inputDatetimePicker = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('button[data-start]');
const days = document.querySelector('span[data-days]');
const hours = document.querySelector('span[data-hours]');
const minutes = document.querySelector('span[data-minutes]');
const seconds = document.querySelector('span[data-seconds]');
const defaultDate = new Date();
let selectedDate;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate,
  minuteIncrement: 1,
    onClose(selectedDates) {
        selectedDate = selectedDates[0];
        if (selectedDate < defaultDate) {
            Notiflix.Notify.failure("Please choose a date in the future");
            startBtn.disabled = true;
        } else {
            startBtn.disabled = false;
        }
    },
    
};

flatpickr("#datetime-picker", options);

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
startBtn.disabled = true;
startBtn.addEventListener('click', () => {
    setInterval(() => {
        const today = new Date();
        const ms = selectedDate - today;
        const result = convertMs(ms);
        days.textContent = result.days;
        hours.textContent = result.hours;
        minutes.textContent = result.minutes;
        seconds.textContent = result.seconds;
    }, 1000)
});