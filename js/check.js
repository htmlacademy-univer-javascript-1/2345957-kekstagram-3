import {isESC} from "./until.js";

const successTemplate = document.querySelector('#success').content.querySelector('.success');
const errorTemplate = document.querySelector('#error').content.querySelector('.error');

const closeSuccessElement = () => {
  successTemplate.classList.add('hidden');
  document.removeEventListener('keydown', EscapeSuccess);
  document.removeEventListener('click', closeSuccessElement);
};

const closeErrorElement = () => {
  errorTemplate.classList.add('hidden');
  document.removeEventListener('keydown', EscapeError);
  document.querySelector('.img-upload__overlay').classList.remove('hidden');
  document.body.classList.add('modal-open');
};

function EscapeSuccess(evt) {
  if (isESC(evt)) {
    evt.preventDefault();
    closeSuccessElement();
  }
}

function EscapeError(evt){
  if (isESC(evt)) {
    evt.preventDefault();
    closeErrorElement();
  }
}
function isSuccess (){
  const successButton = successTemplate.querySelector('.success__button');
  document.addEventListener('keydown', EscapeSuccess);
  document.addEventListener('click', closeSuccessElement);
  successButton.addEventListener('click', () => {
    closeSuccessElement();
  });
  document.body.append(successTemplate);
}

const isFail = () => {
  const errorButton = errorTemplate.querySelector('.error__button');
  document.addEventListener('keydown', EscapeError);
  document.addEventListener('click', closeErrorElement);
  errorButton.addEventListener('click', () => {
    closeErrorElement();
  });
  document.querySelector('.img-upload__overlay').classList.add('hidden');
  document.body.classList.remove('modal-open');

  document.body.append(errorTemplate);
};

export {isSuccess, isFail}
