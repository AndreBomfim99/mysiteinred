['header', 'footer', 'sidebar', 'searchbar'].forEach(id => {
    fetch(`/src/partials/${id}.html`)
        .then(response => response.text())
        .then(data => {
            const container = document.getElementById(id);
            if (container) container.innerHTML = data;
        })
        .catch(error => console.error(`Erro ao carregar ${id}:`, error));
});


