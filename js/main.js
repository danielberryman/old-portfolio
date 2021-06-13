var viewportWidth = window.innerWidth;

var hamburger = document.getElementById('hamburger');
var exHamburger = document.getElementById('ex-hamburger');
var nav = document.querySelector('nav');

hamburger.onclick = toggleNavIcon;
exHamburger.onclick = toggleNavIcon;
if (window.innerWidth > 678) {
  nav.classList.remove('hidden');
}

function toggleNavIcon() {
  toggleClass(hamburger, 'hidden');
  toggleClass(exHamburger, 'hidden');
  toggleClass(nav, 'hidden');
}

function toggleClass(element, klass) {
  if (element.classList.contains(klass)) {
    element.classList.remove(klass);
  } else {
    element.classList.add(klass);
  }
}
