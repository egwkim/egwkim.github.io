let trailText = '🤔';
let xOffset = -3;
let yOffset = -3;

let trailStyle = '/*height: 6px;\nwidth: 6px;\nborder-radius: 3px;\n\ncolor: black;\nbackground: teal;*/';
let trailTextStyle = 'position: absolute;left: 50%;top: 50%;transform: translate(-50%,-50%);text-align: center;';
let styleSheet = document.createElement('style');

function updateStyle() {
  styleSheet.innerHTML = `.trail{${trailStyle}}\n.trailText{${trailTextStyle}}`;
  document.body.appendChild(styleSheet);
}

updateStyle();

addEventListener('mousemove', (event) => {
  let dot = document.createElement('div');
  if (trailText) {
    let textDiv = document.createElement('div');
    textDiv.className = 'trailText';
    textDiv.innerText = trailText;
    dot.appendChild(textDiv);
  }
  dot.className = 'trail';
  dot.style.left = event.pageX + xOffset + 'px';
  dot.style.top = event.pageY + yOffset + 'px';
  document.body.appendChild(dot);
  let alpha = 1.0;
  let interv = setInterval(() => {
    dot.style.opacity = alpha;
    alpha -= 0.05;
    if (alpha <= 0) {
      dot.remove();
      clearInterval(interv);
    }
  }, 20);
});
