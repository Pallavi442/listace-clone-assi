import React from 'react';
import './Home.css';
import HomeCard from './HomeCard';
import { GrRestaurant } from "react-icons/gr";
import { CiLocationOn } from "react-icons/ci";
import { FaHotel } from "react-icons/fa6"; 
import { FaCarSide } from "react-icons/fa";
import { MdHealthAndSafety } from "react-icons/md";
import { LiaHotelSolid } from "react-icons/lia";
const Home = () => {
  const CardData = [
    { icon: <GrRestaurant size={50}  />, alt: "Restaurant Icon", title: "Restaurant", description: "200 listings", ButtonLabel: "Read More" },
    { icon: <CiLocationOn size={50}  />,title: "Location", description: "150 listings", ButtonLabel: "Read More" },
    { icon: <FaHotel size={30} />, alt: "Hotel Icon", title: "Hotel", description: "100 listings", ButtonLabel: "Read More" },
  
    {icon: <LiaHotelSolid size={50}  />, alt: "Cafe Icon", title: "Cafe", description: "80 listings", ButtonLabel: "Read More" },
    {  icon: <MdHealthAndSafety size={50}  />,alt: "Park Icon", title: "Health Care", description: "50 listings", ButtonLabel: "Read More" },
  ];

  return (
    <>
      <div className='home-container text-center'>
        <h1 className='d-inline-flex text-uppercase text-white'>
          Best Place to Find and Explore All That You Need
        </h1>
        <p className='pb-1 text-center mt-1 text-white' style={{ fontSize: "25px" }}>
          Find the Best Place, Restaurant, Hotel, Real Estate, and Many More Things in Just One Click
        </p>
      </div>
      <div className='d-flex mx-auto p-5 justify-content-center homeDiv gap-4 text-center'>
        {CardData.map((homeVal, index) => (
          <HomeCard
            key={index}
            icon={homeVal.icon} 
            cardTitle={homeVal.title}
            cardDecs={homeVal.description} className="text-center"
          />
        ))}
      </div>
    </>
  );
};

export default Home;
