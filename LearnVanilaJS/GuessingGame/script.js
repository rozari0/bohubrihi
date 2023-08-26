document.querySelector('form').addEventListener("submit", Check);

// From MDN
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}
randomNum = getRandomInt(1, 9 + 1)
console.log(randomNum)
chance = 3;

function Check(e) {
  e.preventDefault();
  guess = document.querySelector('#guess').value
  if (guess == '') {
    return alert("Please Enter A Number.")
  }
  if (guess == randomNum) {
    return document.write("You Win!")
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
    return document.write("You Lose.")
  }

}