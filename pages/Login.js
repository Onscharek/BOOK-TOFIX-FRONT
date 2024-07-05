import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { login } from '../Redux/Actions/User'

const Login = () => {
    const [user,setUser]=useState({})
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
      }
    
      const handleUser = (e) => {
        e.preventDefault();
        dispatch(login(user))
        navigate("/Profile")
      }

    return (
        <div>
                    <h3 style={{marginTop:'2%', marginBottom:'5%'}}>Login</h3>

                    <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email"name='email' onChange={handleChange} />

        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" name='password' onChange={handleChange}/>

        <Button variant="primary" type="submit" onClick={handleUser}>
        Login
      </Button>


        </div>
    )
}

export default Login
                              //  my code 