/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../provider/AuthProvider';

const Regsister = () => {
    const {createUser} = useContext(AuthContext);
    const [accept,setAccept] = useState(false);

    const handleRegister = (event)=>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log(name,email,photo,password);

        createUser(email,password)
        .then((result)=>{
            const createdUser = result.user;
            console.log(createdUser);

        })
        .catch(error =>{
            console.log(error);
        })

        // const {name,photo,email,password,accept} = event.target.elements;
        // if(accept.checked){
        //     createUser(email.value,password.value)
        //     .then(result=>{
        //         console.log(result);
        //     })
        //     .catch(error=>{
        //         console.log(error);
        //     })
        // }
        // else{
        //     console.log('please accept terms and conditions');
        // }
    }

    const handleAccepted=(event)=>{
      setAccept(event.target.checked);
    }





    return (
        <Container className='w-25 mx-auto'>
        <h3>Please Register </h3>
        <Form onSubmit={handleRegister}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Your Name</Form.Label>
    <Form.Control type="text" name='name' placeholder="Your Name" required />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Photo URL</Form.Label>
    <Form.Control type="text" name='photo' placeholder="Photo URL" required />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" name='email' placeholder="Enter email" required />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" name='password' placeholder="Password" required />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">

   <Form.Check onClick={handleAccepted} type="checkbox" name='accept' label={<>Accept <Link to='/terms'> Terms and Conditions</Link> </>} required />

  </Form.Group>
  <Button variant="primary" disabled={!accept} type="submit">
    Register
  </Button>
    <br />
  <Form.Text className='text-success'>
  Hava an Account?<Link to='/login'>Login </Link>
  </Form.Text>
  <Form.Text className='text-success'>

  </Form.Text>
  <Form.Text className='text-danger'>

  </Form.Text>


</Form>
    </Container>
    );
};

export default Regsister;