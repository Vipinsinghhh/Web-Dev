const clock = document.getElementById('clock');
// const clock = document.querySelector('#clock')

setInterval(function () {
  let date = new Date();
  // console.log(date.toLocaleTimeString());  //prints in terminal
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);


//------------------Notes--------------------------
//setTimeout function

// let timer = setInterval(() => console.log("Running..."), 1000);

// // 5 seconds ke baad stop karne ke liye
// setTimeout(() => {
//   clearInterval(timer);
//   console.log("Stopped!");
// }, 5000);

//------------------------------------------------

//clearInterval - used for stop running code

// let timer = setInterval(() => {
//   console.log("Running...");
// }, 1000);

// setTimeout(() => {
//   clearInterval(timer);
//   console.log("Stopped!");
// }, 5000);

//-----------------Example-------------------------------

// const clock = document.getElementById('clock')

// setInterval(function(){
//   let date = new Date();
//   clock.innerHTML = date.toLocaleTimeString();
//   setTimeout(function(){
//     clearInterval(clock) 
//     clock.innerHTML = 'clock stopped'
//   },5000)
// },1000)