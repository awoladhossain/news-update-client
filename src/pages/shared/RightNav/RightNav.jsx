/* eslint-disable no-unused-vars */
import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import { FcGoogle } from "react-icons/fc";
import {
  AiFillGithub,
  AiFillFacebook,
  AiFillTwitterCircle,
  AiFillInstagram,
} from "react-icons/ai";
import Qzone from "../Qzone/Qzone";
import bg from '../../../assets/bg.png'


const RightNav = () => {
  return (
    <div>
      <h4 className="mt-4">Login with</h4>
      <Button variant="outline-primary" className="mb-2">
        <FcGoogle /> Login with Google{" "}
      </Button>{" "}
      <Button variant="outline-secondary">
        <AiFillGithub /> Login with Github
      </Button>
      <div>
        <h4 className="mt-4">Find Us On</h4>
            <ListGroup>
            <ListGroup.Item>
            <AiFillFacebook      /> FaceBook
            </ListGroup.Item>
            <ListGroup.Item>
            <AiFillTwitterCircle /> Tiwtter
            </ListGroup.Item>
            <ListGroup.Item>
            <AiFillInstagram     /> Instagram
            </ListGroup.Item>
            </ListGroup>
      </div>
      <Qzone></Qzone>
      <div
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${bg})`,
        height: '500px',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        position: 'relative',
        color: '#fff',
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <h1>hello</h1>
    </div>
    </div>
  );
};

export default RightNav;
