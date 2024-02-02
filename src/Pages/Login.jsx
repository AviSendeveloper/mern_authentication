import React from 'react'
import { useState } from 'react'
import axios from '../axiosConfig'
import { Link } from 'react-router-dom'
import AuthUser from "../Hooks/AuthUser"

const Login = () => {
    const { setAuth } = AuthUser();
    const [email, setEmail] = useState("");
    const [password, setpassword] = useState("");

    const handelInput = (e) => {
        const clName = e.target.className;

        if (clName === "email") {
            setEmail(e.target.value);
        } else if (clName === "password") {
            setpassword(e.target.value);
        }
    }

    const handelSubmit = async (e) => {
        e.preventDefault();

        const response = await axios.post("/login", {
            email: email,
            password: password
        });
        console.log("login response ::: ", response.data);

        if (response.data.status) {
            const { userDetails, accessToken } = response.data;
            setAuth({
                name: userDetails?.name,
                email: userDetails?.email,
                role: userDetails?.role,
                accessToken
            });
        }
    }

    return (
        <div>
            <h1>Login</h1>

            <form method="post" onSubmit={handelSubmit}>
                <div className="field">
                    <span>Email</span>
                    <input type="email" className="email" onChange={(e) => handelInput(e)} value={email} />
                </div>
                <div className="field">
                    <span>Password</span>
                    <input type="password" className="password" onChange={(e) => handelInput(e)} value={password} />
                </div>

                <button className="button">Submit</button>
            </form>

            <Link to="/register">Register</Link>
        </div>
    )
}

export default Login