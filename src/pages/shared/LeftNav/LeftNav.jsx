/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftNav = () => {

    const[catagories, setCatagories] = useState([]);

    useEffect(()=>{
        fetch('https://the-news-dragon-server-awoladhossain.vercel.app/catagories')
        .then(res => res.json())
        .then(data => setCatagories(data))
        .catch(error =>console.error(error))
    },[])

    return (
        <div>
            <h4>All catagories</h4>
          <div className='ps-4'>
          {
                catagories.map(catagori =>  <p
                key={catagori.id}
                >
                    <Link to={`/catagori/${catagori.id}`} className='text-decoration-none text-black '>{catagori.name}</Link>

                </p>)
            }
          </div>
        </div>
    );
};

export default LeftNav;