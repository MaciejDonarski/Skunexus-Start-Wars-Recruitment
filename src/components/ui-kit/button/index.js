import React from 'react';
import PropTypes from 'prop-types';

import './button.scss';

export const Button = ({ text, onClick = () => {}, type = 1 }) => (
  <button className="button" onClick={onClick} type={type === 1 ? 'button' : 'submit'}>{text}</button>
);

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.number,
};
