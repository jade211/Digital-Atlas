import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import AmenitiesNav from '../components/amenities-navbar';
import { MemoryRouter } from 'react-router-dom';

describe('Amenities component', () => {
  test('renders AmenitiesNav component without errors', () => {
    render(
      <MemoryRouter>
        <AmenitiesNav />
      </MemoryRouter>
    );

    expect(screen.getByLabelText('Search by Locality or County:')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Search' })).toBeInTheDocument();
  });

  test('handles search and displays result', async () => {
    render(
      <MemoryRouter>
        <AmenitiesNav />
      </MemoryRouter>
    );

    fireEvent.change(screen.getByLabelText('Search by Locality or County:'), {
      target: { value: 'Dublin' },
    });
    fireEvent.click(screen.getByRole('button', { name: 'Search' }));

    await waitFor(() => {
      expect(screen.queryByText('Loading...')).toBeNull();
    });

    await waitFor(() => {
      expect(screen.getByText('Entertainment and Leisure 🎳')).toBeInTheDocument();
      expect(screen.getByText('Restaurants and Cafes 🍴')).toBeInTheDocument();
      expect(screen.getByText('Shopping Centres and Shops 🏪')).toBeInTheDocument();
    });
  });
});