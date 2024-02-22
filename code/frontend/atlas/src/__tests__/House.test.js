import React from 'react';
import { render, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import House from '../components/House';

// Mock fetch requests
jest.mock('node-fetch');

describe('House', () => {
  test('renders housing and rent prices for a given area', async () => {
    // Mock the props
    const searchTerm = 'Dublin';

    // Mock the fetch response
    const mockHouseData = [
      {
        id: 1,
        year: 2023,
        area: 'Dublin',
        price: '€400,000'
      },
    ];

    global.fetch = jest.fn().mockResolvedValue({
      json: () => Promise.resolve(mockHouseData)
    });

    // Render the component
    const { getByText } = render(<House searchTerm={searchTerm} />);

    // Wait for fetch calls to resolve
    await waitFor(() => {
      // Check if rendered elements are present
      expect(getByText('Housing and Rent Prices for Dublin')).toBeInTheDocument();
      expect(getByText('Year: 2023')).toBeInTheDocument();
      expect(getByText('Area: Dublin')).toBeInTheDocument();
      expect(getByText('Average Home Cost: €400,000')).toBeInTheDocument();
    });
  });
});
