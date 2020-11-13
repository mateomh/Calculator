import React from 'react';
import PropTypes from 'prop-types';

export default function ButtonKey(props) {
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

ButtonKey.propTypes = {
  value: PropTypes.string.isRequired,
  clickCallBack: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
};
