function loadSettings() {
  document.getElementById('trail-style').value = trailStyle;
  document.getElementById('trail-text').value = trailText;
  document.getElementById('trail-text-style').value = trailTextStyle;
  document.getElementById('x-offset').value = xOffset;
  document.getElementById('y-offset').value = yOffset;
}

function toggleSettings() {
  var x = document.getElementById("settings");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}