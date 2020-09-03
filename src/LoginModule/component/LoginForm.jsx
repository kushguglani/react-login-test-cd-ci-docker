import React, { useState } from 'react'

export default function LoginForm({ isLoading, submitLogin }) {
    const [loginDetails, setLoginDetails] = useState({ userName: '', password: '' })
    const handleInputChange = (e) => {
        setLoginDetails({
            ...loginDetails,
            [e.target.name]: e.target.value
        })
    }
    return (
        <fieldset>
            <legend>Login Form</legend>
            User Name : <input type="text" name="userName" onChange={handleInputChange} placeholder="User Name" /><br />
            Password : <input type="password" name="password" onChange={handleInputChange} placeholder="Password" /><br /><br />
            <button disabled={isLoading ? true : false} onClick={() => submitLogin(loginDetails)}>{isLoading ? 'Loading...' : 'Login'}</button>
        </fieldset>
    )
}
