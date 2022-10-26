// // let form = document.querySelector(".form");

// // let hour = document.querySelector(".hour");
// // let minute = document.querySelector(".minute");
// // let secund = document.querySelector(".secund");
// window.addEventListener("DOMContentLoaded", ()=>{


// let yashil = document.querySelector(".yashil");
// let qzil = document.querySelector(".qzil");
// let sariq = document.querySelector(".sariq");

// let soat = document.querySelector(".soat");
// let minut = document.querySelector(".minut");
// let secund = document.querySelector(".secund");
// let milsecund = document.querySelector(".msecund");

// let Vsoat = 0;
// let Vminut = 0;
// let Vsecund = 0;
// let Vmilsecund = 0;

// yashil.addEventListener("click", () => {
//   let interval = setInterval(() => {
//     Vmilsecund++;
//     if (Vmilsecund == 100) {
//       Vsecund++;
//       Vmilsecund = 0;
//     }
//     if (Vsecund == 60) {
//       Vminut++;
//       Vsecund = 0;
//     }
//     if (Vminut == 60) {
//       Vsoat++;
//       Vminut = 0;
//     }

//     milsecund.innerHTML = Vmilsecund;

//     secund.innerHTML = Vsecund;

//     minut.innerHTML = Vminut;

//     soat.innerHTML = Vsoat;
//   }, 10);
//   qzil.addEventListener("click", () => {
//     clearInterval(interval);
//   });

//   sariq.addEventListener("click", () => {
//     clearInterval(interval);

//     milsecund.innerHTML = "00";

//     secund.innerHTML = "00";

//     minut.innerHTML = "00";

//     soat.innerHTML = "00";

//     Vmilsecund = 0;

//     Vsecund = 0;

//     Vminut = 0;

//     Vsoat = 0;
//   });
// });


// })



"use strict"

// Timer
const startBtn = document.querySelector("[data-start]"),
  stopBtn = document.querySelector("[data-stop]"),
  resetBtn = document.querySelector("[data-reset]");

let hour = document.querySelector(".hour"),
  minute = document.querySelector(".minute"),
  second = document.querySelector(".second"),
  milliSecund = document.querySelector(".milli-secund");

let index = 0;
let secundValue = 0;
let minuteValue = 0;
let hourValue = 0;

startBtn.addEventListener("click", () => {
  let interval = setInterval(() => {
    index++;
    if (index === 100) {
      secundValue++;
      index = 0;
    }

    if (secundValue == 60) {
      minuteValue++;
      secundValue = 0;
    }

    if (minuteValue == 0) {
      hourValue + 1;
      minuteValue = 0;
    }

    if (index < 10) {
      index = "0" + index;
    }

    milliSecund.innerHTML = index;
    second.innerHTML = secundValue < 10 ? `0${secundValue}` : secundValue;
    minute.innerHTML = minuteValue < 10 ? `0${minuteValue}` : minuteValue;
    hour.innerHTML = hourValue < 10 ? `0${hourValue}` : hourValue;
  }, 10);

  stopBtn.addEventListener("click", () => {
    clearInterval(interval);
  });

  resetBtn.addEventListener("click", () => {
    clearInterval(interval);
    index = 0;
    secundValue = 0;
    minuteValue = 0;
    hourValue = 0;
    milliSecund.innerHTML = '00';
    second.innerHTML = '00';
    minute.innerHTML = '00';
    hour.innerHTML = '00';
  });
});