function getRandomInt(min, max) {
  if (max < min) {
    console.log('Передан некорректный диапазон');
    return false;
  } else {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}

function checkStr(str, maxLen) {
  return maxLen >= String(str).length;
}

