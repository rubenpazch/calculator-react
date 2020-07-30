import React from 'react';
import PropTypes from 'prop-types';
import '../css/Display.css';

const Display = props => {
  const { result } = props;
  return (
    <div>
      <input
        type="text"
        name="result"
        id="resultOPeration"
        className="input-display"
        value={result}
      />
    </div>
  );
};

Display.propTypes = {
  result: PropTypes.string,
};

Display.defaultProps = {
  result: '0',
};

export default Display;
