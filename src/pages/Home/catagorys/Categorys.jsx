/* eslint-disable no-unused-vars */
import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCard from '../NewsCart/NewsCard';

const Categorys = () => {

    const{id} = useParams();
    const catagoryNews = useLoaderData();
    return (
        <div>
            
            {
                catagoryNews.map((news)=><NewsCard
                    key = {news._id}
                    news = {news}
                ></NewsCard>)
            }
        </div>
    );
};

export default Categorys;