import operate from './operate';

const Calculate = (data, buttonName) => {
  // eslint-disable-next-line no-unused-vars
  let { total } = data;
  const { next } = data;
  const { operation } = data;

  switch (buttonName) {
    case 'AC':
      total = 0;
      break;
    case '+/-':
      total = total * next * -1;
      break;
    case '%':
      total /= 100;
      break;
    case '+':
      total = operate(total, next, operation);
      break;
    case 'x':
      total = operate(total, next, operation);
      break;
    case '-':
      total = operate(total, next, operation);
      break;
    case '÷':
      total = operate(total, next, operation);
      break;
    default:
      break;
  }
  return {
    total,
    next,
    operation,
  };
};

export default Calculate;
