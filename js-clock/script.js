const houresArrow = document.querySelector('.houres-arrow');
const minutesArrow = document.querySelector('.minutes-arrow');
const secundesArrow = document.querySelector('.secundes-arrow');

function setDate() {
    const now = new Date();

    const secundes = now.getSeconds();
    const secundesDegrees = ((secundes / 60) * 360) + 90;
    secundesArrow.style.transform = `rotate(${secundesDegrees}deg)`;

    const minutes = now.getMinutes();
    const minutesDegrees = ((minutes / 60) * 360) + ((secundes/60)*6) + 90;
    minutesArrow.style.transform = `rotate(${minutesDegrees}deg)`;

    const houres = now.getHours();
    const houresDegrees = ((houres / 12) * 360) + ((minutes/60)*30)+ 90;
    houresArrow.style.transform = `rotate(${houresDegrees}deg)`;

    
}
setDate();

setInterval(setDate, 
  1000);
 
 
var count = 0;
function changeBg() {
  
  document.body.classList.toggle("light", count % 2 === 0);
  document.body.classList.toggle("dark", count % 2 === 1);
  count++;
}
document.addEventListener("DOMContentLoaded", changeBg);

changeColor.addEventListener('click', (e) => {
  console.log(e)
  const btn = document.getElementsByClassName('changeColor')
  console.log('btn', btn)
  if (btn.classList.contains('dark')) {
      btn.classList.remove('dark')
      
  } else {
      btn.classList.add('dark')
     
  }
})       


  





  