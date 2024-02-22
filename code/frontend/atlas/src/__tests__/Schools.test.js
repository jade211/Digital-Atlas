import React from 'react';
import { render, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import Schools from '../components/school';

// Mock fetch requests
jest.mock('node-fetch');

describe('Schools', () => {
  test('renders schools for a given search term and option', async () => {
    // Mock the props
    const searchTerm = 'Dublin';
    const searchOption = 'town';

    // Render the component
    const { getByText } = render(<Schools searchTerm={searchTerm} searchOption={searchOption} />);

    // Wait for fetch calls to resolve
    await waitFor(() => {
      // Check if rendered elements are present
      expect(getByText('Schools')).toBeInTheDocument();
      expect(getByText('Colleges')).toBeInTheDocument();
      expect(getByText('Universities')).toBeInTheDocument();
    });
  });
});
