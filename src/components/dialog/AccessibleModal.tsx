"use client"

import React, { useState, useRef, useEffect } from 'react';

const AccessibleModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeModal();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      modalRef.current?.focus();
    } else {
      document.removeEventListener('keydown', handleKeyDown);
    }

    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  return (
    <div>
      <button onClick={openModal}>Abrir Modal Acessível</button>
      {isOpen && (
        <div>
          <div className="fixed inset-0 bg-black opacity-50"></div>
          <div
            ref={modalRef}
            className="fixed inset-0 flex items-center justify-center"
            role="dialog"
            aria-modal="true"
            aria-labelledby="accessible-modal-title"
            tabIndex={-1}
          >
            <div className="bg-white p-8 rounded shadow-lg" role="document">
              <h2 id="accessible-modal-title">Conteúdo da Modal Acessível</h2>
              <p>Este é um exemplo de modal acessível.</p>
              <button onClick={closeModal}>Fechar</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AccessibleModal;
