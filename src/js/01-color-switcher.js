// В HTML есть кнопки «Start» и «Stop».

// <button type="button" data-start>Start</button>
// <button type="button" data-stop>Stop</button>

// Напиши скрипт, который после нажатия кнопки «Start», раз в секунду меняет цвет фона <body> 
// на случайное значение используя инлайн стиль. При нажатии на кнопку «Stop», 
// изменение цвета фона должно останавливаться.

// ВНИМАНИЕ
// Учти, на кнопку «Start» можно нажать бесконечное количество раз. Сделай так, 
// чтобы пока изменение темы запушено, кнопка «Start» была не активна (disabled).

// Для генерации случайного цвета используй функцию getRandomHexColor.

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
// }
//-----CАМА СПРОСТИЛА ПІСЛЯ РЕПЕТИ-------
const refs = {
    startBtn: document.querySelector('button[data-start]'),
    stopBtn: document.querySelector('button[data-stop]'),
};
    // console.log(refs.startBtn);
    // console.log(refs.stopBtn);
let intervalId = null;


refs.startBtn.addEventListener('click', onStartClick); 
refs.stopBtn.addEventListener('click', onStopClick);

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }

function onStartClick (evt) {
    intervalId = setInterval(() => {
        let color = getRandomHexColor();
        document.body.style.backgroundColor = color;  
    }, 1000);  
    refs.startBtn.disabled = true;
 
};

function onStopClick (evt) {
    refs.startBtn.disabled = false;

    clearInterval(intervalId);
};

//-------------ПО РЕПЕТІ------
// const refs = {
//     startBtn: document.querySelector('button[data-start]'),
//     stopBtn: document.querySelector('button[data-stop]'),
// };
//     console.log(refs.startBtn);
//     console.log(refs.stopBtn);

// refs.startBtn.addEventListener('click', onStartClick); 
// refs.stopBtn.addEventListener('click', onStopClick);

// function getRandomHexColor() {
//     return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
//   }

// const timer = { 
//     intervalId: null,
//     isActive: false,
    
//     start() {
//         if (this.isActive) {
//             return;
//         };
    
//         this.isActive = true;
//         this.intervalId = setInterval(() => {
//         let color = getRandomHexColor();
//         document.body.style.backgroundColor = color;
        
//     }, 1000);  
//     refs.startBtn.disabled = true; 
//     },
//     stop() {
//         clearInterval(this.intervalId);
//         this.isActive = false;
        
        
//     },
    
    
// };


