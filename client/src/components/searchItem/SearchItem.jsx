import React from "./searchItem.css"

const SearchItem = () => {
  return (
    <div className="searchItem">
      <img src="https://q-xx.bstatic.com/xdata/images/xphoto/300x240/45450084.jpeg?k=f8c2954e867a1dd4b479909c49528531dcfb676d8fbc0d60f51d7b51bb32d1d9&o=" alt="" className="siImg" />
      <div className="siDesc">
        <h1 className="siTitle">Tower Street Apartment</h1>
        <span className="siDistance">500m from the center</span>
        <span className="siTaxiOp">Free airport taxi</span>
        <span className="siSubtitle">Studoi Apartment with Air conditioning</span>
        <span className="siFeatures">Entire studio · 1 bathroom · 21m2 1 full bed</span>
        <span className="siCancelOp">Free cancellation</span>
        <span className="siCancelOpSubtitle">You can cancel later, so lock in this great price today!</span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Excellent</span>
          <button>8.9</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">$125</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <button className="siCheckButton">See availability</button>
        </div>
      </div>
    </div>
  )
}

export default SearchItem