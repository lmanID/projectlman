// ==================== SCROLL NAV ====================
const nav = document.querySelector('nav');
const upDown = document.querySelector('.go-down');
// console.log(upDown);
console.log(nav);
console.log(nav.offsetHeight);

const fix_nav = () => {
  if (window.scrollY > nav.offsetHeight + 41) {
    nav.classList.add('active');
    upDown.classList.add('up');
  } else {
    nav.classList.remove('active');
    upDown.classList.remove('up');
  }
};
window.addEventListener('scroll', fix_nav);
// ==================== AKHIR SCROLL NAV ===============
