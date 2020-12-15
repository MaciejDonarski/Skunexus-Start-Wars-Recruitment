import React from 'react';
import PropTypes from 'prop-types';

import './form-item.scss';

export const FormItem = ({ children, error, errorText, label }) => (
  <div className="form-item">
    <div className="form-item__label">
      {label}
    </div>
    {children}
    {error && <div className="form-item__error">{errorText}</div>}
  </div>
);

FormItem.propTypes = {
  label: PropTypes.string,
  error: PropTypes.bool,
  errorText: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
