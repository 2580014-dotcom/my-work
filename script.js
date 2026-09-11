// Copy link button logic
document.getElementById('copyBtn').addEventListener('click', () => {
  const siteUrl = document.getElementById('site-url').innerText;
  navigator.clipboard.writeText(siteUrl).then(() => {
    const btn = document.getElementById('copyBtn');
    btn.innerText = 'Copied!';
    btn.style.backgroundColor = '#4ade80'; // Green highlight

    setTimeout(() => {
      btn.innerText = 'Copy Link';
      btn.style.backgroundColor = 'var(--primary-accent)';
    }, 2000);
  });
});

// Interactive step selection animation
function toggleCard(cardElement) {
  document.querySelectorAll('.card').forEach(c => c.style.borderColor = 'var(--border-color)');
  cardElement.style.borderColor = 'var(--primary-accent)';
}