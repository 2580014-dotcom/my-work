document.addEventListener('DOMContentLoaded', () => {
  const scanBtn = document.getElementById('scanBtn');
  const fileInput = document.getElementById('fileInput');
  const dropZone = document.getElementById('dropZone');

  // Trigger file picker when clicking the scan button
  scanBtn.addEventListener('click', () => {
    fileInput.click();
  });

  // Simple visual feedback when selecting a image file
  fileInput.addEventListener('change', (e) => {
    if (e.target.files.length > 0) {
      const fileName = e.target.files[0].name;
      scanBtn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> Processing...`;
      
      setTimeout(() => {
        scanBtn.innerHTML = `<i class="fa-solid fa-check"></i> Scanned: ${fileName.substring(0, 12)}...`;
        scanBtn.style.backgroundColor = '#10B981';
      }, 1200);
    }
  });

  // Drag and drop handling
  dropZone.addEventListener('dragover', (e) => {
    e.preventDefault();
    dropZone.style.borderColor = '#0066CC';
    dropZone.style.backgroundColor = '#E6F0FA';
  });

  dropZone.addEventListener('dragleave', () => {
    dropZone.style.borderColor = '#93C5FD';
    dropZone.style.backgroundColor = '#F0F7FF';
  });

  dropZone.addEventListener('drop', (e) => {
    e.preventDefault();
    dropZone.style.borderColor = '#93C5FD';
    dropZone.style.backgroundColor = '#F0F7FF';

    if (e.dataTransfer.files.length > 0) {
      fileInput.files = e.dataTransfer.files;
      fileInput.dispatchEvent(new Event('change'));
    }
  });
});