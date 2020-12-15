import React from 'react';
import { Switch } from 'react-router-dom';
import { routes } from '@router/router-paths';
import { ExtendedRouter } from '@wellyes/react-router-extended';

import { Header } from '@components/header';

import './secured-layout.scss';

export const SecuredLayout = () => (
  <>
    <Header />
    <div className="layout">
      <Switch>
        {routes.map((route) => (
          <ExtendedRouter
            key={route.path?.toString()}
            {...route}
          />
        ))}
      </Switch>
    </div>
  </>
);
