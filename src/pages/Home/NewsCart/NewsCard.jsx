/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import moment from 'moment/moment';
import React from 'react';
import { Card, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BsBookmark } from "react-icons/bs";
import { AiOutlineShareAlt } from "react-icons/ai";
import { AiOutlineEye } from "react-icons/ai";
import Rating from 'react-rating';
import { FaRegStar,FaStar } from "react-icons/fa";

const NewsCard = ({news}) => {
    const {_id,image_url,title,details,author,total_view,rating} = news;
    return (
        <Card className="mb-4 mt-4">

      <Card.Header className='d-flex aligne-items-center'>
      <Image style={{height:'40px'}} src={author?.img} roundedCircle />
      <div className='ps-2 flex-grow-1'>
        <p className='mb-0'>{author?.name}</p>
        <p><small>{moment(author?.published_date).format('yyyy-MM-D')}</small></p>
      </div>
      <div>
        <BsBookmark />
        <AiOutlineShareAlt />
      </div>
      </Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Img variant="top" src={image_url} />
        <Card.Text>
         {details.length < 250 ? <>{details}</> : <>{details.slice(0,250)}... <Link to={`/news/${_id}`}>Read More</Link></>}
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted d-flex">
        <div className='flex-grow-1'>
        <Rating
  placeholderRating={rating?.number}
  readonly
  emptySymbol={<FaRegStar/>}
  placeholderSymbol={<FaStar className='text-warning'></FaStar>}
  fullSymbol={<FaStar/>}
/>
          <span className='ms-2'>{rating?.number}</span>
        </div>
        <div>
          <AiOutlineEye /> {total_view}
        </div>
      </Card.Footer>
    </Card>
    );
};

export default NewsCard;