import React, { useState } from "react";
import Card from "../components/Card";
import hotelData from "../data/data.json";
import "./Home.css";
import { HiOutlineArrowSmallRight } from "react-icons/hi2";
import { ImHourGlass } from "react-icons/im";

function Home() {
  const cities = ["New York", "Mumbai", "Paris", "London"];
  const [selectedCity, setSelectedCity] = useState("New York");

  // Filter hotels based on the selected city
  const filteredHotels = hotelData.filter(
    (hotel) => hotel.address === selectedCity
  );

  // State to track the number of cards to display
  const [displayedCardCount, setDisplayedCardCount] = useState(6);

  const handleCityClick = (city) => {
    setSelectedCity(city);
    setDisplayedCardCount(6);
  };

  const handleShowMore = () => {
    setDisplayedCardCount((prevCount) => prevCount + 3);
  };

  return (
    <>
      <div className="navbar">
        <div className="city-list">
          {cities.map((city) => (
            <div
              key={city}
              className={`city ${selectedCity === city ? "active" : ""}`}
              onClick={() => handleCityClick(city)}
            >
              {city}
            </div>
          ))}
        </div>
        <button className="view-more">
          View More <HiOutlineArrowSmallRight />
        </button>
      </div>

      <div className="main-page">
        {filteredHotels.slice(0, displayedCardCount).map((hotel) => (
          <Card key={hotel.id} hotel={hotel} />
        ))}
      </div>

      {displayedCardCount < filteredHotels.length && (
        <div className="show-more-button">
          <button onClick={handleShowMore}>
            <ImHourGlass />
            {"  "}Show More
          </button>
        </div>
      )}
    </>
  );
}

export default Home;
