const btn_accordions = document.querySelectorAll('.btn-accordion');
const panels = document.querySelectorAll('.panel');
const arrowIcon = document.querySelectorAll('.btn-accordion .icon i');
const arrowUpDown = document.querySelector('.go-down');

let i;

// for (i = 0; i < btn_accordions.length; i++) {
//   btn_accordions[i].addEventListener('click', function () {
//     this.classList.toggle('active');
//     let panel = this.nextElementSibling;
//     if (panel.style.maxHeight) {
//       panel.style.maxHeight = null;
//     } else {
//       panel.style.maxHeight = panel.scrollHeight + 'px';
//     }
//   });
// }

for (let i = 0; i < btn_accordions.length; i++) {
  btn_accordions[i].addEventListener('click', function () {
    this.classList.toggle('active');
    let panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
      // Memutar ikon ke atas saat menutup panel
      arrowIcon[i].style.transform = 'rotate(0deg)';
      arrowIcon[i].style.color = '#555555';
    } else {
      panel.style.maxHeight = panel.scrollHeight + 'px';
      // Memutar ikon ke bawah 45 derajat saat membuka panel
      arrowIcon[i].style.transform = 'rotate(-90deg)';
      arrowIcon[i].style.transformOrigin = 'center';
      arrowIcon[i].style.color = 'white';
    }
  });
}

// Menambahkan event listener untuk menggulir ke atas/bawah secara halus saat elemen diklik
arrowUpDown.addEventListener('click', function (event) {
  event.preventDefault(); // Mencegah tindakan default link

  // Mendapatkan posisi scroll saat ini
  var currentPosition = window.scrollY;

  // Menghitung posisi target (ke atas atau ke bawah)
  var targetPosition = currentPosition === 0 ? document.body.scrollHeight : 0;

  // Menggulir ke posisi target secara halus
  window.scrollTo({
    top: targetPosition,
    behavior: 'smooth',
  });
});
