# NutriLens

NutriLens adalah sebuah aplikasi berbasis web yang memungkinkan pengguna untuk mencari informasi produk makanan dan minuman berdasarkan barcode, kata kunci, atau kategori. Aplikasi ini menggunakan API OpenFoodFacts untuk mendapatkan data produk.

Live Demo: 

## Fitur

1. **Pencarian Produk**: Pengguna dapat mencari produk berdasarkan kata kunci.
2. **Scan Barcode**: Pengguna dapat memindai barcode produk menggunakan kamera perangkat.
3. **Detail Produk**: Menampilkan informasi detail produk, termasuk nama, gambar, Nutri-Grade, dan informasi nutrisi.
4. **Kategori Populer**: Menyediakan akses cepat ke produk berdasarkan kategori populer.

## Struktur Proyek

```
.
├── detail.html   # Halaman detail produk
├── index.html    # Halaman utama untuk pencarian dan kategori
├── scan.html     # Halaman untuk memindai barcode
├── js/
│   ├── detail.js # Logika untuk halaman detail produk
│   ├── scan.js   # Logika untuk halaman scan barcode
│   ├── search.js # Logika untuk pencarian produk
└── README.md     # Dokumentasi proyek
```

## Cara Menggunakan

1. **Pencarian Produk**:

   - Buka `index.html`.
   - Masukkan kata kunci pada kolom pencarian dan klik tombol "Cari".
   - Hasil pencarian akan ditampilkan di bawahnya.

2. **Scan Barcode**:

   - Buka `scan.html`.
   - Klik tombol "Mulai Scan" untuk memulai pemindaian barcode menggunakan kamera.
   - Setelah barcode terdeteksi, pengguna akan diarahkan ke halaman detail produk.

3. **Detail Produk**:

   - Halaman `detail.html` akan menampilkan informasi produk berdasarkan ID yang diperoleh dari barcode atau pencarian.

4. **Kategori Populer**:
   - Klik salah satu kategori populer di halaman `index.html` untuk melihat produk dalam kategori tersebut.

## Teknologi yang Digunakan

- **HTML**: Untuk struktur halaman.
- **JavaScript**: Untuk logika aplikasi, termasuk pemrosesan data API dan interaksi pengguna.
- **Tailwind CSS**: Untuk styling halaman.
- **ZXing Library**: Untuk pemindaian barcode menggunakan kamera.
- **OpenFoodFacts API**: Untuk mendapatkan data produk.

## API yang Digunakan

- **OpenFoodFacts API**:

  - GET `https://world.openfoodfacts.org/api/v2/product/${barcode}`
  - Digunakan untuk mendapatkan informasi produk berdasarkan ID/barcode

  - GET `https://search.openfoodfacts.org/search?q=${query}&page_size=10&page=1`
  - Digunakan untuk search berdasarkan kata kunci

  - GET `https://world.openfoodfacts.org/api/v2/search?categories_tags=${category}&countries_tags_en=id&sort_by=scans_n&fields=code,product_name,nutrition_grades,image_front_small_url`
  - Diguanakan untuk search produk berdasarkan kategori

## Pengaturan Lingkungan

Tidak ada pengaturan khusus yang diperlukan. Pastikan perangkat memiliki akses internet untuk memuat library eksternal dan mengakses API.

## Catatan

- Untuk menghindari masalah CORS saat melakukan pencarian berdasarkan kata kunci, aplikasi menggunakan proxy `https://cors-anywhere.sawala.dev/`.

## Lisensi

Proyek ini menggunakan lisensi [MIT](https://opensource.org/licenses/MIT).
