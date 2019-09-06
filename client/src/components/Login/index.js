import React from 'react'
import './index.css';
import { Link } from "react-router-dom";
// Import IMG
import Background from "assets/img/bgr-form.jpg"

export default function Index() {
    const handleChange = (e) => {
        let target = e.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        let name = target.name;
        console.log(value)
        console.log(name)
    }
    const bgrForm = {
        backgroundImage: `url(${Background})`
    }
    return (
        <div className="area-login" style={bgrForm}>
            <form className="login" action="/login" method="post">
                <div className="redirectForm">
                    <span className="signIn active"><Link to="/login">Sign In</Link></span>
                    <span className="signUn"><Link to="/">Sign Up</Link></span>
                </div>
                <label htmlFor="">Username</label>
                <input className="username" type="text" onChange={(e) => handleChange(e)} name="username" placeholder="Username" />
                <label htmlFor="">Password</label>
                <input className="pass" onChange={(e) => handleChange(e)} type="password" name="pass" placeholder="Password" />
                <input className="checkbox" onChange={(e) => handleChange(e)} type="checkbox" name="rememberme" id="rememberme"/>
                <label htmlFor="f-option">Remember me</label>
                <button className="guiform" type="submit">Login</button>
            </form>
        </div>
    )
}
