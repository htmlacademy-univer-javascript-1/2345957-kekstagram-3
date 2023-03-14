import {getSignature, getRandomInt} from "./until";

function getObject(num) {
  return {
    id: num,
    url: `photos/${num}.jpg`,
    description: getSignature(),
    likes: getRandomInt(15, 200),
    comments: getRandomInt(0, 200),
  };
}

function getObjects(limit) {
  const objects = [];
  for (let i = 1; i <= limit; i++) {
    objects.push(getObject(i));
  }
  return objects;
}

getObjects(25);

export {
  getObject,
  getObjects
}
