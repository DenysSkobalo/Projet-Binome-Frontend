const pages = ["ml", "nn", "dl"];
const articleContainer = document.querySelector('.article-cards');

function createArticleCard(page) {
  const htmlPage = `${page}.html`;
  fetch(htmlPage)
    .then(response => response.text())
    .then(data => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(data, "text/html");
      const title = doc.querySelector('h1#title').textContent;
      const card = document.createElement('div');
      card.classList.add('card');
      card.innerHTML = `
        <img src="../assets/images/blog-post/${page}.jpg" alt="Blog Post ${page}">
        <div class="card-content">
          <h2>${title}</h2>
          <a href="${htmlPage}" class="read-more">Read More</a>
        </div>
      `;
      articleContainer.appendChild(card);
    });
}

pages.forEach((page) => {
  createArticleCard(page);
});
