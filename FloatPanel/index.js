const ANGLE = 45;

let floatPanels = document.querySelectorAll(".floatpanel");
let colors = ['#4975FB', '#924DE6', '#EF5252', '#F59500'];

floatPanels.forEach((element, i) => {
  floatable(element, colors[i]);
});

function floatable(panel, color) {

  let content = panel.querySelector(".content");
  content.style.backgroundColor = color;

  panel.addEventListener('mouseout', e => {
    content.style.transform = `perspective(300px) 
								   rotateY(0deg)
								   rotateX(0deg)`;
  });

  panel.addEventListener('mousemove', e => {
    let w = panel.clientWidth;
    let h = panel.clientHeight;
    let y = (e.offsetX - w * 0.5) / w * ANGLE;
    let x = (1 - (e.offsetY - h * 0.5)) / h * ANGLE;

    content.style.transform = `perspective(300px) 
								   rotateX(${x}deg)
								   rotateY(${y}deg)`;
  });

}
