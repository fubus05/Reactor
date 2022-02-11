import React, {useState} from "react";
import {Navigate} from "react-router-dom";
import Analytics from "./analytics";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);

    const submit = async (e) =>{
        e.preventDefault();

        await fetch('http://localhost:8000/api/login', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            credentials: 'include',
            body: JSON.stringify({
                email,
                password
            })
        })
        setRedirect(true);
    }

    if(redirect) {
        return <Analytics to='/analytics'/>;
    }

    return(
        <div className="mainCurve">
            <form onSubmit={submit} className="formStyl">
                <h1 className="signIn">Please sign in</h1>
                <input type="email" className="form-control" placeholder="Email address" required
                       onChange={e => setEmail(e.target.value)}
                />
                <input type="password" className="form-control" placeholder="Password" required
                       onChange={e => setPassword(e.target.value)}
                />
                <button type="submit" className="btn-primary">Sign in</button>
            </form>
        </div>
    );
};

export default Login;