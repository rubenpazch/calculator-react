import React from 'react';
import PropTypes from 'prop-types';

const Button = props => {
  const {
    buttonName,
    color,
    wide,
  } = props;
  const widthValue = wide ? '50%' : '25%';
  return (
    <button
      type="button"
      className="button"
      style={{ backgroundColor: color, width: widthValue }}
    >
      {buttonName}
    </button>
  );
};

Button.propTypes = {
  buttonName: PropTypes.string.isRequired,
<<<<<<< HEAD
};

=======
  wide: PropTypes.bool,
  color: PropTypes.string,
};

Button.defaultProps = { color: '#e0e0e0', wide: false };

>>>>>>> milestone-3
export default Button;
