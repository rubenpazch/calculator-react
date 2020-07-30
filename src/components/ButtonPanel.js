import React from 'react';
import PropTypes from 'prop-types';

const ButtonPanel = props => {
  // eslint-disable-next-line no-unused-vars
  const { buttonName } = props;
  return (
    <div>
      <div>
        <button type="button">
          AC
        </button>
        <button type="button">
          +/-
        </button>
        <button type="button">
          %
        </button>
        <button type="button">
          ÷
        </button>
      </div>
      <div>
        <button type="button">
          7
        </button>
        <button type="button">
          8
        </button>
        <button type="button">
          9
        </button>
        <button type="button">
          X
        </button>
      </div>
      <div>
        <button type="button">
          4
        </button>
        <button type="button">
          5
        </button>
        <button type="button">
          6
        </button>
        <button type="button">
          -
        </button>
      </div>
      <div>
        <button type="button">
          1
        </button>
        <button type="button">
          2
        </button>
        <button type="button">
          3
        </button>
        <button type="button">
          +
        </button>
      </div>
      <div>
        <button type="button">
          0
        </button>
        <button type="button">
          .
        </button>
        <button type="button">
          =
        </button>
      </div>
    </div>
  );
};

ButtonPanel.propTypes = {
  buttonName: PropTypes.string,
};

ButtonPanel.defaultProps = {
  buttonName: '0',
};

export default ButtonPanel;
