import React from 'react';
import { CiLocationOn } from "react-icons/ci";
import { LuUpload } from "react-icons/lu";
import { CiHeart } from "react-icons/ci";


const ExploreCard = ({imageSrc,imagealt,Title,Desc,personImg,personAlt,buttonLabel,rating,ratingLabel,price,ExploreObj}) => {
  return (
    <div className='explore-containerDiv img-thumbnail m-3'>
        <div className='imgoverlay'>
        <img src={imageSrc} alt={imagealt} className='w-100'/>
        </div>    
        <div className='title p-3 exploreTitle'>{Title}</div>
        <div className='px-3 d-flex justify-content-around my-3 mainratingsec'>
            <div className='rating px-2'>{rating}</div>
            <div>{ratingLabel}</div>
            <div>{price}</div>
            <div>{ExploreObj}</div>
        </div>
        <div className='d-flex px-3 '>
        <div className='w-50'>
            <img src={personImg} alt={personAlt}/>
        </div>
        <div className='exploreDesc'>{Desc}</div>
        </div>
        <div className=' my-4 px-3 d-flex justify-content-between'>
            <button className='ExploreBtnLabel'>{buttonLabel}</button>
            <div>
            <CiLocationOn />
            <LuUpload  className='mx-3'/>
            <CiHeart />
            </div>
        </div>   
    </div>
  )
}

export default ExploreCard