let minSecond = document.getElementById ('mini-second')
let  seconds = document.getElementById('second');
let  minuts = document.getElementById('minuts');
let  hour = document.getElementById('hours');
let mpm = document.getElementById('ampm')


function updateClock() {
  const now = new Date();
  let h = now.getHours();
  let m = now.getMinutes();
  let s = now.getSeconds();
  let i  = Math.floor(now.getMilliseconds() / 10);
let formattedMS = i < 10 ? '0' + i : i;
   let formattedSeconds = s < 10 ? '0' + s : s ;
   
   let formattedMinutes = m < 10 ? '0' + m : m;
  
  let formattedHours = h < 10 ? '0' + h : h;
  let ampmText = h >= 12 ? 'PM' : 'AM';
let h12 = h % 12 || 12; // تحويل نظام 24 إلى 12
  mpm.textContent = String(ampmText);
 hour.textContent = String(h12);
  hour.textContent = String(formattedMS)
  seconds.textContent =String(formattedSeconds)  ;
  hour.textContent = String(formattedHours) 
  minuts.textContent = String(formattedMinutes)
  
  
}

setInterval(updateClock, 10);