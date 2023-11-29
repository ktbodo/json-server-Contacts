// javascript for details.html
const id = new URLSearchParams(window.location.search).get('id');
const container = document.querySelector('.details');
const deleteBtn = document.querySelector('.delete');

const renderDetails = async () => {
  const res = await fetch('http://localhost:3000/people/' + id);
  if (!res.ok) {
    window.location.replace('/');
  }
  const person = await res.json();

  const template = `
    <h1>${person.nameFirst}</h1>
    <p>${person.email}</p>
    <p>${person.streetAddress}</p>
    <p>${person.city} ${person.state} ${person.zip}</p>
    <p>${person.description}</p>
  `;

  container.innerHTML = template;
};

deleteBtn.addEventListener('click', async () => {
  const res = await fetch('http://localhost:3000/people/' + id, {
    method: 'DELETE',
  });
  window.location.replace('/');
});

window.addEventListener('DOMContentLoaded', renderDetails);
