import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
const formData = {}

const refs = {
  form: document.querySelector('.feedback-form'),
  textarea: document.querySelector('.feedback-form textarea'),
}

refs.form.addEventListener('submit', onFormSubmit);
// refs.textarea.addEventListener('input', throttle(onTextareaInput, 500));

refs.form.addEventListener('input', throttle(onFormInput,500));

populateTextarea();

function onFormInput(e) {
formData[e.target.name] = e.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
  console.log(formData);
}

function onFormSubmit(evt) {
  evt.preventDefault();

  console.log('Отправляем форму');
  evt.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
 }

// function onTextareaInput(evt) { 
//   const massage = evt.target.value;
//   localStorage.setItem(STORAGE_KEY, massage);
// }

function populateTextarea(evt) {
  const savedMessage = localStorage.getItem(STORAGE_KEY);
  
//   if (savedMessage) {
//     console.log(savedMessage);
//     refs.textarea.value = savedMessage;
//     const parsData = JSON.parse(savedMessage);
//   console.log(parsData);
//   }
// }

 if (savedMessage) {
    const parsData = JSON.parse(savedMessage);
    Object.entries(parsData).forEach(([name, value]) => {
      refs.form.elements[name].value = value;
    });
  }
}