import React from 'react';
import { render, screen } from '@testing-library/react';
import axios from 'axios';
import Home from '../Home';

jest.mock('axios');

describe('Home Page', () => {
    it('renders product listings', async () => {
        const products = [
            { _id: '1', name: 'Laptop', description: 'High performance', price: 1200 },
            { _id: '2', name: 'Phone', description: 'Smartphone', price: 800 },
        ];
        axios.get.mockResolvedValueOnce({ data: products });

        render(<Home />);

        expect(await screen.findByText('Laptop')).toBeInTheDocument();
        expect(await screen.findByText('Phone')).toBeInTheDocument();
    });
});
