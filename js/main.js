function getRandomInt(min, max) {
  if (max < min) {
    console.log('Передан некорректный диапазон');
    return false;
  } else {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
getRandomInt(0, 100);

function checkStr(str, maxLen) {
  return maxLen >= String(str).length;
}
checkStr("Привет", 2);
