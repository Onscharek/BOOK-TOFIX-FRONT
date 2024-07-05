import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { register } from '../Redux/Actions/User';
import { useNavigate } from 'react-router-dom';


const Register = () => {
  const [newUser, setNewUser] = useState({})
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleChange = (e) => {
    setNewUser({...newUser, [e.target.name]: e.target.value})
  }

  const handleUser = (e) => {
    e.preventDefault();
    dispatch(register(newUser))
    navigate("/Profile")
  }
  return (
    <div>
        <h3 style={{marginTop:'2%', marginBottom:'5%'}}>Register</h3>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="string" placeholder="Enter Name"name='name' onChange={handleChange} />

        <Form.Label>Email address</Form.Label>
        <Form.Control type="string" placeholder="Enter email"name='email' onChange={handleChange} />

        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" name='password' onChange={handleChange}/>

        <Form.Label>Phone</Form.Label>
        <Form.Control type="number" placeholder="Enter Phone" name=' phone' onChange={handleChange} />


        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>

      </Form.Group>

      <Button variant="primary" type="submit" onClick={handleUser}>
        Register
      </Button>
    </div>
  )
}

export default Register