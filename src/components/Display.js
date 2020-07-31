import React from 'react';
import PropTypes from 'prop-types';
import '../css/Display.css';

const Display = props => {
  const { result } = props;
  return (
    <div className="input-display">
      <p>{result}</p>
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
