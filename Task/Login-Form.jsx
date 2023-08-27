import React from "react";
import { useState } from "react";
import { PersonFill } from "react-bootstrap-icons";
import { Task } from "./task";

export function LoginForm() {
    const [theme, settheme] = useState({ backgroundColor: '#9CDCFE' });
    const [task, settask] = useState();
    const [validataion, setvalidation] = useState({ border: '' });
    const [hide] = useState({ display: 'none' });

    function themechange(e) {
        if (e.target.checked) {
            settheme({
                backgroundColor: 'black',
                color: 'white',
            }, document.getElementById('dark').innerHTML = "dark-theme")
        } else {
            settheme({
                backgroundColor: '#9CDCFE'
            }, document.getElementById('dark').innerHTML = "light-theme")
        }
    };
    function handleLogin(e) {
        e.preventDefault();
        settask(<Task/>)
        settheme(hide);
    }
    function change(e) {
        if (e.target.value === "") {
            setvalidation({ border: "2px inset red" })
        } else {
            setvalidation({ border: '2px inset green' })
        }
    }

    return (
        <div className="container-fluid">
            <div className="form d-flex justify-content-center align-items-center">
                <form style={theme} onSubmit={handleLogin} className=" overflow-hidden mt-5 p-2 rounded border border-dark">
                    <dl>
                        <h5 role="banner" style={{ textTransform: 'capitalize' }} className=" text-center font-wieght-bold p-1 rounded"><span className="h2"><PersonFill /></span>Login-form</h5>
                        <div className="form-switch">
                            <dd className="d-flex justify-content-end"><span style={{ fontFamily: 'monospace' }} id="dark" className="d-flex bg-dark text-white mx-5 border border-light">dark-theme</span><input onChange={themechange} type="checkbox" className="form-check-input" /></dd>
                        </div>
                        <dt style={{ letterSpacing: '1px', fontFamily: 'sans-serif' }}>Username:</dt>
                        <dd><input required onChange={change} style={validataion} className="form-control" type="text" name="username" /></dd>
                        <dt style={{ letterSpacing: '1px', fontFamily: 'sans-serif' }}>Passward:</dt>
                        <dd><input required onChange={change} style={validataion} className="form-control" type="password" name="passward" /></dd>
                        <dd>
                            <button style={{ textTransform: 'uppercase' }} className="btn btn-primary w-100 text-light">login</button>
                        </dd>
                    </dl>
                </form>
                {
                    task
                }
            </div>
        </div>
    )
}