const videoElem = document.getElementById('video');
const resultElem = document.getElementById('scanResult');
const codeReader = new ZXing.BrowserMultiFormatReader();
let scanning = false;

// Start scanning when "Mulai Scan" button is clicked
document.getElementById('startButton').addEventListener('click', () => {
  if (!scanning) {
    scanning = true;
    codeReader.decodeFromVideoDevice(null, 'video', (result, err) => {
      if (result) {
        // Barcode found: stop scanner and redirect to detail page with product ID
        codeReader.reset();
        scanning = false;
        window.location.href = 'detail.html?id=' + result.text;
      }
      if (err) {
        // Ignore no-result errors and display others
        if (!(err instanceof ZXing.NotFoundException)) {
          console.error(err);
          resultElem.textContent = 'Kesalahan: ' + err;
        }
        // NotFoundException is expected when no code is found in a frame (continues scanning)
      }
    });
  }
});

// Stop scanning when "Stop" button is clicked
document.getElementById('stopButton').addEventListener('click', () => {
  codeReader.reset();
  scanning = false;
  resultElem.textContent = 'Pemindaian dihentikan.';
});
