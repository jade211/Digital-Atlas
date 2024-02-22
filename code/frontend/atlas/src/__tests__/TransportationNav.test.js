import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import TransportNav from '../components/transportation-navbar';
import { MemoryRouter } from 'react-router-dom';

describe('Transportation component', () => {
  test('renders TransportNav component without errors', () => {
    render(
      <MemoryRouter>
        <TransportNav />
      </MemoryRouter>
    );

    expect(screen.getByText('Search by Locality or County:')).toBeInTheDocument();
  });

  test('handles search and displays result', async () => {
    render(
      <MemoryRouter>
        <TransportNav />
      </MemoryRouter>
    );

    fireEvent.change(screen.getByLabelText('Search by Locality or County:'), { target: { value: 'Dublin' } });
    fireEvent.click(screen.getByRole('button', { name: 'Search' }));

    await waitFor(() => {
      expect(screen.getByText('Dublin Bus')).toBeInTheDocument();
      expect(screen.getByText('Bus Information')).toBeInTheDocument();
      expect(screen.getByText('Bus Eireann')).toBeInTheDocument();
      expect(screen.getByText('Bus Eireann')).toBeInTheDocument();
    });

    fireEvent.change(screen.getByLabelText('Search by Locality or County:'), { target: { value: '' } });
    fireEvent.click(screen.getByRole('button', { name: 'Search' }));
  });

//   test('handles search with no results', async () => {
//     render(
//       <MemoryRouter>
//         <TransportNav />
//       </MemoryRouter>
//     );

//     fireEvent.change(screen.getByLabelText('Search by Locality or County:'), { target: { value: 'NonExistentLocation' } });
//     fireEvent.click(screen.getByRole('button', { name: 'Search' }));

//     await waitFor(() => {
//       expect(screen.getByText('No Buses Found in NonExistentLocation')).toBeInTheDocument();
//     });
//   });
});
