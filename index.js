const userAvatar = document.getElementById('userAvatar')

function toggleTheme() {
  const body = document.querySelector('body');

  if (body.classList.contains('darkTheme')) {
    body.classList.remove('darkTheme')
  } else {
    body.classList.add('darkTheme')
  }
};

userAvatar.addEventListener('click', toggleTheme);