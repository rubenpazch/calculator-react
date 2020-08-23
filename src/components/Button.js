import React from 'react';
import PropTypes from 'prop-types';

const Button = props => {
  const {
    buttonName, color, wide, clickHandler,
  } = props;

  const widthValue = wide ? '50%' : '25%';

  const styleButton = {
    backgroundColor: color,
    width: widthValue,
  };
  const handleClick = name => { clickHandler(name); };
  return (
    <button
      type="button"
      className="button"
      style={styleButton}
      onClick={() => { handleClick({ buttonName }); }}
    >
      {buttonName}
    </button>
  );
};

Button.propTypes = {
  buttonName: PropTypes.string.isRequired,
  wide: PropTypes.bool,
  color: PropTypes.string,
  clickHandler: PropTypes.func.isRequired,
};

Button.defaultProps = { color: '#e0e0e0', wide: false };

export default Button;