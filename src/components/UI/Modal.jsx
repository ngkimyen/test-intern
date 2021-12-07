import clsx from 'clsx';
import React from 'react';
import { createPortal } from 'react-dom';
import classes from './Modal.module.scss'

const Modal = ({overlay, onClose}) => {
   return (
      createPortal(<div className={classes.modal}>
         {overlay}
         <div onClick={onClose} className={clsx(classes.backDrop, 'layer-top')}></div>
      </div>, document.getElementById('modal-root'))
   );
};

export default Modal;