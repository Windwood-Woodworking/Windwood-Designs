<script>
  const images = Array.from(document.querySelectorAll('.lightbox-image'));
  const overlay = document.getElementById('lightbox');
  const overlayImg = document.getElementById('lightboxImage');
  const btnClose = document.getElementById('lightboxClose');
  const btnPrev = document.getElementById('lightboxPrev');
  const btnNext = document.getElementById('lightboxNext');

  let currentIndex = 0;

  function openLightbox(index) {
    currentIndex = index;
    overlayImg.src = images[index].src;
    overlay.classList.add('active');
  }

  function closeLightbox() {
    overlay.classList.remove('active');
  }

  function showPrev() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    overlayImg.src = images[currentIndex].src;
  }

  function showNext() {
    currentIndex = (currentIndex + 1) % images.length;
    overlayImg.src = images[currentIndex].src;
  }

  images.forEach((img, index) => {
    img.addEventListener('click', () => openLightbox(index));
  });

  btnClose.addEventListener('click', closeLightbox);
  btnPrev.addEventListener('click', showPrev);
  btnNext.addEventListener('click', showNext);

  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeLightbox();
  });

  document.addEventListener('keydown', (e) => {
    if (!overlay.classList.contains('active')) return;

    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') showPrev();
    if (e.key === 'ArrowRight') showNext();
  });
</script>

