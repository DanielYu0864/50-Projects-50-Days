const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateEl = document.getElementById('generate');
const clipboardEl = document.getElementById('clipboard');

//* get random mathods
const getRandomLower = () => String.fromCharCode(Math.floor(Math.random() * 26) + 97);

const getRandomUpper = () => String.fromCharCode(Math.floor(Math.random() * 26) + 65);

const getRandomNumber = () => String.fromCharCode(Math.floor(Math.random() * 10) + 48);

const getRandomSymbol = () => {
  const symbols = '!@#$%^&*(){}[]=<>/,.';
  return symbols[Math.floor(Math.random() * symbols.length)];
}

const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol
}

const generatePassword = (lower, upper, number, symbol, length) => {
  let generatedPassword = '';
  // console.log(length);
  const typesCount = lower + upper + number + symbol;
  // console.log(typesCount);
  const typesArray = [{lower}, {upper}, {number}, {symbol}]
    .filter(item => Object.values(item)[0]); //* filter out all false value
  // console.log(typesArray);

  if(typesCount === 0) {
    return '';
  }

  for(let i = 0; i < length; i++) {
    let index = Math.floor(Math.random() * typesArray.length);
    // console.log(index);
    const funcName = Object.keys(typesArray[index])[0];
    // console.log(funcName);
    generatedPassword += randomFunc[funcName]();

  }

  const finalPassword = generatedPassword.slice(0, length);

  return finalPassword;
}


generateEl.addEventListener('click', () => {
  const length = '' + lengthEl.value;
  const hasLower = lowercaseEl.checked;
  const hasUpper = uppercaseEl.checked;
  const hasNumber = numbersEl.checked;
  const hasSymbol = symbolsEl.checked;

  resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length);
})

clipboardEl.addEventListener('click', () => {
  const textarea = document.createElement('textarea');
  const password = resultEl.innerText;

  if(!password) return;

  textarea.value = password;
  document.body.appendChild(textarea)
  textarea.select();
  document.execCommand('copy');
  textarea.remove();
  alert('Password copied');
})