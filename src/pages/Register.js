import React, {useState} from 'react';
import {Navigate} from "react-router-dom";

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);

    const submit = async (e) =>{
        e.preventDefault();

        await fetch('http://localhost:8000/api/register', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                name,
                email,
                password
            })
        })
        setRedirect(true);
    }

    if(redirect) {
        return <Navigate to='/login'/>;
    }
    return (
        <div className="mainCurve">
            <form onSubmit={submit} className="formStyl">
                <h1 className="signIn">Please register</h1>
                <input className="form-control" placeholder="Name" required
                       onChange={e => setName(e.target.value)}
                />
                <input type="email" className="form-control" placeholder="Email address" required
                       onChange={e => setEmail(e.target.value)}
                />
                <input type="password" className="form-control" placeholder="Password" required
                       onChange={e => setPassword(e.target.value)}
                />

                <button type="submit" className="btn-primary">Register</button>
            </form>
        </div>
    );
};

export default Register;