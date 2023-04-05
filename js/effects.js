const effects = document.querySelector('.effects__list');
const picture = document.querySelector('.img-upload__preview');

effects.addEventListener('change', (evt) => {
  for (const className of picture.classList) {
    if (className.startsWith('effects__preview--')) {
      picture.classList.remove(className);
    }
  }
  picture.classList.add(`effects__preview--${evt.target.value}`);
});
