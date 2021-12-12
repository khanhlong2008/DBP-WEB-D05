import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'
import AuthContext from '../../context/auth'
import { useContext } from 'react'

export default function Navbar() {
    const authCtx = useContext(AuthContext)
    return (
        <div>
            <div className="nav-bar">
                <NavLink to="/" >Home</NavLink>
                {
                    authCtx.user ? (
                        <>
                            <NavLink to="/students" >students</NavLink>
                            <NavLink to="/classes" >Classes</NavLink>
                            <NavLink to="/teachers" >Teachers</NavLink>
                        </>
                    ) : (
                        <>
                            <NavLink to="/login" >Login</NavLink>
                            <NavLink to="/register" >Register</NavLink>
                        </>
                    )
                }
            </div>
            <div className="user-info">
                {authCtx.user ? (<span>Hello, {authCtx.user.username}</span>) : null}

            </div>
        </div>

    )
}
