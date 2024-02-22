import React from 'react';
import { render, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import Transport from '../components/transportation';

// Mock fetch requests
jest.mock('node-fetch');

describe('Transport', () => {
  test('renders transportation information for a given search term and option', async () => {
    // Mock the props
    const searchTerm = 'Dublin';
    const searchOption = 'town';

    // Render the component
    const { getByText } = render(<Transport searchTerm={searchTerm} searchOption={searchOption} />);

    // Wait for fetch calls to resolve
    await waitFor(() => {
      // Check if rendered elements are present
      expect(getByText('Dublin Buses')).toBeInTheDocument();
      expect(getByText('Bus Eireann')).toBeInTheDocument();
      expect(getByText('Bus Stops')).toBeInTheDocument();
      expect(getByText('Train Stations')).toBeInTheDocument();
    });
  });
});
