import React from 'react';
import PropTypes from 'prop-types';
import { useHistory, useLocation } from 'react-router-dom';

import './nav-item.scss';

export const NavItem = ({ title, path }) => {
  const history = useHistory();
  const location = useLocation();

  return (
    <button
      type="button"
      onClick={() => {
        history.push(path);
      }}
      className={`nav__item ${location.pathname === path ? 'selected' : ''}`}
    >
      {title}
    </button>
  );
};

NavItem.propTypes = {
  title: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};
