// javascript for editPerson.html
const form = document.querySelector('form');

const editPerson = async (e) => {
  e.preventDefault();

  const doc = {
    nameFirst: form.nameFirst.value,
    nameLast: form.nameLast.value,
    streetAddress: form.streetAddress.value,
    city: form.city.value,
    state: form.state.value,
    zip: form.zip.value,
    email: form.email.value,
    description: form.description.value,
  };

  await fetch('http://localhost:3000/people', {
    method: 'GET',
    body: JSON.stringify(doc),
    headers: { 'Content-Type': 'application/json' },
  });

  window.location.replace('/');
};

form.addEventListener('submit', editPerson);
