// javascript for index.html
const container = document.querySelector('.people');
const searchForm = document.querySelector('.search');

const renderPeople = async (nameFirst) => {
  console.log(nameFirst);
  let uri = 'http://localhost:3000/people?_sort=nameLast';
  if (nameFirst) {
    uri += `&q=${nameFirst}`;
  }

  const res = await fetch(uri);
  const people = await res.json();
  console.log(people);

  let template = '';
  people.forEach((person) => {
    template += `
      <div class="person">
        <h3>${person.nameFirst} ${person.nameLast}</h3>
        <p>${person.streetAddress}<br>
        ${person.city}, ${person.state} ${person.zip}</p>
        <p>${person.email}</p>
        <a href="/details.html?id=${person.id}">detail</a>
        <a href="/editPerson.html?id=${person.id}">edit</a>
      </div>
    `;
  });

  container.innerHTML = template;
};

// search
searchForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  renderPeople(searchForm.nameFirst.value.trim());
});

window.addEventListener('DOMContentLoaded', () => renderPeople());
