import { useState, useContext } from "react"
import Card from "../Shared/Card";
import InputGroup from "../Shared/InputGroup";
import './Login.css'
import axios, { addJwt } from '../../Util/http'
import AuthContext from '../../context/auth'
import { Navigate } from 'react-router-dom'
export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const authCtx = useContext(AuthContext)

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/login',
                {
                    username: username,
                    password: password,
                })
            console.log(response)
            authCtx.setUser(response.data.user)
            localStorage.setItem("token", response.data.token)
            addJwt(response.data.token)
        } catch (err) {
            alert(err.message)
        }
    }
    if (authCtx.user) {
        return <Navigate to="/" replace={true} />
    }

    return (
        <div className="login-screen">
            <Card className="login-card" >
                <h3>Login</h3>
                <form onSubmit={onSubmit} >
                    <InputGroup
                        htmlType="text"
                        label="Username"
                        value={username}
                        onChange={(e) => {
                            setUsername(e.target.value);
                        }}
                    />
                    <InputGroup
                        htmlType="password"
                        label="Password"
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }}
                    />
                    <div className="btn-login">
                        <button type="submit" >Login</button>
                    </div>
                </form>
            </Card>
        </div >
    )
}
