import React, { Link, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import swal from 'sweetalert'

import './style.css'


const Login = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const Navigate = useNavigate()

    const login = () => {
        if (name === "" || email === "" || password === "") {
            swal("fill the vlaue")
            setName('')
            setEmail('')
            setPassword('')

        }

        if (email != localStorage.getItem("email") || name === "" || email === "") {
            swal(" email not found")
        }
        else if (password != localStorage.getItem("password")) {
            swal(" incorrect password")
        }

        else if (name != localStorage.getItem("name")) {
            swal("incorrect Name")
        }
        else {
            localStorage.setItem("name", name)
            localStorage.setItem("email", email)
            localStorage.setItem("password", password)
            setName('')
            setEmail('')
            setPassword('')
            Navigate('/shop')

            swal('LOGIN welcome' + ' ' + name)

        }
    }


    return (
        <>
            <div className="main_signup">
               
                <div style={{ marginLeft: '10%' }} className="section">
 <div className="form_img">
                    <img src='https://img.freepik.com/premium-vector/woman-shopping-ecommerce-store_670881-8.jpg' className="img" />

                </div>
                    <div className="text">
                        <h1 className='heading'>Login</h1>
                        <p className='lorem_para'>Lorem ipsum dolor sit amet consectetur<br />  adipisicing </p>
                        <div className="form">
                            <input className='input_1' type="text" value={name} onChange={e => setName(e.target.value)} placeholder='Enter Your User Name' /><br />
                            <input className='input_2' placeholder='Enter Email' type="email" value={email} onChange={e => setEmail(e.target.value)} /><br />
                            <input className='input_3' type="password" placeholder='Enter Password' value={password} onChange={e => setPassword(e.target.value)} />
                            <div className='login_btn' onClick={login} >Login</div>

                        </div>


                    </div>

                </div>

            </div>

        </>
    )
}

export default Login
