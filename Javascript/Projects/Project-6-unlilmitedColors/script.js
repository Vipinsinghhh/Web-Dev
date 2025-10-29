// //generate a random color

const randomColor = function ran() {
  const hex = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

// console.log(randomColor())

//generate a random color

let intervalId;
const startChangingColor = function () {
  if (!intervalId) {
    intervalId = setInterval(changeBgColor, 1000);
  }

  function changeBgColor() {
    document.body.style.backgroundColor = randomColor();
  }
};
const stopChangingColor = function () {
  clearInterval(intervalId);
  intervalId = null;
};

document.querySelector('#start').addEventListener('click', startChangingColor);

document.querySelector('#stop').addEventListener('click', stopChangingColor);

//----------------my version--------------------------------

// const start = document.querySelector('#start')
// const stop = document.querySelector('#stop')

// start.addEventListener('click',function(){
//     let IntervalId = setInterval(function(){
//         document.body.style.backgroundColor = randomColor()
// },1000)

// stop.addEventListener('click',function(){
//     clearInterval(IntervalId)
// })

// })

