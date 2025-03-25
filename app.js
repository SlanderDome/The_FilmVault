let lastScroll = 0;
const body = document.body;
const scrollThreshold = 5; // pixels needed to trigger direction change

window.addEventListener('scroll', function() {
  const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  if (currentScroll <= 0) {
    body.classList.add('scroll-top');
    body.classList.remove('scroll-up', 'scroll-down');
    return;
  }

  if (Math.abs(currentScroll - lastScroll) < scrollThreshold) return;

  if (currentScroll > lastScroll) {
    // Scrolling down
    body.classList.remove('scroll-up', 'scroll-top');
    body.classList.add('scroll-down');
  } else {
    // Scrolling up
    body.classList.remove('scroll-down', 'scroll-top');
    body.classList.add('scroll-up');
  }

  lastScroll = currentScroll;
});