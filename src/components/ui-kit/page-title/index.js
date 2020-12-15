import React from 'react';
import PropTypes from 'prop-types';

import './page-title.scss';

export const PageTitle = ({ title }) => (
  <div className="page-title">
    {title}
  </div>
);

PageTitle.propTypes = {
  title: PropTypes.string.isRequired,
};
