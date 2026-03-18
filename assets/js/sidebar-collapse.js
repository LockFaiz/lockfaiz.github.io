document.addEventListener('DOMContentLoaded', function () {
  var btn = document.getElementById('sidebar-collapse-btn');
  var sidebar = document.getElementById('sidebar');
  if (!btn || !sidebar) return;

  // Restore saved state
  if (localStorage.getItem('sidebar-collapsed') === 'true') {
    sidebar.classList.add('collapsed');
  }

  btn.addEventListener('click', function () {
    sidebar.classList.toggle('collapsed');
    localStorage.setItem('sidebar-collapsed', sidebar.classList.contains('collapsed'));
  });
});
