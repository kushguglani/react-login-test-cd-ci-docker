import React from 'react'
import { UserLogin } from './hooks/userLogin'
import Login from './component/Login'

export default function LoginModule() {
    const { state, submitLogin } = UserLogin();
    return (
       <Login state={state} submitLogin={submitLogin} />
    )
}
