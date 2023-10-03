import "./Card.css";
import { BsBuildings, BsArrowsMove } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { SlLocationPin } from "react-icons/sl";
import { LiaBedSolid } from "react-icons/lia";
import { BiBath } from "react-icons/bi";

const Card = ({ hotel }) => {
  const imagePath = require(`../assets/${hotel.image}`);

  return (
    <div className="card">
      <div>
        <div className="image-top">
          <div className="image-top-left">{hotel.status}</div>
          <div className="image-top-right">
            <AiOutlineHeart />
          </div>
        </div>

        <Link key={hotel.id} to={`/property/${hotel.id}`}>
          <img src={imagePath} alt="hotel" className="hotel-image" />
        </Link>
      </div>

      <p className="hotel-address">
        <SlLocationPin /> <span>{hotel.address}</span>
      </p>
      <div className="card-header">
        <p className="hotel-name">{hotel.name}</p>
      </div>
      <div className="card-mid">
        <div>
          <div className="card-sub-mid">
            <BsBuildings />
            {hotel.room} Room
          </div>
        </div>
        <div>
          <div className="card-sub-mid">
            <LiaBedSolid />
            {hotel.bed} Bed
          </div>
        </div>
        <div>
          <div className="card-sub-mid">
            <BiBath />
            {hotel.bath} Bath
          </div>
        </div>
        <div>
          <div className="card-sub-mid">
            <BsArrowsMove />
            {hotel.sft} Sft
          </div>
        </div>
      </div>

      <div className="card-footer">
        <div className="card-footer-left">
          <p>
            ${hotel.amount} <span>/month</span>
          </p>
        </div>
        <div className="card-footer-right">
          <button>Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
