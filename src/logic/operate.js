const Big = require('big.js');

const Operate = (numberOne, numberTwo, operation) => {
  const nOne = new Big(numberOne);
  const nTwo = new Big(numberTwo);

  switch (operation) {
    case '-':
      return nOne.minus(nTwo);
    case '+':
      return nOne.plus(nTwo);
    case 'x':
      return nOne.times(nTwo);
    case '÷':
      if (numberTwo === '0') {
        return 'Division by zero is undefined';
      }

      return nOne.div(nTwo);
    case '%':
      return nOne.div(100);
    default:
      break;
  }
  return -1;
};

export default Operate;
