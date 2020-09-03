import React from 'react'
import { render, screen } from '@testing-library/react';

import Login from './Login'
describe('Login', () => {
    it('render default state i.e idle', () => {
        render(<Login state={{ status: 'idle' }} />);
        const submitButton = screen.getByRole('button');
        expect(submitButton).toBeInTheDocument();
    })

    it('render login state i.e success', () => {
        render(<Login state={{ user: {name:'kush'}, status: 'success' }} />);
        const loggedInText = screen.getByText('Loged In as');
        expect(loggedInText).toBeInTheDocument();
        const userNameText =  screen.getByText('kush');
        expect(userNameText).toBeInTheDocument();
    })

    it('render error state i.e error', () => {
        render(<Login state={{ status: 'error',error:'Invalid user name and password' }} />);
        const errorText = screen.getByText('Invalid user name and password');
        expect(errorText).toBeInTheDocument();
    })
})
