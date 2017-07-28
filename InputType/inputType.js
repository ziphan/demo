// color
let color = document.getElementById('color');
let colorValue = document.getElementById('colorValue');
color.onchange = () => colorValue.innerHTML = this.value;

// range
let range = document.getElementById('range');
let rangeValue = document.getElementById('rangeValue');
let rangeBtn = document.querySelector('.range-btn');

rangeValue.innerHTML = range.value;
range.oninput = () => rangeValue.innerHTML = this.value;

rangeBtn.addEventListener('click', e => {
  let id = e.target.id;
  if (id == 'enable') {
    range.removeAttribute('disabled');
  } else if (id == 'disable') {
    range.setAttribute('disabled', 'disabled');
  }
});