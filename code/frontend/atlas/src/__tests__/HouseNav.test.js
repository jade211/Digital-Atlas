import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import HouseNav from '../components/house-navbar';
import { MemoryRouter } from 'react-router-dom';

describe('House component', () => {
  test('renders HouseNav component without errors', () => {
    render(
      <MemoryRouter>
        <HouseNav />
      </MemoryRouter>
    );


  });

  test('handles search and displays result for existing area', async () => {
    render(
      <MemoryRouter>
        <HouseNav />
      </MemoryRouter>
    );

    fireEvent.change(screen.getByPlaceholderText('Enter area...'), {
      target: { value: 'Dublin' },
    });
    fireEvent.click(screen.getByRole('button', { name: 'Search' }));

    await waitFor(() => {
      expect(screen.getByText('Housing and Rent Prices')).toBeInTheDocument();
      // You can add more assertions based on the expected result
    });
  });

//   test('handles search and displays result for non-existing area', async () => {
//     render(
//       <MemoryRouter>
//         <HouseNav />
//       </MemoryRouter>
//     );

//     fireEvent.change(screen.getByPlaceholderText('Enter area...'), {
//       target: { value: 'NonExistingArea' },
//     });
//     fireEvent.click(screen.getByRole('button', { name: 'Search' }));

//     await waitFor(() => {
//       expect(screen.getByText('No Housing Data')).toBeInTheDocument();
//       // You can add more assertions based on the expected result
//     });
//   });

  // Add more test cases for different scenarios as needed
});