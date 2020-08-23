import React from 'react';
import PropTypes from 'prop-types';
import '../css/ButtonPanel.css';
import Button from './Button';

const ButtonPanel = props => {
  // eslint-disable-next-line no-unused-vars
  const { buttonName, color, wide } = props;
  return (
    <div>

      <div className="row-elements">
        <Button buttonName="AC" />
        <Button buttonName="+/-" />
        <Button buttonName="%" />
        <Button buttonName="÷" color="#f5913e" />
      </div>
      <div className="row-elements">
        <Button buttonName="7" />
        <Button buttonName="8" />
        <Button buttonName="9" />
        <Button buttonName="x" color="#f5913e" />
      </div>
      <div className="row-elements">
        <Button buttonName="4" />
        <Button buttonName="5" />
        <Button buttonName="6" />
        <Button buttonName="-" color="#f5913e" />
      </div>
      <div className="row-elements">
        <Button buttonName="1" />
        <Button buttonName="2" />
        <Button buttonName="3" />
        <Button buttonName="+" color="#f5913e" />
      </div>
      <div className="row-elements">
        <Button buttonName="0" wide />
        <Button buttonName="." />
        <Button buttonName="=" color="#f5913e" />
      </div>
    </div>
  );
};

ButtonPanel.propTypes = {
  buttonName: PropTypes.string,
  color: PropTypes.string,
  wide: PropTypes.string,
};

ButtonPanel.defaultProps = {
  buttonName: '0',
  color: '#f5913e',
  wide: 'false',
};

export default ButtonPanel;
