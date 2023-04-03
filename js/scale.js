const increase = document.querySelector('.scale__control--bigger');
const decrease = document.querySelector('.scale__control--smaller');
const scaleValue = document.querySelector('.scale__control--value');
const picture = document.querySelector('.img-upload__preview');

const changeScale = (newScaleValue) => {
  scaleValue.value = `${newScaleValue}%`;
  picture.style.scale = newScaleValue / 100;
};

increase.addEventListener('click', () => {
  const curScaleValue = Number(scaleValue.value.slice(0, -1));
  if (curScaleValue !== 100) {
    changeScale(curScaleValue + 25);
  }
});

decrease.addEventListener('click', () => {
  const curScaleValue = Number(scaleValue.value.slice(0, -1));
  if (curScaleValue !== 25) {
    changeScale(curScaleValue - 25);
  }
});
