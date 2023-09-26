// Описан в документации
import flatpickr from "flatpickr";
// Дополнительный импорт стилей
import "flatpickr/dist/flatpickr.min.css";
import '../css/common.css';
// Напиши скрипт таймера, который ведёт обратный отсчет до определенной даты. 
// Такой таймер может использоваться в блогах и интернет-магазинах, страницах регистрации событий, 
// во время технического обслуживания и т. д. Посмотри демо видео работы таймера.
// В HTML есть готовая разметка таймера, поля выбора конечной даты и кнопки, 
// при клике по которой таймер должен запускаться. Добавь минимальное оформление элементов интерфейса.

// -----------------Шагає з мінусом----------------
const targetDate = new Date();
// console.log(targetDate);

setInterval(()=>{
    const currentDate = new Date();
    // console.log(currentDate);
    const deltaTime = targetDate - currentDate;
        const { days, hours, minutes, seconds } = convertMs(deltaTime);
        // console.log(`${days}:${hours}:${minutes}:${seconds}`);

    // console.log(convertMs(targetDate - currentDate));

},1000)

function pad(value) {
    return String(value).padStart(2, "0");
}


function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = pad(Math.floor(ms / day));
    // Remaining hours
    const hours = pad(Math.floor((ms % day) / hour));
    // Remaining minutes
    const minutes = pad(Math.floor(((ms % day) % hour) / minute));
    // Remaining seconds
    const seconds = pad(Math.floor((((ms % day) % hour) % minute) / second));
  
    return { days, hours, minutes, seconds };
  }
  
//   console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
//   console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
//   console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}
const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      console.log(selectedDates[0]);
    },
  };цц222ц2