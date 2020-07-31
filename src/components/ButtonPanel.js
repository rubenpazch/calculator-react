import React from 'react';
import PropTypes from 'prop-types';
import '../css/ButtonPanel.css';
import Button from './Button';

const ButtonPanel = props => {
  const { clickhandler } = props;
  const handleClick = buttonName => { clickhandler(buttonName); };

  return (
    <div>
      <div className="row-elements">
        <Button
          buttonName="AC"
          clickHandler={handleClick}
        />
        <Button
          buttonName="+/-"
          clickHandler={handleClick}
        />
        <Button
          buttonName="%"
          clickHandler={handleClick}
        />
        <Button
          buttonName="÷"
          color="#f5913e"
          clickHandler={handleClick}
        />
      </div>
      <div className="row-elements">
        <Button
          buttonName="7"
          clickHandler={handleClick}
        />
        <Button
          buttonName="8"
          clickHandler={handleClick}
        />
        <Button
          buttonName="9"
          clickHandler={handleClick}
        />
        <Button
          buttonName="x"
          color="#f5913e"
          clickHandler={handleClick}
        />
      </div>
      <div className="row-elements">
        <Button
          buttonName="4"
          clickHandler={handleClick}
        />
        <Button
          buttonName="5"
          clickHandler={handleClick}
        />
        <Button
          buttonName="6"
          clickHandler={handleClick}
        />
        <Button
          buttonName="-"
          color="#f5913e"
          clickHandler={handleClick}
        />
      </div>
      <div className="row-elements">
        <Button
          buttonName="1"
          clickHandler={handleClick}
        />
        <Button
          buttonName="2"
          clickHandler={handleClick}
        />
        <Button
          buttonName="3"
          clickHandler={handleClick}
        />
        <Button
          buttonName="+"
          color="#f5913e"
          clickHandler={handleClick}
        />
      </div>
      <div className="row-elements">
        <Button
          buttonName="0"
          clickHandler={handleClick}
          wide
        />
        <Button
          buttonName="."
          clickHandler={handleClick}
        />
        <Button
          buttonName="="
          color="#f5913e"
          clickHandler={handleClick}
        />
      </div>
    </div>
  );
};

ButtonPanel.propTypes = {
  clickhandler: PropTypes.func.isRequired,
};

export default ButtonPanel;
