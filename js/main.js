window.addEventListener('resize', updateNav);

var navIconContainer = document.getElementById('nav-icon-container');
var hamburger = document.getElementById('hamburger');
var exHamburger = document.getElementById('ex-hamburger');
var nav = document.querySelector('nav');
var navBg = document.getElementById('nav-background');

navIconContainer.onclick = toggleNavIcon;

if (window.innerWidth > 719) {
  navIconContainer.style.display = 'none';
  nav.style.display = 'inline';
  navBg.style.display = 'inline';
}

function toggleNavIcon() {
  if (hamburger.style.display == 'none') {
    exHamburger.style.display = 'none';
    hamburger.style.display = 'block';
    nav.style.display = 'none';
    navBg.style.display = 'none';
  } else {
    hamburger.style.display = 'none';
    exHamburger.style.display = 'block';
    nav.style.display = 'inline';
    navBg.style.display = 'inline';
  }
}

function updateNav() {
  if (window.innerWidth > 719) {
    navIconContainer.style.display = 'none';
    nav.style.display = 'inline';
    navBg.style.display = 'inline';
    hamburger.style.display = 'block';
    exHamburger.style.display = 'none';
  } else {
    if (nav.style.display == 'inline') {
      // We just came from a full view of the navbar
      navIconContainer.style.display = 'inline';
      hamburger.style.display = 'block';
      exHamburger.style.display = 'none';
      nav.style.display = 'none';
      navBg.style.display = 'none';
    }
  }
}
