
window.addEventListener('scroll', () => {
  const button = document.getElementById('topo');
  if (window.scrollY > 300) {
    button.style.display = 'flex';
  } else {
    button.style.display = 'none';
  }
});
