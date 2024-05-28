"use client"
import React, { useState } from 'react';

const AccordionMenuWithoutAccessibility = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={toggleAccordion}>Toggle Menu Sem acessibilidade</button>
      {isOpen && (
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
      )}
    </div>
  );
};

export default AccordionMenuWithoutAccessibility;
