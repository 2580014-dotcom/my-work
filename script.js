document.addEventListener('DOMContentLoaded', () => {
  const scanBtn = document.getElementById('scanBtn');
  const imageInput = document.getElementById('imageInput');
  const previewImg = document.getElementById('previewImg');

  scanBtn.addEventListener('click', () => {
    imageInput.click();
  });

  imageInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function(event) {
        previewImg.src = event.target.result;
        previewImg.style.opacity = '0.9';
      };
      reader.readAsDataURL(file);
    }
  });
});