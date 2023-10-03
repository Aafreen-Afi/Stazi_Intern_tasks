import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Card from "../components/Card";
import carData from "../data/data.json";
import "./Home.css";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { RiArrowDropDownLine } from "react-icons/ri";

function Home() {
  const navigate = useNavigate();
  const { page } = useParams();

  const itemsPerPage = 6; // Number of cards to display per page
  const totalPages = Math.ceil(carData.length / itemsPerPage);

  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, carData.length);
  const displayedCars = carData.slice(startIndex, endIndex);

  // Search functionality
  const [searchTerm, setSearchTerm] = useState("");
  const filteredCars = displayedCars.filter((car) =>
    car.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <>
      <div className="search-bar-container">
        <input
          type="text"
          placeholder="Search for cars ..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <div className="search-icon">
          <BsSearch />
        </div>

        <p>
          Relevance <RiArrowDropDownLine />
        </p>
        <p>
          All brands <RiArrowDropDownLine />
        </p>
      </div>

      <div className="main-page">
        {filteredCars.map((car) => (
          <Card key={car.id} car={car} />
        ))}
      </div>

      <div className="pagination">
        <div className="left">6 from 60</div>

        <div className="right">
          <button
            onClick={() => navigate(`/page/${parseInt(page) - 1}`)}
            disabled={page <= 1}
          >
            <AiOutlineArrowLeft />
          </button>
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => navigate(`/page/${index + 1}`)}
              className={parseInt(page) === index + 1 ? "active" : ""}
            >
              {index + 1}
            </button>
          ))}
          <button
            onClick={() => navigate(`/page/${parseInt(page) + 1}`)}
            disabled={page >= totalPages}
          >
            <AiOutlineArrowRight />
          </button>
        </div>
      </div>
    </>
  );
}

export default Home;
