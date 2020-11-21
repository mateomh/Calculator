import React from 'react';
import PropTypes from 'prop-types';
import displayStyles from '../styles/display.module.css';

export default function Display(props) {
  const { result } = props;
  return (
    <div className={displayStyles.display}>
      {result}
    </div>
  );
}

Display.propTypes = { result: PropTypes.string };

Display.defaultProps = {
  result: '0',
};
