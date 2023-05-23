import React, { Component } from 'react';
import { createPortal } from 'react-dom';

import PropTypes from 'prop-types';

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.clickEscape);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.clickEscape);
  }

  clickEscape = event => {
    if (event.code !== 'Escape') {
      return;
    }
    this.props.close();
  };

  clickBackdrop = event => {
   
    if (event.target !== event.currentTarget) {
      return;
    }
    this.props.close();
  };

  render() {
    const { src, alt } = this.props;
    return createPortal(
      <div onClick={this.clickBackdrop} className='overlay'>
        <div>
          <img src={src} alt={alt} className='modal' />
        </div>
      </div>,
      document.querySelector('#modal-root')
    );
  }
}

Modal.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  close: PropTypes.func.isRequired,
};