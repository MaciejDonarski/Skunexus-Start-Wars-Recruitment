import React from 'react';
import PropTypes from 'prop-types';

import './data-label.scss';

export const DataLabel = ({ label, value }) => (
  <div className="data-label">
    <span className="data-label__label">
      {label}
      :
      {' '}
    </span>
    <span>
      {value}
    </span>
  </div>
);

DataLabel.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};
