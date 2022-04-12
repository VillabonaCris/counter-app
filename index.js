//document.getElementById('count-el').innerText = 5;
let countDisplay = document.getElementById('count-el');
let increaseButton = document.getElementById('increase')
let count = 0;

increaseButton.addEventListener('click', () => {
  countDisplay.innerText = count += 1;
})

let myAge = 29;
let myDogAge = myAge * 7;
console.log(myDogAge); 