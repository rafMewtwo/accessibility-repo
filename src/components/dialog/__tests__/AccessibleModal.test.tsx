import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import AccessibleModal from '../AccessibleModal';

describe('AccessibleModal', () => {
  test('should open the modal when the open button is clicked', () => {
    render(<AccessibleModal />);
    const openButton = screen.getByText('Abrir Modal Acessível');
    fireEvent.click(openButton);
    expect(screen.getByRole('dialog')).toBeInTheDocument();
  });

  test('should focus the modal when opened', () => {
    render(<AccessibleModal />);
    const openButton = screen.getByText('Abrir Modal Acessível');
    fireEvent.click(openButton);
    const modal = screen.getByRole('dialog');
    expect(modal).toHaveFocus();
  });

  test('should close the modal when the close button is clicked', () => {
    render(<AccessibleModal />);
    const openButton = screen.getByText('Abrir Modal Acessível');
    fireEvent.click(openButton);
    const closeButton = screen.getByText('Fechar');
    fireEvent.click(closeButton);
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  test('should close the modal when the Escape key is pressed', () => {
    render(<AccessibleModal />);
    const openButton = screen.getByText('Abrir Modal Acessível');
    fireEvent.click(openButton);
    fireEvent.keyDown(document, { key: 'Escape', code: 'Escape' });
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  test('should have aria-modal attribute set to true', () => {
    render(<AccessibleModal />);
    const openButton = screen.getByText('Abrir Modal Acessível');
    fireEvent.click(openButton);
    const modal = screen.getByRole('dialog');
    expect(modal).toHaveAttribute('aria-modal', 'true');
  });

  test('should have aria-labelledby attribute pointing to the modal title', () => {
    render(<AccessibleModal />);
    const openButton = screen.getByText('Abrir Modal Acessível');
    fireEvent.click(openButton);
    const modal = screen.getByRole('dialog');
    expect(modal).toHaveAttribute('aria-labelledby', 'accessible-modal-title');
  });
});
