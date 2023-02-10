import React from 'react';
import './featured.css';
const Featured = () => {
  return (
    <div className='featured'>
      <div className="featuredItem">
        <img src="https://images.unsplash.com/photo-1563911302283-d2bc129e7570?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80" alt="hotel-img" className="featuredImg" />
        <div className="featuredTitles">
            <h1>Mexico</h1>
            <h2>Av Damero, Holbox, Q.R., Mexico</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img src="https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=449&q=80" alt="dogs-img" className="featuredImg" />
        <div className="featuredTitles">
            <h1> Istanbul</h1>
            <h2>Spa Downtown</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img src="https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80" alt="dogs-img" className="featuredImg" />
        <div className="featuredTitles">
            <h1>Thailand</h1>
            <h2>Koh Phangan, Ko Pha-ngan District</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img src="https://images.unsplash.com/photo-1675361054065-c8a8ca0cb2ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="dogs-img" className="featuredImg" />
        <div className="featuredTitles">
            <h1>India</h1>
            <h2>Delhi, Street food</h2>
        </div>
      </div>
    </div>
  )
}

export default Featured
