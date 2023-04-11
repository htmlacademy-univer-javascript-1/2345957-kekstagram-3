import {isESC} from './until.js';
import {resetEffect} from './effects.js';

const inputPicture = document.querySelector('#upload-file');
const buttonCancel = document.querySelector('#upload-cancel');

const openWindow = () => {
  document.querySelector('.img-upload__overlay').classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', closeOnButton);
};

inputPicture.addEventListener('change', () => {
  openWindow();
});

const cleanForm = () => {
  inputPicture.value = '';
  document.querySelector('.text__hashtags').value = '';
  document.querySelector('.text__description').value = '';
  resetEffect();
};

const closeWindow = (flag) => {
  document.querySelector('.img-upload__overlay').classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', closeOnButton);
  if (flag) {
    cleanForm();
  }
};

function closeOnButton(evt) {
  if (isESC(evt)) {
    evt.preventDefault();
    closeWindow(true);
  }
}

buttonCancel.addEventListener('click', () => {
  closeWindow(true);
});

export {closeWindow};
