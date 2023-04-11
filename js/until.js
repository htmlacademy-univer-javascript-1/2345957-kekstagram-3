const getRandomInt = (min, max) => {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  return Math.floor(Math.random() * (upper - lower + 1) + lower);
};

const checkStr = (str, maxLen) => maxLen >= String(str).length;

const getSignature = () => {
  const variants = ['Its a beautiful life, oh oh-oh-oh', 'You are my strange addiction',
    'Am I falling in love with the one that could break my heart?', 'Kiss, kiss and make up',
    'Dont mess up my tempo', 'If you love me, let me hear you', 'I live for the applause, applause, applause',
    'Take me to church Ill worship like a dog at the shrine of your lies', 'I want you to cry for me',
    'Mojito with lime, Sweet mimosa, pina colada', 'Im pretty when I cry'];
  return variants[getRandomInt(0, variants.length - 1)];
};

const isESC = (evt) => evt.key === 'Escape';

const checkError = (message) => {
  const ALERT_SHOW_TIME = 5000;
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = '100';
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = '0';
  alertContainer.style.top = '0';
  alertContainer.style.right = '0';
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';
  alertContainer.textContent = message;
  document.body.append(alertContainer);
  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

export {
  getRandomInt,
  checkStr,
  getSignature,
  isESC,
  checkError
};
