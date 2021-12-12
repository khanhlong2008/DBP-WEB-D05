import React from 'react'
import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import AuthContext from '../../context/auth'
export default function RequiedAuth(props) {
    const mode = props.mode || "navigate"
    const authCtx = useContext(AuthContext)
    if (!authCtx.user) {
        if (mode === "navigate") {
            return <Navigate to='/login' />
        }
        if (mode === "hidden") {
            return null;
        }
        if (mode === "fallback") {
            return <p>This is private area . User should log in to see this</p>
        }
        return null;
    }
    return props.children
}

