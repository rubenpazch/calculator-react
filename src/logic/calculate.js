import operate from './operate';

const Calculate = (data, buttonName) => {
  let { total, next, operation } = data;
  switch (buttonName) {
    case '0':
    case '1':
    case '2':
    case '3':
    case '4':
    case '5':
    case '6':
    case '7':
    case '8':
    case '9':
      if (!total || total === '0' || Number.isNaN(Number(total))) {
        total = buttonName;
      } else {
        total += buttonName;
      }
      break;
    case '+':
    case '-':
    case 'x':
    case '÷':
    case '%':
      if (total) {
        next = total;
        total = '0';
      }
      operation = buttonName;
      break;
    case '+/-':
      if (total) {
        total = (total * -1).toString();
      }
      if (next) {
        next = (total * -1).toString();
      }
      break;
    case 'AC':
      total = '0';
      next = '0';
      operation = '';
      break;
    case '.':
      if (total && !total.includes('.')) {
        total += '.';
      } else if (!total) {
        total = '0.';
      }
      break;
    case '=':
      total = operate(next, total, operation);
      operation = '';
      next = '0';
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
