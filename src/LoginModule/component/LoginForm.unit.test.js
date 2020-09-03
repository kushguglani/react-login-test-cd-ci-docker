import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import LoginForm from './LoginForm'
describe('Login Form test', () => {
    it('initial state', () => {
        render(<LoginForm />)
        const userNameField = screen.getByPlaceholderText('User Name');
        expect(userNameField).toHaveValue('');
        const passwordfield = screen.getByPlaceholderText('Password');
        expect(passwordfield).toHaveValue('');
        const button = screen.getByRole('button');
        expect(button).toHaveTextContent('Login');
        expect(button).not.toBeDisabled();
    })

    it('Login Form on Submit button click', () => {
        // You can create a mock function with jest.fn()
        const submitFunction = jest.fn();
        render(<LoginForm onSubmit={submitFunction} />)
        const userNameField = screen.getByPlaceholderText('User Name');
        const passwordfield = screen.getByPlaceholderText('Password');
        const button = screen.getByRole('button');
        fireEvent.change(userNameField, { target: { value: 'kush' } });
        fireEvent.change(passwordfield, { target: { value: 123456 } });
        fireEvent.click(button);
        expect(submitFunction).toHaveBeenCalledWith({
            name: 'kush',
            password: 123456
        });
    })
})

// getByPlaceholderText