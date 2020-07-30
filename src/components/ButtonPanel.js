import React from 'react';
import PropTypes from 'prop-types';
import '../css/ButtonPanel.css';

const ButtonPanel = props => {
  // eslint-disable-next-line no-unused-vars
  const { buttonName } = props;
  return (
    <div>
      <div>
        <button
          className="button gray"
          type="button"
        >
          AC
        </button>
        <button
          className="button gray"
          type="button"
        >
          +/-
        </button>
        <button
          className="button gray"
          type="button"
        >
          %
        </button>
        <button
          className="button orange"
          type="button"
        >
          ÷
        </button>
      </div>
      <div>
        <button
          className="button gray"
          type="button"
        >
          7
        </button>
        <button
          className="button gray"
          type="button"
        >
          8
        </button>
        <button
          className="button gray"
          type="button"
        >
          9
        </button>
        <button
          className="button orange"
          type="button"
        >
          X
        </button>
      </div>
      <div>
        <button
          className="button gray"
          type="button"
        >
          4
        </button>
        <button
          className="button gray"
          type="button"
        >
          5
        </button>
        <button
          className="button gray"
          type="button"
        >
          6
        </button>
        <button
          className="button orange"
          type="button"
        >
          -
        </button>
      </div>
      <div>
        <button
          className="button gray"
          type="button"
        >
          1
        </button>
        <button
          className="button gray"
          type="button"
        >
          2
        </button>
        <button
          className="button gray"
          type="button"
        >
          3
        </button>
        <button
          className="button orange"
          type="button"
        >
          +
        </button>
      </div>
      <div>
        <button
          className="button gray w-50"
          type="button"
        >
          0
        </button>
        <button
          className="button gray"
          type="button"
        >
          .
        </button>
        <button
          className="button orange"
          type="button"
        >
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
