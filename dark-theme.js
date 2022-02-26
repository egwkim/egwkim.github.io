let theme = 'light';

function setTheme(color) {
  theme = color;
  if (theme == 'dark') {
    document.body.classList.add('dark-mode');
  } else {
    document.body.classList.remove('dark-mode');
  }
  localStorage.setItem('theme', theme);
}

function toggleTheme() {
  if (theme == 'light') {
    setTheme('dark');
  } else {
    setTheme('light');
  }
}

function checkTheme() {
  const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
  const currentTheme = localStorage.getItem('theme');
  if ((currentTheme != 'light' && prefersDarkScheme.matches) || currentTheme == 'dark') {
    setTheme('dark');
  } else {
    setTheme('light');
  }
}
