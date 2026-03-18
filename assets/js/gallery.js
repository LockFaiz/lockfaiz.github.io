document.addEventListener('DOMContentLoaded', function () {
  // Remove shimmer class from gallery images
  document.querySelectorAll('.gallery-item img').forEach(function (img) {
    img.classList.remove('shimmer');
    img.addEventListener('load', function () {
      img.classList.remove('shimmer');
    });
  });

  // Region filter
  var filterBtns = document.querySelectorAll('.gallery-filter-btn');
  var items = document.querySelectorAll('.gallery-item');

  filterBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      filterBtns.forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');
      var region = btn.getAttribute('data-region');
      items.forEach(function (item) {
        if (region === 'all' || item.getAttribute('data-region') === region) {
          item.style.display = '';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });

  // Lightbox
  var lightbox = document.getElementById('gallery-lightbox');
  if (!lightbox) return;
  var lbImg = lightbox.querySelector('img');
  var lbCaption = lightbox.querySelector('.lb-caption');
  var lbClose = lightbox.querySelector('.lb-close');

  items.forEach(function (item) {
    item.addEventListener('click', function () {
      lbImg.src = item.getAttribute('data-src');
      var title = item.getAttribute('data-title') || '';
      var location = item.getAttribute('data-location') || '';
      var date = item.getAttribute('data-date') || '';
      var caption = title;
      if (location || date) caption += '<br><small>' + [location, date].filter(Boolean).join(' · ') + '</small>';
      lbCaption.innerHTML = caption;
      lightbox.classList.add('show');
    });
  });

  lbClose.addEventListener('click', function (e) {
    e.stopPropagation();
    lightbox.classList.remove('show');
  });
  lightbox.addEventListener('click', function (e) {
    if (e.target === lightbox) lightbox.classList.remove('show');
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') lightbox.classList.remove('show');
  });
});
