let trailText;
let xOffset;
let yOffset;

let trailStyle;
let trailTextStyle;

let doAnimation;

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

  doAnimation = false;

  loadSettings();
}

function loadSettings() {
  document.getElementById('trail-style').value = trailStyle;
  document.getElementById('trail-text').value = trailText;
  document.getElementById('trail-text-style').value = trailTextStyle;
  document.getElementById('x-offset').value = xOffset;
  document.getElementById('y-offset').value = yOffset;
  document.getElementById('do-animation').value = doAnimation;
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
  styleSheet.innerHTML = `.trail-div{${trailStyle}}\n.trail-text{${trailTextStyle}}`;
  document.body.appendChild(styleSheet);
}

function addTrail(x, y) {
  let trail = document.createElement('div');

  if (trailStyle) {
    let backgroundDiv = document.createElement('div');
    backgroundDiv.className = 'trail-div';
    trail.appendChild(backgroundDiv);
  }

  if (trailText) {
    let textDiv = document.createElement('div');
    textDiv.className = 'trail-text';
    textDiv.innerText = trailText;
    trail.appendChild(textDiv);
  }

  trail.className = 'trail';
  trail.style.alignItems = 'center';
  trail.style.left = x + xOffset + 'px';
  trail.style.top = y + yOffset + 'px';
  trailContainer.appendChild(trail);
  trail.style.opacity = 1;

  if (doAnimation) {
    let theta = Math.random() * 720 - 360;
    let direction = Math.random() * Math.PI;
    trail.animate(
      [
        { transform: 'rotate(0deg)' },
        {
          transform: `rotate(${theta}deg) translate(${Math.cos(direction) * 5}px, ${Math.sin(direction) * 5}px)`,
        },
      ],
      {
        duration: 1000,
        iterations: 1,
      }
    );
  }

  let interv = setInterval(() => {
    trail.style.opacity -= 0.05;
    if (trail.style.opacity <= 0) {
      trail.remove();
      clearInterval(interv);
    }
  }, 50);
}

defaultSettings();

updateStyle();

let cursorX = 0;
let cursorY = 0;
let travledDistance = 0;

addEventListener('mousemove', (event) => {
  travledDistance += Math.sqrt((cursorX - event.pageX) ** 2 + (cursorY - event.pageY) ** 2);
  if (travledDistance > 5) {
    addTrail(event.pageX, event.pageY);
    travledDistance = 0;
  }
  cursorX = event.pageX;
  cursorY = event.pageY;
});
