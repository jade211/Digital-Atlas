import React from 'react';
import { render, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import Crime from '../components/crime';

describe('Crime component', () => {
  test('renders crime data for a given search term', async () => {
    const searchTerm = 'Dublin'; // Providing a search term for testing

    // Mock fetch requests
    global.fetch = jest.fn().mockResolvedValueOnce({
      json: async () => ({
        result: {
          value: [10, 20, 30, 40, 50], // Mock crime data
          dimension: {
            C02480V03003: {
              category: {
                label: {
                  '01': 'Homicide Offences',
                  '02': 'Sexual offences',
                  // Add more label mappings as needed
                },
              },
            },
          },
        },
      }),
    });

    const { getByText } = render(<Crime searchTerm={searchTerm} />);

    // Wait for the component to load crime data
    await waitFor(() => {
      // Check if the component renders the crime data
      expect(getByText('Crime Rate for Dublin')).toBeInTheDocument();
      expect(getByText('5 Most Frequent Crimes in Dublin (2023)')).toBeInTheDocument();
      expect(getByText('Total Crimes: 150')).toBeInTheDocument(); // Example total crimes value
      expect(getByText('Homicide Offences')).toBeInTheDocument(); // Example crime type label
    });
  });
});
