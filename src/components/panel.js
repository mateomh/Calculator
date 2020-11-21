import React from 'react';
import PropTypes from 'prop-types';
import ButtonKey from './button';
import buttonStyles from '../styles/buttons.module.css';

export default function Panel(props) {
  const { clickHandler } = props;
  return (
    <>
      <div className={buttonStyles.buttonRow}>
        <ButtonKey value="AC" type={`${buttonStyles.button} ${buttonStyles.type3}`} clickCallBack={clickHandler} />
        <ButtonKey value="+/-" type={`${buttonStyles.button} ${buttonStyles.type3}`} clickCallBack={clickHandler} />
        <ButtonKey value="%" type={`${buttonStyles.button} ${buttonStyles.type3}`} clickCallBack={clickHandler} />
        <ButtonKey value="/" type={`${buttonStyles.button} ${buttonStyles.type2}`} clickCallBack={clickHandler} />
      </div>
      <div className={buttonStyles.buttonRow}>
        <ButtonKey value="7" type={`${buttonStyles.button} ${buttonStyles.type1}`} clickCallBack={clickHandler} />
        <ButtonKey value="8" type={`${buttonStyles.button} ${buttonStyles.type1}`} clickCallBack={clickHandler} />
        <ButtonKey value="9" type={`${buttonStyles.button} ${buttonStyles.type1}`} clickCallBack={clickHandler} />
        <ButtonKey value="X" type={`${buttonStyles.button} ${buttonStyles.type2}`} clickCallBack={clickHandler} />
      </div>
      <div className={buttonStyles.buttonRow}>
        <ButtonKey value="4" type={`${buttonStyles.button} ${buttonStyles.type1}`} clickCallBack={clickHandler} />
        <ButtonKey value="5" type={`${buttonStyles.button} ${buttonStyles.type1}`} clickCallBack={clickHandler} />
        <ButtonKey value="6" type={`${buttonStyles.button} ${buttonStyles.type1}`} clickCallBack={clickHandler} />
        <ButtonKey value="-" type={`${buttonStyles.button} ${buttonStyles.type2}`} clickCallBack={clickHandler} />
      </div>
      <div className={buttonStyles.buttonRow}>
        <ButtonKey value="1" type={`${buttonStyles.button} ${buttonStyles.type1}`} clickCallBack={clickHandler} />
        <ButtonKey value="2" type={`${buttonStyles.button} ${buttonStyles.type1}`} clickCallBack={clickHandler} />
        <ButtonKey value="3" type={`${buttonStyles.button} ${buttonStyles.type1}`} clickCallBack={clickHandler} />
        <ButtonKey value="+" type={`${buttonStyles.button} ${buttonStyles.type2}`} clickCallBack={clickHandler} />
      </div>
      <div className={[buttonStyles.buttonRow, buttonStyles.lastRow].join(' ')}>
        <ButtonKey value="0" type={`${buttonStyles.button} ${buttonStyles.type1}`} clickCallBack={clickHandler} />
        <ButtonKey value="." type={`${buttonStyles.button} ${buttonStyles.type1}`} clickCallBack={clickHandler} />
        <ButtonKey value="=" type={`${buttonStyles.button} ${buttonStyles.type2}`} clickCallBack={clickHandler} />
      </div>
    </>
  );
}

Panel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};
