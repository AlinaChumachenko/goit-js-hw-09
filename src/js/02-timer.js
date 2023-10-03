
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';



const refs = {
  inputSelectDate:  document.querySelector('#datetime-picker'),  
  startBtn: document.querySelector('button[data-start]'),
  dataDays: document.querySelector('span[data-days]'),
  dataHours: document.querySelector('span[data-hours]'),
  dataMinutes: document.querySelector('span[data-minutes]'),
  dataSeconds: document.querySelector('span[data-seconds]'),
}

let timer = null;
refs.startBtn.disabled = true;


refs.startBtn.addEventListener('click', onClickStart);

function onClickStart (evt) {
    timer = setInterval(() => {
    startTimer();
}, 1000); 
  
};

function startTimer() {
 
  const ms = dateInput.selectedDates[0] - Date.now();
  const timerTime = convertMs(ms);
  const { days, hours, minutes, seconds } = timerTime;
  refs.dataDays.textContent = days;
  refs.dataHours.textContent = hours;
  refs.dataMinutes.textContent = minutes;
  refs.dataSeconds.textContent = seconds;
  refs.startBtn.disabled = true; //true

  if (ms <= 1000) {
  clearInterval(timer);
  // refs.startBtn.disabled = true;
  
  Notiflix.Notify.success('Timer has stopped');
}
};

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
    if (selectedDates[0].getTime() < options.defaultDate) {
      Notiflix.Notify.failure('Please, choose a date in the future');
    } else {
      refs.startBtn.disabled = false;
    }
  },
};
const dateInput = flatpickr(refs.inputSelectDate, options);


function addLeadingZero(value) {
  return String(value).padStart(2, "0");
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}
