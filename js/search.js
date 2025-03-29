// Ambil parameter query atau kategori dari URL
const params = new URLSearchParams(window.location.search);
const query = params.get('q');
const category = params.get('categories');

if (query) {
  document.getElementById(
    'searchQuery'
  ).textContent = `Hasil Pencarian berdasarkan kata kunci '${query}'`;

  // Fetch produk berdasarkan kata kunci dari OpenFoodFacts API
  fetch(
    `https://cors-anywhere.sawala.dev/https://search.openfoodfacts.org/search?q=${encodeURIComponent(
      query
    )}&page_size=10&page=1`
  )
    .then((response) => response.json())
    .then((data) => {
      const resultsDiv = document.getElementById('results');
      if (data.hits && data.hits.length > 0) {
        data.hits.forEach((product) => {
          const productLink = document.createElement('a');
          productLink.href = 'detail.html?id=' + product.code;
          productLink.className = 'block p-4 border border-gray-300 rounded hover:bg-gray-50';

          const img = document.createElement('img');
          img.src = product.image_front_small_url || '';
          img.alt = product.product_name || 'Product image';
          img.className = 'w-16 h-16 object-cover inline-block';

          const infoDiv = document.createElement('div');
          infoDiv.className = 'inline-block ml-4 align-middle';
          const nameEl = document.createElement('div');
          nameEl.textContent = product.product_name || 'Produk tanpa nama';
          nameEl.className = 'font-semibold';
          const gradeEl = document.createElement('div');
          gradeEl.textContent =
            'Nutri-Grade: ' +
            (product.nutrition_grades ? product.nutrition_grades.toUpperCase() : 'N/A');

          infoDiv.appendChild(nameEl);
          infoDiv.appendChild(gradeEl);
          productLink.appendChild(img);
          productLink.appendChild(infoDiv);
          resultsDiv.appendChild(productLink);
        });
      } else {
        resultsDiv.textContent = 'Tidak ada produk ditemukan untuk "' + query + '".';
      }
    })
    .catch((error) => {
      console.error('Search fetch error:', error);
      document.getElementById('results').textContent =
        'Terjadi kesalahan saat mengambil hasil pencarian.';
    });
} else if (category) {
  document.getElementById(
    'searchQuery'
  ).textContent = `Hasil Pencarian berdasarkan kategori '${category}'`;

  // Fetch produk berdasarkan kategori dari OpenFoodFacts API
  fetch(
    `https://world.openfoodfacts.org/api/v2/search?categories_tags=${encodeURIComponent(
      category
    )}&countries_tags_en=id&sort_by=scans_n&fields=code,product_name,nutrition_grades,image_front_small_url`
  )
    .then((response) => response.json())
    .then((data) => {
      const resultsDiv = document.getElementById('results');
      if (data.products && data.products.length > 0) {
        data.products.forEach((product) => {
          const productLink = document.createElement('a');
          productLink.href = 'detail.html?id=' + product.code;
          productLink.className = 'block p-4 border border-gray-300 rounded hover:bg-gray-50';

          const img = document.createElement('img');
          img.src = product.image_front_small_url || '';
          img.alt = product.product_name || 'Product image';
          img.className = 'w-16 h-16 object-cover inline-block';

          const infoDiv = document.createElement('div');
          infoDiv.className = 'inline-block ml-4 align-middle';
          const nameEl = document.createElement('div');
          nameEl.textContent = product.product_name || 'Produk tanpa nama';
          nameEl.className = 'font-semibold';
          const gradeEl = document.createElement('div');
          gradeEl.textContent =
            'Nutri-Grade: ' +
            (product.nutrition_grades ? product.nutrition_grades.toUpperCase() : 'N/A');

          infoDiv.appendChild(nameEl);
          infoDiv.appendChild(gradeEl);
          productLink.appendChild(img);
          productLink.appendChild(infoDiv);
          resultsDiv.appendChild(productLink);
        });
      } else {
        resultsDiv.textContent =
          'Tidak ada produk ditemukan untuk kategori "' + category + '".';
      }
    })
    .catch((error) => {
      console.error('Search fetch error:', error);
      document.getElementById('results').textContent =
        'Terjadi kesalahan saat mengambil hasil pencarian.';
    });
} else {
  document.getElementById('results').textContent =
    'Tidak ada kata kunci atau kategori pencarian.';
}