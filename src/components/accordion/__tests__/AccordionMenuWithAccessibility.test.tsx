import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe, toHaveNoViolations } from 'jest-axe';
import AccordionMenuWithAccessibility from '../AccordionMenuWithAccessibility';
import '@testing-library/jest-dom';


expect.extend(toHaveNoViolations);

describe('AccordionMenuWithAccessibility', () => {
  test('should open and close the menu when the toggle button is clicked', async () => {
    render(<AccordionMenuWithAccessibility />);
    const toggleButton = screen.getByText('Toggle Menu com acessibilidade');
    expect(screen.queryByRole('menu')).not.toBeInTheDocument();

    userEvent.click(toggleButton);
    await waitFor(() => {
      expect(screen.getByRole('menu')).toBeInTheDocument();
    });

    userEvent.click(toggleButton);
    await waitFor(() => {
      expect(screen.queryByRole('menu')).not.toBeInTheDocument();
    });
  });

  test('should have no accessibility violations', async () => {
    const { container } = render(<AccordionMenuWithAccessibility />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
