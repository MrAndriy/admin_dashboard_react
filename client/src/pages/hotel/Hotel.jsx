import "./hotel.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Hotel = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);

  const photos = [
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max300/35223812.jpg?k=1a1bf712b7096831c4fb041f82f1e9ee53723b6d2d46a2e921bdaac0c810b814&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max300/35223812.jpg?k=1a1bf712b7096831c4fb041f82f1e9ee53723b6d2d46a2e921bdaac0c810b814&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max300/35223812.jpg?k=1a1bf712b7096831c4fb041f82f1e9ee53723b6d2d46a2e921bdaac0c810b814&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max300/35223812.jpg?k=1a1bf712b7096831c4fb041f82f1e9ee53723b6d2d46a2e921bdaac0c810b814&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max300/35223812.jpg?k=1a1bf712b7096831c4fb041f82f1e9ee53723b6d2d46a2e921bdaac0c810b814&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max300/35223812.jpg?k=1a1bf712b7096831c4fb041f82f1e9ee53723b6d2d46a2e921bdaac0c810b814&o=&hp=1",
    },
  ];

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber);
  };

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="hotelContainer">
        {open && (
          <div className="slider">
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="close"
              onClick={() => setOpen(false)}
            />
            <FontAwesomeIcon
              icon={faCircleArrowLeft}
              className="arrow"
              onClick={() => handleMove("l")}
            />
            <div className="sliderWrapper">
              <img src={photos[slideNumber].src} alt="" className="sliderImg" />
            </div>
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className="arrow"
              onClick={() => handleMove("r")}
            />
          </div>
        )}
        <div className="hotelWrapper">
          <button className="bookNow">Reserwe or Book Now!</button>
          <h1 className="hotelTitle">Grand Hotel</h1>
          <div className="hotelAdress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Elton str 222 NY</span>
          </div>
          <span className="hotelDistance">
            Excellent location - 500m from the center
          </span>
          <span className="hotelPriceHighlight">
            Book a stay over $125 at this property and get a free airport taxi
          </span>
          <div className="hotelImages">
            {photos.map((photo, i) => (
              <div className="hotelImgWrapper">
                <img
                  onClick={() => handleOpen(i)}
                  src={photo.src}
                  alt=""
                  className="hotelImg"
                />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">Stay in the heart of Krakow</h1>
              <p className="hotelDesc">
                This luxurious 5-star hotel located just 100 m from Kraków’s
                beautiful Main Market Square. It features elegant rooms with
                period furnishings, full HD LED TVs, air conditioning and free
                wireless internet. The hotel houses Grand Signature Restaurant
                which specializes in traditional Polish and European cuisine.
                Guests can enjoy original freshly baked cakes with aromatic
                coffee in the Grand Café All rooms at the Grand feature
                classical design. Each comes with a fully equipped bathroom with
                a bathtub and a safety deposit box. Free bottle of mineral water
                and a sweet welcome treat are offered.
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a 1-night stay!</h1>
              <span>
                Located in the heart of Krakow, this hotel has an excellent
                location score of 9.7
              </span>
              <h2>
                <b>$200</b> (1 night)
              </h2>
              <button>Reserwe or Book Now!</button>
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>
    </div>
  );
};

export default Hotel;
