import getElement from "./getElement.js";

const container = getElement(".container");

const display = (followers) => {
  const newFollowers = followers
    .map((person) => {
      const { html_url, avatar_url, login } = person;
      return `<article class="card">

        <img src="${avatar_url}" alt="${login}"/>
        <h4>${login}</h4>
        <a href="${html_url}" class="btn">view profile</a> 
        
        </article>`;
    })
    .join("");

  container.innerHTML = newFollowers;
};

export default display;
