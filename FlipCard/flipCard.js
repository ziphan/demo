const card = document.querySelector('.card');
const front = document.querySelector('.front');
const back = document.querySelector('.back');
let isFront = true;

card.addEventListener('click', () => {
  if (isFront) {
    front.className = 'back';
    back.className = 'front';
  } else {
    front.className = 'front';
    back.className = 'back';
  }
  isFront = !isFront;
})
