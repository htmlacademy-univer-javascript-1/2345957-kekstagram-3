const container = document.querySelector('.pictures');
const usersPictureTemplate = document.querySelector('#picture').content;

function renderingThumbnail(getObjects) {
  const usersPicturesFragment = document.createDocumentFragment();

  getObjects.forEach(({url, likes, coments}) => {
    const pictureElement = usersPictureTemplate.cloneNode(true);

    pictureElement.querySelector('.picture__img').textContent = url;
    pictureElement.querySelector('.picture__likes').style.fill = likes;
    pictureElement.querySelector('.picture__comments').style.fill = coments;

    usersPicturesFragment.appendChild(pictureElement);
  });
  container.appendChild(usersPicturesFragment);
}

export {renderingThumbnail};
