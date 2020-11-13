import React from 'react';
import PropTypes from 'prop-types';

export default function Button(props) {
  const { value, clickCallBack, type } = props;

  return (
    <button
      type="button"
      value={value}
      className={type}
      onClick={clickCallBack}
    >
      {value}
    </button>
  );
}

Button.propTypes = {
  value: PropTypes.string.isRequired,
  clickCallBack: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
};
