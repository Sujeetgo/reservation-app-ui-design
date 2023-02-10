import React from 'react'
import './searchItem.css';
const SearchItem = () => {
  return (
    <div className='searchItem'>
      <img src="https://images.unsplash.com/photo-1661956602868-6ae368943878?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="image hai" className="siImg" />
      <div className="siDesc">
        <h1 className="siTitle">Tower street apartments</h1>
        <span className="siDistance">500m from center</span>
        <span className="siTaxiOp">Free Airport Taxi</span>
        <span className="siSubtitle">Studio Apartment with Air-Conditioning</span>
        <span className="siFeatures">Entire Studio .1 bathroom .21m2 1 full bed</span>
        <span className="siCancelOp">Free Cancellation</span>
        <span className="siCancelOpSubtitle">You can cancel later, so lock in this great price today!</span>
      </div>
      <div className="siDetails">
        <div className="siRating">
            <span>Excellent</span>
            <button>8.9</button>
        </div>
        <div className="siDetailsTexts">
            <span className="siPrice">$123</span>
            <span className="siTaxOp">Include taxes and fees</span>
            <button className='siCheckButton'>See availibity</button>
        </div>
      </div>
    </div>
  )
}

export default SearchItem
