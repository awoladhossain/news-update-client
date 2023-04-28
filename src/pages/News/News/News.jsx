/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import { AiOutlineArrowLeft } from "react-icons/ai";
import Editiors from '../EditiorsInside/Editiors';

const News = () => {
    const news = useLoaderData();
    const {_id,image_url,title,details,category_id} = news;
    return (
        <div>
            <Card className='mt-2'>
      <Card.Img variant="top" src={image_url} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
         {details}
        </Card.Text>
        <Link to={`/catagori/${category_id}`}><Button variant="primary"><AiOutlineArrowLeft/> All News in this catageory</Button></Link>
      </Card.Body>
    </Card>

    <Editiors></Editiors>
        </div>
      
    );
};

export default News;