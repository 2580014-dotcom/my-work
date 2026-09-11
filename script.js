document.addEventListener("DOMContentLoaded", () => {
  const scanBtn = document.getElementById("scan-btn");
  const viewport = document.getElementById("viewport");
  const cameraStatus = document.getElementById("camera-status");
  const resultCard = document.getElementById("result-card");

  let isScanning = false;

  scanBtn.addEventListener("click", () => {
    if (isScanning) return;

    isScanning = true;
    viewport.classList.add("scanning");
    cameraStatus.innerText = "Scanning document...";
    scanBtn.innerText = "Processing...";
    scanBtn.disabled = true;

    // Simulate scanning/OCR delay
    setTimeout(() => {
      viewport.classList.remove("scanning");
      cameraStatus.innerText = "Scan Complete!";
      scanBtn.innerText = "📸 Scan Another Label";
      scanBtn.disabled = false;
      isScanning = false;

      // Display results
      resultCard.classList.remove("hidden");
      resultCard.scrollIntoView({ behavior: "smooth" });
    }, 2500);
  });
});