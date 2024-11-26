import React from 'react';

const HomeCard = ({icon, cardTitle, cardDesc }) => {
  return (
    <div className='homeCard-container p-5'>
      <div className='icon'>{icon}</div>
      <div className='cardTitle'>{cardTitle}</div>
      <div>{cardDesc}</div>
    </div>
  );
}

export default HomeCard;
