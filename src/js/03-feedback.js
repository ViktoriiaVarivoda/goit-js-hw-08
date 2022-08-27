import throttle from 'lodash.throttle';
const STORAGE_KEY = 'feedback-form-state';
const refs = {
  form: document.querySelector('.feedback-form'),
  textarea: document.querySelector('.feedback-form textarea'),
}
refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onFormInput, 500));
populateTextarea();

function onFormInput(e) {
  let formData = localStorage.getItem(STORAGE_KEY);
  formData = formData ? JSON.parse(formData) : {};
  formData[e.target.name] = e.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(e) {
  const savedSubmit = localStorage.getItem(STORAGE_KEY);
  e.preventDefault();
  console.log(JSON.parse(savedSubmit));
  localStorage.removeItem(STORAGE_KEY);
  e.target.reset();
 }

function populateTextarea(evt) {
  const savedMessage = localStorage.getItem(STORAGE_KEY);
 if (savedMessage) {
    const parsData = JSON.parse(savedMessage);
    Object.entries(parsData).forEach(([name, value]) => {
      refs.form.elements[name].value = value;
    });
  }
}