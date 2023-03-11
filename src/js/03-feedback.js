import _throttle from 'lodash.throttle';

const FORM_STORAGE_KEY = 'feedback-form-state';

const formEl = document.querySelector('.feedback-form');

saveFormData();

formEl.addEventListener('input', _throttle(handleFormElInput, 500));

function handleFormElInput(event) {
  let savedData = localStorage.getItem(FORM_STORAGE_KEY);
  savedData = savedData ? JSON.parse(savedData) : {};
  savedData[event.target.name] = event.target.value;
  localStorage.setItem(FORM_STORAGE_KEY, JSON.stringify(savedData));
}

function saveFormData() {
  let persistedData = JSON.parse(localStorage.getItem(FORM_STORAGE_KEY));

  if (persistedData) {
    Object.entries(persistedData).forEach(([name, value]) => {
      formEl.elements[name].value = value;
    });
  }
}

formEl.addEventListener('submit', handleFormElSubmit);

function handleFormElSubmit(event) {
  event.preventDefault();
  formEl.reset();
  let savedData = localStorage.getItem(FORM_STORAGE_KEY);
  savedData = savedData ? JSON.parse(savedData) : {};
  console.log(savedData);
  localStorage.removeItem(FORM_STORAGE_KEY);
}
