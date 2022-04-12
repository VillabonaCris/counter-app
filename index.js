//document.getElementById('count-el').innerText = 5;
let countDisplay = document.getElementById('count-el');
let increaseButton = document.getElementById('increase')
let decreaseButton = document.getElementById('decrease');
let count = 0;
let save = document.getElementById('save-btn');
let p = document.getElementById('prev-entries');

increaseButton.addEventListener('click', () => {
  countDisplay.innerText = count += 1;
})

decreaseButton.addEventListener('click', () => {
  countDisplay.innerText = count -= 1;
})

save.addEventListener('click', () => {
  let countStr = ` ${count + ' - '}`;
  p.innerText += countStr;
  count = 0;
  countDisplay.innerText = count;

})

let myAge = 29;
let myDogAge = myAge * 7;
console.log(myDogAge); 