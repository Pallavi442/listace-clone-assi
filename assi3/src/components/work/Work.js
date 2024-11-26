import React from 'react'
import './Work.css'
import WorksCard from './WorksCard';
import { TbBulbFilled } from "react-icons/tb";
import { BsBicycle } from "react-icons/bs";
import { MdExplore } from "react-icons/md";
const Work = () => {

  const cardData=[
    {icon:<TbBulbFilled size={40}/>,title:"choose what to do",description:"Lorem ipsum dolor sit amet, consecte adipisicing elit, sed do eiusmod tempor incididunt ut laboremagna aliqua.",ButtonLabel:"Read More"},
    {icon:<BsBicycle size={40}/>,title:"find what you want",description:"Lorem ipsum dolor sit amet, consecte adipisicing elit, sed do eiusmod tempor incididunt ut laboremagna aliqua.",ButtonLabel:"Read More"},
    {icon:<MdExplore size={40}/>,title:"explore amazing place",description:"Lorem ipsum dolor sit amet, consecte adipisicing elit, sed do eiusmod tempor incididunt ut laboremagna aliqua.",ButtonLabel:"Read More"},

  ]
  return (
    <div className='py-5 text-center text-uppercase w-75 mx-auto'>
        <h1>how it works</h1>
        <p  className='pb-4 text-center mt-5'>Learn More about how our website works</p>
      <div className='d-flex justify-content-center gap-5 p-4'> {cardData.map((cardValue,index)=>(
          <WorksCard key={index} icon={cardValue.icon}  cardTitle={cardValue.title}  cardDesc={cardValue.description} label={cardValue.ButtonLabel} />
        ))}</div>
       
    </div>
  )
}

export default Work