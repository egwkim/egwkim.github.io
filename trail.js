addEventListener('mousemove', (event) => {
  let dot = document.createElement('div');
  dot.innerText = '🤔';
  dot.className = 'trail';
  dot.style.left = event.pageX - 3 + 'px';
  dot.style.top = event.pageY - 3 + 'px';
  document.body.appendChild(dot);
  let alpha = 1.0;
  let interv = setInterval(() => {
    dot.style.color = 'rgba(0,0,0,' + alpha + ')';
    //dot.style.background = 'rgba(0,128,128,' + alpha + ')';
    alpha -= 0.05;
    if (alpha <= 0) {
      dot.remove();
      clearInterval(interv);
    }
  }, 20);
});