let formData = { email: '', message: '' };

const form = document.querySelector('.feedback-form');
const savedData = localStorage.getItem('feedback-form-state');
if (savedData) {
  const parsedData = JSON.parse(savedData);
  form.email.value = parsedData.email || '';
  formData.email = parsedData.email || '';
  form.message.value = parsedData.message || '';
  formData.message = parsedData.message || '';
}

form.addEventListener('input', event => {
  event.preventDefault();
  formData[event.target.name] = event.target.value.trim();
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
});

form.addEventListener('submit', event => {
  event.preventDefault();
  if (!form.email.value || !form.message.value) {
    alert('Fill please all fields');
    return;
  }
  console.log(formData);
  localStorage.removeItem('feedback-form-state');
  formData = { email: '', message: '' };
  form.email.value = '';
  form.message.value = '';
});
