import React from 'react';
import './Blog.css';

const BlogCard = ({ imagesrc, altText, title, description }) => {
  return (
    <div className="BlogCard">
      <img src={imagesrc} alt={altText}  className='img-thumbnail'/>
      <div className='titleDiv mx-4'>{title}</div>
      <div className='descDiv mx-4'>{description}</div>
    </div>
  );
};

export default BlogCard;
