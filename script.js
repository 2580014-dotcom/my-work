document.addEventListener('DOMContentLoaded', () => {
  const scanBtn = document.getElementById('scanBtn');
  const imageInput = document.getElementById('imageInput');
  const scanPreview = document.getElementById('scanPreview');

  // Trigger file upload dialog when clicking the scan button
  scanBtn.addEventListener('click', () => {
    imageInput.click();
  });

  // Handle uploaded image preview
  imageInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function(event) {
        scanPreview.style.backgroundImage = `url('${event.target.result}')`;
        scanPreview.innerHTML = ''; // Hide initial text/icon when image loaded
      };
      reader.readAsDataURL(file);
    }
  });
});