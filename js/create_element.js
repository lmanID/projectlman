import { hondaData } from './data_honda.js';

// Fungsi untuk membuat konten HTML sesuai dengan data Honda
function populateHondaData() {
  const accordionsSection = document.querySelector('.accordions');

  for (const carName in hondaData) {
    if (hondaData.hasOwnProperty(carName)) {
      const car = hondaData[carName];

      // Membuat elemen tombol
      const button = document.createElement('button');
      button.className = 'btn-accordion';
      button.textContent = carName;
      button.type = 'button';
      button.innerHTML +=
        '<span class="icon"><i class="bx bx-chevron-up"></i></span>';

      // Membuat elemen artikel
      const article = document.createElement('article');
      article.className = 'panel';

      // Membuat ul untuk tipe Brio
      const ulTypes = document.createElement('ul');
      ulTypes.className = 'types';
      ulTypes.innerHTML = '<li class="type-header"><span>Type</span></li>';

      for (const type of car.types) {
        const liType = document.createElement('li');
        liType.className = 'type';
        liType.textContent = type;
        ulTypes.appendChild(liType);
      }

      // Membuat ul untuk harga Brio
      const ulPrices = document.createElement('ul');
      ulPrices.className = 'prices';
      ulPrices.innerHTML = '<li class="price-header"><span>Price</span></li>';

      for (const price of car.prices) {
        const liPrice = document.createElement('li');
        liPrice.className = 'price';
        liPrice.textContent = price.toLocaleString('id-ID');
        ulPrices.appendChild(liPrice);
      }

      // Menambahkan ul ke dalam artikel
      article.appendChild(ulTypes);
      article.appendChild(ulPrices);

      // Menambahkan tombol dan artikel ke dalam section accordions
      accordionsSection.appendChild(button);
      accordionsSection.appendChild(article);
    }
  }
}

// Memanggil fungsi untuk mengisi konten HTML
populateHondaData();
