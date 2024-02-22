import React from 'react';
import { render, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import Amenities from '../components/amenities';

// Mock fetch requests
jest.mock('node-fetch');

describe('Amenities', () => {
  test('renders amenities for a given search term and option', async () => {
    // Mock the props
    const searchTerm = 'Dublin';
    const searchOption = 'town';

    // Render the component
    const { getByText } = render(<Amenities searchTerm={searchTerm} searchOption={searchOption} />);

    // Wait for fetch calls to resolve
    await waitFor(() => {
      // Check if rendered elements are present
      expect(getByText('Entertainment and Leisure')).toBeInTheDocument();
      expect(getByText('Hotels and Accommodation')).toBeInTheDocument();
      expect(getByText('Hospitals, Pharmacies and Healthcare')).toBeInTheDocument();
      expect(getByText('Restaurants and Cafes')).toBeInTheDocument();
      expect(getByText('Shopping Centres and Shops')).toBeInTheDocument();
      expect(getByText('Services')).toBeInTheDocument();
      expect(getByText('Religious Establishments')).toBeInTheDocument();
      expect(getByText('Tourist Locations')).toBeInTheDocument();
      expect(getByText('Nearby Towns and Cities')).toBeInTheDocument();
    });
  });
});
