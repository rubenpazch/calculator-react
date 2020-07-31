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
          color="Button"
          clickHandler={handleClick}
        />
        <Button
          buttonName="+/-"
          color="Button"
          clickHandler={handleClick}
        />
        <Button
          buttonName="%"
          color="Button"
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
          color="Button"
          clickHandler={handleClick}
        />
        <Button
          buttonName="8"
          color="Button"
          clickHandler={handleClick}
        />
        <Button
          buttonName="9"
          color="Button"
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
          color="Button"
          clickHandler={handleClick}
        />
        <Button
          buttonName="5"
          color="Button"
          clickHandler={handleClick}
        />
        <Button
          buttonName="6"
          color="Button"
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
          color="Button"
          clickHandler={handleClick}
        />
        <Button
          buttonName="2"
          color="Button"
          clickHandler={handleClick}
        />
        <Button
          buttonName="3"
          color="Button"
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
          color="Button"
          clickHandler={handleClick}
          wide
        />
        <Button
          buttonName="."
          color="Button"
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
