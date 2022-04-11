const resetGame = document.querySelector('#reset-game');
const rgbColor = document.querySelector('#rgb-color');
const colorBall = document.querySelectorAll('.ball');
const answer = document.querySelector('#answer');
const balls = document.querySelector('.balls');
const score = document.querySelector('#score');
console.log(score);

function gerarCor() {
  const r = Math.ceil(Math.random() * 255);
  const g = Math.ceil(Math.random() * 255);
  const b = Math.ceil(Math.random() * 255);
  return `(${r}, ${g}, ${b})`;
}

function changeColorName() {
  const color = Math.floor(Math.random() * 6);
  const addStyleBackgroundColor = colorBall[color].style.backgroundColor;
  answer.innerText = 'Escolha uma cor';
  return addStyleBackgroundColor;
}
let conter = 0;
function machColorBall(event) {
  if (rgbColor.innerText === event.target.style.backgroundColor) {
    answer.innerText = 'Acertou!';
    conter += 3;
  } else {
    answer.innerText = 'Errou! Tente novamente!';
    conter -= 1;
  }
  score.innerText = conter;
}

function changeColorBall() {
  for (let i = 0; i < colorBall.length; i += 1) {
    colorBall[i].style.backgroundColor = `rgb${gerarCor()}`;
  }
  rgbColor.innerText = changeColorName();
  console.log(rgbColor.innerText);
}

changeColorBall();
resetGame.addEventListener('click', changeColorBall);
balls.addEventListener('click', machColorBall);
