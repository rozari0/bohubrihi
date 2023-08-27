document.querySelector('form').addEventListener("submit", Check);
document.querySelector('input').addEventListener("keyup",CheckIfOneDigit);
// From MDN
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}
randomNum = getRandomInt(1, 9 + 1)
console.log(randomNum)
chance = 3;

function CheckIfOneDigit(e){
  guess = document.querySelector('#guess').value;
  if (guess.length > 1){
    document.querySelector('#guess').value = guess[0];
  }
}

function Check(e) {
  e.preventDefault();
  guess = document.querySelector('#guess').value
  if (guess == '') {
    return alert("Please Enter A Number.")
  }
  if (guess == randomNum) {
    document.body.innerHTML = ""
    header = document.createElement('h1');
    header.innerHTML = "You Win!";
    document.body.appendChild(header);
    button = document.createElement('button');
    button.innerHTML = "Play Again?"
    button.onclick = function () {
      location.reload();
    }
    document.body.appendChild(button);
    return
  }
  else if (guess < randomNum) {
    document.querySelector('p').innerHTML = "Secret Number is bigger than your guess.";
    chance -= 1
  }
  else if (guess > randomNum) {
    document.querySelector('p').innerHTML = "Secret Number is less than your guess.";
    chance -= 1
  }
  if (chance < 1) {
    document.body.innerHTML = ""
    header = document.createElement('h1');
    header.innerHTML = "You Lose!";
    document.body.appendChild(header);
    button = document.createElement('button');
    button.innerHTML = "Try Again?"
    button.onclick = function () {
      location.reload();
    }
    document.body.appendChild(button);
    return
  }

}