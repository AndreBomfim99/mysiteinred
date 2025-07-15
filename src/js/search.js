const params = new URLSearchParams(window.location.search);
const query = params.get('q') ? params.get('q').toLowerCase() : '';

if (query) {
    fetch('/src/data/search_data.json')
        .then(response => response.json())
        .then(pages => {
            const results = pages.filter(page =>
                page.title.toLowerCase().includes(query) ||
                page.description.toLowerCase().includes(query) ||
                page.link.toLowerCase().includes(query)
            );
            displayResults(results, query);
        })
        .catch(error => {
            console.error('Error loading search data:', error);
            document.getElementById('search-results').innerHTML = '<p>Failed to load search data.</p>';
        });
}

function displayResults(results, query) {
    const container = document.getElementById('search-results');
    if (results.length === 0) {
        container.innerHTML = `<p>No results found for "<strong>${query}</strong>".</p>`;
        return;
    }

    let html = `<ul>`;
    results.forEach(result => {
        html += `<li><a href="${result.link}"><strong>${result.title}</strong></a><br><small>${result.description}</small></li>`;
    });
    html += '</ul>';

    container.innerHTML = html;
}


