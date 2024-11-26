import React from 'react';
import './Review.css'
import ReviewCard from './ReviewCard';

const Review = () => {

    const ReviewData=[
        {
            title:"90K+",desc:"listings"
        },
        {
            title:"90K+",desc:"listings"
        },
        {
            title:"90K+",desc:"listings"
        },
        {
            title:"90K+",desc:"listings"
        },
    ]
    return (
        <div  className='py-5 text-center text-uppercase'>
            <h1> clients reviews</h1>
            <p  className='pb-4 text-center mt-5'>What our client say about us</p>

            <div className='d-flex mx-auto justify-content-center align-items-center reviewbgDiv'>
                {ReviewData.map((review,index)=>(
                      <ReviewCard key={index} title={review.title} description={review.desc}/>
                    ))
                }
            </div>
        </div>
    )
}

export default Review