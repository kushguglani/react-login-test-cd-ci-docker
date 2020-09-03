import React from 'react'
import LoginForm from './LoginForm';
export default function Login({ state, submitLogin }) {
    if (state.user) {
        return (
            <p>Loged In as <strong>{state.user.name}</strong></p>
        )
    }
    const isLoading = state.status === 'pending' ? true : false;
    const isError = state.status === 'error' ? true : false;
    return (
        <>
            <LoginForm isLoading={isLoading} submitLogin={submitLogin} />
            {isError &&
                <p>Error : <span className="error" >{state.error}</span></p>
            }
        </>
    )
}
