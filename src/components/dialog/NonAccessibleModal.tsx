"use client"
import { useState } from 'react';

const NonAccessibleModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button onClick={openModal}>Abrir Modal</button>
      {isOpen && (
        <div>
          <div className="fixed inset-0 bg-black opacity-50"></div>
          <div className="fixed inset-0 flex items-center justify-center">
            <div className="bg-white p-8 rounded shadow-lg">
              <h2>Conteúdo da Modal</h2>
              <p>Este é um exemplo de modal não acessível.</p>
              <button onClick={closeModal}>Fechar</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NonAccessibleModal;
