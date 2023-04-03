function getRandomInt(min, max) {
  if (min < 0 || max < 0) {
    throw new Error('invalid parameters');
  }
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  return Math.floor(Math.random() * (upper - lower + 1) + lower);
}

function checkStr(str, maxLen) {
  return maxLen >= String(str).length;
}

function getSignature() {
  const variants = ['Its a beautiful life, oh oh-oh-oh', 'You are my strange addiction',
    'Am I falling in love with the one that could break my heart?', 'Kiss, kiss and make up',
    'Dont mess up my tempo', 'If you love me, let me hear you', 'I live for the applause, applause, applause',
    'Take me to church Ill worship like a dog at the shrine of your lies', 'I want you to cry for me',
    'Mojito with lime, Sweet mimosa, pina colada', 'Im pretty when I cry'];
  return variants[getRandomInt(0, variants.length - 1)];
}

const isESC = (evt) => evt.key === 'Escape';

export {
  getRandomInt,
  checkStr,
  getSignature,
  isESC
};
