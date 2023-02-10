import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import MailList from '../../components/mailList/MailList';
import Navbar from '../../components/navbar/Navbar';
import './hotel.css';
const Hotel = () => {
  const [slideNum, setSlideNum] = useState(0);
  const [open, setOpen] = useState(false);
  const handleOpen= (i)=>{
    setSlideNum(i);
    setOpen(true);
  }
  const handleMove =(dir)=>{
    let newSlideNum;
    if(dir==="l"){
      newSlideNum=slideNum===0 ? 5:slideNum-1;
    }
    else{
      newSlideNum=slideNum===5 ? 0:slideNum+1;
    }
    setSlideNum(newSlideNum);
  }
  const photos = [
  {
    src:"https://images.unsplash.com/photo-1590073242678-70ee3fc28e8e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxzZWFyY2h8MXx8aG90ZWx8ZW58MHx8MHx8&auto=format&fit=crop&w=2000&q=60"
  },
  {
    src:"https://images.unsplash.com/photo-1517840901100-8179e982acb7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWx8ZW58MHx8MHx8&auto=format&fit=crop&w=2000&q=60"
  },
  {
    src:"https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWx8ZW58MHx8MHx8&auto=format&fit=crop&w=2000&q=60"
  },
  {
    src:"https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aG90ZWx8ZW58MHx8MHx8&auto=format&fit=crop&w=2000&q=60"
  },
  {
    src:"https://images.unsplash.com/photo-1455587734955-081b22074882?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aG90ZWx8ZW58MHx8MHx8&auto=format&fit=crop&w=1920&q=60"
  },
  {
    src:"https://plus.unsplash.com/premium_photo-1673984588250-36705769757e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWx8ZW58MHx8MHx8&auto=format&fit=crop&w=2000&q=60"
  },
];
  return (
    <div>
      <Navbar/>
      <Header type="list"/>  
      <div className="hotelContainer">
        {open && 
          <div className="slider">
            <FontAwesomeIcon icon={faCircleXmark} className="close" onClick={()=>setOpen(false)}/>
            <FontAwesomeIcon icon={faCircleArrowLeft} className="arrow" onClick={()=>handleMove("l")}/>
            <div className="sliderWrapper">
              <img src={photos[slideNum].src} alt="" className="sliderImg" />
            </div>
            <FontAwesomeIcon icon={faCircleArrowRight}  className="arrow" onClick={()=>handleMove("r")}/>
          </div>}
        <div className="hotelWrapper">
          <button className="bookNow">Reserve or Book Now</button>
          <h1 className="hotelTitle">Grand Hotel</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot}/>
            <span>Elton street 12 NewYork</span>
          </div>
          <span className="hotelDistance">Excellent location 500m from center</span>
          <span className="hotelPriceHighLight">Book a stay over $114 at this property and get a free airport taxi</span>
          <div className="hotelImages">
            {photos.map((photo, i)=>(
              <div className="hotelImageWrapper">
                <img onClick={()=>handleOpen(i)} src={photo.src} alt="" className="hotelImage" />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsText">
              <h1 className="hotelTitle">Stay in the heart of Taj Hotel</h1>
              <p className='hotelDesc'>
              Taj, India’s Strongest Brand across industries and sectors*, is an iconic hospitality brand from the Indian Hotels Company Limited. The brand continues to be one of the most revered and loved hospitality brands with a legacy of over 116 years of impeccable service and genuine warmth. Embodying the spirit of “Tajness”, authentic original palaces, landmark hotels, idyllic resorts and natural safari lodges interpret the tradition of hospitality in a refreshingly modern way to create unique experiences and lifelong memories.</p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a 9-night stay!</h1>
              <span>Located in the heart of Motel, this property has Excellent location in socre of 9.8!</span>
              <h2>
                <b>$945</b>(9 nights)
              </h2>
              <button>Reserve or Book now!</button>
            </div>
          </div>
        </div>
        <MailList/>
        <Footer/>
      </div>    
    </div>
  )
}

export default Hotel
