import React from 'react';
import { render } from '@testing-library/react'
import LoginModule from './';

describe('Login Module', () => {
    it('matches snapshot', () => {
        const { container } = render(<LoginModule />);
        expect(container.cloneNode(true)).toMatchSnapshot();
    })
})