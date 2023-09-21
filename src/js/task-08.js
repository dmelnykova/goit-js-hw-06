const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const form = event.currentTarget;
  const email = form.elements.email.value;
  const password = form.elements.password.value;

  if (email === '' || password === '') {
    alert('Please fill in all the fields!');
    return;
  }

  const formData = {
    email,
    password
  };

  console.log('Form data:', formData);
  form.reset();
}
