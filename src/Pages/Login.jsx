import React from 'react'
import { useState } from 'react'
import axios from "axios"
import axiosConfig from '../axiosConfig'

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
                <input type="email" className="email" onChange={(e) => handelInput(e)} value={email} />
                <input type="password" className="password" onChange={(e) => handelInput(e)} value={password} />

                <button className="button">Submit</button>
            </form>
        </div>
    )
}

export default Login