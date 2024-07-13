const clrs = ["green", "blue", "red", "yellow"];
let userArray = [];
let arr = [];
let clr;

document.body.addEventListener("keydown", startGame);
function startGame() {
  const val = Math.floor(Math.random() * 4);
  arr.push(clrs[val]);
  console.log(arr);
  playSound(clrs[val]);
  document.querySelector('#level-title').innerHTML = 'level 1'
}

for (let i = 0; i < 4; i++) {
  document.querySelectorAll(".btn")[i].addEventListener("click", (e) => {
    userArray.push(e.target.getAttribute("id"));
    console.log(userArray);
    playSound(e.target.getAttribute("id"));
    checkAnswer(userArray.length-1);
  });
}

function checkAnswer(check) {
  if (arr[check] === userArray[check]) {
    if(arr.length === userArray.length)
    setTimeout(randomPattern, 500);
  } else {
    GameOver();
  }
}

function randomPattern() {
  userArray = [];
  const random = Math.floor(Math.random() * 4);
  arr.push(clrs[random]);
  console.log(arr);
  playSound(clrs[random]);
  document.querySelector('#level-title').innerHTML = `level ${arr.length}`
}

function GameOver() {
  arr = [];
  userArray = [];
  const audi2 = new Audio("./sounds/wrong.mp3");
  audi2.play();
  document.querySelector('#level-title').innerHTML = 'Game Over, Press any Key to restart'
  document.querySelector('.body').classList.add('game-over')
  setInterval(() => {
    document.querySelector('.body').classList.remove('game-over')
  }, 150)
}

function playSound(sound) {
  showAnimation(sound);
  const audi1 = new Audio(`./sounds/${sound}.mp3`);
  audi1.play();
}

function showAnimation(butt) {
  document.querySelector(`.${butt}`).classList.add("pressed");
  setTimeout(() => {
    document.querySelector(`.${butt}`).classList.remove("pressed");
  }, 100);
}
