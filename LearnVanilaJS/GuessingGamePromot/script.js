
// From MDN
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}
randomNum = getRandomInt(1, 9 + 1)
console.log(randomNum)
chance = 3;
chanceCount = document.querySelector('#chance')

while (0 <= chance) {
  guess = prompt("Input your guess: ")
  if (guess == '') {
    alert("Please Enter A Number.");
    continue;
  }
  if (guess === null) {
    document.body.innerHTML = "";
    header = document.createElement('h1');
    header.innerHTML = "Game canceled.";
    button = document.createElement('button');
    button.innerHTML = "Replay"
    button.onclick = function(){
      location.reload();
    }
    document.body.appendChild(header);
    document.body.appendChild(button);
    break;
  }
  if (guess == randomNum) {
    document.body.innerHTML = "";
    header = document.createElement('h1');
    header.innerHTML = "You Win!";
    document.body.appendChild(header);
    button = document.createElement('button');
    button.innerHTML = "Play Again?"
    button.onclick = function(){
      location.reload();
    }
    document.body.appendChild(button)
    break;
  }
  else if (guess < randomNum) {
    alert("Secret Number is bigger than your guess.");
    chance -= 1;
  }
  else if (guess > randomNum) {
    alert("Secret Number is less than your guess.");
    chance -= 1;

  }
  if (chance < 1) {
    document.body.innerHTML = ""
    header = document.createElement('h1');
    header.innerHTML = "You Lose.";
    document.body.appendChild(header);
    button = document.createElement('button');
    button.innerHTML = "Replay"
    button.onclick = function(){
      location.reload();
    }
    document.body.appendChild(button)
    break;
  }
}