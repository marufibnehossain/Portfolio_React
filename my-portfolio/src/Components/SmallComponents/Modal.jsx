import React, { useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { GrClose } from "react-icons/gr";

const CustomModal = ({ isOpen, onClose, imageUrl }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    const handleEscapeKey = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscapeKey);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [isOpen, onClose]);

  return isOpen ? ReactDOM.createPortal(
    <div className='z-50 fixed top-0 left-0 w-full h-full flex items-center justify-center bg-[rgb(0,0,0,0.7)]'>
      <div ref={modalRef} className='relative rounded-lg sm:w-auto w-10/12'>
        <div className='flex justify-end p-2 absolute top-0 right-0'>
          <GrClose onClick={onClose} className='hover:scale-110 cursor-pointer' />
        </div>
        <img src={imageUrl} className='lg:w-[550px] sm:w-[400px] w-full' alt="modal" />
      </div>
    </div>,
    document.body
  ) : null;
};

export default CustomModal;
