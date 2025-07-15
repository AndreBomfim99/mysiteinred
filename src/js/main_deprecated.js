
// Load header
fetch('/src/partials/header.html')
  .then(response => response.text())
  .then(data => document.getElementById('header').innerHTML = data);

// Load footer
fetch('/src/partials/footer.html')
  .then(response => response.text())
  .then(data => document.getElementById('footer').innerHTML = data);

// Load sidebar
fetch('/src/partials/sidebar.html')
  .then(response => response.text())
  .then(data => document.getElementById('sidebar').innerHTML = data);

fetch('/src/partials/searchbar.html')
  .then(response => response.text())
  .then(data => document.getElementById('side-bar').innerHTML = data);

