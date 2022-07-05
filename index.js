const body = document.querySelector('body');

function toggleTheme() {
  if (body.classList.contains('themeDark')) {
    body.classList.remove('themeDark')
  } else {
    body.classList.add('themeDark')
  }
};

body.addEventListener('click', toggleTheme);