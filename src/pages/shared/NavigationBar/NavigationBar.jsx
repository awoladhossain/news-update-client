/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HiUserCircle } from "react-icons/hi";
import { AuthContext } from "../../../provider/AuthProvider";

const NavigationBar = () => {
    const {user} = useContext(AuthContext);
    return (
        <Container>
            
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="rounded">
      <Container>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
              <Link to='/'>Home</Link>
            
            <Nav.Link href="#pricing">About</Nav.Link>
            <Nav.Link href="#pricing">Carrer</Nav.Link>
          </Nav>
          <Nav>
            {
                user &&
           <HiUserCircle size={30} color="white" />
            }
           {
           user ? <Button variant="primary">LogOut</Button>:
           <Link to ='/login'> <Button variant="primary">Login</Button></Link>
           }
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </Container>
    );
};

export default NavigationBar;