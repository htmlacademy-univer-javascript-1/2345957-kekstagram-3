import {renderingThumbnail} from './render.js';
import {checkError} from './until.js';

const getPicturesFromServer = () => {
  fetch('https://27.javascript.pages.academy/kekstagram-simple/data')
    .then((ans) => {
      if (ans.ok) {
        return ans.json();
      }
    })
    .then((ans) => renderingThumbnail(ans))
    .catch(() => checkError('Ошибка подгрузки изображений!'));
};

export {getPicturesFromServer};
