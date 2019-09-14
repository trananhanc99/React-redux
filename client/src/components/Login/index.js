import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from "react-router-dom";
// Import IMG
import { compareData } from 'actions'
import './index.css';
import Background from "assets/img/bgr-form.jpg"






export default function Index() {
    const dispatch = useDispatch()

    const [user, setUsername] = useState({username: ''});
    const [pass, setPass] = useState({upasssername: ''});
    const [checked, setchecked] = useState(false);
    const bgrForm = {
        backgroundImage: `url(${Background})`
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(compareData(user, pass));
    }
    return (
        <div className="area-login" style={bgrForm}>
            <form className="login" onSubmit={handleSubmit}>
                <div className="redirectForm">
                    <span className="signIn active"><Link to="/login">Sign In</Link></span>
                    <span className="signUn"><Link to="/">Sign Up</Link></span>
                </div>
                <label htmlFor="">Username</label>
                <input className="username" type="text" onInput={(e) => setUsername(e.target.value)} name="username" placeholder="Username" />
                <label htmlFor="">Password</label>
                <input className="pass" onInput={(e) => setPass(e.target.value)} type="password" name="pass" placeholder="Password" />
                <input className="checkbox" onChange={(e) => setchecked(e.target.checked)} type="checkbox" name="rememberme" id="rememberme"/>
                <label htmlFor="f-option">Remember me</label>
                <button className="guiform">Login</button>
            </form>
        </div>
    )
}
