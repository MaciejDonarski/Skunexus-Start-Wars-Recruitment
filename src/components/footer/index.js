import React from 'react';

import { Button } from '@components/ui-kit/button';

import './footer.scss';

export const Footer = () => (
  <div className="footer">
    <div className="footer__get-started">
      <div className="footer__get-started__text">
        Ready to get Started?
      </div>
      <Button text="Get started" />
    </div>
    <div className="footer__links">
      <div className="footer__links__link">
        link#1
      </div>
      <div className="footer__links__link">
        link#2
      </div>
      <div className="footer__links__link">
        link#3
      </div>
    </div>
  </div>
);
