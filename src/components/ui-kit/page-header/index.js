import React from 'react';
import PropTypes from 'prop-types';

import './page-header.scss';

export const PageHeader = ({ children }) => (
  <div className="page-header">
    { children }
  </div>
);

PageHeader.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
