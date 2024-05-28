"use client"
import React, { useState } from 'react';

const AccordionMenuWithAccessibility = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button
        onClick={toggleAccordion}
        aria-expanded={isOpen ? 'true' : 'false'}
        aria-controls="accordion-menu"
      >
        Toggle Menu com acessibilidade
      </button>
      <ul
        id="accordion-menu"
        role="menu"
        aria-hidden={isOpen ? 'false' : 'true'}
        style={{ display: isOpen ? 'block' : 'none' }}
      >
        <li role="none">
          <button role="menuitem">Item 1</button>
        </li>
        <li role="none">
          <button role="menuitem">Item 2</button>
        </li>
        <li role="none">
          <button role="menuitem">Item 3</button>
        </li>
      </ul>
    </div>
  );
};

export default AccordionMenuWithAccessibility;
