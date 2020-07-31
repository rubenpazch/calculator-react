import operate from './operate';

const isNumber = text => {
  const numbers = new Map();
  numbers.set('0', '0');
  numbers.set('1', '1');
  numbers.set('2', '2');
  numbers.set('3', '3');
  numbers.set('4', '4');
  numbers.set('5', '5');
  numbers.set('6', '6');
  numbers.set('7', '7');
  numbers.set('8', '8');
  numbers.set('9', '9');
  if (numbers.get(text)) {
    return true;
  }
  return false;
};

const isOperation = text => {
  const numbers = new Map();
  numbers.set('+', '+');
  numbers.set('-', '-');
  numbers.set('x', 'x');
  numbers.set('÷', '÷');
  numbers.set('%', '%');
  if (numbers.get(text)) {
    return true;
  }
  return false;
};

const isMinusPlus = text => {
  if (text === '+/-') {
    return true;
  }
  return false;
};

const isAC = text => {
  if (text === 'AC') {
    return true;
  }
  return false;
};

const isPoint = text => {
  if (text === '.') {
    return true;
  }
  return false;
};

const isEqual = text => {
  if (text === '=') {
    return true;
  }
  return false;
};

const Calculate = (data, buttonName) => {
  let { total, next, operation } = data;
  if (isNumber(buttonName)) {
    if (!total || total === '0' || Number.isNaN(Number(total))) {
      total = buttonName;
    } else if (operation !== null) {
      total += buttonName;
    } else {
      total += buttonName;
    }
    return {
      total,
      next,
      operation,
    };
  }
  if (isOperation(buttonName)) {
    if (total) {
      next = total;
      total = '0';
      operation = buttonName;
    }
    return {
      total,
      next,
      operation,
    };
  }

  if (isMinusPlus(buttonName)) {
    if (total) {
      total = (total * -1).toString();
    }
    if (next) {
      next = (total * -1).toString();
    }
  }

  if (isAC(buttonName)) {
    total = '0';
    next = '0';
    operation = null;
  }

  if (isPoint(buttonName)) {
    if (total && !total.includes('.')) {
      total += '.';
    } else if (!total) {
      total = '0.';
    }
  }

  if (isEqual(buttonName)) {
    total = operate(next, total, operation);
    operation = '';
    next = '0';
  }

  return {
    total,
    next,
    operation,
  };
};

export default Calculate;
