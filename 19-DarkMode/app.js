import { articles } from "./data.js";
const toggleBtn = document.querySelector(".btn");
const articlesContainer = document.querySelector(".articles");

toggleBtn.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark-theme");
});

const articlesData = articles
  .map((article) => {
    const { title, length, snippet } = article;

    const date=dayjs(article.date).format('MMMM D,YYYY'); 

    return `        <article class="post">
    <h2>${title}</h2>
    <div class="post-info">
      <span class="date">${date}</span>
      <span class="read-time">${length} min time</span>
    </div>

    <p class="content">
      ${snippet}
    </p>
  </article>`;
  })
  .join("");

articlesContainer.innerHTML = articlesData;
