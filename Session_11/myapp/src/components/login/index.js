import React from 'react'

export default function Login(props) {
    const handleSubmit = (e) => {
        e.preventDefault();
        props.onSubmit();
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>Login</div>
                <div>
                    <label>Email</label>
                    <input type="email" className="" />
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" className="" />
                </div>
                <div>
                    <button>Login</button>
                </div>
            </form>
        </div>
    )
}
