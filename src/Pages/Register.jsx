import React from 'react'
import { useState } from 'react'
import axios from '../axiosConfig'
import { Link } from 'react-router-dom'

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");

  const handelInput = (e) => {
    const clName = e.target.className;

    if (clName === "email") {
      setEmail(e.target.value);
    } else if (clName === "password") {
      setPassword(e.target.value);
    } else if (clName === "name") {
      setName(e.target.value);
    } else if (clName === "role") {
      setRole(e.target.value);
    }
  }

  const handelSubmit = async (e) => {
    e.preventDefault();

    const response = await axios.post("register", {
      name: name, email: email, password: password, role: role
    });

    console.log("registration response ::: ", response);
  }

  return (
    <div>
      <h1>Register</h1>

      <form method="post" onSubmit={handelSubmit}>
        <div className="field">
          <span>Name</span>
          <input type="text" className="name" onChange={(e) => handelInput(e)} value={name} />
        </div>
        <div className="field">
          <span>Email</span>
          <input type="email" className="email" onChange={(e) => handelInput(e)} value={email} />
        </div>
        <div className="field">
          <span>Password</span>
          <input type="password" className="password" onChange={(e) => handelInput(e)} value={password} />
        </div>
        <div className="field">
          <span>Role</span>
          <input type="text" className="role" onChange={(e) => handelInput(e)} value={role} />
        </div>

        <button className="button">Submit</button>
      </form>

      <Link to="/">Login</Link>
    </div>
  )
}

export default Register