import React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import AreaSearch from '../components/areasearch';

jest.mock('mapbox-gl', () => ({
  Map: jest.fn(() => ({
    on: jest.fn(),
    flyTo: jest.fn(),
    // remove: jest.fn(),
  })),
  Marker: jest.fn(() => ({
    setLngLat: jest.fn(),
    addTo: jest.fn(),
  })),
  accessToken: 'test-token',
}));

describe('AreaSearch component', () => {
  test('renders AreaSearch component without errors', () => {
    render(
      <MemoryRouter>
        <AreaSearch />
       </MemoryRouter>
    );

    expect(screen.getByText('Features')).toBeInTheDocument();
  });

  test('handles search and displays result', async () => {
    render(
      <MemoryRouter>
        <AreaSearch />
      </MemoryRouter>
    );
  

    fireEvent.change(screen.getByLabelText('Search by Area:'), { target: { value: 'Dublin' } });
    fireEvent.click(screen.getByRole('button', { name: 'Search' }));
  
    await waitFor(() => {
        expect(screen.getByText('Amenities')).toBeInTheDocument();
        expect(screen.getByText('Education')).toBeInTheDocument();
        expect(screen.getByText('Search Result: Dublin')).toBeInTheDocument();
    });
  });

});