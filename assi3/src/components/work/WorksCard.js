import React from 'react';
import './Work.css'

const WorksCard = ({icon,cardTitle,cardDesc,label}) => {
  return (
    <div className='work-container p-4 img-thumbnail'>
        <div className='icons mx-auto'>{icon}</div>
        <div className='title py-3'>{cardTitle}</div>
        <div>{cardDesc}</div>
        <button className='border-1 my-4 px-4 py-2 text-bg-light'>{label}</button>
    </div>
  )
}

export default WorksCard