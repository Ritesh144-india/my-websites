function checkPassword() {
  const input = document.getElementById('password').value.toLowerCase();
  if (input === 'deeksha') {
    document.getElementById('login-screen').style.display = 'none';
    document.getElementById('main-content').style.display = 'block';
    loadPrincessAnimation();
  } else {
    alert('Wrong name! Try again, cutie 🩷');
  }
}

function loadPrincessAnimation() {
  lottie.loadAnimation({
    container: document.getElementById('animation-container'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'assets/animations/rapunzel.json' // Use Elsa or Rapunzel Lottie JSON
  });
}
