let trailText;
let xOffset;
let yOffset;

let trailStyle;
let trailTextStyle;

let styleSheet = document.createElement('style');

let trailContainer = document.createElement('div');
document.body.appendChild(trailContainer);

function defaultSettings() {
  trailText = '🤔';
  xOffset = -20;
  yOffset = -20;

  trailStyle = 'height: 40px;\nwidth: 40px;\nborder-radius: 20px;\nbackground-color: #0881;\n';
  trailTextStyle =
    'position: absolute;\nleft: 50%;\ntop: 50%;\ntransform: translate(-50%,-50%);\ntext-align: center;\nbackground-color: transparent;\n';

  loadSettings();
}

function loadSettings() {
  document.getElementById('trail-style').value = trailStyle;
  document.getElementById('trail-text').value = trailText;
  document.getElementById('trail-text-style').value = trailTextStyle;
  document.getElementById('x-offset').value = xOffset;
  document.getElementById('y-offset').value = yOffset;
}

function toggleSettings() {
  var x = document.getElementById('settings');
  if (x.style.display === 'none') {
    x.style.display = 'block';
  } else {
    x.style.display = 'none';
  }
}

function updateStyle() {
  styleSheet.innerHTML = `.trail{${trailStyle}}\n.trail-text{${trailTextStyle}}`;
  document.body.appendChild(styleSheet);
}

function addTrail(x, y) {
  let trail = document.createElement('div');
  if (trailText) {
    let textDiv = document.createElement('div');
    textDiv.className = 'trail-text';
    textDiv.innerText = trailText;
    trail.appendChild(textDiv);
  }
  trail.className = 'trail';
  trail.style.left = x + xOffset + 'px';
  trail.style.top = y + yOffset + 'px';
  trailContainer.appendChild(trail);
  trail.style.opacity = 1;
  let interv = setInterval(() => {
    trail.style.opacity -= 0.05;
    if (trail.style.opacity <= 0) {
      trail.remove();
      clearInterval(interv);
    }
  }, 20);
}

defaultSettings();

updateStyle();

addEventListener('mousemove', (event) => {
  addTrail(event.pageX, event.pageY);
});
