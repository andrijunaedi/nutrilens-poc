// Mendapatkan ID produk dari parameter URL
const params = new URLSearchParams(window.location.search);
const productId = params.get('id');

if (productId) {
  // Fetch data produk menggunakan OpenFoodFacts API
  fetch(`https://world.openfoodfacts.org/api/v2/product/${productId}`)
    .then((response) => response.json())
    .then((data) => {
      if (data && data.product) {
        const product = data.product;
        // Tampilkan nama produk jika tersedia
        const productNameElem = document.getElementById('productName');
        productNameElem.textContent = product.product_name || 'Produk tanpa nama';

        // Tampilkan gambar produk jika tersedia
        const imgElem = document.getElementById('productImage');
        if (product.image_url) {
          imgElem.src = product.image_url;
          imgElem.classList.remove('hidden');
        }
        // Tampilkan Nutri-Grade
        document.getElementById('nutriGrade').textContent = product.nutrition_grades
          ? product.nutrition_grades.toUpperCase()
          : 'N/A';
        // Tampilkan informasi nutrisi (energy, fat, sugars, salt)
        const nutriments = product.nutriments || {};
        document.getElementById('energy').textContent = nutriments['energy-kcal_100g']
          ? nutriments['energy-kcal_100g'] + ' kcal'
          : nutriments['energy_100g']
          ? nutriments['energy_100g'] + ' kJ'
          : 'N/A';
        document.getElementById('fat').textContent = nutriments['fat_100g']
          ? nutriments['fat_100g'] + ' g'
          : 'N/A';
        document.getElementById('sugars').textContent = nutriments['sugars_100g']
          ? nutriments['sugars_100g'] + ' g'
          : 'N/A';
        document.getElementById('salt').textContent = nutriments['salt_100g']
          ? nutriments['salt_100g'] + ' g'
          : 'N/A';
      } else {
        document.getElementById('productContainer').textContent = 'Produk tidak ditemukan.';
      }
    })
    .catch((error) => {
      console.error('Fetch error:', error);
      document.getElementById('productContainer').textContent =
        'Terjadi kesalahan saat mengambil data produk.';
    });
} else {
  document.getElementById('productContainer').textContent = 'ID produk tidak tersedia.';
}
