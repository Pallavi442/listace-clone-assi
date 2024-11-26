import React from 'react';
import './Blog.css';
import BlogCard from './BlogCard';
import blogImage1 from '../../assets/blog/b1.jpg'
import blogImage2 from '../../assets/blog/b2.jpg'
import blogImage3 from '../../assets/blog/b3.jpg'

const Blog = () => {
    const cardData = [
        {
            src: blogImage1,
            alt: 'img1',
            title: "How to find your Desired Place more quickly",
            description: "Lorem ipsum dolor sit amet, consectetur de adipisicing elit, sed do eiusmod tempore incididunt ut labore et dolore magna."
        },
        {
            src: blogImage2,
            alt: 'img2',
            title: "How to find your Desired Place more quickly",
            description: "Lorem ipsum dolor sit amet, consectetur de adipisicing elit, sed do eiusmod tempore incididunt ut labore et dolore magna."
        },
        {
            src: blogImage3,
            alt: 'img3',
            title: "How to find your Desired Place more quickly",
            description: "Lorem ipsum dolor sit amet, consectetur de adipisicing elit, sed do eiusmod tempore incididunt ut labore et dolore magna."
        }
    ];

    return (
        <div className=''>
            <div className='py-5 text-center text-uppercase'>
                <h1>News and Articles</h1>
                <p className='pb-4 text-center mt-5'>Always up to date with our latest news and articles</p>
            </div>

            <div className='blog-container'>
                {cardData.map((card, index) => (
                    <BlogCard
                        key={index}
                        imagesrc={card.src}
                        altText={card.alt}
                        title={card.title}
                        description={card.description}
                    />

                ))}
            </div>
        </div>
    );
};

export default Blog;
