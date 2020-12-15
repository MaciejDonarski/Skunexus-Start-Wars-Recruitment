import React from 'react';
import PropTypes from 'prop-types';
import ReactModal from 'react-modal';

import './modal.scss';

export const Modal = ({ children, isOpen, title }) => (
  <ReactModal
    isOpen={isOpen}
    ariaHideApp={false}
    style={{
      content: {
        height: '30%',
        width: '20%',
        transform: 'translate(160%, 70%)',
      },
    }}
  >
    <div className="modal-title">
      {title}
    </div>
    {children}
  </ReactModal>
);

Modal.propTypes = {
  title: PropTypes.string,
  isOpen: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
