import throttle from 'lodash.throttle';
const STORAGE_KEY = 'feedback-form-state';
const formData = {}
const refs = {
  form: document.querySelector('.feedback-form'),
  textarea: document.querySelector('.feedback-form textarea'),
}
refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onFormInput, 500));
populateTextarea();

function onFormInput(e) {
formData[e.target.name] = e.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(evt) {
  evt.preventDefault();
  evt.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
  console.log(formData);
 }

function populateTextarea(evt) {
  const savedMessage = localStorage.getItem(STORAGE_KEY);
 if (savedMessage) {
    const parsData = JSON.parse(savedMessage);
    Object.entries(parsData).forEach(([name, value]) => {
      refs.form.elements[name].value = value;
      console.log(parsData);
    });
  }
}