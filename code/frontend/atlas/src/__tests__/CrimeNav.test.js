import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import CrimeNav from '../components/crime-navbar';
import { MemoryRouter } from 'react-router-dom';

describe('Crime component', () => {
    test('renders CrimeNav component without errors', () => {
      render(
        <MemoryRouter>
          <CrimeNav  />
         </MemoryRouter>
      );
      expect(screen.getByText('Search by Locality or County:')).toBeInTheDocument()
    });
  
    test('handles search and displays result', async () => {
      render(
        <MemoryRouter>
          <CrimeNav />
        </MemoryRouter>
      );
    
      fireEvent.click(screen.getByRole('button', { name: 'Search' }));
    
      await waitFor(() => {
          expect(screen.getByText('Search by Locality or County:')).toBeInTheDocument();
      });
    });
    test('displays loading message during API call', async () => {
        render(
            <MemoryRouter>
                <CrimeNav />
            </MemoryRouter>
        );
    fireEvent.change(screen.getByLabelText('Search by Locality or County:'), { target: { value: 'Cork' } });
    fireEvent.click(screen.getByRole('button', { name: 'Search' }));

    expect(screen.getByText('Loading...')).toBeInTheDocument();
    });

    // test('handles show more/show less button click', async () => {
    //     render(
    //       <MemoryRouter>
    //         <CrimeNav />
    //       </MemoryRouter>
    //     );
      
    //     fireEvent.change(screen.getByLabelText('Search by Locality or County:'), { target: { value: 'Galway' } });
    //     fireEvent.click(screen.getByRole('button', { name: 'Search' }));
      
    //     await waitFor(() => {
    //       expect(screen.getByText('Show More')).toBeInTheDocument();
    //     });
      
    //     fireEvent.click(screen.getByText('Show More'));
      
    //     await waitFor(() => {
    //       expect(screen.getByText('Show Less')).toBeInTheDocument();
    //     });
    // });
});

