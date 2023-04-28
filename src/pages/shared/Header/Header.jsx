/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import React from "react";
import logo from "../../../assets/logo.png";
import moment from 'moment';
import { Button, Container } from "react-bootstrap";
import Marquee from "react-fast-marquee";


const Header = () => {
  return (
    <Container  className="mt-4">

      <div className="text-center">
        <img src={logo} alt="" />
        <p>
          <small className="text-secondary">
            Journalism Without Fear or Favour
          </small>
        </p>
        <p>{moment().format("dddd, MMMM Do YYYY, h:mm:ss a")}</p>
      </div>

      <div className="d-flex ">
        <Button variant="danger">Danger: </Button>
        <Marquee className="text-danger" pauseOnHover={true}  direction="right" speed={120}>
        I can be a React component, multiple React components, or just some text.
        </Marquee>
      </div>
     
    </Container>
  );
};

export default Header;
