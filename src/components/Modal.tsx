'use client';
import React, { useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';

interface ModalProps {
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
}

const Modal: React.FC<ModalProps> = ({ onClose, children, title }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const handleCloseClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    onClose();
  };

  useEffect(() => {
    document.body.style.overflow = 'hidden'; // Disable body scrolling
    return () => {
      document.body.style.overflow = 'unset'; // Re-enable body scrolling
    };
  }, []);

  if (typeof window === 'undefined') return null;

  const modalContent = (
    <div className="modal-overlay">
      <div className="modal-wrapper cyber-tile-big" ref={modalRef}>
        <div className="modal">
          <div className="modal-header">
            <a href="#" onClick={handleCloseClick} aria-label="Close Modal">
              close
            </a>
          </div>
          {title && <h2>{title}</h2>}
          <div className="modal-body">{children}</div>
        </div>
      </div>
    </div>
  );

  return ReactDOM.createPortal(
    modalContent,
    document.getElementById('modal-root') as HTMLElement
  );
};

export default Modal;