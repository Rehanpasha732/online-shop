import React, { useState } from 'react'
import {Link, useNavigate } from 'react-router-dom'
import UploadApp from './upload.js'

import './style.css'


const Signup = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
    const Navigate = useNavigate()
    const sign = () => {
        if (name === "" || email === "" || password === "") {
            alert("fill the vlaue")
            setName('')
            setEmail('')
            setPassword('')

        }

        else if (!regEx.test(email)) {

            alert("email is invalid")
            setName('')
            setEmail('')
            setPassword('')
        }
        else {
            localStorage.setItem("name", name)
            localStorage.setItem("email", email)
            localStorage.setItem("password", password)
            setName('')
            setEmail('')
            setPassword('')
            Navigate('/Login')

        }
    }


    return (
        <>
            <div className="main_signup">
                <div className="section">
                    <div className="form_img">
                        <img src='https://img.freepik.com/premium-vector/men-get-cashback-when-shopping-online_670881-1.jpg' className="img" />

                    </div>
                    <div className="text">
                        <h1 className='heading'>Sign in</h1>
                        <p className='lorem_para'>Lorem ipsum dolor sit amet consectetur<br />  adipisicing </p>
                        <div className="form">
                            <input className='input_1' type="text" value={name} onChange={e => setName(e.target.value)} placeholder='Enter Your User Name' /><br />
                            <input className='input_2' placeholder='Enter Email' type="email" value={email} onChange={e => setEmail(e.target.value)} /><br />
                            <input className='input_3' type="password" placeholder='Enter Password' value={password} onChange={e => setPassword(e.target.value)} />
                            <UploadApp/>
                            <div className='login_btn' onClick={sign} >Sign Up</div>
                            <div className="login">Already An Account<p ><Link to='/login'>Login</Link></p></div>
                        </div>


                    </div>

                </div>

            </div>

        </>
    )
}

export default Signup
