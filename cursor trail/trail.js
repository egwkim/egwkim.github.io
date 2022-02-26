let trailText = 'a';
let xOffset = -3;
let yOffset = -3;

let trailStyle = 'height: 6px;\nwidth: 6px;\nborder-radius: 3px;\n\ncolor: black;\nbackground-color: teal !important;\n';
let trailTextStyle =
  'position: absolute;\nleft: 50%;\ntop: 50%;\ntransform: translate(-50%,-50%);\ntext-align: center;\nbackground-color: transparent !important\n';
let styleSheet = document.createElement('style');

function updateStyle() {
  styleSheet.innerHTML = `.trail{${trailStyle}}\n.trailText{${trailTextStyle}}`;
  document.body.appendChild(styleSheet);
}

function addTrail(x, y) {
  let trail = document.createElement('div');
  if (trailText) {
    let textDiv = document.createElement('div');
    textDiv.className = 'trailText';
    textDiv.innerText = trailText;
    trail.appendChild(textDiv);
  }
  trail.className = 'trail';
  trail.style.left = (x + xOffset) + 'px';
  trail.style.top = (y + yOffset) + 'px';
  document.body.appendChild(trail);
  trail.style.opacity = 1;
  let interv = setInterval(() => {
    trail.style.opacity -= 0.05;
    if (trail.style.opacity <= 0) {
      trail.remove();
      clearInterval(interv);
    }
  }, 20);
}

updateStyle();

addEventListener('mousemove', (event) => {
  addTrail(event.pageX, event.pageY);
});

