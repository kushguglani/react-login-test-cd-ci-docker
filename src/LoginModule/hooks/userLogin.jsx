import { useReducer, useCallback } from 'react';
import axios from 'axios';

function loginReducer(state, action) {
    switch (action.type) {
        case 'start':
            return {
                ...state,
                status: 'pending'
            }
        case 'success':
            return {
                ...state,
                status: 'done',
                user: action.user,
                error: null
            }
        case 'error':
            return {
                ...state,
                status: 'error',
                error: action.error,
                user: null
            }
        default:
            throw new Error(`Unhandled action type ${action.type}`)
    }
}

export function UserLogin() {
    const [state, dispatch] = useReducer(loginReducer, {
        user: null,
        error: null,
        status: 'idle'
    });

    // const submitLogin1 = ({ userName, password }) => {
    //         //using promise
    //     axios.post('http://localhost:5000/employee/authenticate', { userName, password }).then(res => {
    //         dispatch({ type: 'success', user: res.data })
    //     })
    //         .catch(error => {
    //             dispatch({ type: 'error', error: error.response.data.message })

    //         })
    //     (async () => {
    //         dispatch({ type: 'start' })
    //         try {
    //             const res = await axios.post('http://localhost:5000/employee/authenticate', { userName, password });
    //             dispatch({ type: 'success', user: res.data })
    //         } catch (error) {
    //             dispatch({ type: 'error', error: error.response.data.message })
    //         }
    //     })();
    // }

    const submitLogin = async ({ userName, password }) => {
        dispatch({ type: 'start' })
        try {
            const res = await axios.post('http://localhost:5000/employee/authenticate', { userName, password });
            dispatch({ type: 'success', user: res.data })
        } catch (error) {
            dispatch({ type: 'error', error: error.response.data.message })
        }

    }
    return {
        state,
        submitLogin
    };
}