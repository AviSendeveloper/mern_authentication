import React from 'react'
import { useState } from 'react'
import axios from "axios"
import axiosConfig from '../axiosConfig'
import { Link } from 'react-router-dom'

const Login = () => {
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

        console.log(email, password);
        const data = await axios.get("users", axiosConfig);
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