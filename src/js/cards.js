fetch('/src/data/posts.json')
  .then(response => response.json())
  .then(posts => {
    const container = document.getElementById('cards-section');
    let html = '<section class="cards-section container"><div class="cards-container">';

    // Embaralhar array de posts (Fisher-Yates shuffle)
    for (let i = posts.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [posts[i], posts[j]] = [posts[j], posts[i]];
    }

    // Pegar apenas os 3 primeiros aleatórios
    const selectedPosts = posts.slice(0, 3);

    selectedPosts.forEach(post => {
      html += `<div class="card">
        <div class="card-image-container">
            <img src="${post.image}" alt="${post.title}">
            <h3 class="card-title-overlay">${post.title}</h3>
        </div>
        <div class="card-content">
            <p>${post.description}</p>
            <a href="${post.link}" class="read-more">More...</a>
        </div>
      </div>`;
    });

    html += '</div></section>';
    container.innerHTML = html;
  })
  .catch(error => console.error('Error loading posts:', error));


