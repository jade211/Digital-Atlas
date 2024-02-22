import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import SchoolsNav from '../components/school-navbar';
import { MemoryRouter } from 'react-router-dom';

describe('SchoolsNav component', () => {
  test('renders SchoolsNav component without errors', () => {
    render(
      <MemoryRouter>
        <SchoolsNav />
      </MemoryRouter>
    );

    expect(screen.getByLabelText('Search by Locality or County:')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Search' })).toBeInTheDocument();
  });

  test('handles search and displays school results', async () => {
    render(
      <MemoryRouter>
        <SchoolsNav />
      </MemoryRouter>
    );

    fireEvent.change(screen.getByLabelText('Search by Locality or County:'), { target: { value: 'Dublin' } });
    fireEvent.click(screen.getByRole('button', { name: 'Search' }));

    await waitFor(() => {
      expect(screen.getByText('Schools')).toBeInTheDocument();
    });
  });

  test('handles search and displays college results', async () => {
    render(
      <MemoryRouter>
        <SchoolsNav />
      </MemoryRouter>
    );

    fireEvent.change(screen.getByLabelText('Search by Locality or County:'), { target: { value: 'Dublin' } });
    fireEvent.click(screen.getByRole('button', { name: 'Search' }));

    await waitFor(() => {
      expect(screen.getByText('Colleges')).toBeInTheDocument();
    });
  });

  test('handles search and displays university results', async () => {
    render(
      <MemoryRouter>
        <SchoolsNav />
      </MemoryRouter>
    );

    fireEvent.change(screen.getByLabelText('Search by Locality or County:'), { target: { value: 'Dublin' } });
    fireEvent.click(screen.getByRole('button', { name: 'Search' }));

    await waitFor(() => {
      expect(screen.getByText('University')).toBeInTheDocument();
    });
  });
});