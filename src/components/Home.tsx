import React from 'react';
import { useAuth } from '../appContexts';
import { Navigate } from 'react-router-dom';
import '../css/home.css'

export default function Home() {

    const { isLoggedIn, user, logout } = useAuth();

    if (!isLoggedIn) return <Navigate to="/login" />

    return (
        <div className='container'>
            <div className="user">
                <h5>Welcome!</h5>
                <h1>{user?.name}</h1>
                <p>{user?.email}</p>
                <button id="logoutBtn" className="btn btn-primary btn-lg btn-block" onClick={logout}>Logout</button>
            </div>
        </div>
    )
}