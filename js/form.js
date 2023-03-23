import {isESC} from "./until.js";

const buttonAddPicture = document.querySelector('#upload-file');
const buttonCancel = document.querySelector('#upload-cancel');

buttonAddPicture.addEventListener('change', () => {
  openWindow();
});

buttonCancel.addEventListener('click', () => {
  closeWindow();
});

function openWindow() {
  document.querySelector('.img-upload__overlay').classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', closeOnButton);
}

const closeOnButton = (evt) => {
  if (isESC(evt)) {
    evt.preventDefault();
    closeWindow()
  }
}

function cleanForm() {
  buttonAddPicture.value = '';
  document.querySelector('.text__hashtags').value = '';
  document.querySelector('.text__description').value = '';
}

function closeWindow() {
  document.querySelector('.img-upload__overlay').classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', closeOnButton);
  cleanForm();
}
