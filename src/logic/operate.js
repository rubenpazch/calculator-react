const Big = require('big.js');

const Operate = (numberOne, numberTwo, operation) => {
  const nOne = new Big(numberOne);
  const nTwo = new Big(numberTwo);
  switch (operation) {
    case '-':
      return nOne - nTwo;
    case '+':
      return nOne + nTwo;
    case 'x':
      return nOne * nTwo;
    case '÷':
      return nOne / nTwo;
    case '%':
      return nOne - nTwo;
    default:
      break;
  }
  return -1;
};

export default Operate;
