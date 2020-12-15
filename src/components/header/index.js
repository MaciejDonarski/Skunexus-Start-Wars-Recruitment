import React from 'react';

import { NavItem } from './nav-item';

import { NAV_ITEMS } from './constants';

import './header.scss';

export const Header = () => (
  <div className="header">
    <div className="header__logo">
      <h2>Star Wars</h2>
    </div>

    <div className="nav">
      {
        NAV_ITEMS.map(r => (
          <NavItem
            key={r.title}
            title={r.title}
            path={r.path}
          />
        ))
      }
    </div>
  </div>
);
