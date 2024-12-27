import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

function Modal({ children, className = '', open }) {
  const dialog = useRef();

  useEffect(() => {
    if (!dialog.current) return;

    if (open) {
      if (!dialog.current.open) {
        dialog.current.showModal();
      }
    } else if (dialog.current.open) {
      dialog.current.close();
    }
  }, [open]);

  // Ensure the portal target exists
  const modalRoot = document.getElementById('modal');
  if (!modalRoot) {
    console.error('No element found with ID "modal". Please add it to your HTML.');
    return null;
  }

  return createPortal(
    <dialog ref={dialog} className={`modal ${className}`}>
      {children}
    </dialog>,
    modalRoot
  );
}

export default Modal;
