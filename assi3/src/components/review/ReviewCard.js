import React from 'react'

const ReviewCard = ({title,description}) => {
  return (
    <div className='review-container col-lg-2'>
        <div className='reviewTitle'>{title}</div>
        <div className='reviewDesc'>{description}</div>
    </div>
  )
}

export default ReviewCard